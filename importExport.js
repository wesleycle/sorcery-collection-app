/* importExport.js
 * Importacao/exportacao de Colecao, Decks e Listas em CSV.
 *
 * Dois formatos de CSV sao suportados:
 *  - "Completo": mesmas colunas do arquivo de exemplo enviado por um
 *    colecionador (Edicao (PTBR)/(EN)/(Sigla), Card (PT)/(EN), Quantidade,
 *    Qualidade, Idioma, Raridade, Cor, Extras, Card #, Comentario, "# Cards
 *    na Edicao") - permite reaproveitar exports de outras ferramentas.
 *  - "Simples" (formato sugerido, so pra Colecao): colunas proprias do app
 *    (Quantidade, Nome, Set, Tipo, Raridade, Condicao, Foil, Promo, Curio,
 *    PrecoPago, Moeda, Notas) - round-trip sem perdas com os proprios dados.
 * Decks e Listas usam o formato completo pra CSV, e continuam com o texto
 * livre "quantidade + nome" (ja existente) como formato sugerido/leve.
 *
 * Sem dependencias externas - parser/gerador de CSV proprios (RFC4180).
 */
(function () {
  "use strict";

  // ---------------- CSV: parse e geracao ----------------
  function parseCsv(text) {
    text = String(text || "").replace(/^﻿/, "");
    var rows = [];
    var row = [];
    var field = "";
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else inQuotes = false;
        } else field += c;
      } else if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(field); field = "";
      } else if (c === "\n") {
        row.push(field); rows.push(row); row = []; field = "";
      } else if (c === "\r") {
        // ignorado - \n normalmente segue
      } else {
        field += c;
      }
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows.filter(function (r) { return !(r.length === 1 && r[0] === ""); });
  }

  function parseCsvObjects(text) {
    var rows = parseCsv(text);
    if (!rows.length) return [];
    var header = rows[0].map(function (h) { return String(h || "").trim(); });
    return rows.slice(1).map(function (r) {
      var obj = {};
      header.forEach(function (h, i) { obj[h] = r[i] != null ? r[i] : ""; });
      return obj;
    });
  }

  function csvEscape(v) {
    var s = v == null ? "" : String(v);
    if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function buildCsv(header, rows) {
    var lines = [header.map(csvEscape).join(",")];
    rows.forEach(function (r) { lines.push(r.map(csvEscape).join(",")); });
    return lines.join("\r\n");
  }

  var FULL_HEADER = ["Edicao (PTBR)", "Edicao (EN)", "Edicao (Sigla)", "Card (PT)", "Card (EN)", "Quantidade",
    "Qualidade (M NM SP MP HP D)", "Idioma (BR EN DE ES FR IT JP KO RU TW)", "Raridade",
    "Cor (C D O E Y F R G L M P W)", "Extras", "Card #", "Comentario", "# Cards na Edicao"];

  var SIMPLE_HEADER = ["Quantidade", "Nome", "Set", "Tipo", "Raridade", "Condicao", "Foil", "Promo", "Curio", "PrecoPago", "Moeda", "Notas"];

  // ---------------- Vocabulario: mapeamento de codigos externos <-> app ----------------
  var SET_SIGLA_TO_NAME = {
    ALPH: "Alpha", ALPHA: "Alpha",
    BETA: "Beta",
    ARLE: "Arthurian Legends", AL: "Arthurian Legends",
    DRAG: "Dragonlord", DRAGON: "Dragonlord", DRAGONLORD: "Dragonlord", DRGN: "Dragonlord",
    GOTH: "Gothic", GOTHIC: "Gothic",
    PROM: "Promo", PROMO: "Promo"
  };
  var SET_NAME_TO_SIGLA = { Alpha: "ALPH", Beta: "BETA", "Arthurian Legends": "ARLE", Dragonlord: "DRAG", Gothic: "GOTH", Promo: "PROMO" };

  var RARITY_CODE_TO_NAME = { O: "Ordinary", EX: "Exceptional", EL: "Elite", UN: "Unique" };
  var RARITY_NAME_TO_CODE = { Ordinary: "O", Exceptional: "EX", Elite: "EL", Unique: "UN" };

  // Qualidade do arquivo de exemplo (M NM SP MP HP D) -> condicao do app (NM LP MP HP DMG)
  var CONDITION_CSV_TO_APP = { M: "NM", NM: "NM", SP: "LP", MP: "MP", HP: "HP", D: "DMG" };
  var CONDITION_APP_TO_CSV = { NM: "NM", LP: "SP", MP: "MP", HP: "HP", DMG: "D" };

  // Cor (so os codigos relevantes pra Sorcery aparecem no arquivo de exemplo:
  // 0=incolor, A=Air, E=Earth, F=Fire, W=Water; os demais codigos do cabecalho
  // sao de outros jogos suportados pela ferramenta de origem e sao ignorados).
  var ELEMENT_CODE_TO_NAME = { A: "Air", E: "Earth", F: "Fire", W: "Water" };
  var ELEMENT_NAME_TO_CODE = { Air: "A", Earth: "E", Fire: "F", Water: "W" };

  function setNameFromHint(setEn, sigla) {
    if (setEn) {
      var m = UI.SET_LIST.find(function (s) { return UI.normalizeCardName(s) === UI.normalizeCardName(setEn); });
      if (m) return m;
    }
    if (sigla) {
      var code = String(sigla).trim().toUpperCase();
      if (SET_SIGLA_TO_NAME[code]) return SET_SIGLA_TO_NAME[code];
    }
    return null;
  }

  function elementToColorCode(elements) {
    if (!elements || !elements.length) return "0";
    return ELEMENT_NAME_TO_CODE[elements[0]] || "0";
  }

  function extrasFlags(extras) {
    var s = String(extras || "");
    return { isFoil: /foil/i.test(s), isPromo: /promo/i.test(s), isCurio: /curio/i.test(s) };
  }

  function flagsToExtras(entry) {
    var parts = [];
    if (entry.isFoil) parts.push("Foil");
    if (entry.isPromo) parts.push("Promo");
    if (entry.isCurio) parts.push("Curio");
    return parts.join("/");
  }

  // ---------------- Matching: resolve nome (+ dica de set) contra o catalogo ----------------
  // Retorna { card, score, method } quando resolvido, ou { card: null, candidates } quando nao.
  function resolveCardFromRow(name, setNameHint, catalog) {
    if (!name) return { card: null, candidates: [] };
    var normName = UI.normalizeCardName(name);
    var pool = catalog;
    if (setNameHint) {
      var bySet = catalog.filter(function (c) { return c.set === setNameHint; });
      if (bySet.length) pool = bySet;
    }
    var exact = pool.filter(function (c) { return UI.normalizeCardName(c.name) === normName; });
    if (exact.length) return { card: exact[0], score: 1, method: "exact" };

    var fuzzy = DeckUtils.fuzzyFindCard(name, pool, 5);
    if (fuzzy[0] && fuzzy[0].score >= 0.72) return { card: fuzzy[0].card, score: fuzzy[0].score, method: "fuzzy-set", candidates: fuzzy };

    if (pool !== catalog) {
      var fuzzyAll = DeckUtils.fuzzyFindCard(name, catalog, 5);
      if (fuzzyAll[0] && fuzzyAll[0].score >= 0.72) return { card: fuzzyAll[0].card, score: fuzzyAll[0].score, method: "fuzzy-all", candidates: fuzzyAll };
      return { card: null, candidates: fuzzyAll };
    }
    return { card: null, candidates: fuzzy };
  }

  // ---------------- Deteccao de formato (Colecao) ----------------
  function detectCollectionCsvFormat(text) {
    var rows = parseCsv(text);
    if (!rows.length) return null;
    var header = rows[0].map(function (h) { return String(h || "").replace(/^﻿/, "").trim(); });
    if (header.indexOf("Card (EN)") !== -1) return "full";
    if (header.indexOf("Nome") !== -1) return "simple";
    return null;
  }

  // ---------------- Colecao: import (formato completo) ----------------
  function parseCollectionFullRow(row) {
    var name = row["Card (EN)"] || row["Card (PT)"] || "";
    var setEn = row["Edicao (EN)"] || "";
    var sigla = row["Edicao (Sigla)"] || "";
    var setNameHint = setNameFromHint(setEn, sigla);
    var qty = parseInt(row["Quantidade"], 10) || 1;
    var qualCode = String(row["Qualidade (M NM SP MP HP D)"] || "NM").trim().toUpperCase();
    var condition = CONDITION_CSV_TO_APP[qualCode] || "NM";
    var lang = String(row["Idioma (BR EN DE ES FR IT JP KO RU TW)"] || "").trim();
    var comment = String(row["Comentario"] || "").trim();
    var flags = extrasFlags(row["Extras"]);
    var notesParts = [];
    if (lang && !/^(en|br)$/i.test(lang)) notesParts.push("Idioma: " + lang);
    if (comment) notesParts.push(comment);
    return {
      name: name, setNameHint: setNameHint, quantity: qty, condition: condition,
      isFoil: flags.isFoil, isPromo: flags.isPromo, isCurio: flags.isCurio,
      notes: notesParts.join(" · ")
    };
  }

  function parseCollectionSimpleRow(row) {
    var name = row["Nome"] || "";
    var setNameHint = row["Set"] && UI.SET_LIST.indexOf(row["Set"]) !== -1 ? row["Set"] : null;
    var qty = parseInt(row["Quantidade"], 10) || 1;
    var condRaw = String(row["Condicao"] || "NM").trim().toUpperCase();
    var condition = UI.CONDITION_LIST.indexOf(condRaw) !== -1 ? condRaw : "NM";
    function truthy(v) { return /^(1|true|sim|yes|x)$/i.test(String(v || "").trim()); }
    var price = row["PrecoPago"] ? parseFloat(String(row["PrecoPago"]).replace(",", ".")) : undefined;
    return {
      name: name, setNameHint: setNameHint, quantity: qty, condition: condition,
      isFoil: truthy(row["Foil"]), isPromo: truthy(row["Promo"]), isCurio: truthy(row["Curio"]),
      pricePaid: isNaN(price) ? undefined : price, currency: row["Moeda"] || undefined,
      notes: row["Notas"] || ""
    };
  }

  // Retorna { resolved: [{...campos, card}], unresolved: [{...campos, candidates}] }
  function importCollectionCsv(text, catalog) {
    var format = detectCollectionCsvFormat(text);
    if (!format) return { format: null, resolved: [], unresolved: [] };
    var objs = parseCsvObjects(text);
    var parseRow = format === "full" ? parseCollectionFullRow : parseCollectionSimpleRow;
    var resolved = [], unresolved = [];
    objs.forEach(function (row) {
      var parsed = parseRow(row);
      if (!parsed.name) return;
      var m = resolveCardFromRow(parsed.name, parsed.setNameHint, catalog);
      if (m.card) resolved.push(Object.assign({}, parsed, { card: m.card }));
      else unresolved.push(Object.assign({}, parsed, { candidates: m.candidates || [] }));
    });
    return { format: format, resolved: resolved, unresolved: unresolved };
  }

  // ---------------- Colecao: export ----------------
  function exportCollectionFullCsv(collection, catalog) {
    var rows = collection.map(function (e) {
      var c = catalog.find(function (x) { return x.id === e.cardId; }) || {};
      return ["", c.set || "", SET_NAME_TO_SIGLA[c.set] || "", "", c.name || "", e.quantity,
        CONDITION_APP_TO_CSV[e.condition] || "NM", "", RARITY_NAME_TO_CODE[c.rarity] || "None",
        elementToColorCode(c.elements), flagsToExtras(e), "", e.notes || "", ""];
    });
    return buildCsv(FULL_HEADER, rows);
  }

  function exportCollectionSimpleCsv(collection, catalog) {
    var rows = collection.map(function (e) {
      var c = catalog.find(function (x) { return x.id === e.cardId; }) || {};
      return [e.quantity, c.name || "", c.set || "", c.type || "", c.rarity || "", e.condition || "NM",
        e.isFoil ? "1" : "0", e.isPromo ? "1" : "0", e.isCurio ? "1" : "0",
        e.pricePaid != null ? e.pricePaid : "", e.currency || "", e.notes || ""];
    });
    return buildCsv(SIMPLE_HEADER, rows);
  }

  // ---------------- Decks: import/export CSV (formato completo) ----------------
  // Reaproveita DeckUtils.buildDeckFromParsed (mesma logica de deteccao de
  // Avatar/Atlas/Spellbook por tipo de carta ja usada no import de texto).
  function parseDeckCsvToParsed(text) {
    var objs = parseCsvObjects(text);
    var entries = objs.map(function (row) {
      var name = row["Card (EN)"] || "";
      return { quantity: parseInt(row["Quantidade"], 10) || 1, name: name };
    }).filter(function (e) { return e.name; });
    return { avatarName: null, entries: entries };
  }

  function exportDeckCsv(deck, catalog) {
    var rows = [];
    function pushEntry(cardId, qty) {
      var c = catalog.find(function (x) { return x.id === cardId; }) || {};
      rows.push(["", c.set || "", SET_NAME_TO_SIGLA[c.set] || "", "", c.name || "", qty,
        "", "", RARITY_NAME_TO_CODE[c.rarity] || "None", elementToColorCode(c.elements), "", "", "", ""]);
    }
    if (deck.avatar) pushEntry(deck.avatar.cardId, deck.avatar.quantity);
    (deck.atlas || []).forEach(function (e) { pushEntry(e.cardId, e.quantity); });
    (deck.spellbook || []).forEach(function (e) { pushEntry(e.cardId, e.quantity); });
    // Nota: o CSV nao tem uma coluna de "secao", entao as cartas da Collection
    // (reserva de 10 usada durante a partida) entram aqui tambem pra nao se
    // perderem no export, mas na reimportacao caem de volta em Atlas/Spellbook
    // pelo tipo (nao ha como marcar "isso e Collection" nesse formato).
    (deck.collection || []).forEach(function (e) { pushEntry(e.cardId, e.quantity); });
    return buildCsv(FULL_HEADER, rows);
  }

  // ---------------- Listas: import/export CSV (formato completo) + texto livre ----------------
  function importListCsv(text, catalog) {
    var objs = parseCsvObjects(text);
    var resolved = [], unresolved = [];
    objs.forEach(function (row) {
      var name = row["Card (EN)"] || "";
      if (!name) return;
      var setNameHint = setNameFromHint(row["Edicao (EN)"], row["Edicao (Sigla)"]);
      var qty = parseInt(row["Quantidade"], 10) || 1;
      var notes = String(row["Comentario"] || "").trim();
      var m = resolveCardFromRow(name, setNameHint, catalog);
      var entry = { name: name, quantity: qty, notes: notes };
      if (m.card) resolved.push(Object.assign({}, entry, { card: m.card }));
      else unresolved.push(Object.assign({}, entry, { candidates: m.candidates || [] }));
    });
    return { resolved: resolved, unresolved: unresolved };
  }

  function exportListCsv(list, catalog) {
    var rows = list.items.map(function (i) {
      var c = catalog.find(function (x) { return x.id === i.cardId; }) || {};
      return ["", c.set || "", SET_NAME_TO_SIGLA[c.set] || "", "", c.name || "", i.quantity,
        "", "", RARITY_NAME_TO_CODE[c.rarity] || "None", elementToColorCode(c.elements), "", "", i.notes || "", ""];
    });
    return buildCsv(FULL_HEADER, rows);
  }

  // Texto livre "quantidade + nome" (mesmo formato ja usado nos decks) -
  // formato sugerido/leve pra Listas, reaproveitando o parser de DeckUtils.
  function resolveTextEntries(text, catalog) {
    var entries = DeckUtils.parseDeckText(text).entries;
    var resolved = [], unresolved = [];
    entries.forEach(function (e) {
      var matches = DeckUtils.fuzzyFindCard(e.name, catalog, 5);
      var best = matches[0];
      if (best && best.score >= 0.72) resolved.push({ name: e.name, quantity: e.quantity, card: best.card });
      else unresolved.push({ name: e.name, quantity: e.quantity, candidates: matches });
    });
    return { resolved: resolved, unresolved: unresolved };
  }

  // ---------------- Download helper ----------------
  function downloadTextFile(filename, content, mime) {
    var blob = new Blob([content], { type: mime || "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
  }

  window.ImportExport = {
    parseCsv: parseCsv,
    parseCsvObjects: parseCsvObjects,
    buildCsv: buildCsv,
    FULL_HEADER: FULL_HEADER,
    SIMPLE_HEADER: SIMPLE_HEADER,
    resolveCardFromRow: resolveCardFromRow,
    detectCollectionCsvFormat: detectCollectionCsvFormat,
    importCollectionCsv: importCollectionCsv,
    exportCollectionFullCsv: exportCollectionFullCsv,
    exportCollectionSimpleCsv: exportCollectionSimpleCsv,
    parseDeckCsvToParsed: parseDeckCsvToParsed,
    exportDeckCsv: exportDeckCsv,
    importListCsv: importListCsv,
    exportListCsv: exportListCsv,
    resolveTextEntries: resolveTextEntries,
    downloadTextFile: downloadTextFile
  };
})();
