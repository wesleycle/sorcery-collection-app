/* render-catalog.js - Modulo Catalogo (/catalog, /catalog/:id)
 * O catalogo agrupa impressoes diferentes da mesma carta (ex: Abundance em
 * Alpha e Beta) numa unica entrada - imagem, nome e o(s) set(s) a que
 * pertence. As outras versoes ficam disponiveis no modal de detalhe. */
(function () {
  "use strict";

  var filters = { types: [], sets: [], elements: [], rarities: [], costMax: 10, keyword: "", artist: "", foilOnly: false, curioOnly: false, inCollectionOnly: false, query: "", sortBy: "name-asc" };
  var showFilters = false;

  function render(container) {
    var viewMode = State.getSettings().catalogViewMode || "grid";
    var html = '<div class="page-header"><h2>Catálogo</h2>' +
      '<div class="toolbar">' +
      '<input type="text" class="search-bar" id="cat-search" placeholder="Buscar por nome, efeito..." value="' + UI.escapeHtml(filters.query) + '">' +
      '<button class="btn" id="cat-toggle-filters">' + Icon("filter", { cls: "icon-sm" }) + ' Filtros</button>' +
      '<button class="btn" id="cat-toggle-view">' + (viewMode === "grid" ? Icon("list", { cls: "icon-sm" }) + " Lista" : Icon("grid", { cls: "icon-sm" }) + " Grade") + "</button>" +
      "</div></div>";
    html += '<div id="cat-count" class="count-line"></div>';
    html += '<div id="cat-filters-slot"></div>';
    html += '<div id="cat-grid-slot"></div>';

    container.innerHTML = html;
    renderFilters();
    renderGrid();
    updateFilterButtonBadge();

    container.querySelector("#cat-search").oninput = function (e) { filters.query = e.target.value; renderGrid(); };
    container.querySelector("#cat-toggle-filters").onclick = function () { showFilters = !showFilters; renderFilters(); };
    container.querySelector("#cat-toggle-view").onclick = function () {
      var vm = State.getSettings().catalogViewMode || "grid";
      State.updateSettings({ catalogViewMode: vm === "grid" ? "list" : "grid" });
      render(container);
    };
  }

  // Mantem o botao "Filtros" da barra de ferramentas mostrando quantos
  // filtros estao ativos, mesmo com o painel fechado.
  function updateFilterButtonBadge() {
    var btn = document.getElementById("cat-toggle-filters");
    if (!btn) return;
    var n = UI.activeFilterCount(filters);
    btn.innerHTML = Icon("filter", { cls: "icon-sm" }) + " Filtros" + (n ? '<span class="filter-count-badge">' + n + "</span>" : "");
  }

  function onFilterChange() { renderGrid(); updateFilterButtonBadge(); }

  function renderFilters() {
    var slot = document.getElementById("cat-filters-slot");
    if (!slot) return;
    if (!showFilters) { slot.innerHTML = ""; return; }
    slot.innerHTML = UI.renderFilterPanel(filters, onFilterChange, { showCollectionToggle: true });
    UI.wireFilterPanel(slot, filters, onFilterChange, renderFilters);
  }

  function clearFiltersAndSearch() {
    filters.query = "";
    UI.clearFilterState(filters);
    var searchInput = document.getElementById("cat-search");
    if (searchInput) searchInput.value = "";
    renderFilters();
    renderGrid();
    updateFilterButtonBadge();
  }

  // Agrupa o catalogo por nome normalizado - cada carta unica aparece uma vez,
  // mesmo tendo impressoes em varios sets.
  function groupCatalogByName(catalog) {
    var map = {};
    catalog.forEach(function (c) {
      var key = UI.normalizeCardName(c.name);
      if (!map[key]) map[key] = [];
      map[key].push(c);
    });
    return Object.keys(map).map(function (key) {
      var versions = map[key].slice().sort(function (a, b) { return UI.SET_LIST.indexOf(a.set) - UI.SET_LIST.indexOf(b.set); });
      return { key: key, versions: versions };
    });
  }

  function renderGrid() {
    var slot = document.getElementById("cat-grid-slot");
    if (!slot) return;
    var catalog = State.getCatalog();

    var f = Object.assign({}, filters, { costMax: filters.costMax >= 10 ? null : filters.costMax });

    var groups = groupCatalogByName(catalog).map(function (g) {
      var passing = g.versions.filter(function (c) { return UI.applyCommonFilters(c, f); });
      return passing.length ? { versions: g.versions, rep: passing[0] } : null;
    }).filter(Boolean);

    if (filters.inCollectionOnly) {
      groups = groups.filter(function (g) { return g.versions.some(function (c) { return State.getCollectionQtyForCard(c.id) > 0; }); });
    }
    if (filters.foilOnly || filters.curioOnly) {
      groups = groups.filter(function (g) {
        return g.versions.some(function (c) {
          var entries = State.getCollectionEntriesForCard(c.id);
          return entries.some(function (e) { return (!filters.foilOnly || e.isFoil) && (!filters.curioOnly || e.isCurio); });
        });
      });
    }

    // Ordena reaproveitando UI.sortCards sobre as versoes representantes,
    // depois remonta a lista de grupos na mesma ordem.
    var repById = {};
    groups.forEach(function (g) { repById[g.rep.id] = g; });
    var sortedReps = UI.sortCards(groups.map(function (g) { return g.rep; }), filters.sortBy);
    var sortedGroups = sortedReps.map(function (rep) { return repById[rep.id]; });

    var totalPrintings = catalog.length;
    document.getElementById("cat-count").textContent = sortedGroups.length + " cartas no catálogo" +
      (totalPrintings !== sortedGroups.length ? " (" + totalPrintings + " impressões ao todo)" : "");

    if (!sortedGroups.length && (UI.activeFilterCount(filters) > 0 || filters.query)) {
      slot.innerHTML = '<div class="empty-state"><div class="big-icon">' + Icon("search") + '</div>' +
        'Nenhuma carta encontrada com os filtros/busca atuais.<br>' +
        '<button class="btn" id="cat-empty-clear" style="margin-top:12px;">' + Icon("close", { cls: "icon-sm" }) + ' Limpar filtros e busca</button></div>';
      var clearBtn = document.getElementById("cat-empty-clear");
      if (clearBtn) clearBtn.onclick = clearFiltersAndSearch;
      return;
    }

    var items = sortedGroups.map(function (g) {
      var rep = g.rep;
      var totalQty = g.versions.reduce(function (s, c) { return s + State.getCollectionQtyForCard(c.id); }, 0);
      var uniqueSets = g.versions.map(function (c) { return c.set; }).filter(function (s, i, arr) { return arr.indexOf(s) === i; });
      var setsLine = uniqueSets.join(", ");
      return {
        card: rep,
        badges: { haveText: totalQty > 0 ? Icon("check", { cls: "icon-sm" }) + " Tenho " + totalQty : null },
        openCtx: { source: "catalog" },
        metaOverride: setsLine
      };
    });

    slot.innerHTML = UI.renderCardGrid(items, State.getSettings().catalogViewMode || "grid");
    UI.hydrateImages(slot);
  }

  window.RenderCatalog = { render: render };
})();
