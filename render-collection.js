/* render-collection.js - Modulo Colecao (/collection, /collection/:id) */
(function () {
  "use strict";

  var filters = { types: [], sets: [], elements: [], rarities: [], conditions: [], costMax: 10, keyword: "", artist: "", foilOnly: false, curioOnly: false, query: "", sortBy: "name-asc" };
  var showFilters = false;
  var lastContainer = null;

  function render(container, segments) {
    lastContainer = container;
    var settings = State.getSettings();
    var viewMode = settings.collectionViewMode || "grid";

    var collection = State.getCollection();
    var totalQty = collection.reduce(function (s, e) { return s + e.quantity; }, 0);
    var uniqueCount = new Set(collection.map(function (e) { return e.cardId; })).size;

    var html = '<div class="page-header"><h2>Coleção</h2>' +
      '<div class="toolbar">' +
      '<input type="text" class="search-bar" id="coll-search" placeholder="Buscar por nome, efeito..." value="' + UI.escapeHtml(filters.query) + '">' +
      '<button class="btn" id="coll-toggle-filters">' + Icon("filter", { cls: "icon-sm" }) + ' Filtros</button>' +
      '<button class="btn" id="coll-toggle-view">' + (viewMode === "grid" ? Icon("list", { cls: "icon-sm" }) + " Lista" : Icon("grid", { cls: "icon-sm" }) + " Grade") + "</button>" +
      '<button class="btn" id="coll-import-export">' + Icon("import", { cls: "icon-sm" }) + ' Importar/Exportar</button>' +
      '<button class="btn" id="coll-stats">' + Icon("stats", { cls: "icon-sm" }) + ' Indicadores</button>' +
      "</div></div>";

    html += '<div class="count-line">' + totalQty + " cartas (" + uniqueCount + " únicas)</div>";
    html += '<div id="coll-filters-slot"></div>';
    html += '<div id="coll-grid-slot"></div>';
    html += '<div class="fab-wrap" id="fab-wrap"></div>';

    container.innerHTML = html;
    renderFilters();
    renderGrid();
    renderFab();
    updateFilterButtonBadge();

    container.querySelector("#coll-search").oninput = function (e) { filters.query = e.target.value; renderGrid(); };
    container.querySelector("#coll-toggle-filters").onclick = function () { showFilters = !showFilters; renderFilters(); };
    container.querySelector("#coll-toggle-view").onclick = function () {
      State.updateSettings({ collectionViewMode: viewMode === "grid" ? "list" : "grid" });
      render(container, segments);
    };
    container.querySelector("#coll-import-export").onclick = function () { openImportExportModal(); };
    container.querySelector("#coll-stats").onclick = function () {
      var stats = UI.computeCollectionStats(State.getCollection(), State.getCatalog());
      UI.openStatsModal("Indicadores da Coleção", stats);
    };
  }

  // ---------------- Importar / Exportar (CSV) ----------------
  function openImportExportModal() {
    var html = '<h3>Importar / Exportar Coleção</h3>' +
      '<div class="section-title">Exportar</div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
      '<button class="btn" id="ie-export-full">' + Icon("export", { cls: "icon-sm" }) + ' CSV completo</button>' +
      '<button class="btn" id="ie-export-simple">' + Icon("export", { cls: "icon-sm" }) + ' CSV simples</button>' +
      '</div>' +
      '<p style="font-size:12px;color:var(--text-secondary);margin-top:8px;">"Completo" segue o formato de exportação de coleção usado por outras ferramentas (Edição, Qualidade, Raridade, Cor...). "Simples" usa as colunas do próprio app — ideal pra backup/edição em planilha, sem perda de dados.</p>' +
      '<hr class="section-divider">' +
      '<div class="section-title">Importar</div>' +
      '<p style="font-size:12px;color:var(--text-secondary);">Envie um .csv em qualquer um dos formatos acima — o formato é detectado automaticamente pelo cabeçalho.</p>' +
      '<input type="file" accept=".csv" id="ie-import-file">' +
      '<div id="ie-import-preview"></div>';
    var root = Modal.open(html);
    var collection = State.getCollection();
    var catalog = State.getCatalog();
    root.querySelector("#ie-export-full").onclick = function () {
      ImportExport.downloadTextFile("colecao_completo.csv", ImportExport.exportCollectionFullCsv(collection, catalog), "text/csv");
    };
    root.querySelector("#ie-export-simple").onclick = function () {
      ImportExport.downloadTextFile("colecao_simples.csv", ImportExport.exportCollectionSimpleCsv(collection, catalog), "text/csv");
    };
    root.querySelector("#ie-import-file").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        var result = ImportExport.importCollectionCsv(reader.result, catalog);
        renderImportPreview(root.querySelector("#ie-import-preview"), result);
      };
      reader.readAsText(file, "UTF-8");
    };
  }

  function renderImportPreview(slot, result) {
    if (!result.format) {
      slot.innerHTML = '<p class="status-bad">Cabeçalho do CSV não reconhecido. Confira se o arquivo está em um dos formatos suportados.</p>';
      return;
    }
    var html = '<div class="panel" style="margin-top:12px;"><h3>Prévia</h3>';
    html += '<p>' + result.resolved.length + ' carta(s) reconhecida(s), ' + result.unresolved.length + ' não identificada(s).</p>';
    if (result.unresolved.length) {
      html += '<div class="section-title">Não identificadas</div>';
      result.unresolved.forEach(function (u, idx) {
        html += '<div class="panel" style="margin-bottom:6px;"><strong>' + UI.escapeHtml(u.quantity + "x " + u.name) + "</strong><br>";
        if (u.candidates && u.candidates.length) {
          html += '<select data-unresolved-pick="' + idx + '"><option value="">-- ignorar --</option>' + u.candidates.map(function (c) {
            return '<option value="' + c.card.id + '">' + UI.escapeHtml(c.card.name) + " (" + Math.round(c.score * 100) + "% match)</option>";
          }).join("") + "</select>";
        } else {
          html += '<span style="color:var(--text-secondary)">Nenhum candidato encontrado no catálogo.</span>';
        }
        html += "</div>";
      });
    }
    html += '<button class="btn btn-primary" id="ie-import-confirm" style="margin-top:10px;">' + Icon("save", { cls: "icon-sm" }) + ' Confirmar importação (' + result.resolved.length + ')</button></div>';
    slot.innerHTML = html;

    slot.querySelectorAll("[data-unresolved-pick]").forEach(function (sel) {
      sel.onchange = function () {
        var idx = parseInt(sel.getAttribute("data-unresolved-pick"), 10);
        var u = result.unresolved[idx];
        var cardId = sel.value;
        if (!cardId) return;
        result.resolved.push(Object.assign({}, u, { card: State.getCatalogCard(cardId) }));
        result.unresolved.splice(idx, 1);
        renderImportPreview(slot, result);
      };
    });

    slot.querySelector("#ie-import-confirm").onclick = function () {
      result.resolved.forEach(function (r) {
        State.addCollectionEntry({
          cardId: r.card.id, quantity: r.quantity, condition: r.condition || "NM",
          isFoil: !!r.isFoil, isPromo: !!r.isPromo, isCurio: !!r.isCurio,
          pricePaid: r.pricePaid, currency: r.currency, notes: r.notes || ""
        });
      });
      Toast.show(result.resolved.length + " carta(s) importada(s) para a coleção.");
      Modal.close();
      if (lastContainer) render(lastContainer, []);
    };
  }

  // Mantem o botao "Filtros" da barra de ferramentas mostrando quantos
  // filtros estao ativos, mesmo com o painel fechado.
  function updateFilterButtonBadge() {
    var btn = document.getElementById("coll-toggle-filters");
    if (!btn) return;
    var n = UI.activeFilterCount(filters);
    btn.innerHTML = Icon("filter", { cls: "icon-sm" }) + " Filtros" + (n ? '<span class="filter-count-badge">' + n + "</span>" : "");
  }

  function onFilterChange() { renderGrid(); updateFilterButtonBadge(); }

  function renderFilters() {
    var slot = document.getElementById("coll-filters-slot");
    if (!slot) return;
    if (!showFilters) { slot.innerHTML = ""; return; }
    slot.innerHTML = UI.renderFilterPanel(filters, onFilterChange, { showCondition: true, collectionSort: true });
    UI.wireFilterPanel(slot, filters, onFilterChange, renderFilters);
  }

  function clearFiltersAndSearch() {
    filters.query = "";
    UI.clearFilterState(filters);
    var searchInput = document.getElementById("coll-search");
    if (searchInput) searchInput.value = "";
    renderFilters();
    renderGrid();
    updateFilterButtonBadge();
  }

  function renderGrid() {
    var slot = document.getElementById("coll-grid-slot");
    if (!slot) return;
    var settings = State.getSettings();
    var viewMode = settings.collectionViewMode || "grid";
    var collection = State.getCollection();

    var grouped = {}; // cardId -> entries[]
    collection.forEach(function (e) {
      if (!grouped[e.cardId]) grouped[e.cardId] = [];
      grouped[e.cardId].push(e);
    });

    var cardIds = Object.keys(grouped);
    var cards = cardIds.map(function (id) { return State.getCatalogCard(id); }).filter(Boolean);

    var f = Object.assign({}, filters, { costMax: filters.costMax >= 10 ? null : filters.costMax });
    cards = cards.filter(function (c) { return UI.applyCommonFilters(c, f); });
    if (filters.conditions && filters.conditions.length) {
      cards = cards.filter(function (c) {
        return grouped[c.id].some(function (e) { return filters.conditions.indexOf(e.condition) !== -1; });
      });
    }
    if (filters.foilOnly) cards = cards.filter(function (c) { return grouped[c.id].some(function (e) { return e.isFoil; }); });
    if (filters.curioOnly) cards = cards.filter(function (c) { return grouped[c.id].some(function (e) { return e.isCurio; }); });

    if (!cards.length && cardIds.length && (UI.activeFilterCount(filters) > 0 || filters.query)) {
      slot.innerHTML = '<div class="empty-state"><div class="big-icon">' + Icon("search") + '</div>' +
        'Nenhuma carta encontrada com os filtros/busca atuais.<br>' +
        '<button class="btn" id="coll-empty-clear" style="margin-top:12px;">' + Icon("close", { cls: "icon-sm" }) + ' Limpar filtros e busca</button></div>';
      var clearBtn = document.getElementById("coll-empty-clear");
      if (clearBtn) clearBtn.onclick = clearFiltersAndSearch;
      return;
    }

    cards = UI.sortCards(cards, filters.sortBy, function (c) {
      var entries = grouped[c.id];
      return { addedAt: entries[0].addedAt, pricePaid: entries.reduce(function (s, e) { return s + (e.pricePaid || 0); }, 0) };
    });

    var items = cards.map(function (c) {
      var entries = grouped[c.id];
      var qty = entries.reduce(function (s, e) { return s + e.quantity; }, 0);
      var anyFoil = entries.some(function (e) { return e.isFoil; });
      return {
        card: c, badges: { foil: anyFoil, condition: entries[0].condition }, openCtx: { source: "collection" },
        qty: qty, qtyCtx: { type: "collection", entryId: entries[0].id }
      };
    });

    slot.innerHTML = UI.renderCardGrid(items, viewMode);
    UI.hydrateImages(slot);
    UI.wireQtyControls(slot, renderGrid);
  }

  function renderFab() {
    var wrap = document.getElementById("fab-wrap");
    if (!wrap) return;
    wrap.innerHTML =
      '<div class="fab-menu hidden" id="fab-menu">' +
      '<button class="btn" id="fab-scanner">' + Icon("scanner", { cls: "icon-sm" }) + ' Scanner</button>' +
      '<button class="btn" id="fab-catalog">' + Icon("search", { cls: "icon-sm" }) + ' Buscar no Catálogo</button>' +
      '<button class="btn" id="fab-manual">' + Icon("edit", { cls: "icon-sm" }) + ' Cadastro Manual</button>' +
      '</div>' +
      '<button class="fab-main" id="fab-main">' + Icon("plus") + '</button>';
    var menu = document.getElementById("fab-menu");
    document.getElementById("fab-main").onclick = function () { menu.classList.toggle("hidden"); };
    document.getElementById("fab-scanner").onclick = function () { location.hash = "#/scanner"; };
    document.getElementById("fab-catalog").onclick = function () { location.hash = "#/catalog"; };
    document.getElementById("fab-manual").onclick = function () { openManualPicker(); };
  }

  function openManualPicker() {
    var catalog = State.getCatalog();
    var html = '<h3>Cadastro Manual</h3><input type="text" class="search-bar" id="manual-search" placeholder="Buscar carta pelo nome..." style="width:100%;margin-bottom:10px;"><div id="manual-results"></div>';
    var root = Modal.open(html);
    function runSearch(q) {
      var results = catalog.filter(function (c) { return c.name.toLowerCase().indexOf(q.toLowerCase()) !== -1; }).slice(0, 20);
      var resSlot = root.querySelector("#manual-results");
      resSlot.innerHTML = results.map(function (c) {
        return UI.matchChoiceHtml(c, 'data-pick="' + c.id + '"', c.set + " · " + c.type);
      }).join("") || '<p style="color:var(--text-secondary)">Nenhuma carta encontrada.</p>';
      UI.hydrateImages(resSlot);
      resSlot.querySelectorAll("[data-pick]").forEach(function (el) {
        el.onclick = function () { Modal.close(); UI.openCollectionEntryForm(el.getAttribute("data-pick"), null, { source: "collection" }); };
      });
    }
    root.querySelector("#manual-search").oninput = function (e) { runSearch(e.target.value); };
    runSearch("");
  }

  window.RenderCollection = { render: render };
})();
