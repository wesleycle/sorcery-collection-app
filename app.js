/* app.js - bootstrap do app: storage/estado, rotas, navegacao, banner de conexao,
 * delegacao global de cliques em cartas (abrir detalhe). */
(function () {
  "use strict";

  var CTA_DISMISS_KEY = "sorcery-app-cta-dismissed";

  function renderBannerNone() {
    var el = document.getElementById("connect-banner");
    el.className = "hidden";
    el.innerHTML = "";
  }

  function renderBannerReconnect() {
    var el = document.getElementById("connect-banner");
    el.className = "reconnect-banner";
    el.innerHTML = '<span>' + Icon("lock", { cls: "icon-sm" }) + ' Reconectar arquivo de dados (permissão do navegador expirou nesta sessão)</span><button id="banner-reconnect-btn">Reconectar</button>';
    document.getElementById("banner-reconnect-btn").onclick = function () {
      Storage.requestReconnect().then(function (ok) {
        if (ok) {
          Storage.load().then(function (loaded) {
            if (loaded) State.replaceFullState(loaded);
            Toast.show("Arquivo de dados reconectado!");
            renderBannerNone();
            Router.rerenderIfCurrent();
          });
        } else {
          Toast.show("Permissão não concedida. Tente novamente ou reconecte pela tela de Configurações.");
        }
      });
    };
  }

  function renderBannerConnect() {
    if (sessionStorage.getItem(CTA_DISMISS_KEY)) { renderBannerNone(); return; }
    var el = document.getElementById("connect-banner");
    el.className = "reconnect-banner";
    el.innerHTML = '<span>' + Icon("save", { cls: "icon-sm" }) + ' Conectar arquivo de dados (data.json) para salvar sua coleção automaticamente no disco</span>' +
      '<span style="display:flex;gap:8px;">' +
      '<button id="banner-connect-new">Criar novo</button>' +
      '<button id="banner-connect-open">Já tenho um</button>' +
      '<button id="banner-dismiss" style="background:transparent;border:none;color:#1a1510;font-weight:700;">' + Icon("close", { cls: "icon-sm" }) + '</button>' +
      "</span>";
    document.getElementById("banner-connect-new").onclick = function () {
      Storage.connectNew().then(function () {
        Storage.saveImmediate(State.data);
        Toast.show("Arquivo data.json criado! Suas alterações serão salvas nele automaticamente.");
        renderBannerNone();
      }).catch(function (e) { if (e && e.name !== "AbortError") Toast.show("Erro: " + e.message); });
    };
    document.getElementById("banner-connect-open").onclick = function () {
      Storage.connectOpen().then(function () { return Storage.load(); }).then(function (loaded) {
        if (loaded) { State.replaceFullState(loaded); Toast.show("data.json carregado e conectado!"); }
        else { Storage.saveImmediate(State.data); }
        renderBannerNone();
        Router.rerenderIfCurrent();
      }).catch(function (e) { if (e && e.name !== "AbortError") Toast.show("Erro: " + e.message); });
    };
    document.getElementById("banner-dismiss").onclick = function () {
      sessionStorage.setItem(CTA_DISMISS_KEY, "1");
      renderBannerNone();
    };
  }

  // Delegacao global: clique em qualquer carta (grid/lista) abre o modal de detalhe
  function wireCardOpenDelegation() {
    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-open-card]");
      if (!el) return;
      var cardId = el.getAttribute("data-open-card");
      var ctxRaw = el.getAttribute("data-open-ctx");
      var ctx = {};
      try { ctx = ctxRaw ? JSON.parse(ctxRaw) : {}; } catch (err) { /* ignore */ }
      UI.openCardDetail(cardId, ctx);
    });
  }

  function boot() {
    Storage.restoreHandle().then(function (perm) {
      return State.init().then(function () { return perm; });
    }).then(function (perm) {
      // Sincronizacao automatica e silenciosa: a cada carregamento de
      // pagina, busca a versao mais recente salva no GitHub (ver
      // dataSync.js) e aplica por cima dos dados locais - assim o app fica
      // igual em qualquer navegador/dispositivo sem nenhuma tela ou acao do
      // usuario. Se falhar (offline, primeira execucao, etc.) segue
      // normalmente com os dados locais.
      if (window.DataSync) {
        DataSync.pull().then(function (remote) {
          if (remote) State.applyRemoteState(remote);
        });
      }
      return perm;
    }).then(function (perm) {
      if (perm === "granted") {
        renderBannerNone();
      } else if (perm === "prompt" || perm === "denied") {
        renderBannerReconnect();
      } else if (Storage.hasFSApi()) {
        renderBannerConnect();
      } else {
        renderBannerNone();
      }

      Router.register("home", RenderHome.render);
      Router.register("collection", RenderCollection.render);
      Router.register("catalog", RenderCatalog.render);
      Router.register("decks", RenderDecks.render);
      Router.register("lists", RenderLists.render);
      Router.register("scanner", RenderScanner.render);
      Router.register("settings", RenderSettings.render);

      Router.start(document.getElementById("main-container"));
      wireCardOpenDelegation();

      State.subscribe(function () { Router.rerenderIfCurrent(); });
    }).catch(function (err) {
      console.error("Falha ao inicializar o app:", err);
      document.getElementById("main-container").innerHTML = '<div class="empty-state">Erro ao inicializar o app. Veja o console (F12) para detalhes.</div>';
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
