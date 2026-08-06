/* deckUtils.js
 * Parser de importacao de deck (fuzzy match), validacao de regras de deck,
 * calculo de completude e exportacao em .txt. Sem dependencias externas.
 */
(function () {
  "use strict";

  var RARITY_LIMITS = { Ordinary: 4, Exceptional: 3, Elite: 2, Unique: 1 };

  // ---------------- Fuzzy matching: Levenshtein + token overlap ----------------
  function levenshtein(a, b) {
    a = String(a || ""); b = String(b || "");
    var m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    var prev = new Array(n + 1);
    var curr = new Array(n + 1);
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      curr[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
        curr[j] = Math.min(
          prev[j] + 1,      // delecao
          curr[j - 1] + 1,  // insercao
          prev[j - 1] + cost // substituicao
        );
      }
      var tmp = prev; prev = curr; curr = tmp;
    }
    return prev[n];
  }

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenOverlapScore(a, b) {
    var ta = normalize(a).split(" ").filter(Boolean);
    var tb = normalize(b).split(" ").filter(Boolean);
    if (!ta.length || !tb.length) return 0;
    var setB = new Set(tb);
    var hits = ta.filter(function (t) { return setB.has(t); }).length;
    return hits / Math.max(ta.length, tb.length);
  }

  // Score combinado: 0 (nada parecido) a 1 (identico)
  function similarity(a, b) {
    var na = normalize(a), nb = normalize(b);
    if (!na || !nb) return 0;
    if (na === nb) return 1;
    var maxLen = Math.max(na.length, nb.length);
    var levScore = 1 - (levenshtein(na, nb) / maxLen);
    var tokScore = tokenOverlapScore(a, b);
    return (levScore * 0.6) + (tokScore * 0.4);
  }

  // Retorna candidatos ordenados por score desc: [{card, score}]
  function fuzzyFindCard(name, catalog, limit) {
    var scored = catalog.map(function (card) {
      return { card: card, score: similarity(name, card.name) };
    });
    scored.sort(function (x, y) { return y.score - x.score; });
    return scored.slice(0, limit || 5);
  }

  // ---------------- Parser de texto de deck ----------------
  // Aceita formatos livres: "4 Fire Drake", "4x Fire Drake", "Avatar: Ignus",
  // linhas de secao "// Atlas" / "// Spellbook" / "// Collection" (com ou sem
  // "#"/"//" na frente, com ou sem contagem tipo "Atlas (30)"), comentarios "#"
  // e linhas em branco ignorados.
  //
  // O cabecalho de secao vira uma DICA (result.entries[i].section) usada por
  // buildDeckFromParsed: Atlas/Spellbook continuam sendo roteados pelo TIPO
  // real da carta (mais confiavel), mas Collection SO da pra saber por essa
  // dica, ja que aceita qualquer tipo de carta e nao tem como inferir sozinho.
  // Sem nenhum cabecalho na lista colada, section fica null e tudo roteia
  // pelo tipo como sempre (compatibilidade com listas sem essas marcacoes).
  function sectionFromHeaderText(t) {
    var h = String(t || "").trim().toLowerCase().replace(/[:.]+$/, "").replace(/\s*\(\d+\)\s*$/, "");
    if (/^(atlas|site|sites)$/.test(h)) return "atlas";
    if (/^(spellbook|spells?)$/.test(h)) return "spellbook";
    if (/^(collection|cole[cç][aã]o)$/.test(h)) return "collection";
    return null;
  }

  function parseDeckText(text) {
    var lines = String(text || "").split(/\r?\n/);
    var result = { avatarName: null, entries: [] }; // entries: {quantity, name, section}
    var currentSection = null; // "atlas" | "spellbook" | "collection" | null
    lines.forEach(function (raw) {
      var line = raw.trim();
      if (!line) return;
      if (/^(#|\/\/)/.test(line) && !/avatar/i.test(line)) {
        var sec = sectionFromHeaderText(line.replace(/^(#|\/\/)\s*/, ""));
        if (sec) currentSection = sec;
        return; // comentario/secao - nunca vira carta
      }
      if (/^(#|\/\/)/.test(line)) line = line.replace(/^(#|\/\/)\s*/, "");

      var avatarMatch = line.match(/^avatar\s*:\s*(.+)$/i);
      if (avatarMatch) { result.avatarName = avatarMatch[1].trim(); return; }

      // formatos: "4 Nome", "4x Nome", "4X Nome", "1 Nome (Set)"
      var qtyMatch = line.match(/^(\d+)\s*x?\s+(.+)$/i);
      if (qtyMatch) {
        var qty = parseInt(qtyMatch[1], 10);
        var name = qtyMatch[2].trim().replace(/\s*\([^)]*\)\s*$/, ""); // remove sufixo "(Set)"
        result.entries.push({ quantity: qty, name: name, section: currentSection });
        return;
      }
      // linha sem quantidade explicita: pode ser um cabecalho de secao sem "//"
      // (ex: "Collection" sozinho numa linha) ou, senao, assume quantidade 1
      var headerOnly = sectionFromHeaderText(line);
      if (headerOnly) { currentSection = headerOnly; return; }
      if (line.length > 1) {
        result.entries.push({ quantity: 1, name: line.replace(/\s*\([^)]*\)\s*$/, ""), section: currentSection });
      }
    });
    return result;
  }

  // ---------------- Parser de HTML salvo de uma pagina de deck do curiosa.io ----------------
  // O curiosa.io bloqueia busca automatica via link (a API rejeita requisicoes
  // de outra origem, e a pagina em si nao manda cabecalho de CORS liberando
  // leitura por fetch de fora) - por isso o usuario precisa abrir o link no
  // proprio navegador, esperar carregar e salvar com Ctrl+S / Cmd+S usando a
  // opcao "Pagina da Web, completa" (no Chrome/Edge). Isso salva o DOM ja
  // renderizado (com a decklist), diferente de um "Ver codigo-fonte" comum.
  //
  // Estrutura observada (jul/2026, pode mudar se o curiosa.io redesenhar o
  // site): cada secao (Avatar/Atlas/Site/Minion/Artifact/Aura/Magic) e um
  // <div> cujo primeiro filho tem um <span class="capitalize"> com o nome do
  // tipo, seguido de um filho por carta - cada um com um <div> interno
  // contendo dois <span>: a quantidade e o nome da carta.
  //
  // Nome do deck: tenta primeiro o JSON embutido pelo Next.js (__NEXT_DATA__,
  // campo "name" da query deck.getById - mais confiavel, sem sufixos) e cai
  // pro <title> da pagina, removendo o "| by @usuario" que o curiosa.io
  // acrescenta no titulo da aba.
  function extractCuriosaDeckName(doc) {
    var nextDataEl = doc.getElementById("__NEXT_DATA__");
    if (nextDataEl) {
      try {
        var data = JSON.parse(nextDataEl.textContent);
        var queries = data.props && data.props.pageProps && data.props.pageProps.trpcState && data.props.pageProps.trpcState.json && data.props.pageProps.trpcState.json.queries;
        if (queries) {
          for (var i = 0; i < queries.length; i++) {
            var d = queries[i].state && queries[i].state.data;
            if (d && typeof d.name === "string" && d.name.trim()) return d.name.trim();
          }
        }
      } catch (e) { /* ignora, cai pro title */ }
    }
    var titleEl = doc.querySelector("title");
    if (titleEl && titleEl.textContent.trim()) {
      return titleEl.textContent.replace(/\s*\|\s*by\s+@\S+\.?\s*$/i, "").trim();
    }
    return null;
  }

  // Retorna o MESMO formato de parseDeckText ({avatarName, entries}), com um
  // campo extra "deckName" (nome sugerido pra usar ao salvar), pra poder
  // reaproveitar buildDeckFromParsed e toda a tela de previa/import.
  function parseCuriosaHtml(htmlText) {
    var result = { avatarName: null, entries: [], deckName: null };
    if (typeof DOMParser === "undefined") return result;
    var doc = new DOMParser().parseFromString(String(htmlText || ""), "text/html");
    result.deckName = extractCuriosaDeckName(doc);
    var headers = doc.querySelectorAll("span.capitalize");
    headers.forEach(function (headerSpan) {
      var typeName = headerSpan.textContent.trim().toLowerCase();
      var headerRow = headerSpan.parentElement;
      while (headerRow && headerRow.parentElement && headerRow.tagName !== "DIV") headerRow = headerRow.parentElement;
      var sectionContainer = headerRow ? headerRow.parentElement : null;
      if (!sectionContainer) return;
      Array.prototype.forEach.call(sectionContainer.children, function (rowEl) {
        if (rowEl === headerRow) return;
        var firstDiv = rowEl.querySelector("div");
        if (!firstDiv) return;
        var spans = firstDiv.querySelectorAll("span");
        if (spans.length < 2) return;
        var qty = parseInt(spans[0].textContent.trim(), 10);
        var name = spans[1].textContent.trim();
        if (!qty || !name) return;
        if (typeName === "avatar" && !result.avatarName) {
          result.avatarName = name;
        } else {
          result.entries.push({ quantity: qty, name: name });
        }
      });
    });
    return result;
  }

  // Constroi estrutura de deck a partir do parse + catalogo, com fuzzy match.
  // Retorna { avatar, atlas, spellbook, collection, unresolved: [{name, quantity, candidates, section}] }
  //
  // Roteamento: se a entrada tiver uma "section" explicita (so parseDeckText
  // preenche isso, a partir de um cabecalho "// Collection" na lista colada -
  // parseCuriosaHtml e o CSV nao tem esse conceito, entao suas entradas vem
  // sempre com section undefined) e ela for "collection", a carta vai direto
  // pra reserva, seja qual for o tipo. Sem essa dica, continua o roteamento de
  // sempre: Atlas/Spellbook pelo TIPO real da carta.
  function buildDeckFromParsed(parsed, catalog) {
    var out = { avatar: null, atlas: [], spellbook: [], collection: [], unresolved: [] };

    function resolveOne(name, quantity, section) {
      var matches = fuzzyFindCard(name, catalog, 5);
      var best = matches[0];
      if (best && best.score >= 0.72) {
        return { card: best.card, quantity: quantity, matches: matches };
      }
      out.unresolved.push({ name: name, quantity: quantity, candidates: matches, section: section || null });
      return null;
    }

    if (parsed.avatarName) {
      var av = resolveOne(parsed.avatarName, 1);
      if (av) out.avatar = { cardId: av.card.id, quantity: 1 };
    }

    parsed.entries.forEach(function (e) {
      var resolved = resolveOne(e.name, e.quantity, e.section);
      if (!resolved) return;
      var card = resolved.card;
      if (e.section === "collection") {
        out.collection.push({ cardId: card.id, quantity: e.quantity });
      } else if (card.type === "Avatar" && !out.avatar) {
        out.avatar = { cardId: card.id, quantity: 1 };
      } else if (card.type === "Site") {
        out.atlas.push({ cardId: card.id, quantity: e.quantity });
      } else {
        out.spellbook.push({ cardId: card.id, quantity: e.quantity });
      }
    });

    return out;
  }

  // ---------------- Validacao de deck ----------------
  function validateDeck(deck, catalog) {
    var errors = [];
    var warnings = [];
    var catalogById = {};
    catalog.forEach(function (c) { catalogById[c.id] = c; });

    if (!deck.avatar) errors.push("Nenhum Avatar selecionado (deve ter exatamente 1).");

    var atlasSum = (deck.atlas || []).reduce(function (s, e) { return s + e.quantity; }, 0);
    if (atlasSum !== 30) warnings.push("Atlas tem " + atlasSum + " cartas (esperado: 30).");

    var bookSum = (deck.spellbook || []).reduce(function (s, e) { return s + e.quantity; }, 0);
    if (bookSum !== 60) warnings.push("Spellbook tem " + bookSum + " cartas (esperado: 60).");

    var collSum = (deck.collection || []).reduce(function (s, e) { return s + e.quantity; }, 0);
    if (collSum !== 10) warnings.push("Collection tem " + collSum + " cartas (esperado: 10).");

    // Limite de copias por raridade (Ordinary 4, Exceptional 3, Elite 2, Unique 1)
    // e por NOME da carta, nao por impressao/edicao especifica - 1 copia de
    // "War Horse" da Arthurian Legends + 1 da Promo ainda sao 2 copias da
    // MESMA carta pra fins de limite de deck, mesmo sendo dois cardIds
    // diferentes no catalogo. Antes o parametro comparado era so o quantity
    // de uma unica entrada (por cardId), entao duas impressoes do mesmo nome
    // nunca eram somadas e o limite podia ser burlado assim; agora agrupamos
    // por nome normalizado somando Atlas + Spellbook + Collection (sites e
    // cartas na reserva tambem entram no mesmo limite).
    var byName = {};
    (deck.atlas || []).concat(deck.spellbook || [], deck.collection || []).forEach(function (entry) {
      var card = catalogById[entry.cardId];
      if (!card) return;
      var key = normalize(card.name);
      if (!byName[key]) byName[key] = { name: card.name, rarity: card.rarity, quantity: 0 };
      byName[key].quantity += entry.quantity;
    });
    Object.keys(byName).forEach(function (key) {
      var g = byName[key];
      var limit = RARITY_LIMITS[g.rarity];
      if (limit != null && g.quantity > limit) {
        errors.push(g.name + ": " + g.quantity + "x excede o limite de " + limit + " para raridade " + g.rarity + ".");
      }
    });

    return { errors: errors, warnings: warnings, valid: errors.length === 0 };
  }

  // ---------------- Completude vs colecao ----------------
  function computeCompletion(deck, catalog, collectionQtyFn) {
    var catalogById = {};
    catalog.forEach(function (c) { catalogById[c.id] = c; });

    var allEntries = [];
    if (deck.avatar) allEntries.push(Object.assign({ section: "Avatar" }, deck.avatar));
    (deck.atlas || []).forEach(function (e) { allEntries.push(Object.assign({ section: "Atlas" }, e)); });
    (deck.spellbook || []).forEach(function (e) { allEntries.push(Object.assign({ section: "Spellbook" }, e)); });
    (deck.collection || []).forEach(function (e) { allEntries.push(Object.assign({ section: "Collection" }, e)); });

    var totalNeeded = 0, totalMissing = 0;
    var missingList = [];
    var missingByType = {};

    allEntries.forEach(function (entry) {
      var card = catalogById[entry.cardId];
      var have = collectionQtyFn(entry.cardId);
      var missing = Math.max(0, entry.quantity - have);
      totalNeeded += entry.quantity;
      totalMissing += missing;
      if (missing > 0) {
        var type = card ? card.type : "Desconhecida";
        if (!missingByType[type]) missingByType[type] = [];
        missingByType[type].push({
          cardId: entry.cardId,
          name: card ? card.name : entry.cardId,
          rarity: card ? card.rarity : null,
          missing: missing,
          section: entry.section
        });
        missingList.push({
          cardId: entry.cardId,
          name: card ? card.name : entry.cardId,
          rarity: card ? card.rarity : null,
          missing: missing,
          section: entry.section
        });
      }
    });

    var percent = totalNeeded === 0 ? 100 : Math.round(((totalNeeded - totalMissing) / totalNeeded) * 100);
    return {
      totalNeeded: totalNeeded,
      totalMissing: totalMissing,
      percent: percent,
      complete: totalMissing === 0,
      missingList: missingList,
      missingByType: missingByType
    };
  }

  // ---------------- Export .txt ----------------
  function exportDeckTxt(deck, catalog) {
    var catalogById = {};
    catalog.forEach(function (c) { catalogById[c.id] = c; });
    var lines = [];
    lines.push("# " + deck.name);
    if (deck.avatar) {
      var avCard = catalogById[deck.avatar.cardId];
      lines.push("Avatar: " + (avCard ? avCard.name : deck.avatar.cardId));
    }
    lines.push("");
    lines.push("// Atlas");
    (deck.atlas || []).forEach(function (e) {
      var c = catalogById[e.cardId];
      lines.push(e.quantity + " " + (c ? c.name : e.cardId));
    });
    lines.push("");
    lines.push("// Spellbook");
    (deck.spellbook || []).forEach(function (e) {
      var c = catalogById[e.cardId];
      lines.push(e.quantity + " " + (c ? c.name : e.cardId));
    });
    if ((deck.collection || []).length) {
      lines.push("");
      lines.push("// Collection");
      deck.collection.forEach(function (e) {
        var c = catalogById[e.cardId];
        lines.push(e.quantity + " " + (c ? c.name : e.cardId));
      });
    }
    return lines.join("\n");
  }

  window.DeckUtils = {
    levenshtein: levenshtein,
    similarity: similarity,
    fuzzyFindCard: fuzzyFindCard,
    parseDeckText: parseDeckText,
    parseCuriosaHtml: parseCuriosaHtml,
    buildDeckFromParsed: buildDeckFromParsed,
    validateDeck: validateDeck,
    computeCompletion: computeCompletion,
    exportDeckTxt: exportDeckTxt,
    RARITY_LIMITS: RARITY_LIMITS
  };
})();
