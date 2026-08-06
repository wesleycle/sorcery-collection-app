/* render-decks.js - Modulo Decks (/decks, /decks/new, /decks/:id)
 *
 * Fluxo de criacao: primeiro perguntamos "manual ou importar". No manual,
 * so pedimos o nome - o deck ja e criado e salvo na hora, e o usuario cai
 * direto no builder (mesma tela de detalhe do deck), que e vivo: toda
 * adicao/remocao/ajuste de quantidade salva na hora e re-renderiza so o
 * necessario, sem fluxo separado de "rascunho depois salvar".
 */
(function () {
  "use strict";

  // Conta quantas copias da carta o usuario tem na colecao, somando TODAS as
  // impressoes/edicoes da mesma carta (ex: se o deck pede a versao Beta mas
  // o usuario so tem a Alpha, ainda assim conta como "tenho"), porque pra
  // jogar a carta a edicao especifica nao importa. Logica compartilhada em
  // UI.collectionQtyAllVersions (tambem usada pela Home pros Decks Favoritos).
  function qtyFn(cardId) { return UI.collectionQtyAllVersions(cardId); }

  function render(container, segments) {
    if (segments[0] === "new") { renderNewDeck(container); return; }
    if (segments[0]) { renderDeckDetail(container, segments[0]); return; }
    renderDeckList(container);
  }

  // ---------------- Lista de decks ----------------
  function renderDeckList(container) {
    var decks = State.getDecks();
    var catalog = State.getCatalog();
    var html = '<div class="page-header"><h2>Meus Decks</h2>' +
      (decks.length ? '<div class="toolbar"><button class="btn" id="decks-stats">' + Icon("stats", { cls: "icon-sm" }) + ' Indicadores</button></div>' : "") +
      "</div>";

    if (!decks.length) {
      html += '<div class="empty-state"><div class="big-icon">' + Icon("decks") + '</div>Nenhum deck cadastrado ainda.</div>';
    } else {
      // Favoritos primeiro - facilita achar os decks marcados sem precisar
      // procurar na lista inteira.
      decks.slice().sort(function (a, b) { return (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0); }).forEach(function (d) {
        var completion = DeckUtils.computeCompletion(d, catalog, qtyFn);
        var avatarCard = d.avatar ? State.getCatalogCard(d.avatar.cardId) : null;
        var total = (d.avatar ? 1 : 0) + d.atlas.reduce(function (s, e) { return s + e.quantity; }, 0) + d.spellbook.reduce(function (s, e) { return s + e.quantity; }, 0);
        html += '<div class="deck-card" data-open-deck="' + d.id + '">' +
          '<img data-card-id="' + (avatarCard ? avatarCard.id : "") + '">' +
          '<div style="flex:1;">' +
          '<div class="deck-name">' + UI.escapeHtml(d.name) + '</div>' +
          '<div class="deck-sub">Avatar: ' + (avatarCard ? UI.escapeHtml(avatarCard.name) : "—") + " · " + total + " cartas</div>" +
          '<div class="' + (completion.complete ? "deck-status-ok" : "deck-status-warn") + '">' +
          (completion.complete ? Icon("check-circle", { cls: "icon-sm" }) + " Completo" : Icon("warning", { cls: "icon-sm" }) + " Faltam " + completion.totalMissing + " cartas") +
          "</div></div>" +
          '<button class="fav-toggle' + (d.isFavorite ? " active" : "") + '" data-toggle-fav-deck="' + d.id + '" title="' + (d.isFavorite ? "Remover dos favoritos" : "Favoritar") + '">' + Icon("star", { cls: "icon-sm" }) + "</button>" +
          "</div>";
      });
    }

    html += '<div class="fab-wrap"><button class="fab-main" id="deck-new" title="Novo Deck">' + Icon("plus") + '</button></div>';

    container.innerHTML = html;
    UI.hydrateImages(container);
    container.querySelectorAll("[data-open-deck]").forEach(function (el) {
      el.onclick = function () { location.hash = "#/decks/" + el.getAttribute("data-open-deck"); };
    });
    container.querySelectorAll("[data-toggle-fav-deck]").forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        State.toggleDeckFavorite(btn.getAttribute("data-toggle-fav-deck"));
        renderDeckList(container);
      };
    });
    container.querySelector("#deck-new").onclick = function () {
      newDeckMode = null;
      importPreview = null;
      importDeckNameSuggestion = null;
      location.hash = "#/decks/new";
    };
    var statsBtn = container.querySelector("#decks-stats");
    if (statsBtn) statsBtn.onclick = function () {
      var items = [];
      decks.forEach(function (d) {
        if (d.avatar) items.push({ cardId: d.avatar.cardId, quantity: d.avatar.quantity });
        (d.atlas || []).forEach(function (e) { items.push({ cardId: e.cardId, quantity: e.quantity }); });
        (d.spellbook || []).forEach(function (e) { items.push({ cardId: e.cardId, quantity: e.quantity }); });
        (d.collection || []).forEach(function (e) { items.push({ cardId: e.cardId, quantity: e.quantity }); });
      });
      var stats = UI.computeItemListStats(items, catalog);
      UI.openStatsModal("Indicadores dos Decks (" + decks.length + ")", stats);
    };
  }

  // ---------------- Novo deck: escolher modo -> (nome+criar) ou (importar) ----------------
  var newDeckMode = null; // null (escolher) | "manual" | "import"
  var importPreview = null; // { avatar, atlas, spellbook, unresolved }
  var importDeckNameSuggestion = null; // nome sugerido (ex: titulo da pagina do curiosa.io)

  function renderNewDeck(container) {
    if (newDeckMode === "manual") { renderManualNameStep(container); return; }
    if (newDeckMode === "import") { renderImportFlow(container); return; }
    renderModeChooser(container);
  }

  function renderModeChooser(container) {
    var html = '<div class="page-header"><h2>Novo Deck</h2></div>';
    html += '<p style="color:var(--text-secondary);">Como você quer criar seu deck?</p>';
    html += '<div class="deck-mode-choices">' +
      '<div class="deck-mode-choice" id="mode-manual">' + Icon("edit") +
      '<h3>Criar Manualmente</h3><p>Escolha um nome e monte o deck carta por carta, com busca e sugestões em tempo real.</p></div>' +
      '<div class="deck-mode-choice" id="mode-import">' + Icon("import") +
      '<h3>Importar Arquivo ou Lista</h3><p>Cole uma lista de texto (curiosa.io, moxfield...) ou envie um .csv.</p></div>' +
      "</div>";
    container.innerHTML = html;
    container.querySelector("#mode-manual").onclick = function () { newDeckMode = "manual"; renderNewDeck(container); };
    container.querySelector("#mode-import").onclick = function () { newDeckMode = "import"; renderNewDeck(container); };
  }

  function renderManualNameStep(container) {
    var html = '<div class="page-header"><h2>Novo Deck</h2></div>';
    html += '<div class="panel">' +
      '<div class="form-row"><label>Nome do deck</label><input type="text" id="manual-deck-name" value="Novo Deck" placeholder="Ex: Ell Aggro"></div>' +
      '<p style="font-size:12px;color:var(--text-secondary);margin-top:-6px;">Depois de criar, você monta o deck (Avatar, Atlas, Spellbook) direto na tela do deck.</p>' +
      '<div style="display:flex;gap:8px;">' +
      '<button class="btn" id="manual-back">' + Icon("close", { cls: "icon-sm" }) + ' Voltar</button>' +
      '<button class="btn btn-primary" id="manual-create">' + Icon("save", { cls: "icon-sm" }) + ' Criar Deck</button>' +
      "</div></div>";
    container.innerHTML = html;
    var input = container.querySelector("#manual-deck-name");
    input.focus();
    input.select();
    container.querySelector("#manual-back").onclick = function () { newDeckMode = null; renderNewDeck(container); };
    function create() {
      var name = input.value.trim() || "Novo Deck";
      var deck = State.createDeck({ name: name });
      newDeckMode = null;
      location.hash = "#/decks/" + deck.id;
    }
    container.querySelector("#manual-create").onclick = create;
    input.onkeydown = function (e) { if (e.key === "Enter") create(); };
  }

  function renderImportFlow(container) {
    var html = '<div class="page-header"><h2>Novo Deck — Importar</h2></div>';
    html += '<button class="btn" id="import-back" style="margin-bottom:10px;">' + Icon("close", { cls: "icon-sm" }) + ' Voltar</button>';
    html += '<div id="import-flow-body"></div>';
    container.innerHTML = html;
    container.querySelector("#import-back").onclick = function () { newDeckMode = null; importPreview = null; importDeckNameSuggestion = null; renderNewDeck(container); };
    renderImportTab(container.querySelector("#import-flow-body"));
  }

  function renderImportTab(slot) {
    slot.innerHTML =
      '<div class="panel">' +
      '<p style="color:var(--text-secondary);font-size:14px;">Cole abaixo a lista do deck (curiosa.io, moxfield, texto livre — quantidade + nome, uma carta por linha; "Avatar: Nome" em linha separada). Cabeçalhos "// Atlas", "// Spellbook" e "// Collection" são opcionais — sem eles, cada carta é encaixada pelo próprio tipo; com "// Collection", as cartas daquela seção vão direto para a reserva do deck, seja qual for o tipo.</p>' +
      '<textarea id="import-text" placeholder="Avatar: Ell the Redeemed\n\n// Atlas\n4 Wastes\n\n// Spellbook\n4 Lightning Bolt\n\n// Collection\n1 Wildfire"></textarea>' +
      '<div style="margin-top:10px;"><button class="btn btn-primary" id="import-parse">Analisar</button></div>' +
      '<hr class="section-divider">' +
      '<p style="color:var(--text-secondary);font-size:14px;">Ou importe um arquivo .csv (mesmo formato usado na exportação de coleção — colunas Edição, Card (EN), Quantidade...).</p>' +
      '<input type="file" accept=".csv" id="import-csv-file">' +
      '<hr class="section-divider">' +
      '<div class="section-title">Importar direto de um link do curiosa.io</div>' +
      '<p style="color:var(--text-secondary);font-size:14px;">O curiosa.io bloqueia busca automática por link (a própria página impede leitura de outro site), então o caminho é: abra o link do deck no navegador, espere carregar, aperte <strong>Ctrl+S</strong> (ou <strong>Cmd+S</strong> no Mac) e salve como <strong>"Página da Web, completa"</strong> — não use "Somente HTML" nem "Página única/MHTML". Depois selecione o arquivo <code>.html</code> salvo aqui embaixo.</p>' +
      '<input type="file" accept=".html,.htm" id="import-curiosa-html-file">' +
      "</div>" +
      '<div id="import-preview-slot"></div>';
    slot.querySelector("#import-parse").onclick = function () {
      var text = slot.querySelector("#import-text").value;
      var parsed = DeckUtils.parseDeckText(text);
      importDeckNameSuggestion = null;
      importPreview = DeckUtils.buildDeckFromParsed(parsed, State.getCatalog());
      renderImportPreview(slot.querySelector("#import-preview-slot"));
    };
    slot.querySelector("#import-csv-file").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        var parsed = ImportExport.parseDeckCsvToParsed(reader.result);
        importDeckNameSuggestion = null;
        importPreview = DeckUtils.buildDeckFromParsed(parsed, State.getCatalog());
        renderImportPreview(slot.querySelector("#import-preview-slot"));
      };
      reader.readAsText(file, "UTF-8");
    };
    slot.querySelector("#import-curiosa-html-file").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        var parsed = DeckUtils.parseCuriosaHtml(reader.result);
        if (!parsed.avatarName && !parsed.entries.length) {
          Toast.show('Não encontrei nenhuma carta nesse arquivo. Confirme que salvou como "Página da Web, completa" (não só o HTML) e que a página tinha carregado o deck antes de salvar.');
          return;
        }
        importDeckNameSuggestion = parsed.deckName || null;
        importPreview = DeckUtils.buildDeckFromParsed(parsed, State.getCatalog());
        renderImportPreview(slot.querySelector("#import-preview-slot"));
      };
      reader.readAsText(file, "UTF-8");
    };
  }

  function renderImportPreview(slot) {
    if (!importPreview) { slot.innerHTML = ""; return; }
    var avatarCard = importPreview.avatar ? State.getCatalogCard(importPreview.avatar.cardId) : null;
    var html = '<div class="panel"><h3>Prévia</h3>';
    html += "<p><strong>Avatar:</strong> " + (avatarCard ? UI.escapeHtml(avatarCard.name) : "não identificado") + "</p>";
    html += "<p><strong>Atlas:</strong> " + importPreview.atlas.reduce(function (s, e) { return s + e.quantity; }, 0) + " cartas (" + importPreview.atlas.length + " únicas)</p>";
    html += "<p><strong>Spellbook:</strong> " + importPreview.spellbook.reduce(function (s, e) { return s + e.quantity; }, 0) + " cartas (" + importPreview.spellbook.length + " únicas)</p>";
    if (importPreview.collection.length) {
      html += "<p><strong>Collection:</strong> " + importPreview.collection.reduce(function (s, e) { return s + e.quantity; }, 0) + " cartas (" + importPreview.collection.length + " únicas)</p>";
    }
    if (importPreview.unresolved.length) {
      html += '<div class="section-title" style="margin-top:10px;">Não identificadas (' + importPreview.unresolved.length + ")</div>";
      importPreview.unresolved.forEach(function (u, idx) {
        html += '<div class="panel" style="margin-bottom:6px;"><strong>' + UI.escapeHtml(u.quantity + "x " + u.name) + "</strong><br>";
        if (u.candidates.length) {
          html += '<select data-unresolved-pick="' + idx + '"><option value="">-- ignorar --</option>' + u.candidates.map(function (c) {
            return '<option value="' + c.card.id + '">' + UI.escapeHtml(c.card.name) + " (" + Math.round(c.score * 100) + "% match)</option>";
          }).join("") + "</select>";
        } else {
          html += '<span style="color:var(--text-secondary)">Nenhum candidato encontrado no catálogo.</span>';
        }
        html += "</div>";
      });
    }
    html += '<div class="form-row" style="margin-top:10px;"><label>Nome do deck</label><input type="text" id="import-deck-name" value="' + UI.escapeHtml(importDeckNameSuggestion || "Deck Importado") + '"></div>';
    html += '<button class="btn btn-primary" id="import-save">' + Icon("save", { cls: "icon-sm" }) + ' Salvar Deck</button></div>';
    slot.innerHTML = html;

    slot.querySelectorAll("[data-unresolved-pick]").forEach(function (sel) {
      sel.onchange = function () {
        var idx = parseInt(sel.getAttribute("data-unresolved-pick"), 10);
        var u = importPreview.unresolved[idx];
        var cardId = sel.value;
        if (!cardId) return;
        var card = State.getCatalogCard(cardId);
        if (u.section === "collection") importPreview.collection.push({ cardId: cardId, quantity: u.quantity });
        else if (card.type === "Avatar" && !importPreview.avatar) importPreview.avatar = { cardId: cardId, quantity: 1 };
        else if (card.type === "Site") importPreview.atlas.push({ cardId: cardId, quantity: u.quantity });
        else importPreview.spellbook.push({ cardId: cardId, quantity: u.quantity });
        importPreview.unresolved.splice(idx, 1);
        renderImportPreview(slot);
      };
    });

    slot.querySelector("#import-save").onclick = function () {
      var name = slot.querySelector("#import-deck-name").value || "Deck Importado";
      var deck = State.createDeck({ name: name, avatar: importPreview.avatar, atlas: importPreview.atlas, spellbook: importPreview.spellbook, collection: importPreview.collection });
      importPreview = null;
      importDeckNameSuggestion = null;
      newDeckMode = null;
      location.hash = "#/decks/" + deck.id;
    };
  }

  // ---------------- Builder / detalhe do deck (tela viva) ----------------
  // Unico ponto de entrada de cartas novas no deck: encaixa na secao certa
  // pelo tipo (Avatar/Atlas/Spellbook). Avatar e' slot unico: se ja tiver um
  // diferente, confirma antes de substituir. Por padrao encaixa na secao
  // certa pelo tipo - pra ir direto pra Collection em vez disso, o resultado
  // da busca tem um botao dedicado (ver addCardToCollection/wireGlobalSearch),
  // ja que essa secao aceita qualquer tipo e nao da pra saber pelo clique
  // normal na linha se a intencao era "essa carta do deck" ou "essa carta da
  // reserva".
  function addCardToDeck(deck, cardId, onDone) {
    var card = State.getCatalogCard(cardId);
    if (!card) return;
    if (card.type === "Avatar") {
      if (deck.avatar && deck.avatar.cardId !== cardId) {
        var current = State.getCatalogCard(deck.avatar.cardId);
        if (!confirm('Este deck já tem o Avatar "' + (current ? current.name : deck.avatar.cardId) + '". Substituir por "' + card.name + '"?')) return;
      }
      deck.avatar = { cardId: cardId, quantity: 1 };
    } else if (card.type === "Site") {
      var e = deck.atlas.find(function (x) { return x.cardId === cardId; });
      if (e) e.quantity++; else deck.atlas.push({ cardId: cardId, quantity: 1 });
    } else {
      var e2 = deck.spellbook.find(function (x) { return x.cardId === cardId; });
      if (e2) e2.quantity++; else deck.spellbook.push({ cardId: cardId, quantity: 1 });
    }
    State.updateDeck(deck.id, deck);
    if (onDone) onDone();
  }

  // Adiciona direto na Collection (reserva), ignorando o tipo da carta -
  // usada pelo botao dedicado no resultado da busca global.
  function addCardToCollection(deck, cardId, onDone) {
    var card = State.getCatalogCard(cardId);
    if (!card) return;
    var e = deck.collection.find(function (x) { return x.cardId === cardId; });
    if (e) e.quantity++; else deck.collection.push({ cardId: cardId, quantity: 1 });
    State.updateDeck(deck.id, deck);
    if (onDone) onDone();
  }

  // Em qual secao (por tipo) uma carta se encaixaria se saisse da Collection.
  function sectionForCard(card) {
    if (!card) return "spellbook";
    if (card.type === "Avatar") return "avatar";
    if (card.type === "Site") return "atlas";
    return "spellbook";
  }
  var SECTION_LABEL = { avatar: "Avatar", atlas: "Atlas", spellbook: "Spellbook", collection: "Collection" };

  // Move 1 unidade de uma carta de uma secao do deck pra outra (usado pra
  // transferir de/para a Collection - a unica secao sem tipo fixo, por isso
  // nao entra no roteamento automatico de addCardToDeck).
  function moveOneUnit(deck, fromKey, toKey, cardId, onDone) {
    if (fromKey === "avatar") {
      if (deck.avatar && deck.avatar.cardId === cardId) deck.avatar = null;
    } else {
      var fromArr = deck[fromKey];
      var e = fromArr.find(function (x) { return x.cardId === cardId; });
      if (e) { e.quantity--; if (e.quantity <= 0) deck[fromKey] = fromArr.filter(function (x) { return x.cardId !== cardId; }); }
    }
    if (toKey === "avatar") {
      deck.avatar = { cardId: cardId, quantity: 1 };
    } else {
      var toArr = deck[toKey];
      var e2 = toArr.find(function (x) { return x.cardId === cardId; });
      if (e2) e2.quantity++; else toArr.push({ cardId: cardId, quantity: 1 });
    }
    State.updateDeck(deck.id, deck);
    if (onDone) onDone();
  }

  // count vs target (Atlas=30, Spellbook=60, Collection=10) - indica falta ou
  // excesso, sem bloquear nada.
  function targetStatus(count, target) {
    if (count === target) return { text: "Completo", cls: "deck-status-ok", icon: "check-circle" };
    if (count < target) return { text: "Faltam " + (target - count) + " cartas", cls: "deck-status-warn", icon: "warning" };
    return { text: (count - target) + " cartas além do padrão", cls: "deck-status-warn", icon: "warning" };
  }

  function globalSearchHtml() {
    return '<div class="panel"><div class="section-title">Adicionar Carta ao Deck</div>' +
      '<p style="font-size:12px;color:var(--text-secondary);margin-top:-4px;margin-bottom:8px;">Busque qualquer carta do jogo. Clique na carta pra encaixar automaticamente na seção certa (Avatar, Atlas ou Spellbook) conforme o tipo, ou use o botão ' + Icon("exchange", { cls: "icon-sm" }) + ' pra adicionar direto na Collection (reserva), seja qual for o tipo. Também dá pra mover uma carta pra Collection depois, pelo botão na própria linha dela na tabela.</p>' +
      '<input type="text" class="search-bar" id="deck-global-search" placeholder="Buscar qualquer carta..." style="width:100%;">' +
      '<div id="deck-global-search-results"></div>' +
      "</div>";
  }

  function avatarSectionHtml(avatarCard, deckId) {
    var avatarCtx = UI.escapeHtml(JSON.stringify({ source: "deck", deckId: deckId, section: "avatar" }));
    var html = '<div class="panel"><div class="section-title">Avatar</div>';
    if (avatarCard) {
      html += '<div style="display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap;">' +
        '<div style="display:flex;gap:12px;align-items:center;">' +
        '<img data-card-id="' + avatarCard.id + '" style="width:60px;border-radius:6px;cursor:pointer;" data-open-card="' + avatarCard.id + '" data-open-ctx=\'' + avatarCtx + '\'>' +
        '<div><span class="card-name-hover" data-hover-card="' + avatarCard.id + '" data-open-card="' + avatarCard.id + '" data-open-ctx=\'' + avatarCtx + '\' style="cursor:pointer;"><strong>' + UI.escapeHtml(avatarCard.name) + '</strong></span><br>' +
        UI.rarityBadgeHtml(avatarCard.rarity) + " " + UI.elementsBadgesHtml(avatarCard.elements) + "</div>" +
        "</div>" +
        '<span style="display:flex;gap:6px;">' +
        '<button class="btn btn-sm" data-deck-move="avatar" data-card="' + avatarCard.id + '" title="Mover para Collection">' + Icon("exchange", { cls: "icon-sm" }) + " Collection</button>" +
        '<button class="btn btn-sm" data-deck-remove="avatar" title="Remover">' + Icon("trash", { cls: "icon-sm" }) + " Remover</button>" +
        "</span>" +
        "</div>";
    } else {
      html += '<p style="color:var(--text-secondary);">Nenhum avatar selecionado.</p>';
    }
    html += "</div>";
    return html;
  }

  // ---------------- Ordenacao das tabelas da aba Montar ----------------
  // Guarda, por secao (atlas/spellbook/collection), qual coluna esta ativa e
  // em que direcao. null = ordem original (alfabetica pelo nome). Terceiro
  // clique na mesma coluna volta pra null (ordem original).
  var deckTableSort = {};

  function sortValueFor(col, card, missing) {
    if (col === "custo") return card && card.cost != null ? card.cost : -1;
    if (col === "tipo") return card ? card.type : "";
    if (col === "raridade") return card ? UI.RARITY_LIST.indexOf(card.rarity) : -1;
    if (col === "faltam") return missing;
    return "";
  }

  function sortEntriesForTable(entries, catalog, key) {
    var byName = entries.slice().sort(function (a, b) {
      var ca = catalog.find(function (x) { return x.id === a.cardId; });
      var cb = catalog.find(function (x) { return x.id === b.cardId; });
      return (ca ? ca.name : "").localeCompare(cb ? cb.name : "");
    });
    var s = deckTableSort[key];
    if (!s) return byName;
    byName.sort(function (a, b) {
      var ca = catalog.find(function (x) { return x.id === a.cardId; });
      var cb = catalog.find(function (x) { return x.id === b.cardId; });
      var va = sortValueFor(s.col, ca, Math.max(0, a.quantity - qtyFn(a.cardId)));
      var vb = sortValueFor(s.col, cb, Math.max(0, b.quantity - qtyFn(b.cardId)));
      var cmp = typeof va === "number" ? va - vb : String(va).localeCompare(String(vb));
      if (cmp === 0) cmp = (ca ? ca.name : "").localeCompare(cb ? cb.name : "");
      return s.dir === "desc" ? -cmp : cmp;
    });
    return byName;
  }

  function sortArrow(key, col) {
    var s = deckTableSort[key];
    if (!s || s.col !== col) return "";
    return s.dir === "desc" ? " ▼" : " ▲";
  }

  function wireDeckTableSort(container, key, onChange) {
    container.querySelectorAll('[data-sort-col][data-sort-key="' + key + '"]').forEach(function (el) {
      el.onclick = function () {
        var col = el.getAttribute("data-sort-col");
        var cur = deckTableSort[key];
        if (!cur || cur.col !== col) deckTableSort[key] = { col: col, dir: "asc" };
        else if (cur.dir === "asc") cur.dir = "desc";
        else deckTableSort[key] = null;
        onChange();
      };
    });
  }

  // Larguras das colunas via colgroup - e o que garante que cabecalho e
  // linhas fiquem alinhados de verdade (ver comentario no style.css sobre por
  // que a versao anterior, em grid, desalinhava).
  function dtColgroupHtml(showType) {
    return "<colgroup>" +
      '<col class="dt-col-faltam" style="width:72px">' + // Faltam (cabe "FALTAM ▲" numa linha so)
      '<col class="dt-col-qty" style="width:42px">' + // Qtd
      "<col>" + // Nome (flexivel)
      (showType ? '<col class="dt-col-type" style="width:84px">' : "") + // Tipo
      (showType ? '<col class="dt-col-cost" style="width:66px">' : "") + // Custo (Atlas so tem Site, que nao tem custo - so threshold)
      '<col class="dt-col-threshold" style="width:100px">' + // Threshold
      '<col class="dt-col-rarity" style="width:96px">' + // Raridade
      '<col class="dt-col-actions" style="width:150px">' + // Acoes
      "</colgroup>";
  }

  // showType: false esconde as colunas Tipo e Custo (usado no Atlas, que so
  // tem Sites - todos do mesmo "tipo" e sem custo, so threshold).
  function deckSectionHtml(key, label, entries, target, catalog, description, showType, deckId) {
    showType = showType !== false;
    var count = entries.reduce(function (s, e) { return s + e.quantity; }, 0);
    var status = targetStatus(count, target);
    var html = '<div class="panel"><div class="section-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">' +
      "<span>" + label + " (" + count + "/" + target + ")</span>" +
      '<span class="' + status.cls + '" style="font-size:12px;">' + Icon(status.icon, { cls: "icon-sm" }) + " " + status.text + "</span>" +
      "</div>";
    if (description) html += '<p style="font-size:12px;color:var(--text-secondary);margin-top:-4px;margin-bottom:8px;">' + description + "</p>";
    if (!entries.length) { html += '<p style="color:var(--text-secondary);font-size:13px;">Nenhuma carta ainda.</p>'; html += "</div>"; return html; }

    html += '<div class="deck-table-scroll"><table class="deck-table">' + dtColgroupHtml(showType) +
      "<thead><tr>" +
      '<th class="dt-sortable" data-sort-col="faltam" data-sort-key="' + key + '">Faltam' + sortArrow(key, "faltam") + "</th>" +
      "<th>Qtd</th><th>Nome</th>" +
      (showType ? '<th class="dt-sortable dt-type" data-sort-col="tipo" data-sort-key="' + key + '">Tipo' + sortArrow(key, "tipo") + "</th>" : "") +
      (showType ? '<th class="dt-sortable dt-cost" data-sort-col="custo" data-sort-key="' + key + '">Custo' + sortArrow(key, "custo") + "</th>" : "") +
      '<th class="dt-threshold">Threshold</th>' +
      '<th class="dt-sortable dt-rarity" data-sort-col="raridade" data-sort-key="' + key + '">Raridade' + sortArrow(key, "raridade") + "</th>" +
      "<th></th>" +
      "</tr></thead><tbody>";
    sortEntriesForTable(entries, catalog, key).forEach(function (e) {
      var c = catalog.find(function (x) { return x.id === e.cardId; });
      var moveTarget = key === "collection" ? sectionForCard(c) : "collection";
      var moveLabel = SECTION_LABEL[moveTarget];
      var have = qtyFn(e.cardId);
      var missing = Math.max(0, e.quantity - have);
      var faltamHtml = missing > 0
        ? '<td class="dt-faltam has-missing">' + missing + "</td>"
        : '<td class="dt-faltam dt-faltam-ok">' + Icon("check-circle", { cls: "icon-sm" }) + "</td>";
      html += "<tr>" +
        faltamHtml +
        '<td class="dt-qty">' + e.quantity + "</td>" +
        '<td class="dt-name" data-open-card="' + e.cardId + '" data-open-ctx=\'' + UI.escapeHtml(JSON.stringify({ source: "deck", deckId: deckId, section: key })) + '\' data-hover-card="' + e.cardId + '">' + (c ? UI.escapeHtml(c.name) : e.cardId) + "</td>" +
        (showType ? '<td class="dt-type">' + (c ? c.type : "—") + "</td>" : "") +
        (showType ? '<td class="dt-cost">' + (c && c.cost != null ? c.cost : "—") + "</td>" : "") +
        '<td class="dt-threshold">' + (c ? UI.pipsOnlyHtml(c) : "") + "</td>" +
        '<td class="dt-rarity">' + (c ? UI.rarityBadgeHtml(c.rarity) : "") + "</td>" +
        '<td class="dt-actions"><span class="qty-stepper qty-stepper-sm">' +
        '<button data-deck-minus="' + key + '" data-card="' + e.cardId + '">−</button><button data-deck-plus="' + key + '" data-card="' + e.cardId + '">+</button>' +
        '<button data-deck-move="' + key + '" data-card="' + e.cardId + '" title="Mover para ' + moveLabel + '">' + Icon("exchange", { cls: "icon-sm" }) + "</button>" +
        '<button data-deck-remove="' + key + '" data-card="' + e.cardId + '" title="Remover">' + Icon("trash", { cls: "icon-sm" }) + "</button>" +
        "</span></td>" +
        "</tr>";
    });
    html += "</tbody></table></div></div>";
    return html;
  }

  // ---------------- Visualizacao "Lista" (agrupada por tipo, ao gosto de uma
  // decklist importada) e "Imagens" (grid de miniaturas) - somente leitura,
  // sem busca/adicao. A edicao continua no modo "Montar" (secoes de sempre).
  function catalogIndex(catalog) {
    var m = {};
    catalog.forEach(function (c) { m[c.id] = c; });
    return m;
  }

  // fixedSection: "avatar"/"collection" quando a chamada ja sabe a secao; se
  // omitido (secoes agrupadas por tipo, que misturam Atlas+Spellbook), a
  // secao de cada carta e deduzida do proprio tipo dela via sectionForCard.
  function deckListRowsHtml(entries, catalogById, deckId, fixedSection) {
    return entries.slice().sort(function (a, b) {
      var ca = catalogById[a.cardId], cb = catalogById[b.cardId];
      return (ca ? ca.name : "").localeCompare(cb ? cb.name : "");
    }).map(function (e) {
      var c = catalogById[e.cardId];
      if (!c) return "";
      var have = qtyFn(e.cardId);
      var missing = Math.max(0, e.quantity - have);
      var faltamHtml = missing > 0
        ? '<span class="dl-faltam has-missing">' + missing + "</span>"
        : '<span class="dl-faltam dl-faltam-ok">' + Icon("check-circle", { cls: "icon-sm" }) + "</span>";
      var rowSection = fixedSection || sectionForCard(c);
      var rowCtx = UI.escapeHtml(JSON.stringify({ source: "deck", deckId: deckId, section: rowSection }));
      // Avatar e sempre 1 copia fixa - mostramos so o numero, sem atalho
      // +/- (mesma regra da aba Imagens e da tabela Montar).
      var qtyHtml;
      if (rowSection === "avatar") {
        qtyHtml = '<span class="dl-qty-control"><span class="dl-qty-fixed">' + e.quantity + "</span></span>";
      } else {
        var qtyCtx = UI.escapeHtml(JSON.stringify({ type: "deck", deckId: deckId, section: rowSection, cardId: c.id }));
        qtyHtml = '<span class="dl-qty-control"><span class="qty-stepper qty-stepper-sm">' +
          '<button data-qty-minus=\'' + qtyCtx + '\'>−</button><span class="qty-val">' + e.quantity + '</span><button data-qty-plus=\'' + qtyCtx + '\'>+</button>' +
          "</span></span>";
      }
      return '<div class="decklist-row">' +
        faltamHtml +
        qtyHtml +
        '<span class="dl-name" data-open-card="' + c.id + '" data-open-ctx=\'' + rowCtx + '\' data-hover-card="' + c.id + '">' + UI.escapeHtml(c.name) + "</span>" +
        '<span class="dl-meta">' +
        '<span class="dl-cost">' + UI.costBadgeHtml(c) + "</span>" +
        '<span class="dl-threshold">' + UI.pipsOnlyHtml(c) + "</span>" +
        '<span class="dl-rarity">' + UI.rarityBadgeHtml(c.rarity) + "</span>" +
        "</span>" +
        "</div>";
    }).join("");
  }

  function renderDeckListView(deck, catalog) {
    var catalogById = catalogIndex(catalog);
    var avatarCard = deck.avatar ? catalogById[deck.avatar.cardId] : null;

    // Junta Atlas + Spellbook e agrupa pelo TIPO real da carta (Site, Minion,
    // Artifact, Aura, Magic) - assim a lista fica com colunas por tipo, como
    // numa decklist importada, em vez das nossas secoes internas de busca.
    var combined = (deck.atlas || []).concat(deck.spellbook || []);
    var byType = {};
    combined.forEach(function (e) {
      var c = catalogById[e.cardId];
      var t = c ? c.type : "?";
      if (!byType[t]) byType[t] = [];
      byType[t].push(e);
    });

    var html = '<div class="decklist-columns">';
    if (avatarCard) {
      html += '<div class="decklist-col-section"><div class="decklist-col-header">Avatar (1)</div>' +
        deckListRowsHtml([deck.avatar], catalogById, deck.id, "avatar") + "</div>";
    }
    // Ordem das colunas: Spellbook (Minion/Artifact/Aura/Magic) antes de Atlas
    // (Site) - mesma sequencia Avatar > Spellbook > Atlas > Collection usada
    // nas abas Montar e Imagens (por isso nao usamos a ordem padrao de
    // UI.TYPE_LIST, que tem Site logo depois de Avatar).
    ["Minion", "Artifact", "Aura", "Magic", "Site"].forEach(function (type) {
      var entries = byType[type];
      if (!entries || !entries.length) return;
      var count = entries.reduce(function (s, e) { return s + e.quantity; }, 0);
      html += '<div class="decklist-col-section"><div class="decklist-col-header">' + type + " (" + count + ")</div>" +
        deckListRowsHtml(entries, catalogById, deck.id) + "</div>";
    });
    html += "</div>";

    var collCount = (deck.collection || []).reduce(function (s, e) { return s + e.quantity; }, 0);
    html += '<div class="panel">' +
      '<div class="decklist-collection-toggle" id="decklist-collection-toggle">' +
      "<span>Collection (" + collCount + ")</span>" + Icon("chevron-down", { cls: "icon-sm" }) +
      "</div>" +
      '<div class="decklist-collection-body hidden" id="decklist-collection-body">' +
      (deck.collection && deck.collection.length ? deckListRowsHtml(deck.collection, catalogById, deck.id, "collection") : '<p style="color:var(--text-secondary);font-size:13px;">Vazia.</p>') +
      "</div></div>";

    return html;
  }

  function wireDeckListView(container, refresh) {
    var toggle = container.querySelector("#decklist-collection-toggle");
    var body = container.querySelector("#decklist-collection-body");
    if (toggle && body) {
      toggle.onclick = function () {
        body.classList.toggle("hidden");
        toggle.classList.toggle("open");
      };
    }
    UI.wireQtyControls(container, refresh);
  }

  function deckImagesSectionHtml(title, entries, catalogById, deckId, section, rotateLandscape) {
    if (!entries || !entries.length) return "";
    var items = entries.map(function (e) {
      var c = catalogById[e.cardId];
      if (!c) return null;
      var rowSection = section || sectionForCard(c);
      // Avatar e sempre 1 copia fixa - nao faz sentido um atalho +/- ali (a
      // mesma regra ja vale pra tabela Montar, que so mostra remover/mover
      // pro avatar). Nas demais secoes, o atalho ajusta deck[section] direto.
      var item = { card: c, badges: {}, openCtx: { source: "deck", deckId: deckId, section: rowSection } };
      if (rowSection === "avatar") {
        item.badges.qtyText = "x" + e.quantity;
      } else {
        item.qty = e.quantity;
        item.qtyCtx = { type: "deck", deckId: deckId, section: rowSection, cardId: c.id };
      }
      return item;
    }).filter(Boolean).sort(function (a, b) { return a.card.name.localeCompare(b.card.name); });
    if (!items.length) return "";
    var count = entries.reduce(function (s, e) { return s + e.quantity; }, 0);
    return '<div class="deck-images-section"><div class="section-title">' + title + " (" + count + ")</div>" +
      UI.renderCardGrid(items, "grid", rotateLandscape) + "</div>";
  }

  function renderDeckImagesView(deck, catalog) {
    var catalogById = catalogIndex(catalog);
    var sections = "";
    sections += deckImagesSectionHtml("Avatar", deck.avatar ? [deck.avatar] : [], catalogById, deck.id, "avatar");
    sections += deckImagesSectionHtml("Spellbook", deck.spellbook, catalogById, deck.id, "spellbook");
    sections += deckImagesSectionHtml("Atlas", deck.atlas, catalogById, deck.id, "atlas", true);
    sections += deckImagesSectionHtml("Collection", deck.collection, catalogById, deck.id, "collection");
    if (!sections) return '<div class="empty-state">Deck vazio.</div>';
    return sections;
  }

  function renderDeckDetail(container, deckId) {
    var deck = State.getDeck(deckId);
    if (!deck) { container.innerHTML = '<div class="empty-state">Deck não encontrado.</div>'; return; }
    var catalog = State.getCatalog();
    var avatarCard = deck.avatar ? State.getCatalogCard(deck.avatar.cardId) : null;
    var completion = DeckUtils.computeCompletion(deck, catalog, qtyFn);
    var validation = DeckUtils.validateDeck(deck, catalog);
    var mode = State.getSettings().deckViewMode || "build";

    var html = '<div class="page-header"><h2>' + UI.escapeHtml(deck.name) +
      ' <button class="fav-toggle inline' + (deck.isFavorite ? " active" : "") + '" id="deck-fav-toggle" title="' + (deck.isFavorite ? "Remover dos favoritos" : "Favoritar") + '">' + Icon("star", { cls: "icon-sm" }) + '</button></h2>' +
      '<div class="toolbar">' +
      '<button class="btn" id="deck-rename">' + Icon("edit", { cls: "icon-sm" }) + ' Renomear</button>' +
      '<button class="btn" id="deck-export-menu">' + Icon("export", { cls: "icon-sm" }) + ' Exportar</button>' +
      '<button class="btn" id="deck-duplicate">' + Icon("duplicate", { cls: "icon-sm" }) + ' Duplicar</button>' +
      '<button class="btn btn-danger" id="deck-delete">' + Icon("trash", { cls: "icon-sm" }) + ' Deletar</button>' +
      "</div></div>";

    html += '<div class="tabs">' +
      '<button class="tab-btn ' + (mode === "build" ? "active" : "") + '" data-deck-view="build">' + Icon("edit", { cls: "icon-sm" }) + ' Montar</button>' +
      '<button class="tab-btn ' + (mode === "list" ? "active" : "") + '" data-deck-view="list">' + Icon("list", { cls: "icon-sm" }) + ' Lista</button>' +
      '<button class="tab-btn ' + (mode === "images" ? "active" : "") + '" data-deck-view="images">' + Icon("image", { cls: "icon-sm" }) + ' Imagens</button>' +
      "</div>";

    // #deck-export-area envolve SO o conteudo de cartas da aba atualmente
    // selecionada (Montar/Lista/Imagens) - e o que "Exportar > Salvar como
    // Imagem/PDF" captura, entao exporta sempre o equivalente a aba visivel
    // no momento (busca, validacao e completude ficam FORA de proposito,
    // por serem ferramentas de edicao, nao conteudo do deck).
    if (mode === "list") {
      html += '<div id="deck-export-area"><h3 class="export-title">' + UI.escapeHtml(deck.name) + "</h3>" + renderDeckListView(deck, catalog) + "</div>";
    } else if (mode === "images") {
      html += '<div id="deck-export-area"><h3 class="export-title">' + UI.escapeHtml(deck.name) + "</h3>" + renderDeckImagesView(deck, catalog) + "</div>";
    } else {
      html += globalSearchHtml();
      html += '<div id="deck-export-area"><h3 class="export-title">' + UI.escapeHtml(deck.name) + "</h3>";
      html += avatarSectionHtml(avatarCard, deck.id);
      html += deckSectionHtml("spellbook", "Spellbook", deck.spellbook, 60, catalog, null, true, deck.id);
      html += deckSectionHtml("atlas", "Atlas", deck.atlas, 30, catalog, null, false, deck.id);
      html += deckSectionHtml("collection", "Collection", deck.collection, 10, catalog,
        "Reserva de até 10 cartas de qualquer tipo, usada durante a partida. Adicione a carta normalmente pela busca acima e depois use o botão de mover na linha dela.", true, deck.id);
      html += "</div>";

      if (validation.errors.length || validation.warnings.length) {
        html += '<div class="panel">' + validation.errors.map(function (e) { return '<p class="status-bad">' + Icon("warning", { cls: "icon-sm" }) + " " + UI.escapeHtml(e) + "</p>"; }).join("") +
          validation.warnings.map(function (w) { return '<p style="color:var(--warning);">' + Icon("warning", { cls: "icon-sm" }) + " " + UI.escapeHtml(w) + "</p>"; }).join("") + "</div>";
      }

      html += '<div class="panel"><div class="section-title">Completude da Coleção</div>' +
        '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + completion.percent + '%"></div></div>' +
        '<p style="margin-top:8px;">' + completion.percent + "% completo" + (completion.complete ? " " + Icon("check-circle", { cls: "icon-sm" }) : " — " + Icon("warning", { cls: "icon-sm" }) + " " + completion.totalMissing + " cartas faltando (veja a coluna \"Faltam\" nas listas acima)") + "</p>";
      if (!completion.complete) {
        html += '<button class="btn" id="deck-add-missing-list" style="margin-top:10px;">Adicionar faltantes a uma Lista</button>';
      }
      html += "</div>";
    }

    container.innerHTML = html;
    UI.hydrateImages(container);
    container.querySelectorAll("[data-hover-card]").forEach(function (el) {
      UI.attachHoverPreview(el, el.getAttribute("data-hover-card"));
    });

    function refresh() { renderDeckDetail(container, deckId); }

    container.querySelector("#deck-rename").onclick = function () {
      var name = prompt("Novo nome do deck:", deck.name);
      if (name) { State.updateDeck(deckId, { name: name }); refresh(); }
    };
    container.querySelector("#deck-fav-toggle").onclick = function () {
      State.toggleDeckFavorite(deckId);
      refresh();
    };
    container.querySelector("#deck-export-menu").onclick = function () {
      var menuHtml = '<h3>Exportar Deck</h3>' +
        '<div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">' +
        '<button class="btn" id="deck-export-txt">' + Icon("export", { cls: "icon-sm" }) + ' Exportar .txt</button>' +
        '<button class="btn" id="deck-export-csv">' + Icon("export", { cls: "icon-sm" }) + ' Exportar CSV</button>' +
        '<button class="btn" id="deck-export-image">' + Icon("export", { cls: "icon-sm" }) + ' Salvar como Imagem/PDF</button>' +
        "</div>";
      var menuRoot = Modal.open(menuHtml);
      menuRoot.querySelector("#deck-export-txt").onclick = function () {
        Modal.close();
        var txt = DeckUtils.exportDeckTxt(deck, catalog);
        ImportExport.downloadTextFile(deck.name.replace(/[^a-z0-9]+/gi, "_") + ".txt", txt, "text/plain");
      };
      menuRoot.querySelector("#deck-export-csv").onclick = function () {
        Modal.close();
        var csv = ImportExport.exportDeckCsv(deck, catalog);
        ImportExport.downloadTextFile(deck.name.replace(/[^a-z0-9]+/gi, "_") + ".csv", csv, "text/csv");
      };
      menuRoot.querySelector("#deck-export-image").onclick = function () {
        Modal.close();
        // Exporta sempre o equivalente a aba atualmente selecionada
        // (Montar/Lista/Imagens) - "mode" ja reflete isso, ver acima.
        UI.exportNodeAsPrint(container.querySelector("#deck-export-area"), deck.name + "_" + mode);
      };
    };
    container.querySelector("#deck-duplicate").onclick = function () {
      var copy = State.duplicateDeck(deckId);
      location.hash = "#/decks/" + copy.id;
    };
    container.querySelector("#deck-delete").onclick = function () {
      if (confirm('Tem certeza que deseja deletar o deck "' + deck.name + '"?')) {
        State.deleteDeck(deckId);
        location.hash = "#/decks";
      }
    };
    container.querySelectorAll("[data-deck-view]").forEach(function (b) {
      b.onclick = function () {
        State.updateSettings({ deckViewMode: b.getAttribute("data-deck-view") });
        refresh();
      };
    });

    if (mode === "list") {
      wireDeckListView(container, refresh);
      return;
    }
    if (mode === "images") {
      UI.wireQtyControls(container, refresh);
      return;
    }

    var missingListBtn = container.querySelector("#deck-add-missing-list");
    if (missingListBtn) missingListBtn.onclick = function () {
      var items = completion.missingList.map(function (m) { return { cardId: m.cardId, quantity: m.missing }; });
      UI.openBulkListSelector(items, "as cartas faltantes");
    };

    wireGlobalSearch(container, deck, refresh);
    wireDeckSectionEdit(container, deck, "avatar", refresh);
    wireDeckSectionEdit(container, deck, "atlas", refresh);
    wireDeckSectionEdit(container, deck, "spellbook", refresh);
    wireDeckSectionEdit(container, deck, "collection", refresh);
    wireDeckTableSort(container, "atlas", refresh);
    wireDeckTableSort(container, "spellbook", refresh);
    wireDeckTableSort(container, "collection", refresh);
  }

  function wireDeckSectionEdit(container, deck, key, onChange) {
    if (key === "avatar") {
      var removeAvatarBtn = container.querySelector("[data-deck-remove='avatar']");
      if (removeAvatarBtn) removeAvatarBtn.onclick = function () { deck.avatar = null; State.updateDeck(deck.id, deck); onChange(); };
      var moveAvatarBtn = container.querySelector("[data-deck-move='avatar']");
      if (moveAvatarBtn) moveAvatarBtn.onclick = function () {
        moveOneUnit(deck, "avatar", "collection", moveAvatarBtn.getAttribute("data-card"), onChange);
      };
      return;
    }
    container.querySelectorAll("[data-deck-plus='" + key + "']").forEach(function (b) {
      b.onclick = function () {
        var e = deck[key].find(function (x) { return x.cardId === b.getAttribute("data-card"); });
        if (e) { e.quantity++; State.updateDeck(deck.id, deck); onChange(); }
      };
    });
    container.querySelectorAll("[data-deck-minus='" + key + "']").forEach(function (b) {
      b.onclick = function () {
        var cardId = b.getAttribute("data-card");
        var e = deck[key].find(function (x) { return x.cardId === cardId; });
        if (e) { e.quantity--; if (e.quantity <= 0) deck[key] = deck[key].filter(function (x) { return x.cardId !== cardId; }); State.updateDeck(deck.id, deck); onChange(); }
      };
    });
    container.querySelectorAll("[data-deck-remove='" + key + "']").forEach(function (b) {
      b.onclick = function () {
        var cardId = b.getAttribute("data-card");
        deck[key] = deck[key].filter(function (x) { return x.cardId !== cardId; });
        State.updateDeck(deck.id, deck); onChange();
      };
    });
    container.querySelectorAll("[data-deck-move='" + key + "']").forEach(function (b) {
      b.onclick = function () {
        var cardId = b.getAttribute("data-card");
        var toKey = key === "collection" ? sectionForCard(State.getCatalogCard(cardId)) : "collection";
        moveOneUnit(deck, key, toKey, cardId, onChange);
      };
    });
  }

  function wireGlobalSearch(container, deck, onChange) {
    var input = container.querySelector("#deck-global-search");
    if (!input) return;
    var resultsSlot = container.querySelector("#deck-global-search-results");
    input.oninput = function () {
      var q = input.value.toLowerCase();
      if (q.length < 2) { resultsSlot.innerHTML = ""; return; }
      var results = State.getCatalog().filter(function (c) { return c.name.toLowerCase().indexOf(q) !== -1; }).slice(0, 10);
      resultsSlot.innerHTML = results.map(function (c) {
        var collectionBtn = '<button class="match-choice-add-collection" data-add-collection="' + c.id + '" title="Adicionar direto na Collection">' + Icon("exchange", { cls: "icon-sm" }) + "</button>";
        return UI.matchChoiceHtml(c, 'data-add="' + c.id + '"', c.type + " · " + c.set, collectionBtn);
      }).join("");
      UI.hydrateImages(resultsSlot);
      resultsSlot.querySelectorAll("[data-add]").forEach(function (el) {
        el.onclick = function (e) {
          if (e.target.closest("[data-add-collection]")) return; // botao dedicado trata o proprio clique
          addCardToDeck(deck, el.getAttribute("data-add"), onChange);
        };
      });
      resultsSlot.querySelectorAll("[data-add-collection]").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          addCardToCollection(deck, btn.getAttribute("data-add-collection"), onChange);
        };
      });
    };
  }

  window.RenderDecks = { render: render };
})();
