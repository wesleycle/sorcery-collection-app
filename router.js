/* router.js - roteador simples baseado em location.hash. Sem biblioteca. */
(function () {
  "use strict";

  var routes = {};
  var container = null;
  var currentPage = null;

  function register(page, handler) { routes[page] = handler; }

  function getSegments() {
    var hash = location.hash.replace(/^#\/?/, "");
    if (!hash) hash = "home";
    return hash.split("/").filter(Boolean);
  }

  function renderCurrent() {
    var segments = getSegments();
    var page = segments[0];
    var handler = routes[page] || routes["home"];
    currentPage = routes[page] ? page : "home";
    if (window.RenderScanner && page !== "scanner") RenderScanner.stop();
    container.innerHTML = "";
    try {
      handler(container, segments.slice(1));
    } catch (e) {
      console.error("Erro ao renderizar pagina " + page + ":", e);
      container.innerHTML = '<div class="empty-state">Ocorreu um erro ao carregar esta tela. Veja o console para detalhes.</div>';
    }
    updateNavActive(currentPage);
  }

  function updateNavActive(page) {
    document.querySelectorAll(".nav-item").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-page") === page);
    });
  }

  function start(containerEl) {
    container = containerEl;
    window.addEventListener("hashchange", renderCurrent);
    renderCurrent();
  }

  function rerenderIfCurrent() {
    // Re-renderiza a pagina atual (usado quando o estado global muda, ex: outra aba/import)
    if (container) renderCurrent();
  }

  window.Router = { register: register, start: start, rerenderIfCurrent: rerenderIfCurrent, getSegments: getSegments };
})();
