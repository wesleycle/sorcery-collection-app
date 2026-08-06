/* githubSync.js
 * Sincronizacao OPCIONAL do data.json (catalogo, colecao, decks, listas,
 * configuracoes) com um repositorio no GitHub - sem backend, sem OAuth, sem
 * banco de dados. Usa a GitHub REST API (Contents API), que suporta CORS
 * pra chamadas direto do navegador (diferente da API do Google Drive, que
 * bloqueia fetch()/XHR cross-origin - por isso as imagens usam <img> e nao
 * dava pra usar o mesmo Drive pra ler/gravar o data.json).
 *
 * Autenticacao: Personal Access Token (PAT) gerado pelo proprio usuario em
 * github.com -> Settings -> Developer settings -> Personal access tokens.
 * Recomendado um "Fine-grained token" com acesso limitado a UM UNICO
 * repositorio e permissao "Contents: Read and write" - nunca um token com
 * acesso a conta inteira.
 *
 * IMPORTANTE (seguranca): o token NUNCA fica em State.data - nunca entra no
 * data.json gravado nem no Exportar Backup. Fica só numa chave separada do
 * localStorage deste navegador (TOKEN_KEY abaixo), e é enviado só no header
 * Authorization de cada chamada à API do GitHub. Trocar de navegador/computador
 * exige colar o token de novo em Configuracoes - isso e intencional.
 *
 * Fluxo:
 *   - Push (gravar): busca o arquivo atual pra pegar o "sha" (exigido pela API
 *     pra sobrescrever um arquivo existente), depois PUT com o conteudo novo
 *     em base64. Se autoSync estiver ligado, state.js chama pushDebounced()
 *     a cada mudanca (mesmo padrao de debounce do Storage.save local).
 *   - Pull (carregar): GET do conteudo atual do repo, decodifica base64 e
 *     retorna o objeto pronto pra ser aplicado com State.replaceFullState()
 *     (o app quem decide confirmar com o usuario antes, ja que sobrescreve
 *     tudo - mesmo cuidado que Importar Backup).
 */
