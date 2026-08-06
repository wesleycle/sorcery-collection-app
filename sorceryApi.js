/* sorceryApi.js
 * Importacao do catalogo a partir da API publica oficial do jogo
 * (mantida pela equipe do Curiosa.io): https://api.sorcerytcg.com/api/cards
 *
 * IMPORTANTE - por que nao ha mais fetch() ao vivo pra essa API: o servidor
 * nao envia cabecalho Access-Control-Allow-Origin, entao o navegador BLOQUEIA
 * (CORS) qualquer fetch() feito a partir de uma pagina aberta via file://
 * (o jeito normal de abrir este app) ou de qualquer outro dominio que nao
 * seja o proprio api.sorcerytcg.com - isso nao tem workaround sem um
 * servidor no meio. Por isso a resposta da API fica congelada em
 * sorcery-api-cards-data.js (window.SORCERY_API_CARDS_SNAPSHOT), carregada
 * via <script> (que nao sofre CORS) em vez de buscada em tempo real. O botao
 * "Atualizar Catalogo (API oficial)" em Configuracoes roda o merge abaixo
 * usando o snapshot local; pra pegar cartas/edicoes novas, o snapshot
 * precisa ser atualizado (ver comentario no topo de sorcery-api-cards-data.js).
 *
 * Formato de cada item da resposta (um por carta unica - nome):
 *   {
 *     name, elements: "Air" | "Earth, Water" | "None", subTypes,
 *     guardian: { rarity, type, rulesText, cost, attack, defence, life, thresholds },
 *     sets: [
 *       { name, releasedAt, metadata: <mesma forma do guardian, por reimpressao>,
 *         variants: [ { slug, finish, product, artist, flavorText, typeText } ] }
 *     ]
 *   }
 *
 * Cada sets[i] e uma reimpressao (edicao) diferente da mesma carta - viramos
 * uma entrada de catalogo por (carta, edicao), exatamente como o catalogo ja
 * funciona hoje. Cada sets[i].variants[j] e uma combinacao de acabamento
 * (Standard/Foil) x produto (Booster/Preconstructed Deck/promo...) - so
 * usamos UMA variante representativa por edicao (preferindo Booster+Standard)
 * pra derivar o "imagePath" base; o proprio slug dessa variante ja e, sem
 * modificacao nenhuma, o nome do arquivo de imagem correspondente na pasta
 * oficial do Google Drive (ver imageResolver.js) - variantes Foil/Standard da
 * MESMA edicao acabam resolvidas automaticamente pela composicao
 * imagePath + "-s"/"-f" ja usada pelo resto do app.
 *
 * IMPORTANTE sobre IDs: pra nao quebrar colecao/decks/listas que ja
 * referenciam cartas do catalogo atual pelo campo "id", NUNCA trocamos o id
 * de uma carta ja existente - so atualizamos os campos dela em memoria. Uma
 * carta so ganha um id novo se nao existir nenhuma correspondente no
 * catalogo atual (ex: carta de um set lancado depois da ultima atualizacao).
 */
