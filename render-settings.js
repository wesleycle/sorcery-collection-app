/* render-settings.js - Modulo Configuracoes (/settings) */
(function () {
  "use strict";

  function formatDateTime(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  function render(container) {
    var settings = State.getSettings();
    var connected = Storage.isConnected();

    var html = '<div class="page-header"><h2>' + Icon("settings", { cls: "icon-sm" }) + ' Configurações</h2></div>';

    // ---- Persistencia / arquivo de dados ----
    html += '<div class="settings-section"><h3>Arquivo de Dados (data.json)</h3>';
    html += '<p class="status-line">Status: ' + (connected ? '<span class="status-ok">' + Icon("check-circle", { cls: "icon-sm" }) + ' Conectado</span> — gravações vão direto para o arquivo local, com espelho em localStorage.' : '<span class="status-bad">Não conectado</span> — os dados estão sendo salvos apenas no localStorage do navegador.') + "</p>";
    if (!Storage.hasFSApi()) {
      html += '<p class="status-line status-bad">Este navegador não suporta a File System Access API. Use Google Chrome ou Microsoft Edge no computador para conectar um arquivo data.json. Enquanto isso, seus dados continuam seguros no localStorage.</p>';
    } else {
      html += '<div class="toolbar">' +
        '<button class="btn btn-primary" id="settings-connect-new">' + Icon("save", { cls: "icon-sm" }) + ' Criar novo data.json</button>' +
        '<button class="btn" id="settings-connect-open">' + Icon("import", { cls: "icon-sm" }) + ' Abrir data.json existente</button>' +
        (connected ? '<button class="btn btn-danger" id="settings-forget">Desconectar arquivo</button>' : "") +
        "</div>";
    }
    html += "</div>";

    // ---- Sincronizar com GitHub (opcional) ----
    var gh = (window.GithubSync ? GithubSync.getConfig() : (settings.github || {}));
    var ghHasToken = !!(window.GithubSync && GithubSync.hasToken());
    var ghConfigured = !!(window.GithubSync && GithubSync.isConfigured());
    html += '<div class="settings-section"><h3>Sincronizar com GitHub (opcional)</h3>';
    html += '<p class="status-line">Guarda uma cópia do data.json (catálogo, coleção, decks, listas e configurações) num repositório do GitHub — funciona em qualquer navegador, sem instalar nada. Status: ' +
      (ghConfigured ? '<span class="status-ok">' + Icon("check-circle", { cls: "icon-sm" }) + ' Configurado</span>' : '<span class="status-bad">Não configurado</span>') +
      (gh.lastPush ? " — último envio em " + formatDateTime(gh.lastPush) : "") +
      (gh.lastPull ? ", última leitura em " + formatDateTime(gh.lastPull) : "") + '.</p>';
    html += '<p style="font-size:12px;color:var(--text-secondary);">Crie um <a href="https://github.com/settings/tokens?type=beta" target="_blank" rel="noopener">Personal Access Token de acesso restrito (fine-grained)</a> só para o repositório abaixo, com permissão "Contents: Read and write", e cole no campo Token. O token fica <strong>só neste navegador</strong> (localStorage) — nunca é salvo no data.json nem entra no Exportar Backup.</p>';
    html += '<div class="form-inline">';
    html += '<div class="form-row"><label>Usuário/Organização</label><input type="text" id="gh-owner" value="' + (gh.owner || "").replace(/"/g, "&quot;") + '" placeholder="ex.: wesleyfeitosa"></div>';
    html += '<div class="form-row"><label>Repositório</label><input type="text" id="gh-repo" value="' + (gh.repo || "").replace(/"/g, "&quot;") + '" placeholder="ex.: sorcery-data"></div>';
    html += '<div class="form-row"><label>Branch</label><input type="text" id="gh-branch" value="' + (gh.branch || "main").replace(/"/g, "&quot;") + '" placeholder="main"></div>';
    html += '<div class="form-row"><label>Caminho do arquivo</label><input type="text" id="gh-path" value="' + (gh.path || "data.json").replace(/"/g, "&quot;") + '" placeholder="data.json"></div>';
    html += '<div class="form-row"><label>Personal Access Token</label><input type="password" id="gh-token" value="' + (ghHasToken ? "••••••••••••••••" : "") + '" placeholder="cole o token aqui" autocomplete="off"></div>';
    html += '</div>';
    html += '<label style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text-secondary);margin-top:8px;"><input type="checkbox" id="gh-autosync" ' + (gh.autoSync ? "checked" : "") + '> Enviar automaticamente pro GitHub a cada mudança (poucos segundos após parar de mexer)</label>';
    html += '<div class="toolbar" style="margin-top:10px;">' +
      '<button class="btn" id="gh-test">' + Icon("check-circle", { cls: "icon-sm" }) + ' Testar conexão</button>' +
      '<button class="btn btn-primary" id="gh-push">' + Icon("export", { cls: "icon-sm" }) + ' Salvar agora no GitHub</button>' +
      '<button class="btn" id="gh-pull">' + Icon("import", { cls: "icon-sm" }) + ' Carregar do GitHub</button>' +
      "</div>";
    html += "</div>";

    // ---- Imagens ----
    var personalIndexCount = State.getPersonalDriveImageIndexCount();
    html += '<div class="settings-section"><h3>Imagens das Cartas</h3>';
    html += '<p class="status-line">100% das imagens vêm da pasta pessoal do usuário no Google Drive — não existe mais link manual por carta. <strong>' + personalIndexCount + '</strong> ' + (personalIndexCount === 1 ? "imagem está indexada" : "imagens estão indexadas") + '.</p>';
    html += '<p style="font-size:12px;color:var(--text-secondary);">Cartas sem match exato pelo nome usam automaticamente a imagem da carta com o nome mais parecido dentro do mesmo set (fuzzy match) — se nenhum nome for parecido o suficiente, a carta cai no placeholder em vez de arriscar mostrar uma imagem errada. Rodar "Atualizar Catálogo" não é mais pré-requisito pra imagem aparecer. Para trazer o índice mais recente que acompanha o app, use o botão abaixo; para atualizar em massa a partir de outra fonte, importe um backup atualizado (mais abaixo).</p>';
    html += '<div class="toolbar"><button class="btn" id="settings-reload-image-index">' + Icon("refresh", { cls: "icon-sm" }) + ' Recarregar índice de imagens do app</button></div>';
    html += "</div>";

    // ---- Catalogo ----
    var lastCatalogUpdate = settings.lastCatalogUpdate;
    html += '<div class="settings-section"><h3>Catálogo de Cartas</h3>';
    html += '<p class="status-line">Cartas no catálogo: <strong>' + State.getCatalog().length + '</strong>' + (lastCatalogUpdate ? " — última atualização em " + formatDateTime(lastCatalogUpdate) : "") + '.</p>';
    html += '<p style="font-size:12px;color:var(--text-secondary);">O botão abaixo aplica ao catálogo o snapshot mais recente da API pública oficial de Sorcery: Contested Realm (mantida pela equipe do Curiosa.io), embutido no app, e atualiza tipo, raridade, custo, elementos, threshold, texto de regra, artista e demais dados de cada carta — sem precisar colar catálogo nenhum manualmente. Cartas e coleção/decks/listas já existentes não são perdidos; só os dados são atualizados/completados. Funciona 100% offline, sem precisar de internet no momento do clique.</p>';
    html += '<div class="toolbar"><button class="btn btn-primary" id="settings-update-catalog">' + Icon("refresh", { cls: "icon-sm" }) + ' Atualizar Catálogo (API oficial)</button></div>';
    html += "</div>";

    // ---- Backup (unico jeito de importar/atualizar dados em massa) ----
    html += '<div class="settings-section"><h3>Dados do App</h3>';
    html += '<p style="font-size:12px;color:var(--text-secondary);">Um único arquivo JSON com tudo: catálogo, coleção, decks, listas, índice de imagens e preferências. É o único jeito de atualizar esses dados em massa — exporte, edite/substitua se precisar, e importe de volta.</p>';
    html += '<div class="toolbar">' +
      '<button class="btn" id="backup-export">' + Icon("export", { cls: "icon-sm" }) + ' Exportar Backup</button>' +
      '<label class="btn" style="display:inline-flex;">' + Icon("import", { cls: "icon-sm" }) + ' Importar Backup<input type="file" accept="application/json" id="backup-import-input" style="display:none;"></label>' +
      '<button class="btn btn-danger" id="reset-data">' + Icon("trash", { cls: "icon-sm" }) + ' Resetar Dados</button>' +
      "</div></div>";

    // ---- Preferencias ----
    html += '<div class="settings-section"><h3>Preferências</h3>';
    html += '<div class="form-inline">';
    html += '<div class="form-row"><label>Moeda padrão</label><select id="pref-currency">' + ["BRL", "USD", "EUR"].map(function (c) { return '<option ' + (settings.defaultCurrency === c ? "selected" : "") + '>' + c + "</option>"; }).join("") + "</select></div>";
    html += '<div class="form-row"><label>Visualização padrão</label><select id="pref-view">' +
      '<option value="grid" ' + (settings.collectionViewMode === "grid" ? "selected" : "") + '>Grade</option>' +
      '<option value="list" ' + (settings.collectionViewMode === "list" ? "selected" : "") + '>Lista</option>' +
      "</select></div>";
    html += "</div></div>";

    container.innerHTML = html;
    wire(container);
  }

  function wire(container) {
    var connectNewBtn = container.querySelector("#settings-connect-new");
    if (connectNewBtn) connectNewBtn.onclick = function () {
      Storage.connectNew().then(function () {
        Storage.saveImmediate(State.data);
        Toast.show("Arquivo data.json criado e conectado!");
        render(container);
      }).catch(function (e) { if (e && e.name !== "AbortError") Toast.show("Erro: " + e.message); });
    };
    var connectOpenBtn = container.querySelector("#settings-connect-open");
    if (connectOpenBtn) connectOpenBtn.onclick = function () {
      Storage.connectOpen().then(function () {
        return Storage.load();
      }).then(function (loaded) {
        if (loaded) { State.replaceFullState(loaded); Toast.show("data.json carregado e conectado!"); }
        else { Storage.saveImmediate(State.data); Toast.show("Arquivo vazio — dados atuais gravados nele."); }
        render(container);
      }).catch(function (e) { if (e && e.name !== "AbortError") Toast.show("Erro: " + e.message); });
    };
    var forgetBtn = container.querySelector("#settings-forget");
    if (forgetBtn) forgetBtn.onclick = function () {
      Storage.forgetFile().then(function () { Toast.show("Arquivo desconectado. Dados continuam salvos no localStorage."); render(container); });
    };

    container.querySelector("#backup-export").onclick = function () {
      var name = Storage.exportBackup(State.data);
      Toast.show("Backup exportado: " + name);
    };
    container.querySelector("#backup-import-input").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      if (!confirm("Importar este backup vai SOBRESCREVER todos os dados atuais (catálogo, coleção, decks, listas, índice de imagens e configurações). Continuar?")) { e.target.value = ""; return; }
      Storage.importBackupFile(file).then(function (data) {
        State.replaceFullState(data);
        Toast.show("Backup importado com sucesso.");
        render(container);
      }).catch(function (err) { Toast.show("Erro ao importar: " + err.message); });
    };
    container.querySelector("#reset-data").onclick = function () {
      if (!confirm("Isso vai apagar Coleção, Decks e Listas (o catálogo e as configurações são mantidos). Esta ação NÃO pode ser desfeita. Continuar?")) return;
      if (!confirm("Tem certeza ABSOLUTA? Todos os dados de coleção/decks/listas serão perdidos.")) return;
      State.resetUserData();
      Toast.show("Dados resetados.");
      render(container);
    };

    container.querySelector("#pref-currency").onchange = function (e) { State.updateSettings({ defaultCurrency: e.target.value }); };
    container.querySelector("#pref-view").onchange = function (e) { State.updateSettings({ collectionViewMode: e.target.value }); };

    var updateCatalogBtn = container.querySelector("#settings-update-catalog");
    if (updateCatalogBtn) updateCatalogBtn.onclick = function () {
      if (!window.SorceryApi) { Toast.show("Módulo de importação da API não carregado."); return; }
      updateCatalogBtn.disabled = true;
      var originalLabel = updateCatalogBtn.innerHTML;
      updateCatalogBtn.innerHTML = Icon("refresh", { cls: "icon-sm" }) + " Aplicando snapshot da API...";
      SorceryApi.updateCatalog().then(function (stats) {
        Toast.show("Catálogo atualizado: " + stats.added + " carta(s) nova(s), " + stats.updated + " atualizada(s) (" + stats.totalPrintings + " impressões na API).");
        render(container);
      }).catch(function (err) {
        Toast.show("Erro ao atualizar catálogo: " + err.message);
        updateCatalogBtn.disabled = false;
        updateCatalogBtn.innerHTML = originalLabel;
      });
    };

    // ---- GitHub Sync ----
    var GH_TOKEN_MASK = "••••••••••••••••";
    var ghOwnerInput = container.querySelector("#gh-owner");
    var ghRepoInput = container.querySelector("#gh-repo");
    var ghBranchInput = container.querySelector("#gh-branch");
    var ghPathInput = container.querySelector("#gh-path");
    var ghTokenInput = container.querySelector("#gh-token");
    var ghAutoSyncInput = container.querySelector("#gh-autosync");
    var ghTestBtn = container.querySelector("#gh-test");
    var ghPushBtn = container.querySelector("#gh-push");
    var ghPullBtn = container.querySelector("#gh-pull");

    if (ghOwnerInput && window.GithubSync) {
      // Aplica no State os campos atuais (mesmo que o usuario nao tenha "saido" do campo ainda)
      // antes de qualquer acao que dependa da config - evita usar valores desatualizados.
      var syncGithubFieldsToConfig = function () {
        GithubSync.setConfig({
          owner: ghOwnerInput.value.trim(),
          repo: ghRepoInput.value.trim(),
          branch: (ghBranchInput.value.trim() || "main"),
          path: (ghPathInput.value.trim() || "data.json"),
          autoSync: !!ghAutoSyncInput.checked
        });
        var tokenVal = ghTokenInput.value;
        if (tokenVal !== GH_TOKEN_MASK) GithubSync.setToken(tokenVal.trim());
      };

      ghOwnerInput.onchange = syncGithubFieldsToConfig;
      ghRepoInput.onchange = syncGithubFieldsToConfig;
      ghBranchInput.onchange = syncGithubFieldsToConfig;
      ghPathInput.onchange = syncGithubFieldsToConfig;
      ghTokenInput.onchange = syncGithubFieldsToConfig;
      ghAutoSyncInput.onchange = syncGithubFieldsToConfig;

      ghTestBtn.onclick = function () {
        syncGithubFieldsToConfig();
        ghTestBtn.disabled = true;
        var original = ghTestBtn.innerHTML;
        ghTestBtn.innerHTML = Icon("refresh", { cls: "icon-sm" }) + " Testando...";
        GithubSync.testConnection().then(function (info) {
          Toast.show("Conectado a " + info.fullName + " (branch padrão: " + info.defaultBranch + (info.private ? ", privado" : ", público") + ").");
        }).catch(function (err) {
          Toast.show("Erro: " + err.message);
        }).then(function () {
          ghTestBtn.disabled = false;
          ghTestBtn.innerHTML = original;
        });
      };

      ghPushBtn.onclick = function () {
        syncGithubFieldsToConfig();
        ghPushBtn.disabled = true;
        var original = ghPushBtn.innerHTML;
        ghPushBtn.innerHTML = Icon("refresh", { cls: "icon-sm" }) + " Enviando...";
        GithubSync.pushNow(State.data).then(function (result) {
          if (result.ok) Toast.show("data.json enviado pro GitHub com sucesso.");
          else Toast.show("Erro ao enviar: " + (result.error || "configuração incompleta."));
          ghPushBtn.disabled = false;
          ghPushBtn.innerHTML = original;
          render(container);
        });
      };

      ghPullBtn.onclick = function () {
        syncGithubFieldsToConfig();
        if (!confirm("Carregar do GitHub vai SOBRESCREVER todos os dados atuais (catálogo, coleção, decks, listas, índice de imagens e configurações) com o que estiver no repositório. Continuar?")) return;
        ghPullBtn.disabled = true;
        var original = ghPullBtn.innerHTML;
        ghPullBtn.innerHTML = Icon("refresh", { cls: "icon-sm" }) + " Carregando...";
        GithubSync.pull().then(function (loaded) {
          State.replaceFullState(loaded);
          Toast.show("Dados carregados do GitHub com sucesso.");
          render(container);
        }).catch(function (err) {
          Toast.show("Erro ao carregar: " + err.message);
          ghPullBtn.disabled = false;
          ghPullBtn.innerHTML = original;
        });
      };
    }

    var reloadImageIndexBtn = container.querySelector("#settings-reload-image-index");
    if (reloadImageIndexBtn) reloadImageIndexBtn.onclick = function () {
      var beforePersonal = State.getPersonalDriveImageIndexCount();
      var countPersonal = State.updatePersonalDriveImageIndex(window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {}, "merge");
      var addedPersonal = countPersonal - beforePersonal;
      Toast.show("Índice de imagens recarregado: +" + addedPersonal + " nova(s) (" + countPersonal + " no total).");
      render(container);
    };
  }

  window.RenderSettings = { render: render };
})();
