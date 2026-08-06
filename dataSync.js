/* dataSync.js
 * Sincronizacao automatica e silenciosa do estado do app com o GitHub,
 * usada como "banco de dados" entre dispositivos. Nao ha nenhuma tela ou
 * configuracao pro usuario aqui - o app so fala com duas funcoes serverless
 * do Netlify (/.netlify/functions/data-get e data-save), que sao quem
 * conversam de fato com o GitHub usando um token guardado la (variavel de
 * ambiente do Netlify, GH_DATA_TOKEN) - o navegador nunca ve esse token.
 *
 * Uso (ver app.js e state.js):
 *   DataSync.pull()            -> Promise<objeto de dados | null>
 *   DataSync.pushDebounced(d)  -> agenda um envio (2.5s depois da ultima mudanca)
 *   DataSync.pushNow(d)        -> envia imediatamente, sem debounce
 */
(function () {
  "use strict";

  var PUSH_DEBOUNCE_MS = 2500;
  var pushTimer = null;
  var pendingData = null;
  var pushInFlight = false;

  function pull() {
    return fetch("/.netlify/functions/data-get", { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("Falha ao consultar dados remotos (" + res.status + ")");
        return res.json();
      })
      .then(function (json) { return (json && json.data) ? json.data : null; })
      .catch(function (err) {
        console.warn("DataSync.pull falhou (seguindo com dados locais):", err);
        return null;
      });
  }

  function pushNow(data) {
    pushInFlight = true;
    return fetch("/.netlify/functions/data-save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: data })
    }).then(function (res) {
      pushInFlight = false;
      if (res.ok) return { ok: true };
      return res.json().catch(function () { return {}; }).then(function (j) {
        console.warn("Falha ao salvar remoto:", j && j.error);
        return { ok: false, error: j && j.error };
      });
    }).catch(function (err) {
      pushInFlight = false;
      console.warn("Falha ao salvar remoto:", err);
      return { ok: false, error: String(err) };
    });
  }

  function pushDebounced(data) {
    pendingData = data;
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      var d = pendingData;
      pendingData = null;
      pushTimer = null;
      pushNow(d);
    }, PUSH_DEBOUNCE_MS);
  }

  function isSyncing() { return pushInFlight || !!pushTimer; }

  window.DataSync = {
    pull: pull,
    pushNow: pushNow,
    pushDebounced: pushDebounced,
    isSyncing: isSyncing
  };
})();
