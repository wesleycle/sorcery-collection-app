/* app.js - bootstrap do app: estado, sincronizacao automatica (GitHub + base
 * de cartas/imagens embutida), rotas, delegacao global de cliques em cartas
 * (abrir detalhe).
 *
 * Persistencia: so localStorage (por navegador/dispositivo) + o data.json
 * automatico no GitHub (ver dataSync.js) como sincronizacao de verdade entre
 * dispositivos. Nao existe mais conexao manual de arquivo local (File System
 * Access) - ver README, secao "Dados do App", pra historico.
 */
(function () {
  "use strict";

  // Aplica silenciosamente, no boot, qualquer snapshot mais novo de
  // catalogo/indice de imagens que tenha vindo embutido nesta versao do app
  // (arquivos sorcery-api-cards-data.js / personal-drive-image-index-data.js)
  // - sem nenhum clique do usuario. Esses itens raramente mudam (so quando eu
  // atualizo os arquivos e faco um novo deploy), entao a checagem e barata:
  // so compara a versao embutida com a ja aplicada, sem nenhuma chamada de
  // rede. Pra uma atualizacao AO VIVO (direto da API oficial, alem do que
  // estiver embutido), ver o botao "Atualizar base cartas" em Configuracoes.
  function applyBundledUpdatesIfNewer() {
    var settings = State.getSettings();

    var catalogVersion = window.SORCERY_API_SNAPSHOT_VERSION;
    if (catalogVersion && settings.catalogSnapshotVersion !== catalogVersion && window.SorceryApi) {
      SorceryApi.updateCatalog().then(function () {
        State.updateSettings({ catalogSnapshotVersion: catalogVersion });
      }).catch(function (err) { console.warn("Falha ao aplicar snapshot de catalogo embutido:", err); });
    }

    var imageIndexVersion = window.PERSONAL_DRIVE_IMAGE_INDEX_VERSION;
    if (imageIndexVersion && settings.personalImageIndexVersion !== imageIndexVersion) {
      State.updatePersonalDriveImageIndex(window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {}, "merge");
      State.updateSettings({ personalImageIndexVersion: imageIndexVersion });
    }
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
    State.init().then(function () {
      applyBundledUpdatesIfNewer();

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
    }).then(function () {
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
