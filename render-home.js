/* render-home.js - Dashboard/Home
 * Reune atalhos pros decks/listas favoritos (marcados nas telas de Decks e
 * Listas) com dados uteis de contexto (avatar, elementos, preco, completude)
 * e um indicador mais completo da Colecao (total, valor, completude por
 * edicao, raridade, elemento) - tudo reaproveitando os mesmos helpers ja
 * usados pelos Indicadores de Coleção/Deck/Lista (UI.computeCollectionStats/
 * computeItemListStats, DeckUtils.computeCompletion), pra nao duplicar logica
 * de calculo em outro lugar.
 */
(function () {
  "use strict";

  function priceLinesHtml(pricesByCurrency) {
    var keys = Object.keys(pricesByCurrency);
    if (!keys.length) return null;
    return keys.map(function (cur) { return UI.formatCurrency(pricesByCurrency[cur], cur); }).join(" + ");
  }

  // Itens combinados de um deck (avatar+atlas+spellbook+collection), no
  // mesmo formato [{cardId,quantity}] aceito por UI.computeItemListStats -
  // assim reaproveitamos byElement/byRarity/pricesByCurrency ja calculados
  // ali (mesma logica usada no botao "Indicadores" de um deck) em vez de
  // reimplementar a soma aqui.
  function deckItems(deck) {
    var items = [];
    if (deck.avatar) items.push({ cardId: deck.avatar.cardId, quantity: deck.avatar.quantity });
    (deck.atlas || []).forEach(function (e) { items.push({ cardId: e.cardId, quantity: e.quantity }); });
    (deck.spellbook || []).forEach(function (e) { items.push({ cardId: e.cardId, quantity: e.quantity }); });
    (deck.collection || []).forEach(function (e) { items.push({ cardId: e.cardId, quantity: e.quantity }); });
    return items;
  }

  function deckShortcutCardHtml(deck, catalog) {
    var avatarCard = deck.avatar ? State.getCatalogCard(deck.avatar.cardId) : null;
    var stats = UI.computeItemListStats(deckItems(deck), catalog);
    var completion = DeckUtils.computeCompletion(deck, catalog, UI.collectionQtyAllVersions);
    var priceText = priceLinesHtml(stats.pricesByCurrency);
    var elBadges = UI.ELEMENT_LIST.filter(function (el) { return stats.byElement[el]; })
      .map(function (el) { return '<span class="el-badge el-' + el + '">' + el + " " + stats.byElement[el] + "</span>"; })
      .join("");

    return '<div class="deck-shortcut-card" data-goto-deck="' + deck.id + '">' +
      '<div class="dsc-avatar-wrap"><img data-card-id="' + (avatarCard ? avatarCard.id : "") + '"></div>' +
      '<div class="dsc-body">' +
      '<div class="dsc-name">' + UI.escapeHtml(deck.name) + "</div>" +
      (elBadges ? '<div class="dsc-elements">' + elBadges + "</div>" : "") +
      '<div class="dsc-meta-row">' +
      '<span class="dsc-price">' + (priceText || "Sem preço registrado") + "</span>" +
      "</div>" +
      '<div class="dsc-meta-row dsc-completion">' +
      '<div class="progress-bar-track sm"><div class="progress-bar-fill" style="width:' + completion.percent + '%"></div></div>' +
      "<span>" + completion.percent + "%</span>" +
      "</div>" +
      "</div></div>";
  }

  function listShortcutCardHtml(list, catalog) {
    var stats = UI.computeItemListStats(list.items, catalog);
    var priceText = priceLinesHtml(stats.pricesByCurrency);
    return '<div class="list-shortcut-card" data-goto-list="' + list.id + '">' +
      "<div>" +
      '<div class="lsc-name">' + UI.escapeHtml(list.name) + "</div>" +
      '<div class="lsc-sub">' + list.items.length + (list.items.length === 1 ? " item" : " itens") + (priceText ? " · " + priceText : "") + "</div>" +
      "</div>" +
      '<div class="lsc-value">' + list.items.length + "</div>" +
      "</div>";
  }

  function render(container) {
    var collection = State.getCollection();
    var catalog = State.getCatalog();
    var decks = State.getDecks();
    var lists = State.getLists();
    var favoriteDecks = State.getFavoriteDecks();
    var favoriteLists = State.getFavoriteLists();

    var collStats = UI.computeCollectionStats(collection, catalog);
    var totalValueText = priceLinesHtml(collStats.pricesByCurrency);

    // Completude por edicao: cartas UNICAS que o usuario tem (dedup por
    // cardId) contra o total de cartas unicas daquela edicao no catalogo -
    // "quanto tenho vs quantas cartas existem" pedido pelo usuario.
    var catalogBySetTotal = {};
    UI.SET_LIST.forEach(function (s) { catalogBySetTotal[s] = 0; });
    catalog.forEach(function (c) { if (catalogBySetTotal[c.set] != null) catalogBySetTotal[c.set]++; });
    var ownedIdsBySet = {};
    UI.SET_LIST.forEach(function (s) { ownedIdsBySet[s] = {}; });
    collection.forEach(function (e) {
      var c = State.getCatalogCard(e.cardId);
      if (c && ownedIdsBySet[c.set]) ownedIdsBySet[c.set][e.cardId] = true;
    });

    var html = "<h2>Início</h2>";

    html += '<div class="stat-grid">' +
      '<div class="stat-box"><div class="stat-num">' + collStats.totalQty + '</div><div class="stat-label">Cartas totais</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + collStats.uniqueCount + '</div><div class="stat-label">Cartas únicas</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + decks.length + '</div><div class="stat-label">Decks</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + lists.length + '</div><div class="stat-label">Listas</div></div>' +
      '<div class="stat-box"><div class="stat-num" style="font-size:18px;">' + (totalValueText || "—") + '</div><div class="stat-label">Valor da coleção</div></div>' +
      "</div>";

    // ---------------- Decks Favoritos ----------------
    html += '<div class="panel"><h3>' + Icon("star", { cls: "icon-sm" }) + " Decks Favoritos</h3>";
    if (!favoriteDecks.length) {
      html += '<p style="color:var(--text-secondary);font-size:13px;">Nenhum deck favoritado ainda. Abra um deck e clique na estrela ao lado do nome pra fixá-lo aqui.</p>';
    } else {
      html += '<div class="shortcut-grid">' + favoriteDecks.map(function (d) { return deckShortcutCardHtml(d, catalog); }).join("") + "</div>";
    }
    html += "</div>";

    // ---------------- Listas Favoritas ----------------
    html += '<div class="panel"><h3>' + Icon("star", { cls: "icon-sm" }) + " Listas Favoritas</h3>";
    if (!favoriteLists.length) {
      html += '<p style="color:var(--text-secondary);font-size:13px;">Nenhuma lista favoritada ainda. Abra uma lista e clique na estrela ao lado do nome pra fixá-la aqui.</p>';
    } else {
      html += '<div class="shortcut-grid">' + favoriteLists.map(function (l) { return listShortcutCardHtml(l, catalog); }).join("") + "</div>";
    }
    html += "</div>";

    // ---------------- Indicador de Coleção ----------------
    html += '<div class="panel"><h3>' + Icon("collection", { cls: "icon-sm" }) + " Indicador de Coleção</h3>";
    html += '<div class="section-title" style="margin-top:6px;">Completude por Edição</div>';
    html += UI.SET_LIST.map(function (s) {
      var total = catalogBySetTotal[s];
      var owned = Object.keys(ownedIdsBySet[s]).length;
      var pct = total ? Math.round((owned / total) * 100) : 0;
      return '<div class="set-progress-row">' +
        '<span class="set-progress-label">' + s + "</span>" +
        '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="set-progress-frac">' + owned + "/" + total + " (" + pct + "%)</span>" +
        "</div>";
    }).join("");

    html += '<div class="section-title" style="margin-top:14px;">Por Raridade</div><div class="rarity-element-grid">' +
      UI.RARITY_LIST.filter(function (r) { return collStats.byRarity[r]; }).map(function (r) {
        return '<div class="rarity-element-row">' + UI.rarityBadgeHtml(r) + " <strong>" + collStats.byRarity[r] + "</strong></div>";
      }).join("") + "</div>";

    html += '<div class="section-title" style="margin-top:14px;">Por Elemento</div><div class="rarity-element-grid">' +
      UI.ELEMENT_LIST.filter(function (el) { return collStats.byElement[el]; }).map(function (el) {
        return '<div class="rarity-element-row"><span class="el-badge el-' + el + '">' + el + '</span> <strong>' + collStats.byElement[el] + "</strong></div>";
      }).join("") + "</div>";
    html += "</div>";

    // ---------------- Decks Recentes ----------------
    var recentDecks = decks.slice().sort(function (a, b) { return new Date(b.updatedAt) - new Date(a.updatedAt); }).slice(0, 3);
    html += '<div class="panel"><h3>Decks Recentes</h3>';
    if (!recentDecks.length) {
      html += '<p style="color:var(--text-secondary)">Nenhum deck cadastrado ainda.</p>';
    } else {
      recentDecks.forEach(function (d) {
        html += '<div class="deck-link-row"><span>' + UI.escapeHtml(d.name) + '</span><button class="link-plain" data-goto-deck="' + d.id + '">abrir</button></div>';
      });
    }
    html += "</div>";

    html += '<div class="panel"><h3>Atalhos</h3><div class="toolbar">' +
      '<button class="btn btn-primary" id="home-scanner">' + Icon("scanner", { cls: "icon-sm" }) + ' Scanner</button>' +
      '<button class="btn" id="home-add">' + Icon("edit", { cls: "icon-sm" }) + ' Adicionar Carta</button>' +
      "</div></div>";

    container.innerHTML = html;
    UI.hydrateImages(container);
    container.querySelectorAll("[data-goto-deck]").forEach(function (b) {
      b.onclick = function () { location.hash = "#/decks/" + b.getAttribute("data-goto-deck"); };
    });
    container.querySelectorAll("[data-goto-list]").forEach(function (b) {
      b.onclick = function () { location.hash = "#/lists/" + b.getAttribute("data-goto-list"); };
    });
    var scannerBtn = container.querySelector("#home-scanner");
    if (scannerBtn) scannerBtn.onclick = function () { location.hash = "#/scanner"; };
    var addBtn = container.querySelector("#home-add");
    if (addBtn) addBtn.onclick = function () { location.hash = "#/catalog"; };
  }

  window.RenderHome = { render: render };
})();
