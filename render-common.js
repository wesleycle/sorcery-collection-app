/* render-common.js
 * Utilitarios compartilhados de UI: escape/format, badges, grid/list de cartas,
 * modal generico, toast, modal de detalhe de carta, seletor de deck.
 * Usados por render-home.js, render-collection.js, render-catalog.js,
 * render-decks.js, render-lists.js, render-scanner.js, render-settings.js.
 */
(function () {
  "use strict";

  var TYPE_LIST = ["Avatar", "Site", "Minion", "Artifact", "Aura", "Magic"];
  var SET_LIST = ["Alpha", "Beta", "Arthurian Legends", "Dragonlord", "Gothic", "Promo"];
  var ELEMENT_LIST = ["Fire", "Air", "Earth", "Water"];
  var RARITY_LIST = ["Ordinary", "Exceptional", "Elite", "Unique"];
  var CONDITION_LIST = ["NM", "LP", "MP", "HP", "DMG"];

  // Sites sao impressos na horizontal (arte + texto correm de lado). O campo
  // isLandscape do catalogo deveria ser true pra todo Site, mas catalogos
  // salvos antes de uma correcao de dados podem ter ficado com esse campo
  // desatualizado - por seguranca, tambem consideramos o tipo da carta.
  function isLandscapeCard(card) {
    return !!(card && (card.type === "Site" || card.isLandscape));
  }

  // Nome normalizado (sem acento/caixa/pontuacao) - usado pra agrupar
  // impressoes diferentes da mesma carta (ex: Abundance em Alpha e Beta).
  function normalizeCardName(name) {
    return String(name || "").trim().toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, " ").trim();
  }

  // Todas as outras impressoes (sets) da mesma carta, exceto a informada.
  function findOtherVersions(card) {
    if (!card) return [];
    var key = normalizeCardName(card.name);
    return State.getCatalog().filter(function (c) {
      return c.id !== card.id && normalizeCardName(c.name) === key;
    });
  }

  // Todas as impressoes de uma carta (incluindo ela mesma), ordenadas por set.
  function findAllVersions(card) {
    if (!card) return [];
    var key = normalizeCardName(card.name);
    return State.getCatalog().filter(function (c) { return normalizeCardName(c.name) === key; })
      .sort(function (a, b) { return SET_LIST.indexOf(a.set) - SET_LIST.indexOf(b.set); });
  }

  // Quantas copias o usuario tem na colecao de uma carta, somando TODAS as
  // impressoes/edicoes dela (ex: se so tem a versao Alpha mas o card pedido e
  // a Beta, ainda conta) - pra jogar/montar deck a edicao especifica nao
  // importa. Usado pela completude de decks (Montar/Decks Favoritos na Home)
  // e reaproveitado em varios lugares pra evitar duplicar essa soma.
  function collectionQtyAllVersions(cardId) {
    var card = State.getCatalogCard(cardId);
    if (!card) return State.getCollectionQtyForCard(cardId);
    return findAllVersions(card).reduce(function (sum, v) { return sum + State.getCollectionQtyForCard(v.id); }, 0);
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatCurrency(value, currency) {
    if (value == null || value === "") return "";
    var symbols = { BRL: "R$", USD: "US$", EUR: "€" };
    var n = Number(value);
    return (symbols[currency] || currency || "") + " " + n.toFixed(2).replace(".", ",");
  }

  function elementsBadgesHtml(elements) {
    if (!elements || !elements.length) return "";
    return elements.map(function (e) {
      return '<span class="el-badge el-' + e + '">' + e + "</span>";
    }).join(" ");
  }

  function rarityBadgeHtml(rarity) {
    if (!rarity) return "";
    return '<span class="rarity-badge rarity-' + rarity + '">' + rarity + "</span>";
  }

  function keywordBadgesHtml(keywords) {
    if (!keywords || !keywords.length) return "";
    return '<div class="keyword-badges">' + keywords.map(function (k) {
      return '<span class="keyword-badge">' + escapeHtml(k) + "</span>";
    }).join("") + "</div>";
  }

  // Custo de mana + threshold elemental de uma carta, no mesmo espirito de
  // uma decklist importada: um "pip" (icone solido colorido) repetido por
  // unidade de threshold de cada elemento, seguido do custo num selo
  // circular. Cartas sem custo (Avatar, Site) simplesmente nao mostram o
  // selo; cartas sem threshold nao mostram pips. Usado no builder de deck
  // (lista/imagens) e pode ser reaproveitado em qualquer lugar que precise
  // mostrar o "preco" de uma carta de forma compacta.
  var ELEMENT_ICON_BY_NAME = { Fire: "el-fire", Water: "el-water", Earth: "el-earth", Air: "el-air" };
  function elementPipsInner(card) {
    if (!card) return "";
    var t = card.threshold || {};
    var pips = "";
    ELEMENT_LIST.forEach(function (el) {
      var n = t[el.toLowerCase()] || 0;
      for (var i = 0; i < n; i++) pips += Icon(ELEMENT_ICON_BY_NAME[el], { cls: "icon-el-" + el.toLowerCase() });
    });
    return pips;
  }
  // So os pips de threshold (sem o selo de custo) - usado em colunas de
  // tabela onde o custo ja tem sua propria coluna separada.
  function pipsOnlyHtml(card) {
    var pips = elementPipsInner(card);
    return pips ? '<span class="pip-row">' + pips + "</span>" : "";
  }
  // So o selo de custo (sem os pips de threshold) - usado em colunas de
  // tabela/lista onde o threshold ja tem sua propria coluna separada.
  function costBadgeHtml(card) {
    if (!card || card.cost == null) return "";
    return '<span class="cost-badge">' + card.cost + "</span>";
  }
  function thresholdCostHtml(card) {
    if (!card) return "";
    var pips = elementPipsInner(card);
    var costHtml = card.cost != null ? '<span class="cost-badge">' + card.cost + "</span>" : "";
    if (!pips && !costHtml) return "";
    // Custo primeiro, threshold depois - mesmo padrao usado na tabela da aba
    // Montar (coluna Custo antes da coluna Threshold).
    return '<span class="pip-row">' + costHtml + pips + "</span>";
  }

  // ---------------- CardTile: card de apresentacao usado em toda grade (Catalogo/Colecao/Decks/Listas) ----------------
  // Selo circular de custo (dourado) - Avatares sem custo mostram a vida;
  // Sites nao tem custo nem vida, entao nao mostram selo nenhum (nem
  // travessao) - so os demais tipos sem nenhum dos dois campos preenchidos
  // caem no travessao.
  function tileCostOrLifeBadgeHtml(card) {
    if (card.type === "Site") return "";
    if (card.cost != null) return '<span class="tile-cost-badge" title="Custo">' + card.cost + "</span>";
    if (card.life != null) return '<span class="tile-cost-badge" title="Vida">' + card.life + "</span>";
    return '<span class="tile-cost-badge" style="opacity:.5;" title="Sem custo/vida">—</span>';
  }
  function typeBadgeHtml(type) {
    return type ? '<span class="type-badge">' + escapeHtml(type) + "</span>" : "";
  }
  // Corpo completo do CardTile (cabecalho com nome+custo, badges de
  // tipo/raridade/elemento, texto de regra e rodape com edicao+artista).
  // footerText (opcional): substitui o set da carta no rodape (ex: Catalogo
  // mostra a lista de edicoes em que a carta existe). extraHtml (opcional):
  // conteudo extra ao final (ex: controle de quantidade +/- ou barra de acoes
  // da tela de Listas).
  function cardTileBodyHtml(card, footerText, extraHtml) {
    var rulesHtml = card.effectText ? '<p class="tile-rules">' + escapeHtml(card.effectText) + "</p>" : "";
    var artistHtml = card.artist ? "<span>" + escapeHtml(card.artist) + "</span>" : "";
    return '<div class="thumb-info">' +
      '<div class="tile-head"><span class="tile-name">' + escapeHtml(card.name) + "</span>" + tileCostOrLifeBadgeHtml(card) + "</div>" +
      '<div class="tile-badges">' + typeBadgeHtml(card.type) + rarityBadgeHtml(card.rarity) + elementsBadgesHtml(card.elements) + "</div>" +
      rulesHtml +
      '<div class="tile-footer"><span>' + escapeHtml(footerText != null ? footerText : (card.set || "")) + "</span>" + artistHtml + "</div>" +
      (extraHtml || "") +
      "</div>";
  }

  // Linha de resultado de busca com miniatura da carta - usada em todos os
  // dropdowns de "buscar carta" do app (deck builder, listas, coleção,
  // scanner). dataAttr: string tipo 'data-add="ID"' ou 'data-pick="ID"'.
  // Lembre de chamar hydrateImages(resultsSlot) depois de inserir o HTML.
  // extraHtml (opcional): conteudo extra dentro da linha, depois do meta - usado
  // pelo builder de deck pra incluir um botao de "Adicionar a Collection" sem
  // mexer nos outros usos desse componente (coleção, listas, scanner).
  function matchChoiceHtml(card, dataAttr, metaText, extraHtml) {
    return '<div class="match-choice" ' + dataAttr + '>' +
      '<img class="match-choice-thumb" data-card-id="' + card.id + '">' +
      '<span class="match-choice-name">' + escapeHtml(card.name) + "</span>" +
      (metaText ? '<span class="match-choice-meta">' + metaText + "</span>" : "") +
      (extraHtml || "") +
      "</div>";
  }

  // Substitui <img data-card-id data-foil data-img-width> por src resolvido
  // (chamar apos innerHTML). data-img-width (opcional): largura pedida ao
  // Drive - maior no popup de detalhe (ver openCardDetail), padrao (600) nas
  // grades/miniaturas quando omitido.
  function hydrateImages(root) {
    var imgs = root.querySelectorAll("img[data-card-id]");
    imgs.forEach(function (img) {
      var card = State.getCatalogCard(img.getAttribute("data-card-id"));
      var isFoil = img.getAttribute("data-foil") === "true";
      var width = parseInt(img.getAttribute("data-img-width"), 10) || undefined;
      ImageResolver.attach(img, card, isFoil, width);
    });
  }

  // ---------------- Preview de imagem no hover (usado no builder de deck) ----------------
  // Elemento unico e reaproveitado pra qualquer texto de carta na tela - basta
  // chamar attachHoverPreview(el, cardId) apos colocar o elemento no DOM.
  var hoverPreviewEl = null;
  function ensureHoverPreviewEl() {
    if (hoverPreviewEl) return hoverPreviewEl;
    hoverPreviewEl = document.createElement("div");
    hoverPreviewEl.className = "card-hover-preview hidden";
    hoverPreviewEl.innerHTML = "<img>";
    document.body.appendChild(hoverPreviewEl);
    return hoverPreviewEl;
  }
  function positionHoverPreview(e) {
    if (!hoverPreviewEl) return;
    var margin = 18;
    var x = e.clientX + margin, y = e.clientY + margin;
    var w = hoverPreviewEl.offsetWidth || 160, h = hoverPreviewEl.offsetHeight || 220;
    if (x + w > window.innerWidth) x = e.clientX - w - margin;
    if (y + h > window.innerHeight) y = window.innerHeight - h - margin;
    hoverPreviewEl.style.left = Math.max(4, x) + "px";
    hoverPreviewEl.style.top = Math.max(4, y) + "px";
  }
  function attachHoverPreview(el, cardId) {
    el.classList.add("card-name-hover");
    el.addEventListener("mouseenter", function (e) {
      var card = State.getCatalogCard(cardId);
      if (!card) return;
      var wrap = ensureHoverPreviewEl();
      ImageResolver.attach(wrap.querySelector("img"), card, false);
      wrap.classList.toggle("landscape", isLandscapeCard(card));
      wrap.classList.remove("hidden");
      positionHoverPreview(e);
    });
    el.addEventListener("mousemove", positionHoverPreview);
    el.addEventListener("mouseleave", function () {
      if (hoverPreviewEl) hoverPreviewEl.classList.add("hidden");
    });
  }

  // ---------------- Zoom da imagem de detalhe (lightbox) ----------------
  // Um unico elemento reaproveitado, igual ao hover-preview - abre por cima do
  // proprio popup de detalhe (z-index maior que .modal-overlay) mostrando a
  // imagem em tamanho grande. Fecha clicando em qualquer lugar do lightbox,
  // no X, ou apertando Escape (ver listener de keydown logo abaixo).
  var lightboxEl = null;
  function ensureLightboxEl() {
    if (lightboxEl) return lightboxEl;
    lightboxEl = document.createElement("div");
    lightboxEl.className = "image-lightbox hidden";
    lightboxEl.innerHTML = '<button class="image-lightbox-close" aria-label="Fechar">' + Icon("close", { cls: "icon-sm" }) + "</button><img>";
    document.body.appendChild(lightboxEl);
    lightboxEl.onclick = function () { closeImageLightbox(); };
    return lightboxEl;
  }
  function isLightboxOpen() { return !!(lightboxEl && !lightboxEl.classList.contains("hidden")); }
  function openImageLightbox(src, isLandscape) {
    if (!src) return;
    var el = ensureLightboxEl();
    var img = el.querySelector("img");
    img.src = src;
    img.classList.toggle("landscape", !!isLandscape);
    el.classList.remove("hidden");
  }
  function closeImageLightbox() {
    if (lightboxEl) lightboxEl.classList.add("hidden");
  }

  // ---------------- Toast ----------------
  var toastTimer = null;
  function toastShow(msg, ms) {
    var root = document.getElementById("toast-root");
    root.textContent = msg;
    root.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { root.classList.add("hidden"); }, ms || 2200);
  }

  // ---------------- Modal generico ----------------
  function modalOpen(innerHtml, opts) {
    opts = opts || {};
    var root = document.getElementById("modal-root");
    root.innerHTML =
      '<div class="modal-overlay" id="modal-overlay-el">' +
      '<div class="modal-box">' +
      '<button class="modal-close" id="modal-close-btn" aria-label="Fechar">' + Icon("close", { cls: "icon-sm" }) + "</button>" +
      innerHtml +
      "</div></div>";
    root.classList.remove("hidden");
    document.getElementById("modal-close-btn").onclick = modalClose;
    document.getElementById("modal-overlay-el").onclick = function (e) {
      if (e.target.id === "modal-overlay-el") modalClose();
    };
    return root;
  }
  function modalClose() {
    var root = document.getElementById("modal-root");
    root.classList.add("hidden");
    root.innerHTML = "";
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (isLightboxOpen()) { closeImageLightbox(); return; }
    modalClose();
  });

  // ---------------- Filtro: busca textual (nome + efeito) ----------------
  function matchesTextSearch(card, query) {
    if (!query) return true;
    var q = query.toLowerCase();
    return (card.name || "").toLowerCase().indexOf(q) !== -1 ||
      (card.effectText || "").toLowerCase().indexOf(q) !== -1 ||
      (card.flavorText || "").toLowerCase().indexOf(q) !== -1;
  }

  // ---------------- Filtro comum type/set/element/rarity/cost/keyword/artist ----------------
  function applyCommonFilters(card, f) {
    if (f.types && f.types.length && f.types.indexOf(card.type) === -1) return false;
    if (f.sets && f.sets.length && f.sets.indexOf(card.set) === -1) return false;
    if (f.elements && f.elements.length) {
      var hasEl = (card.elements || []).some(function (e) { return f.elements.indexOf(e) !== -1; });
      if (!hasEl) return false;
    }
    if (f.rarities && f.rarities.length && f.rarities.indexOf(card.rarity) === -1) return false;
    if (f.costMin != null && card.cost != null && card.cost < f.costMin) return false;
    if (f.costMax != null && card.cost != null && card.cost > f.costMax) return false;
    if (f.keyword) {
      var kw = f.keyword.toLowerCase();
      var hasKw = (card.keywords || []).some(function (k) { return k.toLowerCase().indexOf(kw) !== -1; });
      if (!hasKw) return false;
    }
    if (f.artist) {
      if (!(card.artist || "").toLowerCase().includes(f.artist.toLowerCase())) return false;
    }
    if (!matchesTextSearch(card, f.query)) return false;
    return true;
  }

  function sortCards(cards, sortBy, getExtra) {
    var arr = cards.slice();
    switch (sortBy) {
      case "cost-asc": arr.sort(function (a, b) { return (a.cost || 0) - (b.cost || 0); }); break;
      case "cost-desc": arr.sort(function (a, b) { return (b.cost || 0) - (a.cost || 0); }); break;
      case "rarity": arr.sort(function (a, b) { return RARITY_LIST.indexOf(a.rarity) - RARITY_LIST.indexOf(b.rarity); }); break;
      case "set": arr.sort(function (a, b) { return SET_LIST.indexOf(a.set) - SET_LIST.indexOf(b.set); }); break;
      case "name-desc": arr.sort(function (a, b) { return b.name.localeCompare(a.name); }); break;
      case "added-desc":
        if (getExtra) arr.sort(function (a, b) { return new Date(getExtra(b).addedAt || 0) - new Date(getExtra(a).addedAt || 0); });
        break;
      case "price-desc":
        if (getExtra) arr.sort(function (a, b) { return (getExtra(b).pricePaid || 0) - (getExtra(a).pricePaid || 0); });
        break;
      case "name-asc":
      default: arr.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    return arr;
  }

  // ---------------- Grid / lista de cartas ----------------
  // items: [{ card: CatalogCard, badges: {qtyText, foil, wishlist, have, condition}, openCtx, metaOverride, qty, qtyCtx }]
  // metaOverride: texto opcional pra substituir "Set · Tipo" (usado pelo Catalogo pra mostrar os sets da carta).
  // rotateLandscape: opcional - quando true, cartas landscape (Sites) sao
  // rotacionadas 90 graus dentro do proprio thumb (igual ao popup de detalhe),
  // sem cortar a arte - usado so na secao Atlas da aba Imagens do deck. Nos
  // demais grids (Catalogo/Colecao/Decks/Listas) o Site aparece na orientacao
  // ORIGINAL do arquivo (sem rotacionar, sem reformatar o frame do tile) -
  // exatamente como qualquer outra carta - pra manter o grid uniforme e nao
  // quebrar o layout; a rotacao pra orientacao "correta" de leitura fica so
  // pros popups/hover (ver isLandscapeCard nesses outros usos abaixo).
  // qty/qtyCtx: opcional - quando um item tem qtyCtx, mostramos um atalho
  // +/- de quantidade em vez do badge estatico "xN" (ver wireQtyControls).
  // qtyCtx e um objeto livre que so o chamador entende (ver applyQtyDelta),
  // igual ao padrao ja usado por openCtx.
  function renderCardGrid(items, viewMode, rotateLandscape) {
    if (!items.length) {
      return '<div class="empty-state"><div class="big-icon">' + Icon("collection") + "</div>Nenhuma carta encontrada.</div>";
    }
    if (viewMode === "list") {
      return '<div class="card-list">' + items.map(function (it) {
        var c = it.card;
        var qtyCtxStr = it.qtyCtx ? escapeHtml(JSON.stringify(it.qtyCtx)) : null;
        var qtyHtml = qtyCtxStr
          ? '<div class="row-qty-control"><span class="qty-stepper qty-stepper-sm"><button data-qty-minus=\'' + qtyCtxStr + '\'>−</button><span class="qty-val">' + (it.qty != null ? it.qty : "") + '</span><button data-qty-plus=\'' + qtyCtxStr + '\'>+</button></span></div>'
          : (it.badges && it.badges.qtyText ? '<div class="row-qty">' + it.badges.qtyText + '</div>' : '');
        return '<div class="card-row" data-open-card="' + c.id + '" data-open-ctx=\'' + escapeHtml(JSON.stringify(it.openCtx || {})) + '\'>' +
          '<div class="row-thumb-wrap"><img class="row-thumb" data-card-id="' + c.id + '" data-foil="' + !!(it.badges && it.badges.foil) + '"></div>' +
          '<div class="row-main">' +
          '<div class="row-name">' + escapeHtml(c.name) + (it.badges && it.badges.foil ? ' ' + Icon("sparkle", { cls: "icon-sm" }) : '') + '</div>' +
          '<div class="row-meta">' + (it.metaOverride != null ? it.metaOverride : c.set + ' · ' + c.type) + (it.badges && it.badges.condition ? ' · ' + it.badges.condition : '') + '</div>' +
          '</div>' +
          qtyHtml +
          '</div>';
      }).join("") + "</div>";
    }
    return '<div class="card-grid' + (rotateLandscape ? ' card-grid-rotate' : '') + '">' + items.map(function (it) {
      var c = it.card;
      var b = it.badges || {};
      var landscape = isLandscapeCard(c);
      // Rotaciona a arte 90 graus SO no modo rotateLandscape (Atlas da aba
      // Imagens do deck, pra caber ao lado de cartas retrato numa decklist
      // impressa). Fora desse modo, o Site fica na orientacao original do
      // arquivo, sem rotacionar e sem reformatar o frame - tile identico ao
      // de qualquer outra carta.
      var imgLandscapeCls = rotateLandscape && landscape ? " landscape" : "";
      var qtyCtxStr = it.qtyCtx ? escapeHtml(JSON.stringify(it.qtyCtx)) : null;
      var qtyControlHtml = qtyCtxStr ? '<div class="tile-qty-control"><span class="qty-stepper qty-stepper-sm"><button data-qty-minus=\'' + qtyCtxStr + '\'>−</button><span class="qty-val">' + (it.qty != null ? it.qty : "") + '</span><button data-qty-plus=\'' + qtyCtxStr + '\'>+</button></span></div>' : '';
      return '<div class="card-tile" data-open-card="' + c.id + '" data-open-ctx=\'' + escapeHtml(JSON.stringify(it.openCtx || {})) + '\'>' +
        '<div class="thumb-wrap">' +
        '<img data-card-id="' + c.id + '" data-foil="' + !!b.foil + '" class="' + imgLandscapeCls.trim() + '">' +
        (!qtyCtxStr && b.qtyText ? '<span class="badge badge-qty badge-right">' + b.qtyText + '</span>' : '') +
        (b.foil ? '<span class="badge badge-foil badge-left">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span>' : '') +
        (b.wishlist ? '<span class="badge badge-wishlist badge-left">' + Icon("star", { cls: "icon-sm" }) + ' Wishlist</span>' : '') +
        (b.haveText ? '<span class="badge badge-left" style="top:' + (b.foil ? '26px' : '4px') + '">' + b.haveText + '</span>' : '') +
        '</div>' +
        cardTileBodyHtml(c, it.metaOverride, qtyControlHtml) +
        '</div>';
    }).join("") + "</div>";
  }

  // ---------------- Atalho de quantidade (+/-) em grids/listas ----------------
  // Reaproveitado por Colecao, Decks (Imagens) e Listas - cada chamador so
  // precisa marcar o item com qtyCtx (ver renderCardGrid) e, depois de inserir
  // o HTML no DOM, chamar wireQtyControls(slot, onChange). onChange e chamado
  // so quando a mutacao realmente aconteceu (nao quando o usuario cancela uma
  // remocao via confirm()).
  function applyQtyDelta(ctx, delta) {
    if (!ctx || !ctx.type) return false;
    if (ctx.type === "collection") {
      var entry = State.getCollection().find(function (e) { return e.id === ctx.entryId; });
      if (!entry) return false;
      if (delta < 0 && entry.quantity <= 1) {
        if (!confirm("Remover completamente esta entrada da coleção?")) return false;
      }
      State.incrementCollectionEntry(ctx.entryId, delta);
      return true;
    }
    if (ctx.type === "deck") {
      var deck = State.getDeck(ctx.deckId);
      if (!deck) return false;
      var arr = deck[ctx.section] || [];
      var e = arr.find(function (x) { return x.cardId === ctx.cardId; });
      if (!e) return false;
      e.quantity += delta;
      if (e.quantity <= 0) deck[ctx.section] = arr.filter(function (x) { return x.cardId !== ctx.cardId; });
      State.updateDeck(deck.id, deck);
      return true;
    }
    if (ctx.type === "list") {
      var list = State.getList(ctx.listId);
      if (!list) return false;
      var item = list.items.find(function (i) { return i.cardId === ctx.cardId; });
      if (!item) return false;
      if (delta < 0 && item.quantity <= 1) {
        State.removeListItem(list.id, ctx.cardId);
      } else {
        State.updateListItem(list.id, ctx.cardId, { quantity: item.quantity + delta });
      }
      return true;
    }
    return false;
  }

  function wireQtyControls(root, onChange) {
    root.querySelectorAll("[data-qty-plus]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var ctx = JSON.parse(b.getAttribute("data-qty-plus"));
        if (applyQtyDelta(ctx, 1) && onChange) onChange();
      };
    });
    root.querySelectorAll("[data-qty-minus]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var ctx = JSON.parse(b.getAttribute("data-qty-minus"));
        if (applyQtyDelta(ctx, -1) && onChange) onChange();
      };
    });
  }

  // ---------------- Painel de filtros ----------------
  // Quantos "tipos" de filtro estao ativos agora (cada grupo/campo conta 1,
  // nao cada chip individual) - usado no contador do painel e no badge do
  // botao "Filtros" na barra de ferramentas.
  function activeFilterCount(state) {
    var n = 0;
    ["types", "sets", "elements", "rarities", "conditions"].forEach(function (k) {
      if (state[k] && state[k].length) n++;
    });
    if (state.costMax != null && state.costMax < 10) n++;
    if (state.keyword) n++;
    if (state.artist) n++;
    if (state.foilOnly) n++;
    if (state.curioOnly) n++;
    if (state.inCollectionOnly) n++;
    return n;
  }

  function filterCountLabel(count) {
    if (!count) return "Nenhum filtro ativo";
    return count + (count === 1 ? " filtro ativo" : " filtros ativos");
  }

  // Reseta todos os campos do painel de filtros (mantem a busca por texto e
  // a ordenacao, que nao sao considerados "filtros" pra esse efeito).
  function clearFilterState(state) {
    ["types", "sets", "elements", "rarities", "conditions"].forEach(function (k) {
      if (state[k]) state[k].length = 0;
    });
    state.costMax = 10;
    state.keyword = "";
    state.artist = "";
    state.foilOnly = false;
    state.curioOnly = false;
    state.inCollectionOnly = false;
  }

  // state: objeto mutavel de filtros; onChange: callback ao alterar
  function renderFilterPanel(state, onChange, opts) {
    opts = opts || {};
    var count = activeFilterCount(state);
    var html = '<div class="filters-panel">';

    html += '<div class="filters-panel-head">' +
      '<span class="filters-active-count" id="filters-active-count">' + filterCountLabel(count) + '</span>' +
      '<button class="btn btn-sm" id="filters-clear-btn"' + (count ? "" : " disabled") + '>' + Icon("close", { cls: "icon-sm" }) + ' Limpar filtros</button>' +
      '</div>';

    html += filterChipGroup("Tipo", "types", TYPE_LIST, state);
    html += filterChipGroup("Set", "sets", SET_LIST, state);
    html += filterChipGroup("Elemento", "elements", ELEMENT_LIST, state, "element");
    html += filterChipGroup("Raridade", "rarities", RARITY_LIST, state, "rarity");
    if (opts.showCondition) html += filterChipGroup("Condição", "conditions", CONDITION_LIST, state);

    html += '<div class="filter-group"><label class="group-label" id="cost-range-label">Custo de mana (' + (state.costMin || 0) + '–' + (state.costMax == null ? "10+" : state.costMax) + ')</label>' +
      '<input type="range" min="0" max="10" value="' + (state.costMax == null ? 10 : state.costMax) + '" data-filter="costMax">' +
      '</div>';

    html += '<div class="filter-group"><label class="group-label">Keyword</label><input type="text" data-filter="keyword" value="' + escapeHtml(state.keyword || "") + '" placeholder="ex: Charge"></div>';
    html += '<div class="filter-group"><label class="group-label">Artista</label><input type="text" data-filter="artist" value="' + escapeHtml(state.artist || "") + '" placeholder="nome do artista"></div>';

    var toggles = '<div class="filter-group"><label class="group-label">Opções</label><div class="chip-row">';
    toggles += '<span class="chip ' + (state.foilOnly ? "active" : "") + '" data-toggle="foilOnly">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span>';
    toggles += '<span class="chip ' + (state.curioOnly ? "active" : "") + '" data-toggle="curioOnly">' + Icon("gem", { cls: "icon-sm" }) + ' Curio</span>';
    if (opts.showCollectionToggle) toggles += '<span class="chip ' + (state.inCollectionOnly ? "active" : "") + '" data-toggle="inCollectionOnly">' + Icon("check", { cls: "icon-sm" }) + ' Na coleção</span>';
    toggles += '</div></div>';
    html += toggles;

    html += '<div class="filter-group"><label class="group-label">Ordenar por</label><select data-filter="sortBy">' +
      ["name-asc:Nome (A-Z)", "name-desc:Nome (Z-A)", "cost-asc:Custo ↑", "cost-desc:Custo ↓", "rarity:Raridade", "set:Set"]
        .concat(opts.collectionSort ? ["added-desc:Data de adição", "price-desc:Preço pago"] : [])
        .map(function (o) {
          var parts = o.split(":");
          return '<option value="' + parts[0] + '" ' + (state.sortBy === parts[0] ? "selected" : "") + '>' + parts[1] + "</option>";
        }).join("") + "</select></div>";

    html += "</div>";
    return html;
  }

  function filterChipGroup(label, key, values, state, variant) {
    var active = state[key] || [];
    return '<div class="filter-group"><label class="group-label">' + label + '</label><div class="chip-row">' +
      values.map(function (v) {
        var themeCls = variant ? " " + variant + "-chip-" + v.replace(/\s+/g, "") : "";
        return '<span class="chip' + themeCls + (active.indexOf(v) !== -1 ? " active" : "") + '" data-toggle-multi="' + key + '" data-value="' + v + '">' + v + "</span>";
      }).join("") + "</div></div>";
  }

  // Atualiza o contador/estado do botao "Limpar filtros" sem precisar
  // recriar o painel inteiro (evita perder o foco de inputs de texto).
  function updateFilterHead(root, state) {
    var count = activeFilterCount(state);
    var head = root.querySelector("#filters-active-count");
    if (head) head.textContent = filterCountLabel(count);
    var btn = root.querySelector("#filters-clear-btn");
    if (btn) btn.disabled = !count;
  }

  // refreshPanel (opcional): funcao do modulo chamador que reconstrói e
  // religa o painel inteiro - usada só no clique de "Limpar filtros", onde
  // um refresh completo (chips, slider, textos) é desejável.
  function wireFilterPanel(root, state, onChange, refreshPanel) {
    root.querySelectorAll("[data-toggle-multi]").forEach(function (chip) {
      chip.onclick = function () {
        var key = chip.getAttribute("data-toggle-multi");
        var val = chip.getAttribute("data-value");
        state[key] = state[key] || [];
        var i = state[key].indexOf(val);
        if (i === -1) state[key].push(val); else state[key].splice(i, 1);
        chip.classList.toggle("active");
        updateFilterHead(root, state);
        onChange();
      };
    });
    root.querySelectorAll("[data-toggle]").forEach(function (chip) {
      chip.onclick = function () {
        var key = chip.getAttribute("data-toggle");
        state[key] = !state[key];
        chip.classList.toggle("active");
        updateFilterHead(root, state);
        onChange();
      };
    });
    root.querySelectorAll("input[data-filter='keyword'], input[data-filter='artist']").forEach(function (inp) {
      inp.oninput = function () {
        state[inp.getAttribute("data-filter")] = inp.value;
        updateFilterHead(root, state);
        onChange();
      };
    });
    var range = root.querySelector("input[data-filter='costMax']");
    if (range) range.oninput = function () {
      state.costMax = parseInt(range.value, 10);
      var label = root.querySelector("#cost-range-label");
      if (label) label.textContent = "Custo de mana (" + (state.costMin || 0) + "–" + (state.costMax >= 10 ? "10+" : state.costMax) + ")";
      updateFilterHead(root, state);
      onChange();
    };
    var sortSel = root.querySelector("select[data-filter='sortBy']");
    if (sortSel) sortSel.onchange = function () { state.sortBy = sortSel.value; onChange(); };

    var clearBtn = root.querySelector("#filters-clear-btn");
    if (clearBtn) clearBtn.onclick = function () {
      clearFilterState(state);
      onChange();
      if (typeof refreshPanel === "function") refreshPanel(); else updateFilterHead(root, state);
    };
  }

  // ---------------- Detalhe de carta (modal) ----------------
  function openCardDetail(cardId, ctx) {
    ctx = ctx || {};
    var card = State.getCatalogCard(cardId);
    if (!card) { toastShow("Carta não encontrada no catálogo."); return; }

    var entries = State.getCollectionEntriesForCard(cardId);
    var totalQty = entries.reduce(function (s, e) { return s + e.quantity; }, 0);
    var decksWith = State.decksContainingCard(cardId);
    var listsWith = State.listsContainingCard(cardId);

    // O popup e aberto de varios lugares (Colecao, Catalogo, dentro de um
    // Deck, dentro de uma Lista) - o "foco" determina qual controle de
    // quantidade aparece como principal: o da propria Colecao (padrao), o
    // dessa secao especifica do deck, ou o dessa lista especifica. Cada lugar
    // tem sua propria quantidade independente (ver State.addListItem etc) -
    // o popup so mostra o controle certo pro lugar de onde foi aberto.
    var focusDeck = null; // { deck, section }
    var focusList = null; // { list, item }
    if (ctx.source === "deck" && ctx.deckId) {
      var focusDeckObj = State.getDeck(ctx.deckId);
      if (focusDeckObj) focusDeck = { deck: focusDeckObj, section: ctx.section || "spellbook" };
    } else if (ctx.source === "list" && ctx.listId) {
      var focusListObj = State.getList(ctx.listId);
      if (focusListObj) {
        var focusItem = focusListObj.items.find(function (i) { return i.cardId === cardId; });
        if (focusItem) focusList = { list: focusListObj, item: focusItem };
      }
    }

    var html = '<div class="detail-image-wrap">' +
      '<img data-card-id="' + card.id + '" data-img-width="900" class="' + (isLandscapeCard(card) ? "landscape" : "") + '">' +
      "</div>";

    html += '<h2>' + escapeHtml(card.name) + "</h2>";
    html += '<div class="detail-meta-row">' + elementsBadgesHtml(card.elements) + " " + rarityBadgeHtml(card.rarity) + ' <span class="rarity-badge">' + card.set + "</span></div>";
    html += '<div class="stat-line">' +
      "<span>Tipo: " + card.type + "</span>" +
      (card.cost != null ? "<span>Custo: " + card.cost + "</span>" : "") +
      (card.power != null ? "<span>Power: " + card.power + "</span>" : "") +
      (card.life != null ? "<span>Life: " + card.life + "</span>" : "") +
      "</div>";
    html += keywordBadgesHtml(card.keywords);
    if (card.effectText) html += '<p class="effect-text">' + escapeHtml(card.effectText) + "</p>";
    if (card.flavorText) html += '<p class="flavor-text">' + escapeHtml(card.flavorText) + "</p>";
    if (card.artist) html += '<p class="stat-line">Artista: ' + escapeHtml(card.artist) + "</p>";

    var allVersions = findAllVersions(card);
    if (allVersions.length > 1) {
      html += '<hr class="section-divider"><div class="section-title">Outras Versões</div><div class="version-list">';
      allVersions.forEach(function (v) {
        html += '<div class="version-item' + (v.id === card.id ? ' current' : '') + '" data-goto-version="' + v.id + '">' +
          '<div class="version-thumb-wrap"><img class="version-thumb' + (isLandscapeCard(v) ? ' landscape' : '') + '" data-card-id="' + v.id + '"></div>' +
          '<span>' + escapeHtml(v.set) + '</span></div>';
      });
      html += '</div>';
    }

    // Controle de quantidade PRINCIPAL: depende de onde o popup foi aberto.
    // Cada lugar (Colecao, uma secao especifica de um Deck, uma Lista
    // especifica) tem sua propria quantidade independente - so mostramos o
    // controle do lugar de onde viemos, pra nao confundir qual numero e qual.
    var SECTION_LABEL_MAP = { avatar: "Avatar", atlas: "Atlas", spellbook: "Spellbook", collection: "Collection" };
    if (focusDeck) {
      var fd = focusDeck.deck, fSec = focusDeck.section;
      html += '<hr class="section-divider"><div class="section-title">Nesta seção do deck</div>' +
        '<p style="font-size:13px;color:var(--text-secondary);margin-top:-6px;margin-bottom:8px;">' + escapeHtml(fd.name) + " — " + SECTION_LABEL_MAP[fSec] + "</p>";
      if (fSec === "avatar") {
        if (fd.avatar && fd.avatar.cardId === cardId) {
          html += '<div class="panel copy-entry"><div class="copy-entry-head"><span>Avatar deste deck (1x)</span></div>' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">' +
            '<button class="btn btn-sm btn-danger" data-deckctx-remove>' + Icon("trash", { cls: "icon-sm" }) + " Remover do deck</button></div></div>";
        } else {
          html += '<p style="font-size:13px;color:var(--text-secondary);">Esta carta não é mais o avatar deste deck.</p>';
        }
      } else {
        var fEntry = (fd[fSec] || []).find(function (e) { return e.cardId === cardId; });
        if (fEntry) {
          html += '<div class="panel copy-entry"><div class="copy-entry-head">' +
            '<span class="qty-stepper qty-stepper-sm"><button data-deckctx-minus>−</button><span class="qty-val">' + fEntry.quantity + '</span><button data-deckctx-plus>+</button></span>' +
            "</div>" +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">' +
            '<button class="btn btn-sm btn-danger" data-deckctx-remove>' + Icon("trash", { cls: "icon-sm" }) + " Remover do deck</button></div></div>";
        } else {
          html += '<p style="font-size:13px;color:var(--text-secondary);">Esta carta não está mais nesta seção do deck.</p>';
        }
      }
    } else if (focusList) {
      var fl = focusList.list, flItem = focusList.item;
      html += '<hr class="section-divider"><div class="section-title">Nesta lista</div>' +
        '<p style="font-size:13px;color:var(--text-secondary);margin-top:-6px;margin-bottom:8px;">' + escapeHtml(fl.name) + "</p>" +
        '<div class="panel copy-entry"><div class="copy-entry-head">' +
        '<span class="qty-stepper qty-stepper-sm"><button data-listctx-minus>−</button><span class="qty-val">' + flItem.quantity + '</span><button data-listctx-plus>+</button></span>' +
        "</div>" +
        '<div class="form-row" style="margin-top:8px;"><label>Observação</label><textarea data-listctx-notes placeholder="Notas sobre este item...">' + escapeHtml(flItem.notes || "") + "</textarea></div>" +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">' +
        '<button class="btn btn-sm btn-danger" data-listctx-remove>' + Icon("trash", { cls: "icon-sm" }) + " Remover da lista</button></div></div>";
    } else if (totalQty > 0) {
      html += '<hr class="section-divider"><div class="section-title copy-section-head">' +
        '<span>Minha' + (entries.length > 1 ? "s Cópias" : " Cópia") + '</span>' +
        (entries.length > 1 ? '<button class="btn btn-sm" id="merge-entries-btn">' + Icon("refresh", { cls: "icon-sm" }) + ' Agrupar idênticas</button>' : "") +
        "</div>";
      if (entries.length > 1) html += '<p style="font-size:12px;color:var(--text-secondary);margin-top:-4px;margin-bottom:10px;">Por padrão, todas as cópias de uma mesma pilha compartilham as mesmas características. Use "Dividir" numa pilha pra dar características próprias (foil, preço, notas...) a uma cópia específica, ou "Agrupar idênticas" pra juntar de volta cópias com características iguais.</p>';
      entries.forEach(function (e, idx) {
        html += '<div class="panel copy-entry" style="margin-bottom:10px;">';
        if (entries.length > 1) html += '<div class="copy-entry-label">Cópia ' + (idx + 1) + '</div>';
        html += '<div class="copy-entry-head">' +
          '<span class="qty-stepper qty-stepper-sm"><button data-entry-minus="' + e.id + '">−</button><span class="qty-val">' + e.quantity + '</span><button data-entry-plus="' + e.id + '">+</button></span>' +
          '<select data-entry-condition="' + e.id + '">' + CONDITION_LIST.map(function (c) {
            return '<option value="' + c + '" ' + (e.condition === c ? "selected" : "") + '>' + c + "</option>";
          }).join("") + '</select>' +
          "</div>";
        html += '<div class="chip-row" style="margin-top:8px;">' +
          '<span class="chip ' + (e.isFoil ? "active" : "") + '" data-toggle-entry-flag="isFoil" data-entry="' + e.id + '">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span>' +
          '<span class="chip ' + (e.isPromo ? "active" : "") + '" data-toggle-entry-flag="isPromo" data-entry="' + e.id + '">' + Icon("ribbon", { cls: "icon-sm" }) + ' Promo</span>' +
          '<span class="chip ' + (e.isCurio ? "active" : "") + '" data-toggle-entry-flag="isCurio" data-entry="' + e.id + '">' + Icon("gem", { cls: "icon-sm" }) + ' Curio</span>' +
          "</div>";
        html += '<div class="form-inline" style="margin-top:8px;">' +
          '<div class="form-row"><label>Preço pago</label><input type="number" step="0.01" data-entry-price="' + e.id + '" value="' + (e.pricePaid != null ? e.pricePaid : "") + '"></div>' +
          '<div class="form-row"><label>Moeda</label><select data-entry-currency="' + e.id + '">' + ["BRL", "USD", "EUR"].map(function (c) {
            return '<option ' + ((e.currency || "BRL") === c ? "selected" : "") + '>' + c + "</option>";
          }).join("") + '</select></div>' +
          "</div>";
        html += '<div class="form-row" style="margin-top:2px;margin-bottom:8px;"><label>Observação</label><textarea data-entry-notes="' + e.id + '" placeholder="Ex: comprado no evento X, leve dobra no canto...">' + escapeHtml(e.notes || "") + "</textarea></div>";
        html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
        if (e.quantity > 1) {
          html += '<button class="btn btn-sm" data-split-entry="' + e.id + '">' + Icon("duplicate", { cls: "icon-sm" }) + ' Dividir em ' + e.quantity + ' cópias individuais</button>';
        }
        html += '<button class="btn btn-sm btn-danger" data-remove-entry="' + e.id + '">' + Icon("trash", { cls: "icon-sm" }) + ' Remover cópia</button>';
        html += "</div></div>";
      });
    }

    // Atalho compacto pra Colecao quando o controle principal acima e de
    // outro lugar (deck ou lista) - so um resumo + botao pra focar nela.
    if ((focusDeck || focusList) && totalQty > 0) {
      html += '<hr class="section-divider"><div class="section-title">Coleção</div>' +
        '<div class="deck-link-row"><span>Você tem ' + totalQty + 'x na coleção</span>' +
        '<button class="link-plain" data-goto-collection-focus>gerenciar</button></div>';
    }

    // Decks/Listas: sempre mostram TODOS os lugares onde a carta aparece,
    // exceto o proprio lugar ja mostrado acima como controle principal (pra
    // nao duplicar a mesma informacao duas vezes na tela).
    var decksToShow = decksWith.filter(function (dw) { return !(focusDeck && dw.deck.id === focusDeck.deck.id); });
    if (decksToShow.length) {
      html += '<hr class="section-divider"><div class="section-title">Decks</div>';
      decksToShow.forEach(function (dw) {
        html += '<div class="deck-link-row"><span>' + escapeHtml(dw.deck.name) + '</span><span>' + dw.quantity + 'x <button class="link-plain" data-goto-deck="' + dw.deck.id + '">abrir</button></span></div>';
      });
    }

    var listsToShow = listsWith.filter(function (lw) { return !(focusList && lw.list.id === focusList.list.id); });
    html += '<hr class="section-divider"><div class="section-title">Listas</div>';
    if (listsToShow.length) {
      listsToShow.forEach(function (lw) {
        html += '<div class="deck-link-row"><span>' + escapeHtml(lw.list.name) + '</span><span>' + lw.quantity + 'x <button class="link-plain" data-goto-list="' + lw.list.id + '">abrir</button></span></div>';
      });
    } else {
      html += '<p style="font-size:13px;color:var(--text-secondary);">Esta carta não está em ' + (focusList ? "nenhuma outra lista." : "nenhuma lista.") + "</p>";
    }

    html += '<hr class="section-divider"><div style="display:flex;gap:8px;flex-wrap:wrap;">';
    if (totalQty === 0) {
      html += '<button class="btn btn-primary" data-action="add-to-collection" data-card-id="' + card.id + '">' + Icon("plus", { cls: "icon-sm" }) + ' Adicionar à Coleção</button>';
    }
    html += '<button class="btn" data-action="add-to-deck" data-card-id="' + card.id + '">' + Icon("decks", { cls: "icon-sm" }) + ' Adicionar a Deck</button>';
    html += '<button class="btn" data-action="add-to-list" data-card-id="' + card.id + '">' + Icon("star", { cls: "icon-sm" }) + ' Adicionar a Lista</button>';
    html += "</div>";

    var root = modalOpen(html);
    hydrateImages(root);

    var mainImg = root.querySelector(".detail-image-wrap img");
    if (mainImg) {
      mainImg.onclick = function () { openImageLightbox(mainImg.src, isLandscapeCard(card)); };
    }

    root.querySelectorAll("[data-goto-version]").forEach(function (el) {
      el.onclick = function () {
        var vId = el.getAttribute("data-goto-version");
        if (vId !== cardId) openCardDetail(vId, ctx);
      };
    });

    root.querySelectorAll("[data-entry-plus]").forEach(function (b) {
      b.onclick = function () { State.incrementCollectionEntry(b.getAttribute("data-entry-plus"), 1); openCardDetail(cardId, ctx); };
    });
    root.querySelectorAll("[data-entry-minus]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-entry-minus");
        var entry = State.getCollection().find(function (e) { return e.id === id; });
        if (entry && entry.quantity === 1) {
          if (!confirm("Remover completamente esta entrada da coleção?")) return;
        }
        State.incrementCollectionEntry(id, -1);
        openCardDetail(cardId, ctx);
      };
    });
    root.querySelectorAll("[data-remove-entry]").forEach(function (b) {
      b.onclick = function () {
        if (confirm("Remover esta entrada da coleção?")) {
          State.removeCollectionEntry(b.getAttribute("data-remove-entry"));
          openCardDetail(cardId, ctx);
        }
      };
    });
    root.querySelectorAll("[data-split-entry]").forEach(function (b) {
      b.onclick = function () {
        if (confirm("Dividir esta pilha em cópias individuais? Cada uma poderá ter sua própria condição, foil, preço e notas.")) {
          State.splitCollectionEntry(b.getAttribute("data-split-entry"));
          openCardDetail(cardId, ctx);
        }
      };
    });
    var mergeBtn = root.querySelector("#merge-entries-btn");
    if (mergeBtn) mergeBtn.onclick = function () {
      State.mergeCollectionEntriesForCard(cardId);
      openCardDetail(cardId, ctx);
    };
    root.querySelectorAll("[data-entry-condition]").forEach(function (sel) {
      sel.onchange = function () {
        State.updateCollectionEntry(sel.getAttribute("data-entry-condition"), { condition: sel.value });
        openCardDetail(cardId, ctx);
      };
    });
    root.querySelectorAll("[data-toggle-entry-flag]").forEach(function (chip) {
      chip.onclick = function () {
        var id = chip.getAttribute("data-entry");
        var flag = chip.getAttribute("data-toggle-entry-flag");
        var entry = State.getCollection().find(function (x) { return x.id === id; });
        var patch = {};
        patch[flag] = !(entry && entry[flag]);
        State.updateCollectionEntry(id, patch);
        openCardDetail(cardId, ctx);
      };
    });
    root.querySelectorAll("[data-entry-price]").forEach(function (inp) {
      inp.onchange = function () {
        State.updateCollectionEntry(inp.getAttribute("data-entry-price"), { pricePaid: inp.value ? parseFloat(inp.value) : undefined });
        openCardDetail(cardId, ctx);
      };
    });
    root.querySelectorAll("[data-entry-currency]").forEach(function (sel) {
      sel.onchange = function () {
        State.updateCollectionEntry(sel.getAttribute("data-entry-currency"), { currency: sel.value });
        openCardDetail(cardId, ctx);
      };
    });
    root.querySelectorAll("[data-entry-notes]").forEach(function (ta) {
      ta.onchange = function () {
        State.updateCollectionEntry(ta.getAttribute("data-entry-notes"), { notes: ta.value });
        openCardDetail(cardId, ctx);
      };
    });
    root.querySelectorAll("[data-goto-deck]").forEach(function (b) {
      b.onclick = function () { modalClose(); location.hash = "#/decks/" + b.getAttribute("data-goto-deck"); };
    });
    root.querySelectorAll("[data-goto-list]").forEach(function (b) {
      b.onclick = function () { modalClose(); location.hash = "#/lists/" + b.getAttribute("data-goto-list"); };
    });
    var gotoCollectionFocusBtn = root.querySelector("[data-goto-collection-focus]");
    if (gotoCollectionFocusBtn) gotoCollectionFocusBtn.onclick = function () {
      openCardDetail(cardId, { source: "collection" });
    };

    // ---- Controle de quantidade: secao do Deck (quando focusDeck) ----
    if (focusDeck) {
      var fdRef = focusDeck.deck, fSecRef = focusDeck.section;
      var deckMinusBtn = root.querySelector("[data-deckctx-minus]");
      if (deckMinusBtn) deckMinusBtn.onclick = function () {
        var e = (fdRef[fSecRef] || []).find(function (x) { return x.cardId === cardId; });
        if (!e) return;
        e.quantity--;
        if (e.quantity <= 0) fdRef[fSecRef] = fdRef[fSecRef].filter(function (x) { return x.cardId !== cardId; });
        State.updateDeck(fdRef.id, fdRef);
        openCardDetail(cardId, ctx);
      };
      var deckPlusBtn = root.querySelector("[data-deckctx-plus]");
      if (deckPlusBtn) deckPlusBtn.onclick = function () {
        var e = (fdRef[fSecRef] || []).find(function (x) { return x.cardId === cardId; });
        if (!e) return;
        e.quantity++;
        State.updateDeck(fdRef.id, fdRef);
        openCardDetail(cardId, ctx);
      };
      var deckRemoveBtn = root.querySelector("[data-deckctx-remove]");
      if (deckRemoveBtn) deckRemoveBtn.onclick = function () {
        if (fSecRef === "avatar") {
          if (fdRef.avatar && fdRef.avatar.cardId === cardId) fdRef.avatar = null;
        } else {
          fdRef[fSecRef] = (fdRef[fSecRef] || []).filter(function (x) { return x.cardId !== cardId; });
        }
        State.updateDeck(fdRef.id, fdRef);
        openCardDetail(cardId, ctx);
      };
    }

    // ---- Controle de quantidade: item de Lista (quando focusList) ----
    if (focusList) {
      var flRef = focusList.list;
      var listMinusBtn = root.querySelector("[data-listctx-minus]");
      if (listMinusBtn) listMinusBtn.onclick = function () {
        var item = flRef.items.find(function (i) { return i.cardId === cardId; });
        if (!item) return;
        if (item.quantity <= 1) { State.removeListItem(flRef.id, cardId); } else { State.updateListItem(flRef.id, cardId, { quantity: item.quantity - 1 }); }
        openCardDetail(cardId, ctx);
      };
      var listPlusBtn = root.querySelector("[data-listctx-plus]");
      if (listPlusBtn) listPlusBtn.onclick = function () {
        var item = flRef.items.find(function (i) { return i.cardId === cardId; });
        if (!item) return;
        State.updateListItem(flRef.id, cardId, { quantity: item.quantity + 1 });
        openCardDetail(cardId, ctx);
      };
      var listNotesTa = root.querySelector("[data-listctx-notes]");
      if (listNotesTa) listNotesTa.onchange = function () {
        State.updateListItem(flRef.id, cardId, { notes: listNotesTa.value });
      };
      var listRemoveBtn = root.querySelector("[data-listctx-remove]");
      if (listRemoveBtn) listRemoveBtn.onclick = function () {
        State.removeListItem(flRef.id, cardId);
        openCardDetail(cardId, ctx);
      };
    }

    var addBtn = root.querySelector("[data-action='add-to-collection']");
    if (addBtn) addBtn.onclick = function () { openCollectionEntryForm(cardId, null, ctx); };
    var deckBtn = root.querySelector("[data-action='add-to-deck']");
    if (deckBtn) deckBtn.onclick = function () { openDeckSelector(cardId); };
    var listBtn = root.querySelector("[data-action='add-to-list']");
    if (listBtn) listBtn.onclick = function () {
      openListSelector(cardId, function () { openCardDetail(cardId, ctx); });
    };
  }

  // ---------------- Seletor de lista (Adicionar a Lista) ----------------
  // onDone (opcional): chamado apos adicionar a carta a uma lista existente,
  // pra quem chamou poder re-renderizar (ex: reabrir o popup de detalhe
  // atualizado). Ao criar uma lista nova pelo atalho, o modal fecha direto.
  function openListSelector(cardId, onDone) {
    var card = State.getCatalogCard(cardId);
    var lists = State.getLists();
    var html = '<h3>Adicionar "' + escapeHtml(card.name) + '" a uma Lista</h3>';
    if (!lists.length) {
      html += '<p style="color:var(--text-secondary);">Você ainda não tem nenhuma lista.</p>';
    } else {
      html += lists.map(function (l) {
        return '<div class="deck-card" data-pick-list="' + l.id + '"><div><div class="deck-name">' + escapeHtml(l.name) +
          '</div>' + (l.description ? '<div class="deck-sub">' + escapeHtml(l.description) + '</div>' : '') + '</div></div>';
      }).join("");
    }
    html += '<button class="btn btn-block" id="list-selector-new-btn" style="margin-top:10px;">' + Icon("plus", { cls: "icon-sm" }) + ' Nova Lista</button>';
    var root = modalOpen(html);
    root.querySelectorAll("[data-pick-list]").forEach(function (el) {
      el.onclick = function () {
        var listId = el.getAttribute("data-pick-list");
        var list = State.getList(listId);
        State.addListItem(listId, { cardId: cardId, quantity: 1 });
        toastShow('Adicionado à lista "' + list.name + '".');
        modalClose();
        if (onDone) onDone();
      };
    });
    root.querySelector("#list-selector-new-btn").onclick = function () {
      openCreateListForm(function (newList) {
        State.addListItem(newList.id, { cardId: cardId, quantity: 1 });
        toastShow('Lista "' + newList.name + '" criada e carta adicionada.');
        modalClose();
        if (onDone) onDone();
      });
    };
  }

  // Variante em lote do seletor acima - adiciona varias cartas de uma vez a
  // uma lista escolhida (ex: "Adicionar faltantes à Lista" no detalhe do
  // deck). items: [{cardId, quantity}].
  function openBulkListSelector(items, titleLabel, onDone) {
    var lists = State.getLists();
    var html = '<h3>Adicionar ' + escapeHtml(titleLabel) + ' a uma Lista</h3>';
    if (!lists.length) {
      html += '<p style="color:var(--text-secondary);">Você ainda não tem nenhuma lista.</p>';
    } else {
      html += lists.map(function (l) {
        return '<div class="deck-card" data-pick-list="' + l.id + '"><div><div class="deck-name">' + escapeHtml(l.name) +
          '</div>' + (l.description ? '<div class="deck-sub">' + escapeHtml(l.description) + '</div>' : '') + '</div></div>';
      }).join("");
    }
    html += '<button class="btn btn-block" id="list-selector-new-btn" style="margin-top:10px;">' + Icon("plus", { cls: "icon-sm" }) + ' Nova Lista</button>';
    var root = modalOpen(html);
    function addAll(listId) {
      items.forEach(function (it) { State.addListItem(listId, { cardId: it.cardId, quantity: it.quantity || 1 }); });
    }
    root.querySelectorAll("[data-pick-list]").forEach(function (el) {
      el.onclick = function () {
        var listId = el.getAttribute("data-pick-list");
        var list = State.getList(listId);
        addAll(listId);
        toastShow('Cartas adicionadas à lista "' + list.name + '".');
        modalClose();
        if (onDone) onDone();
      };
    });
    root.querySelector("#list-selector-new-btn").onclick = function () {
      openCreateListForm(function (newList) {
        addAll(newList.id);
        toastShow('Lista "' + newList.name + '" criada e cartas adicionadas.');
        modalClose();
        if (onDone) onDone();
      });
    };
  }

  // Formulario minimo de criacao de lista (nome + descricao), reutilizado
  // tanto pelo atalho rapido "Adicionar a Lista" quanto pela aba Listas.
  function openCreateListForm(onCreate) {
    var html = '<h3>Nova Lista</h3>' +
      '<div class="form-row"><label>Nome</label><input type="text" id="new-list-name" placeholder="Ex: Wishlist, Pra trocar..."></div>' +
      '<div class="form-row"><label>Descrição (opcional)</label><textarea id="new-list-desc" placeholder="Pra que serve essa lista?"></textarea></div>' +
      '<button class="btn btn-primary btn-block" id="new-list-save">' + Icon("save", { cls: "icon-sm" }) + ' Criar Lista</button>';
    var root = modalOpen(html);
    root.querySelector("#new-list-name").focus();
    root.querySelector("#new-list-save").onclick = function () {
      var name = root.querySelector("#new-list-name").value.trim();
      if (!name) { toastShow("Dê um nome à lista."); return; }
      var list = State.createList({ name: name, description: root.querySelector("#new-list-desc").value.trim() });
      if (onCreate) onCreate(list);
    };
  }

  // ---------------- Formulario de cadastro/edicao na colecao ----------------
  function openCollectionEntryForm(cardId, entryId, ctx) {
    var card = State.getCatalogCard(cardId);
    var entry = entryId ? State.getCollection().find(function (e) { return e.id === entryId; }) : null;
    var settings = State.getSettings();

    var html = '<h3>' + (entry ? "Editar Cópia" : "Adicionar à Coleção") + " — " + escapeHtml(card.name) + "</h3>";
    html += '<div class="form-row"><label>Quantidade</label><span class="qty-stepper">' +
      '<button type="button" id="form-qty-minus">−</button><span class="qty-val" id="form-qty-val">' + (entry ? entry.quantity : 1) + '</span><button type="button" id="form-qty-plus">+</button></span></div>';
    html += '<div class="form-inline">';
    html += '<div class="form-row"><label>Condição</label><select id="form-condition">' + CONDITION_LIST.map(function (c) {
      return '<option value="' + c + '" ' + (entry && entry.condition === c ? "selected" : (!entry && c === "NM" ? "selected" : "")) + '>' + c + "</option>";
    }).join("") + "</select></div>";
    html += '<div class="form-row"><label>Preço pago</label><input type="number" step="0.01" id="form-price" value="' + (entry && entry.pricePaid != null ? entry.pricePaid : "") + '"></div>';
    html += '<div class="form-row"><label>Moeda</label><select id="form-currency">' + ["BRL", "USD", "EUR"].map(function (c) {
      return '<option ' + ((entry ? entry.currency : settings.defaultCurrency) === c ? "selected" : "") + '>' + c + "</option>";
    }).join("") + "</select></div>";
    html += "</div>";
    html += '<div class="form-row"><label>Flags</label><div class="toggle-row">' +
      '<span class="toggle-chip ' + (entry && entry.isFoil ? "active" : "") + '" id="form-foil">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span>' +
      '<span class="toggle-chip ' + (entry && entry.isPromo ? "active" : "") + '" id="form-promo">' + Icon("ribbon", { cls: "icon-sm" }) + ' Promo</span>' +
      '<span class="toggle-chip ' + (entry && entry.isCurio ? "active" : "") + '" id="form-curio">' + Icon("gem", { cls: "icon-sm" }) + ' Curio</span>' +
      "</div></div>";
    html += '<div class="form-row"><label>Notas</label><textarea id="form-notes">' + escapeHtml(entry ? entry.notes || "" : "") + "</textarea></div>";
    html += '<div style="display:flex;gap:8px;"><button class="btn btn-primary btn-block" id="form-save">' + Icon("save", { cls: "icon-sm" }) + ' Salvar</button></div>';

    var root = modalOpen(html);
    var qty = entry ? entry.quantity : 1;
    root.querySelector("#form-qty-plus").onclick = function () { qty++; root.querySelector("#form-qty-val").textContent = qty; };
    root.querySelector("#form-qty-minus").onclick = function () { qty = Math.max(1, qty - 1); root.querySelector("#form-qty-val").textContent = qty; };
    ["form-foil", "form-promo", "form-curio"].forEach(function (id) {
      root.querySelector("#" + id).onclick = function () { root.querySelector("#" + id).classList.toggle("active"); };
    });
    root.querySelector("#form-save").onclick = function () {
      var fields = {
        cardId: cardId,
        quantity: qty,
        condition: root.querySelector("#form-condition").value,
        pricePaid: root.querySelector("#form-price").value ? parseFloat(root.querySelector("#form-price").value) : undefined,
        currency: root.querySelector("#form-currency").value,
        isFoil: root.querySelector("#form-foil").classList.contains("active"),
        isPromo: root.querySelector("#form-promo").classList.contains("active"),
        isCurio: root.querySelector("#form-curio").classList.contains("active"),
        notes: root.querySelector("#form-notes").value
      };
      if (entry) {
        State.updateCollectionEntry(entry.id, fields);
        toastShow("Cópia atualizada.");
      } else {
        State.addCollectionEntry(fields);
        toastShow("Adicionado à coleção.");
        // Ao conseguir a carta de fato, ela sai de qualquer lista onde
        // estivesse (ja que essas listas existem pra rastrear cartas que
        // ainda faltam conseguir).
        State.removeCardFromAllLists(cardId);
      }
      modalClose();
      openCardDetail(cardId, ctx || {});
    };
  }

  // ---------------- Seletor de deck (Adicionar a Deck) ----------------
  function openDeckSelector(cardId) {
    var card = State.getCatalogCard(cardId);
    var decks = State.getDecks();
    if (!decks.length) {
      modalOpen('<h3>Adicionar a Deck</h3><p>Você ainda não tem decks. Crie um deck primeiro.</p><button class="btn btn-primary" id="goto-new-deck">Criar Deck</button>');
      document.getElementById("goto-new-deck").onclick = function () { modalClose(); location.hash = "#/decks/new"; };
      return;
    }
    var defaultSection = card.type === "Avatar" ? "avatar" : (card.type === "Site" ? "atlas" : "spellbook");
    var html = '<h3>Adicionar "' + escapeHtml(card.name) + '" a um Deck</h3>';
    html += decks.map(function (d) {
      return '<div class="deck-card" data-pick-deck="' + d.id + '"><div><div class="deck-name">' + escapeHtml(d.name) + '</div><div class="deck-sub">' + d.format + "</div></div></div>";
    }).join("");
    var root = modalOpen(html);
    root.querySelectorAll("[data-pick-deck]").forEach(function (el) {
      el.onclick = function () {
        var deckId = el.getAttribute("data-pick-deck");
        var deck = State.getDeck(deckId);
        var qty = 1;
        if (defaultSection === "avatar") {
          deck.avatar = { cardId: cardId, quantity: 1 };
        } else {
          var list = deck[defaultSection];
          var existing = list.find(function (e) { return e.cardId === cardId; });
          if (existing) existing.quantity += qty; else list.push({ cardId: cardId, quantity: qty });
        }
        State.updateDeck(deckId, deck);
        toastShow("Adicionado ao deck \"" + deck.name + "\".");
        modalClose();
      };
    });
  }

  // ---------------- Indicadores (Coleção / Decks / Listas) ----------------
  // Estatisticas da Colecao propriamente dita: usa quantity/pricePaid/currency
  // de cada entrada diretamente (cada entrada ja e uma copia real possuida).
  function computeCollectionStats(entries, catalog) {
    var catalogById = {};
    catalog.forEach(function (c) { catalogById[c.id] = c; });
    var totalQty = 0, uniqueIds = {}, byType = {}, bySet = {}, byRarity = {}, byElement = {}, pricesByCurrency = {};
    entries.forEach(function (e) {
      var c = catalogById[e.cardId];
      totalQty += e.quantity;
      uniqueIds[e.cardId] = true;
      if (c) {
        byType[c.type] = (byType[c.type] || 0) + e.quantity;
        bySet[c.set] = (bySet[c.set] || 0) + e.quantity;
        var rk = c.rarity || "Sem raridade";
        byRarity[rk] = (byRarity[rk] || 0) + e.quantity;
        (c.elements && c.elements.length ? c.elements : ["Incolor"]).forEach(function (el) { byElement[el] = (byElement[el] || 0) + e.quantity; });
      }
      if (e.pricePaid != null) {
        var cur = e.currency || "BRL";
        pricesByCurrency[cur] = (pricesByCurrency[cur] || 0) + e.pricePaid;
      }
    });
    return { totalQty: totalQty, uniqueCount: Object.keys(uniqueIds).length, byType: byType, bySet: bySet, byRarity: byRarity, byElement: byElement, pricesByCurrency: pricesByCurrency };
  }

  // Estatisticas de uma lista de referencias a carta (items: [{cardId, quantity}])
  // - usado por Listas e Decks, que nao guardam preco proprio. O valor investido
  // e' somado a partir do preco ja pago na Colecao pra essas mesmas cartas (uma
  // unica vez por carta, nao multiplicado pela quantidade da lista/deck).
  function computeItemListStats(items, catalog) {
    var catalogById = {};
    catalog.forEach(function (c) { catalogById[c.id] = c; });
    var totalQty = 0, uniqueIds = {}, byType = {}, bySet = {}, byRarity = {}, byElement = {}, pricesByCurrency = {};
    var pricedCardIds = {};
    items.forEach(function (i) {
      var c = catalogById[i.cardId];
      totalQty += i.quantity;
      uniqueIds[i.cardId] = true;
      if (c) {
        byType[c.type] = (byType[c.type] || 0) + i.quantity;
        bySet[c.set] = (bySet[c.set] || 0) + i.quantity;
        var rk = c.rarity || "Sem raridade";
        byRarity[rk] = (byRarity[rk] || 0) + i.quantity;
        (c.elements && c.elements.length ? c.elements : ["Incolor"]).forEach(function (el) { byElement[el] = (byElement[el] || 0) + i.quantity; });
      }
      if (!pricedCardIds[i.cardId]) {
        pricedCardIds[i.cardId] = true;
        State.getCollectionEntriesForCard(i.cardId).forEach(function (e) {
          if (e.pricePaid != null) {
            var cur = e.currency || "BRL";
            pricesByCurrency[cur] = (pricesByCurrency[cur] || 0) + e.pricePaid;
          }
        });
      }
    });
    return { totalQty: totalQty, uniqueCount: Object.keys(uniqueIds).length, byType: byType, bySet: bySet, byRarity: byRarity, byElement: byElement, pricesByCurrency: pricesByCurrency };
  }

  function statGroupHtml(label, groupObj, orderList) {
    var keys = (orderList || []).filter(function (k) { return groupObj[k]; });
    Object.keys(groupObj).forEach(function (k) { if (keys.indexOf(k) === -1) keys.push(k); });
    if (!keys.length) return "";
    var max = Math.max.apply(null, keys.map(function (k) { return groupObj[k]; }));
    return '<div class="section-title" style="margin-top:14px;">' + label + '</div>' +
      keys.map(function (k) {
        var v = groupObj[k];
        var pct = max ? Math.round((v / max) * 100) : 0;
        return '<div class="stat-bar-row">' +
          '<span class="stat-bar-label">' + escapeHtml(k) + '</span>' +
          '<div class="stat-bar-track"><div class="stat-bar-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="stat-bar-value">' + v + '</span>' +
          "</div>";
      }).join("");
  }

  // ---------------- Exportar imagem (Salvar como / imprimir) ----------------
  // node: elemento DOM a exportar (ver ExportImage.printNodeFallback em
  // exportImage.js). Usado tanto pela tela de Listas quanto pelas abas
  // Lista/Imagens de um Deck - cada chamador so precisa passar o node certo
  // e um nome de arquivo base. Abre direto a tela de impressao do navegador
  // (sem modal intermediario) - la o usuario escolhe "Salvar como PDF".
  function exportNodeAsPrint(node, filenameBase) {
    window.ExportImage.printNodeFallback(node, filenameBase).then(function () {
      toastShow('Escolha "Salvar como PDF" na tela de impressão que abriu.');
    }).catch(function (err) {
      toastShow((err && err.message) || "Erro ao abrir a impressão.");
    });
  }

  function openStatsModal(title, stats) {
    var priceLines = Object.keys(stats.pricesByCurrency).map(function (cur) {
      return formatCurrency(stats.pricesByCurrency[cur], cur);
    });
    var html = '<h3>' + escapeHtml(title) + '</h3>';
    html += '<div class="stats-summary-row">' +
      '<div class="stats-summary-item"><strong>' + stats.totalQty + '</strong><span>cartas</span></div>' +
      '<div class="stats-summary-item"><strong>' + stats.uniqueCount + '</strong><span>únicas</span></div>' +
      '<div class="stats-summary-item"><strong>' + (priceLines.length ? priceLines.join(" + ") : "—") + '</strong><span>valor investido</span></div>' +
      "</div>";
    html += statGroupHtml("Por Tipo", stats.byType, TYPE_LIST);
    html += statGroupHtml("Por Raridade", stats.byRarity, RARITY_LIST);
    html += statGroupHtml("Por Edição", stats.bySet, SET_LIST);
    html += statGroupHtml("Por Elemento", stats.byElement, ELEMENT_LIST);
    modalOpen(html);
  }

  window.UI = {
    TYPE_LIST: TYPE_LIST, SET_LIST: SET_LIST, ELEMENT_LIST: ELEMENT_LIST, RARITY_LIST: RARITY_LIST, CONDITION_LIST: CONDITION_LIST,
    escapeHtml: escapeHtml,
    normalizeCardName: normalizeCardName,
    findOtherVersions: findOtherVersions,
    findAllVersions: findAllVersions,
    collectionQtyAllVersions: collectionQtyAllVersions,
    formatCurrency: formatCurrency,
    elementsBadgesHtml: elementsBadgesHtml,
    rarityBadgeHtml: rarityBadgeHtml,
    keywordBadgesHtml: keywordBadgesHtml,
    thresholdCostHtml: thresholdCostHtml,
    pipsOnlyHtml: pipsOnlyHtml,
    costBadgeHtml: costBadgeHtml,
    cardTileBodyHtml: cardTileBodyHtml,
    isLandscapeCard: isLandscapeCard,
    matchChoiceHtml: matchChoiceHtml,
    hydrateImages: hydrateImages,
    attachHoverPreview: attachHoverPreview,
    matchesTextSearch: matchesTextSearch,
    applyCommonFilters: applyCommonFilters,
    sortCards: sortCards,
    renderCardGrid: renderCardGrid,
    wireQtyControls: wireQtyControls,
    renderFilterPanel: renderFilterPanel,
    wireFilterPanel: wireFilterPanel,
    activeFilterCount: activeFilterCount,
    clearFilterState: clearFilterState,
    openCardDetail: openCardDetail,
    openCollectionEntryForm: openCollectionEntryForm,
    openDeckSelector: openDeckSelector,
    openListSelector: openListSelector,
    openBulkListSelector: openBulkListSelector,
    openCreateListForm: openCreateListForm,
    computeCollectionStats: computeCollectionStats,
    computeItemListStats: computeItemListStats,
    openStatsModal: openStatsModal,
    exportNodeAsPrint: exportNodeAsPrint
  };
  window.Modal = { open: modalOpen, close: modalClose };
  window.Toast = { show: toastShow };
})();