(function () {
  "use strict";

  var TOKEN_KEY = "sorcery-github-pat";
  var PUSH_DEBOUNCE_MS = 2500;
  var API_VERSION = "2022-11-28";

  var pushTimer = null;
  var pendingState = null;
  var pushInFlight = false;

  // ---------------- Token (só localStorage, nunca no State) ----------------
  function getToken() {
    try { return localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; }
  }
  function setToken(token) {
    try {
      if (token) localStorage.setItem(TOKEN_KEY, token);
      else localStorage.removeItem(TOKEN_KEY);
    } catch (e) { console.warn("Falha ao salvar token do GitHub:", e); }
  }
  function hasToken() { return !!getToken(); }

  // ---------------- Config (owner/repo/branch/path/autoSync) - fica em State.data.settings.github ----------------
  function defaultConfig() {
    return { owner: "", repo: "", branch: "main", path: "data.json", autoSync: false, lastPush: null, lastPull: null };
  }

  function getConfig() {
    var settings = (window.State && window.State.getSettings && window.State.getSettings()) || {};
    return Object.assign(defaultConfig(), settings.github || {});
  }

  function setConfig(patch) {
    var merged = Object.assign(getConfig(), patch || {});
    delete merged.token; // seguranca extra: nunca deixa token entrar aqui por engano
    if (window.State && window.State.updateSettings) window.State.updateSettings({ github: merged });
    return merged;
  }

  function isConfigured() {
    var cfg = getConfig();
    return !!(cfg.owner && cfg.repo && cfg.path && hasToken());
  }

  // ---------------- Helpers ----------------
  function encodedPath(path) {
    return String(path || "").split("/").filter(Boolean).map(encodeURIComponent).join("/");
  }

  function contentsUrl(cfg) {
    return "https://api.github.com/repos/" + encodeURIComponent(cfg.owner) + "/" + encodeURIComponent(cfg.repo) +
      "/contents/" + encodedPath(cfg.path);
  }

  function authHeaders(extra) {
    var headers = {
      "Authorization": "Bearer " + getToken(),
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": API_VERSION
    };
    return Object.assign(headers, extra || {});
  }

  // btoa/atob puros só lidam com Latin1 - isso evita quebrar em nomes/notas com acento.
  function utf8ToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }
  function base64ToUtf8(b64) {
    return decodeURIComponent(escape(atob(String(b64 || "").replace(/\n/g, ""))));
  }

  function friendlyError(status, bodyText) {
    if (status === 401) return "Token invalido, expirado ou sem permissao (verifique o escopo do token).";
    if (status === 404) return "Repositorio/arquivo/branch nao encontrado (confira owner, repositorio e branch).";
    if (status === 409) return "Conflito de versao no GitHub - tente carregar de novo antes de salvar.";
    return "GitHub respondeu " + status + (bodyText ? ": " + bodyText.slice(0, 200) : "");
  }

  // Busca o arquivo atual no repo: { sha, data } - sha=null se o arquivo ainda nao existe.
  function fetchCurrent(cfg) {
    var url = contentsUrl(cfg) + "?ref=" + encodeURIComponent(cfg.branch) + "&_=" + Date.now();
    return fetch(url, { headers: authHeaders() }).then(function (res) {
      if (res.status === 404) return { sha: null, data: null };
      if (!res.ok) return res.text().then(function (t) { throw new Error(friendlyError(res.status, t)); });
      return res.json().then(function (json) {
        var data = null;
        try { data = JSON.parse(base64ToUtf8(json.content || "")); } catch (e) { /* conteudo remoto invalido, ignora */ }
        return { sha: json.sha, data: data };
      });
    });
  }

  // ---------------- API publica ----------------

  // Verifica se owner+repo+token conseguem acessar o repositorio (sem mexer em nada).
  function testConnection() {
    var cfg = getConfig();
    if (!cfg.owner || !cfg.repo) return Promise.reject(new Error("Preencha usuario/organizacao e repositorio."));
    if (!hasToken()) return Promise.reject(new Error("Cole um Personal Access Token antes de testar."));
    var url = "https://api.github.com/repos/" + encodeURIComponent(cfg.owner) + "/" + encodeURIComponent(cfg.repo);
    return fetch(url, { headers: authHeaders() }).then(function (res) {
      if (!res.ok) return res.text().then(function (t) { throw new Error(friendlyError(res.status, t)); });
      return res.json();
    }).then(function (repoInfo) {
      return { ok: true, private: !!repoInfo.private, defaultBranch: repoInfo.default_branch || "main", fullName: repoInfo.full_name };
    });
  }

  // Le o data.json do repo configurado. Rejeita se nao configurado ou arquivo ausente/invalido.
  function pull() {
    var cfg = getConfig();
    if (!isConfigured()) return Promise.reject(new Error("Configure repositorio, caminho e token do GitHub antes de carregar."));
    return fetchCurrent(cfg).then(function (result) {
      if (!result.data) throw new Error("Nao ha um data.json valido nesse repositorio/caminho/branch ainda.");
      setConfig({ lastPull: new Date().toISOString() });
      return result.data;
    });
  }

  // Grava o estado atual no repo configurado agora (sem debounce). Nao rejeita -
  // sempre resolve com { ok, error? } pra nao quebrar fluxo de quem chama (ex.: autosave).
  function pushNow(state) {
    var cfg = getConfig();
    if (!isConfigured()) return Promise.resolve({ ok: false, skipped: true, reason: "not-configured" });
    pushInFlight = true;
    return fetchCurrent(cfg).then(function (current) {
      var json = JSON.stringify(state, null, 2);
      var body = {
        message: "Sorcery Collection: atualizacao automatica do data.json",
        content: utf8ToBase64(json),
        branch: cfg.branch
      };
      if (current.sha) body.sha = current.sha;
      return fetch(contentsUrl(cfg), {
        method: "PUT",
        headers: authHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(body)
      }).then(function (res) {
        if (!res.ok) return res.text().then(function (t) { throw new Error(friendlyError(res.status, t)); });
        return res.json();
      });
    }).then(function (result) {
      setConfig({ lastPush: new Date().toISOString() });
      pushInFlight = false;
      return { ok: true, result: result };
    }).catch(function (err) {
      pushInFlight = false;
      console.warn("Falha ao gravar no GitHub:", err);
      return { ok: false, error: String((err && err.message) || err) };
    });
  }

  // Autosave debounced (so dispara se autoSync estiver ligado e configurado) -
  // chamado de state.js a cada mutacao, mesmo padrao do Storage.save local.
  function pushDebounced(state) {
    var cfg = getConfig();
    if (!cfg.autoSync || !isConfigured()) return;
    pendingState = state;
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      var s = pendingState;
      pendingState = null;
      pushNow(s);
    }, PUSH_DEBOUNCE_MS);
  }

  function isSyncing() { return pushInFlight || !!pushTimer; }

  window.GithubSync = {
    getToken: getToken,
    setToken: setToken,
    hasToken: hasToken,
    getConfig: getConfig,
    setConfig: setConfig,
    isConfigured: isConfigured,
    testConnection: testConnection,
    pull: pull,
    pushNow: pushNow,
    pushDebounced: pushDebounced,
    isSyncing: isSyncing
  };
})();
