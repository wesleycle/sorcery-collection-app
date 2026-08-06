/* render-lists.js - Modulo Listas (/lists, /lists/:id)
 * Listas sao criadas livremente pelo usuario (nome + descricao opcional) -
 * nao ha mais "Wishlist"/"Lista de Troca" fixas. A tela inicial mostra todas
 * as listas (criar/editar/excluir); o detalhe de uma lista mostra as cartas
 * dela em grade ou lista, com busca/filtros (mesmo padrao do Catalogo/
 * Colecao), indicadores, importar/exportar e as acoes de sempre por item
 * (editar quantidade/notas, "Tenho!" pra mover pra colecao, remover).
 */
(function () {
  "use strict";

  var filters = { types: [], sets: [], elements: [], rarities: [], conditions: [], costMax: 10, keyword: "", artist: "", foilOnly: false, curioOnly: false, query: "", sortBy: "name-asc" };
  var showFilters = false;

  function render(container, segments) {
    var listId = segments && segments[0];
    var list = listId ? State.getList(listId) : null;
    if (list) { renderDetail(container, list); return; }
    renderListOfLists(container);
  }

  // ---------------- Tela: todas as listas ----------------
  function renderListOfLists(container) {
    var lists = State.getLists();
    var html = '<div class="page-header"><h2>Listas</h2></div>';

    if (!lists.length) {
      html += '<div class="empty-state"><div class="big-icon">' + Icon("star") + '</div>' +
        'Você ainda não criou nenhuma lista.<br>Crie uma para acompanhar cartas que quer conseguir, planeja trocar, ou qualquer outro agrupamento.</div>';
    } else {
      // Favoritas primeiro, mesmo criterio usado na lista de Decks.
      lists.slice().sort(function (a, b) { return (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0); }).forEach(function (l) {
        html += '<div class="deck-card" data-open-list="' + l.id + '">' +
          '<div style="flex:1;">' +
          '<div class="deck-name">' + UI.escapeHtml(l.name) + "</div>" +
          (l.description ? '<div class="deck-sub">' + UI.escapeHtml(l.description) + "</div>" : "") +
          '<div class="deck-sub">' + l.items.length + (l.items.length === 1 ? " item" : " itens") + "</div>" +
          "</div>" +
          '<div style="display:flex;gap:6px;">' +
          '<button class="fav-toggle' + (l.isFavorite ? " active" : "") + '" data-toggle-fav-list="' + l.id + '" title="' + (l.isFavorite ? "Remover dos favoritos" : "Favoritar") + '">' + Icon("star", { cls: "icon-sm" }) + "</button>" +
          '<button class="btn btn-sm" data-edit-list="' + l.id + '" title="Editar">' + Icon("edit", { cls: "icon-sm" }) + "</button>" +
          '<button class="btn btn-sm btn-danger" data-delete-list="' + l.id + '" title="Excluir">' + Icon("trash", { cls: "icon-sm" }) + "</button>" +
          "</div></div>";
      });
    }

    html += '<div class="fab-wrap"><button class="fab-main" id="lists-new-btn" title="Nova Lista">' + Icon("plus") + '</button></div>';

    container.innerHTML = html;

    container.querySelector("#lists-new-btn").onclick = function () {
      UI.openCreateListForm(function (list) { Modal.close(); location.hash = "#/lists/" + list.id; });
    };
    container.querySelectorAll("[data-open-list]").forEach(function (el) {
      el.onclick = function (e) {
        if (e.target.closest("[data-edit-list]") || e.target.closest("[data-delete-list]") || e.target.closest("[data-toggle-fav-list]")) return;
        location.hash = "#/lists/" + el.getAttribute("data-open-list");
      };
    });
    container.querySelectorAll("[data-toggle-fav-list]").forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        State.toggleListFavorite(btn.getAttribute("data-toggle-fav-list"));
        renderListOfLists(container);
      };
    });
    container.querySelectorAll("[data-edit-list]").forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        openEditListModal(State.getList(btn.getAttribute("data-edit-list")), function () { renderListOfLists(container); });
      };
    });
    container.querySelectorAll("[data-delete-list]").forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        var list = State.getList(btn.getAttribute("data-delete-list"));
        if (confirm('Excluir a lista "' + list.name + '"? As cartas dela não são removidas da coleção, só da lista.')) {
          State.deleteList(list.id);
          renderListOfLists(container);
        }
      };
    });
  }

  function openEditListModal(list, onSaved) {
    var html = '<h3>Editar Lista</h3>' +
      '<div class="form-row"><label>Nome</label><input type="text" id="edit-list-name" value="' + UI.escapeHtml(list.name) + '"></div>' +
      '<div class="form-row"><label>Descrição</label><textarea id="edit-list-desc">' + UI.escapeHtml(list.description || "") + "</textarea></div>" +
      '<button class="btn btn-primary btn-block" id="edit-list-save">' + Icon("save", { cls: "icon-sm" }) + ' Salvar</button>';
    var root = Modal.open(html);
    root.querySelector("#edit-list-save").onclick = function () {
      var name = root.querySelector("#edit-list-name").value.trim();
      if (!name) { Toast.show("Dê um nome à lista."); return; }
      State.updateList(list.id, { name: name, description: root.querySelector("#edit-list-desc").value.trim() });
      Modal.close();
      if (onSaved) onSaved();
    };
  }

  // ---------------- Detalhe de uma lista ----------------
  function renderDetail(container, list) {
    var settings = State.getSettings();
    var viewMode = settings.listsViewMode || "grid";

    var html = '<div class="page-header"><h2>' + UI.escapeHtml(list.name) +
      ' <button class="fav-toggle inline' + (list.isFavorite ? " active" : "") + '" id="list-fav-toggle" title="' + (list.isFavorite ? "Remover dos favoritos" : "Favoritar") + '">' + Icon("star", { cls: "icon-sm" }) + '</button></h2>' +
      '<div class="toolbar">' +
      '<button class="btn" id="list-back">&larr; Todas as Listas</button>' +
      '<button class="btn" id="list-edit-btn">' + Icon("edit", { cls: "icon-sm" }) + " Editar</button>" +
      '<button class="btn" id="list-export-menu">' + Icon("export", { cls: "icon-sm" }) + " Exportar</button>" +
      "</div></div>";
    if (list.description) html += '<p style="color:var(--text-secondary);margin-top:-8px;">' + UI.escapeHtml(list.description) + "</p>";

    html += '<div class="toolbar" style="margin-bottom:10px;flex-wrap:wrap;">' +
      '<input type="text" class="search-bar" id="list-search" placeholder="Buscar por nome, efeito..." value="' + UI.escapeHtml(filters.query) + '">' +
      '<button class="btn" id="list-toggle-filters">' + Icon("filter", { cls: "icon-sm" }) + " Filtros</button>" +
      '<button class="btn" id="list-toggle-view">' + (viewMode === "grid" ? Icon("list", { cls: "icon-sm" }) + " Lista" : Icon("grid", { cls: "icon-sm" }) + " Grade") + "</button>" +
      '<button class="btn btn-primary" id="list-add">' + Icon("plus", { cls: "icon-sm" }) + " Adicionar Carta</button>" +
      '<button class="btn" id="list-import">' + Icon("import", { cls: "icon-sm" }) + " Importar</button>" +
      (list.items.length ? '<button class="btn" id="list-stats">' + Icon("stats", { cls: "icon-sm" }) + " Indicadores</button>" : "") +
      "</div>";
    html += '<div id="list-filters-slot"></div>';
    // Area capturada pela exportacao de imagem: titulo + indicadores + as
    // cartas no formato (grade/lista) atual - de proposito SEM a barra de
    // busca/filtros/botoes, que nao fazem sentido numa imagem exportada.
    html += '<div id="list-export-area">' +
      '<h3 class="export-title">' + UI.escapeHtml(list.name) + "</h3>" +
      (list.description ? '<p class="export-subtitle">' + UI.escapeHtml(list.description) + "</p>" : "") +
      '<div id="list-indicators-slot"></div>' +
      '<div id="list-items-slot"></div>' +
      "</div>";

    container.innerHTML = html;

    renderIndicators(container, list);
    renderFiltersPanel(container, list);
    renderItems(container, list);
    updateFilterButtonBadge(container);

    container.querySelector("#list-back").onclick = function () { location.hash = "#/lists"; };
    container.querySelector("#list-edit-btn").onclick = function () {
      openEditListModal(list, function () { render(container, [list.id]); });
    };
    container.querySelector("#list-fav-toggle").onclick = function () {
      State.toggleListFavorite(list.id);
      render(container, [list.id]);
    };
    container.querySelector("#list-search").oninput = function (e) { filters.query = e.target.value; renderItems(container, list); };
    container.querySelector("#list-toggle-filters").onclick = function () { showFilters = !showFilters; renderFiltersPanel(container, list); };
    container.querySelector("#list-toggle-view").onclick = function () {
      State.updateSettings({ listsViewMode: viewMode === "grid" ? "list" : "grid" });
      render(container, [list.id]);
    };
    container.querySelector("#list-add").onclick = function () { openAddToListPicker(list, container); };
    container.querySelector("#list-import").onclick = function () { openImportListModal(list, container); };
    container.querySelector("#list-export-menu").onclick = function () {
      var menuHtml = '<h3>Exportar Lista</h3>' +
        '<div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">' +
        '<button class="btn" id="list-export-txt">' + Icon("export", { cls: "icon-sm" }) + ' Exportar .txt</button>' +
        '<button class="btn" id="list-export-csv">' + Icon("export", { cls: "icon-sm" }) + ' Exportar CSV</button>' +
        '<button class="btn" id="list-export-image">' + Icon("export", { cls: "icon-sm" }) + ' Salvar como Imagem/PDF</button>' +
        "</div>";
      var menuRoot = Modal.open(menuHtml);
      menuRoot.querySelector("#list-export-txt").onclick = function () { Modal.close(); exportListTxt(list); };
      menuRoot.querySelector("#list-export-csv").onclick = function () {
        Modal.close();
        var csv = ImportExport.exportListCsv(list, State.getCatalog());
        ImportExport.downloadTextFile(list.name.replace(/[^a-z0-9]+/gi, "_") + ".csv", csv, "text/csv");
      };
      menuRoot.querySelector("#list-export-image").onclick = function () {
        Modal.close();
        UI.exportNodeAsPrint(container.querySelector("#list-export-area"), list.name);
      };
    };
    var statsBtn = container.querySelector("#list-stats");
    if (statsBtn) statsBtn.onclick = function () {
      var stats = UI.computeItemListStats(list.items, State.getCatalog());
      UI.openStatsModal("Indicadores — " + list.name, stats);
    };
  }

  function renderIndicators(container, list) {
    var slot = container.querySelector("#list-indicators-slot");
    if (!slot) return;
    var byType = {};
    var sumPrice = 0;
    list.items.forEach(function (i) {
      var c = State.getCatalogCard(i.cardId);
      var t = c ? c.type : "?";
      byType[t] = (byType[t] || 0) + i.quantity;
      State.getCollectionEntriesForCard(i.cardId).forEach(function (e) { if (e.pricePaid) sumPrice += e.pricePaid; });
    });
    slot.innerHTML = '<div class="list-indicators">' +
      "<span><strong>" + list.items.length + "</strong> itens</span>" +
      Object.keys(byType).map(function (t) { return "<span>" + t + ": <strong>" + byType[t] + "</strong></span>"; }).join("") +
      (sumPrice > 0 ? "<span>Soma valores pagos: <strong>" + UI.formatCurrency(sumPrice, State.getSettings().defaultCurrency) + "</strong></span>" : "") +
      "</div>";
  }

  // ---------------- Busca/filtros das cartas dentro da lista ----------------
  function updateFilterButtonBadge(container) {
    var btn = container.querySelector("#list-toggle-filters");
    if (!btn) return;
    var n = UI.activeFilterCount(filters);
    btn.innerHTML = Icon("filter", { cls: "icon-sm" }) + " Filtros" + (n ? '<span class="filter-count-badge">' + n + "</span>" : "");
  }

  function renderFiltersPanel(container, list) {
    var slot = container.querySelector("#list-filters-slot");
    if (!slot) return;
    if (!showFilters) { slot.innerHTML = ""; return; }
    function onChange() { renderItems(container, list); updateFilterButtonBadge(container); }
    slot.innerHTML = UI.renderFilterPanel(filters, onChange, { showCondition: true, collectionSort: true });
    UI.wireFilterPanel(slot, filters, onChange, function () { renderFiltersPanel(container, list); });
  }

  function clearFiltersAndSearch(container, list) {
    filters.query = "";
    UI.clearFilterState(filters);
    var searchInput = container.querySelector("#list-search");
    if (searchInput) searchInput.value = "";
    renderFiltersPanel(container, list);
    renderItems(container, list);
    updateFilterButtonBadge(container);
  }

  // ---------------- Cartas da lista (grade/lista + acoes por item) ----------------
  // Nao reaproveita UI.renderCardGrid porque cada item aqui precisa de acoes
  // proprias (Tenho!/Editar/Remover) que o grid generico do Catalogo/Colecao
  // nao tem espaco pra mostrar - a marcacao reusa as MESMAS classes CSS
  // (.card-grid/.card-tile/.card-list/.card-row) pra manter a aparencia
  // identica, so acrescentando uma barra de acoes.
  function itemActionsHtml(item, listId) {
    var qtyCtx = UI.escapeHtml(JSON.stringify({ type: "list", listId: listId, cardId: item.cardId }));
    return '<div class="list-item-actions">' +
      '<span class="qty-stepper qty-stepper-sm"><button data-qty-minus=\'' + qtyCtx + '\'>−</button><span class="qty-val">' + item.quantity + '</span><button data-qty-plus=\'' + qtyCtx + '\'>+</button></span>' +
      '<button class="btn btn-sm btn-success" data-have="' + item.cardId + '" title="Já tenho, mover para a coleção">' + Icon("check", { cls: "icon-sm" }) + " Tenho!</button>" +
      '<button class="btn btn-sm" data-edit-item="' + item.cardId + '" title="Editar quantidade/notas">' + Icon("edit", { cls: "icon-sm" }) + "</button>" +
      '<button class="btn btn-sm btn-danger" data-remove-item="' + item.cardId + '" title="Remover">' + Icon("trash", { cls: "icon-sm" }) + "</button>" +
      "</div>";
  }

  function gridTileHtml(item, card, listId) {
    var ctx = UI.escapeHtml(JSON.stringify({ source: "list", listId: listId }));
    // Site fica na orientacao original do arquivo (sem rotacionar/reformatar
    // o frame) - tile identico ao de qualquer outra carta, igual ao grid
    // generico (ver renderCardGrid em render-common.js).
    var notesHtml = item.notes ? '<p style="font-size:11px;color:var(--text-secondary);font-style:italic;margin:0;">"' + UI.escapeHtml(item.notes) + '"</p>' : "";
    return '<div class="card-tile" data-open-card="' + card.id + '" data-open-ctx=\'' + ctx + '\'>' +
      '<div class="thumb-wrap">' +
      '<img data-card-id="' + card.id + '" data-foil="' + !!item.isFoil + '">' +
      (item.isFoil ? '<span class="badge badge-foil badge-left">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span>' : '') +
      '</div>' +
      UI.cardTileBodyHtml(card, card.set + " · " + (item.condition || "NM"), notesHtml + itemActionsHtml(item, listId)) +
      "</div>";
  }

  function listRowHtml(item, card, listId) {
    var ctx = UI.escapeHtml(JSON.stringify({ source: "list", listId: listId }));
    return '<div class="card-row" data-open-card="' + card.id + '" data-open-ctx=\'' + ctx + '\'>' +
      '<div class="row-thumb-wrap"><img class="row-thumb" data-card-id="' + card.id + '" data-foil="' + !!item.isFoil + '"></div>' +
      '<div class="row-main"><div class="row-name">' + UI.escapeHtml(card.name) + (item.isFoil ? ' ' + Icon("sparkle", { cls: "icon-sm" }) : '') + "</div>" +
      '<div class="row-meta">' + card.set + " · " + card.type + (item.condition ? " · " + item.condition : "") + (item.notes ? ' · "' + UI.escapeHtml(item.notes) + '"' : "") + "</div></div>" +
      itemActionsHtml(item, listId) +
      "</div>";
  }

  function renderItems(container, list) {
    var slot = container.querySelector("#list-items-slot");
    if (!slot) return;

    if (!list.items.length) {
      slot.innerHTML = '<div class="empty-state"><div class="big-icon">' + Icon("star") + "</div>Nenhum item nesta lista.</div>";
      return;
    }

    var settings = State.getSettings();
    var viewMode = settings.listsViewMode || "grid";
    var f = Object.assign({}, filters, { costMax: filters.costMax >= 10 ? null : filters.costMax });

    var entries = list.items.map(function (i) {
      var c = State.getCatalogCard(i.cardId);
      return c ? { item: i, card: c } : null;
    }).filter(Boolean).filter(function (e) { return UI.applyCommonFilters(e.card, f); });

    // Foil/Curio/Condicao: cada item de lista agora tem sua propria
    // classificacao (ver openListItemForm), igual a uma entrada da Colecao -
    // filtra direto pelos campos do item, sem depender de o usuario ja ter
    // essa carta na colecao.
    if (filters.foilOnly) entries = entries.filter(function (e) { return !!e.item.isFoil; });
    if (filters.curioOnly) entries = entries.filter(function (e) { return !!e.item.isCurio; });
    if (filters.conditions && filters.conditions.length) {
      entries = entries.filter(function (e) { return filters.conditions.indexOf(e.item.condition) !== -1; });
    }

    if (!entries.length) {
      slot.innerHTML = '<div class="empty-state"><div class="big-icon">' + Icon("search") + "</div>" +
        "Nenhuma carta encontrada com os filtros/busca atuais.<br>" +
        '<button class="btn" id="list-empty-clear" style="margin-top:12px;">' + Icon("close", { cls: "icon-sm" }) + " Limpar filtros e busca</button></div>";
      var clearBtn = slot.querySelector("#list-empty-clear");
      if (clearBtn) clearBtn.onclick = function () { clearFiltersAndSearch(container, list); };
      return;
    }

    // "Data de adicao"/"Preco pago" (collectionSort) usam os campos do
    // proprio item da lista agora - mesmo padrao da Colecao, so que a fonte
    // e a classificacao feita direto na lista (ver openListItemForm).
    var itemByCardId = {};
    entries.forEach(function (e) { itemByCardId[e.card.id] = e.item; });
    var sortedCards = UI.sortCards(entries.map(function (e) { return e.card; }), filters.sortBy, function (c) {
      var it = itemByCardId[c.id];
      return { addedAt: it ? it.addedAt : null, pricePaid: it ? (it.pricePaid || 0) : 0 };
    });
    var byId = {};
    entries.forEach(function (e) { byId[e.card.id] = e; });
    var sortedEntries = sortedCards.map(function (c) { return byId[c.id]; });

    if (viewMode === "list") {
      slot.innerHTML = '<div class="card-list">' + sortedEntries.map(function (e) { return listRowHtml(e.item, e.card, list.id); }).join("") + "</div>";
    } else {
      slot.innerHTML = '<div class="card-grid">' + sortedEntries.map(function (e) { return gridTileHtml(e.item, e.card, list.id); }).join("") + "</div>";
    }
    UI.hydrateImages(slot);
    wireItemActions(slot, container, list);
    UI.wireQtyControls(slot, function () { renderItems(container, list); renderIndicators(container, list); });
  }

  function wireItemActions(slot, container, list) {
    slot.querySelectorAll("[data-have]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var cardId = b.getAttribute("data-have");
        Modal.close();
        UI.openCollectionEntryForm(cardId, null, { source: "list" });
        State.removeListItem(list.id, cardId);
        setTimeout(function () { renderItems(container, list); renderIndicators(container, list); }, 50);
      };
    });
    slot.querySelectorAll("[data-remove-item]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        State.removeListItem(list.id, b.getAttribute("data-remove-item"));
        renderItems(container, list);
        renderIndicators(container, list);
      };
    });
    slot.querySelectorAll("[data-edit-item]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var cardId = b.getAttribute("data-edit-item");
        var item = list.items.find(function (i) { return i.cardId === cardId; });
        openListItemForm(list, cardId, item, container);
      };
    });
  }

  function openAddToListPicker(list, container) {
    var catalog = State.getCatalog();
    var html = '<h3>Adicionar carta à "' + UI.escapeHtml(list.name) + '"</h3>' +
      '<input type="text" class="search-bar" id="list-pick-search" style="width:100%;margin-bottom:10px;" placeholder="Buscar carta...">' +
      '<div id="list-pick-results"></div>';
    var root = Modal.open(html);
    root.querySelector("#list-pick-search").oninput = function (e) {
      var q = e.target.value.toLowerCase();
      var results = q.length < 2 ? [] : catalog.filter(function (c) { return c.name.toLowerCase().indexOf(q) !== -1; }).slice(0, 15);
      var resSlot = root.querySelector("#list-pick-results");
      resSlot.innerHTML = results.map(function (c) { return UI.matchChoiceHtml(c, 'data-pick="' + c.id + '"', c.set + " · " + c.type); }).join("");
      UI.hydrateImages(resSlot);
      root.querySelectorAll("[data-pick]").forEach(function (el) {
        el.onclick = function () {
          var cardId = el.getAttribute("data-pick");
          Modal.close();
          openListItemForm(list, cardId, null, container);
        };
      });
    };
  }

  // ---------------- Formulario de classificacao do item (mesmos campos do
  // "Adicionar a Colecao") ----------------
  // item === null -> adicionando uma carta nova a lista; item preenchido ->
  // editando um item ja existente. Grava condicao/preco/moeda/foil/promo/
  // curio/notas direto no item da lista (ver State.addListItem/
  // updateListItem), igual a uma copia na Colecao.
  function openListItemForm(list, cardId, item, container) {
    var card = State.getCatalogCard(cardId);
    var settings = State.getSettings();
    var isNew = !item;

    var html = '<h3>' + (isNew ? "Adicionar à Lista" : "Editar Item") + " — " + UI.escapeHtml(card.name) + "</h3>";
    html += '<div class="form-row"><label>Quantidade</label><span class="qty-stepper">' +
      '<button type="button" id="li-form-qty-minus">−</button><span class="qty-val" id="li-form-qty-val">' + (item ? item.quantity : 1) + '</span><button type="button" id="li-form-qty-plus">+</button></span></div>';
    html += '<div class="form-inline">';
    html += '<div class="form-row"><label>Condição</label><select id="li-form-condition">' + UI.CONDITION_LIST.map(function (c) {
      return '<option value="' + c + '" ' + ((item ? item.condition : "NM") === c ? "selected" : "") + '>' + c + "</option>";
    }).join("") + "</select></div>";
    html += '<div class="form-row"><label>Preço pago</label><input type="number" step="0.01" id="li-form-price" value="' + (item && item.pricePaid != null ? item.pricePaid : "") + '"></div>';
    html += '<div class="form-row"><label>Moeda</label><select id="li-form-currency">' + ["BRL", "USD", "EUR"].map(function (c) {
      return '<option ' + ((item ? item.currency : settings.defaultCurrency) === c ? "selected" : "") + '>' + c + "</option>";
    }).join("") + "</select></div>";
    html += "</div>";
    html += '<div class="form-row"><label>Flags</label><div class="toggle-row">' +
      '<span class="toggle-chip ' + (item && item.isFoil ? "active" : "") + '" id="li-form-foil">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span>' +
      '<span class="toggle-chip ' + (item && item.isPromo ? "active" : "") + '" id="li-form-promo">' + Icon("ribbon", { cls: "icon-sm" }) + ' Promo</span>' +
      '<span class="toggle-chip ' + (item && item.isCurio ? "active" : "") + '" id="li-form-curio">' + Icon("gem", { cls: "icon-sm" }) + ' Curio</span>' +
      "</div></div>";
    html += '<div class="form-row"><label>Notas</label><textarea id="li-form-notes">' + UI.escapeHtml(item ? item.notes || "" : "") + "</textarea></div>";
    html += '<button class="btn btn-primary btn-block" id="li-form-save">' + Icon("save", { cls: "icon-sm" }) + " Salvar</button>";

    var root = Modal.open(html);
    var qty = item ? item.quantity : 1;
    root.querySelector("#li-form-qty-plus").onclick = function () { qty++; root.querySelector("#li-form-qty-val").textContent = qty; };
    root.querySelector("#li-form-qty-minus").onclick = function () { qty = Math.max(1, qty - 1); root.querySelector("#li-form-qty-val").textContent = qty; };
    ["li-form-foil", "li-form-promo", "li-form-curio"].forEach(function (id) {
      root.querySelector("#" + id).onclick = function () { root.querySelector("#" + id).classList.toggle("active"); };
    });
    root.querySelector("#li-form-save").onclick = function () {
      var fields = {
        cardId: cardId,
        quantity: qty,
        condition: root.querySelector("#li-form-condition").value,
        pricePaid: root.querySelector("#li-form-price").value ? parseFloat(root.querySelector("#li-form-price").value) : undefined,
        currency: root.querySelector("#li-form-currency").value,
        isFoil: root.querySelector("#li-form-foil").classList.contains("active"),
        isPromo: root.querySelector("#li-form-promo").classList.contains("active"),
        isCurio: root.querySelector("#li-form-curio").classList.contains("active"),
        notes: root.querySelector("#li-form-notes").value
      };
      if (isNew) {
        State.addListItem(list.id, fields);
        Toast.show('Adicionado à lista "' + list.name + '".');
      } else {
        State.updateListItem(list.id, cardId, fields);
        Toast.show("Item atualizado.");
      }
      Modal.close();
      renderItems(container, list);
      renderIndicators(container, list);
    };
  }

  // ---------------- Importar (texto livre "quantidade + nome" ou CSV) ----------------
  function openImportListModal(list, container) {
    var html = '<h3>Importar para "' + UI.escapeHtml(list.name) + '"</h3>' +
      '<p style="color:var(--text-secondary);font-size:14px;">Cole abaixo uma lista (quantidade + nome, uma carta por linha).</p>' +
      '<textarea id="list-import-text" placeholder="1 Fire Drake\n2 Lightning Bolt"></textarea>' +
      '<div style="margin-top:10px;"><button class="btn btn-primary" id="list-import-parse">Analisar</button></div>' +
      '<hr class="section-divider">' +
      '<p style="color:var(--text-secondary);font-size:14px;">Ou importe um arquivo .csv (mesmo formato usado na exportação de coleção — colunas Edição, Card (EN), Quantidade...).</p>' +
      '<input type="file" accept=".csv" id="list-import-csv-file">' +
      '<div id="list-import-preview"></div>';
    var root = Modal.open(html);
    root.querySelector("#list-import-parse").onclick = function () {
      var text = root.querySelector("#list-import-text").value;
      var result = ImportExport.resolveTextEntries(text, State.getCatalog());
      renderListImportPreview(root.querySelector("#list-import-preview"), result, list, container);
    };
    root.querySelector("#list-import-csv-file").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        var result = ImportExport.importListCsv(reader.result, State.getCatalog());
        renderListImportPreview(root.querySelector("#list-import-preview"), result, list, container);
      };
      reader.readAsText(file, "UTF-8");
    };
  }

  function renderListImportPreview(previewSlot, result, list, container) {
    var html = '<div class="panel" style="margin-top:12px;"><h3>Prévia</h3>';
    html += "<p>" + result.resolved.length + " carta(s) reconhecida(s), " + result.unresolved.length + " não identificada(s).</p>";
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
    html += '<button class="btn btn-primary" id="list-import-confirm" style="margin-top:10px;">' + Icon("save", { cls: "icon-sm" }) + " Confirmar importação (" + result.resolved.length + ")</button></div>";
    previewSlot.innerHTML = html;

    previewSlot.querySelectorAll("[data-unresolved-pick]").forEach(function (sel) {
      sel.onchange = function () {
        var idx = parseInt(sel.getAttribute("data-unresolved-pick"), 10);
        var u = result.unresolved[idx];
        var cardId = sel.value;
        if (!cardId) return;
        result.resolved.push(Object.assign({}, u, { card: State.getCatalogCard(cardId) }));
        result.unresolved.splice(idx, 1);
        renderListImportPreview(previewSlot, result, list, container);
      };
    });

    previewSlot.querySelector("#list-import-confirm").onclick = function () {
      result.resolved.forEach(function (r) {
        State.addListItem(list.id, { cardId: r.card.id, quantity: r.quantity, notes: r.notes || "" });
      });
      Toast.show(result.resolved.length + " carta(s) importada(s).");
      Modal.close();
      renderItems(container, list);
      renderIndicators(container, list);
    };
  }

  function exportListTxt(list) {
    var lines = list.items.map(function (i) {
      var c = State.getCatalogCard(i.cardId);
      return i.quantity + " " + (c ? c.name : i.cardId);
    });
    var blob = new Blob([lines.join("\n")], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = list.name.replace(/[^a-z0-9]+/gi, "_") + ".txt";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
  }

  window.RenderLists = { render: render };
})();