(function () {
  "use strict";

  var API_URL = "https://api.sorcerytcg.com/api/cards"; // referencia/origem do snapshot - nao e mais chamada em runtime (ver acima)

  // Mesmo mapa usado por imageResolver.js (setCodes pra montar o id/base do
  // nome de arquivo) - duplicado aqui de proposito pra este arquivo nao
  // depender de detalhes internos do imageResolver, so do contrato publico
  // dele (ImageResolver.slugify/baseNameFor).
  var SET_CODES = {
    "Alpha": "alp",
    "Beta": "bet",
    "Arthurian Legends": "art",
    "Dragonlord": "dra",
    "Gothic": "got",
    "Promo": "pro",
    "Promotional": "pro"
  };
  // Normaliza variacoes de nome de set que a API pode usar, pro valor bater
  // com o que o resto do app espera (UI.SET_LIST, filtros, badges).
  var SET_NAME_ALIASES = { "Promotional": "Promo" };

  function normalizeSetName(name) {
    name = String(name || "").trim();
    return SET_NAME_ALIASES[name] || name;
  }

  function setCodeFor(setName) {
    return SET_CODES[setName] || slugifyDashes(setName).slice(0, 3);
  }

  // Slug com hifen (usado so pra derivar codigo de set desconhecido, nunca
  // pra montar o id da carta - ver underscoreSlug abaixo).
  function slugifyDashes(s) {
    return String(s || "").toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  // Slug com underscore - mesma convencao ja usada pelos ids/imagePath
  // existentes no catalogo (ex: "alp-accursed_albatross"), derivados
  // originalmente do nome real dos arquivos de imagem.
  function underscoreSlug(s) {
    return String(s || "").toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  }

  function normalizeCardNameKey(name) {
    return String(name || "").trim().toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, " ").trim();
  }

  // "Air" | "Earth, Water" | "None" | "" -> ["Air"] | ["Earth","Water"] | []
  function parseElements(raw) {
    return String(raw || "").split(",")
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s && s.toLowerCase() !== "none"; });
  }

  function normalizeThresholds(t) {
    t = t || {};
    return { air: t.air || 0, earth: t.earth || 0, fire: t.fire || 0, water: t.water || 0 };
  }

  // Entre as variantes de uma edicao, prioriza Booster+Standard (a "capa"
  // mais comum da carta) - se nao existir, cai pra qualquer Standard, depois
  // pra primeira variante disponivel (foil de promo, por exemplo).
  function pickRepresentativeVariant(variants) {
    if (!variants || !variants.length) return null;
    var booster = variants.find(function (v) { return v.product === "Booster" && v.finish === "Standard"; });
    if (booster) return booster;
    var standard = variants.find(function (v) { return v.finish === "Standard"; });
    if (standard) return standard;
    return variants[0];
  }

  // "001-apprentice_wizard-b-s" -> "001-apprentice_wizard-b" (remove so o
  // sufixo de acabamento -s/-f do final, preservando o resto do slug tal
  // como veio da API - nunca reconstruimos o slug manualmente).
  function stripFinishSuffix(slug) {
    return String(slug || "").replace(/-(s|f)$/i, "");
  }

  // Constroi (ou atualiza) uma entrada de catalogo pra uma (carta, edicao).
  function buildEntryFields(apiCard, setEntry) {
    var setName = normalizeSetName(setEntry.name);
    var guardian = apiCard.guardian || {};
    var metadata = setEntry.metadata || {};
    var variant = pickRepresentativeVariant(setEntry.variants);
    if (!variant) return null; // sem variante nenhuma, sem como resolver imagem/artista

    var type = metadata.type || guardian.type || null;
    var rarity = metadata.rarity || guardian.rarity || null;
    var cost = metadata.cost !== undefined ? metadata.cost : (guardian.cost !== undefined ? guardian.cost : null);
    var attack = metadata.attack !== undefined ? metadata.attack : guardian.attack;
    var defence = metadata.defence !== undefined ? metadata.defence : guardian.defence;
    var life = metadata.life !== undefined ? metadata.life : guardian.life;
    var rulesText = metadata.rulesText || guardian.rulesText || "";

    return {
      name: apiCard.name,
      set: setName,
      type: type,
      elements: parseElements(apiCard.elements),
      rarity: rarity,
      cost: cost != null ? cost : null,
      threshold: normalizeThresholds(metadata.thresholds || guardian.thresholds),
      power: attack != null ? attack : null,
      life: life != null ? life : (defence != null ? defence : null),
      effectText: String(rulesText).replace(/\r\n/g, "\n"),
      flavorText: variant.flavorText || "",
      artist: variant.artist || "",
      imagePath: stripFinishSuffix(variant.slug),
      slug: variant.slug,
      finish: variant.finish || null,
      product: variant.product || null,
      subTypes: apiCard.subTypes || "",
      releasedAt: setEntry.releasedAt || null,
      isLandscape: type === "Site",
      metadataVerified: true
    };
  }

  // Devolve a lista bruta de cartas a partir do snapshot local embutido no
  // app (ver nota de CORS no topo do arquivo) - sem nenhuma chamada de rede.
  // Usado pela checagem automatica e silenciosa no boot (ver app.js).
  function fetchApiCardsFromSnapshot() {
    return new Promise(function (resolve, reject) {
      var json = window.SORCERY_API_CARDS_SNAPSHOT;
      if (!json) {
        reject(new Error("Snapshot da API (sorcery-api-cards-data.js) não foi carregado - confira o <script> em index.html."));
        return;
      }
      var list = extractCardList(json);
      if (!list) { reject(new Error("Snapshot da API vazio ou em formato inesperado.")); return; }
      resolve(list);
    });
  }

  // Busca a API AO VIVO, via a Netlify Function que roda no servidor (sem
  // CORS - ver netlify/functions/catalog-fetch.js). Usada pelo botao
  // "Atualizar base cartas", pra pegar cartas/edicoes novas mesmo antes do
  // snapshot local ser regenerado num proximo deploy.
  function fetchApiCardsLive() {
    return fetch("/.netlify/functions/catalog-fetch", { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) return res.text().then(function (t) { throw new Error("Falha ao buscar API ao vivo (" + res.status + "): " + t.slice(0, 200)); });
        return res.json();
      })
      .then(function (json) {
        var list = extractCardList(json);
        if (!list) throw new Error("Resposta da API ao vivo vazia ou em formato inesperado.");
        return list;
      });
  }

  function extractCardList(json) {
    var list = Array.isArray(json) ? json : (json.cards || json.data || []);
    return (Array.isArray(list) && list.length) ? list : null;
  }

  // Achata sets[]/variants[] em impressoes, e faz merge com o catalogo atual
  // (data.catalog) SEM trocar o id de nenhuma carta ja existente - so
  // atualiza os campos dela. Cartas novas (sets/edicoes que ainda nao
  // existiam no catalogo) sao adicionadas com id novo. Retorna
  // { added, updated, totalPrintings, totalApiCards }.
  function mergeCatalog(apiCards) {
    var catalog = State.getCatalog().slice(); // copia - mutamos entradas existentes in place, mas o array e novo
    var byId = {};
    var byNameSet = {};
    catalog.forEach(function (c) {
      byId[c.id] = c;
      byNameSet[normalizeCardNameKey(c.name) + "|" + c.set] = c;
    });

    var added = 0, updated = 0, totalPrintings = 0;

    apiCards.forEach(function (apiCard) {
      var sets = apiCard.sets || [];
      sets.forEach(function (setEntry) {
        var fields = buildEntryFields(apiCard, setEntry);
        if (!fields) return;
        totalPrintings++;

        var setCode = setCodeFor(fields.set);
        var candidateId = setCode + "-" + underscoreSlug(fields.name);
        var nameSetKey = normalizeCardNameKey(fields.name) + "|" + fields.set;

        var existing = byId[candidateId] || byNameSet[nameSetKey];
        if (existing) {
          // Preserva id, keywords/rulings ja curados manualmente (a API
          // publica nao expoe esses dois campos) - atualiza o resto.
          Object.assign(existing, fields, {
            id: existing.id,
            keywords: existing.keywords || [],
            rulings: existing.rulings || []
          });
          updated++;
        } else {
          var newId = candidateId;
          var suffix = 2;
          while (byId[newId]) { newId = candidateId + "-" + suffix; suffix++; }
          var newCard = Object.assign({ id: newId, keywords: [], rulings: [] }, fields);
          catalog.push(newCard);
          byId[newId] = newCard;
          byNameSet[nameSetKey] = newCard;
          added++;
        }
      });
    });

    State.replaceCatalog(catalog);
    return { added: added, updated: updated, totalPrintings: totalPrintings, totalApiCards: apiCards.length };
  }

  // Atualizacao silenciosa a partir do snapshot embutido (sem rede) - usada
  // no boot automatico (ver app.js).
  function updateCatalog() {
    return fetchApiCardsFromSnapshot().then(mergeCatalog);
  }

  // Atualizacao AO VIVO a partir da API oficial (via Netlify Function) - usada
  // pelo botao "Atualizar base cartas" em Configuracoes.
  function updateCatalogLive() {
    return fetchApiCardsLive().then(mergeCatalog);
  }

  window.SorceryApi = {
    API_URL: API_URL,
    updateCatalog: updateCatalog,
    updateCatalogLive: updateCatalogLive,
    // Exposto pra debug/teste manual no console do navegador.
    _internal: { parseElements: parseElements, underscoreSlug: underscoreSlug, stripFinishSuffix: stripFinishSuffix, pickRepresentativeVariant: pickRepresentativeVariant }
  };
})();
