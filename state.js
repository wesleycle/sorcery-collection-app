/* state.js
 * Estado central do app (catalogo, colecao, decks, listas, configuracoes) +
 * operacoes de CRUD. Toda mutacao chama State.persist() que grava via Storage
 * (arquivo data.json + localStorage) e via DataSync (GitHub, automatico e
 * silencioso - ver dataSync.js), ambos debounced.
 */
(function () {
  "use strict";

  var SCHEMA_VERSION = 1;

  function uuid() {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function nowIso() { return new Date().toISOString(); }

  function defaultSettings() {
    return {
      catalogUpdateUrl: "",
      defaultCurrency: "BRL",
      collectionViewMode: "grid",
      catalogViewMode: "grid",
      deckViewMode: "build",
      listsViewMode: "grid",
      lastCatalogUpdate: null,
      // Ultima vez que o indice de imagens do Google Drive oficial (slug ->
      // ID do arquivo) foi atualizado - ver driveImageIndex abaixo.
      driveImageIndexLastUpdate: null
    };
  }

  // Listas sao 100% criadas pelo usuario (nome + descricao) - nao ha mais
  // "Wishlist"/"Lista de Troca" pre-criadas nem um campo "type" especial.
  function emptyState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      catalog: (window.SEED_CATALOG || []).slice(),
      collection: [],
      decks: [],
      lists: [],
      settings: defaultSettings(),
      // Indice de imagens da pasta oficial do jogo no Google Drive (chave
      // "<slug>.png" -> ID do arquivo no Drive, ver imageResolver.js e
      // sorceryApi.js). Semeado uma vez de window.SEED_DRIVE_IMAGE_INDEX
      // (drive-image-index-data.js) no primeiro uso, igual ao catalogo -
      // depois disso o indice salvo nos dados do usuario e que vale, e pode
      // ser atualizado reimportando um backup com o indice mais completo.
      driveImageIndex: Object.assign({}, window.SEED_DRIVE_IMAGE_INDEX || {}),
      // Indice de imagens de uma pasta PESSOAL do usuario no Google Drive
      // (chave "<nome_do_arquivo_real>.png" -> ID do arquivo, ver
      // imageResolver.js e personal-drive-image-index-data.js) - fonte
      // alternativa usada quando a pasta oficial acima ainda nao tem a carta.
      personalDriveImageIndex: Object.assign({}, window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {}),
      meta: { catalogSeedApplied: true, seedVersion: 1 }
    };
  }

  // Migra dados salvos de uma versao anterior, onde toda lista tinha um campo
  // "type" ("wishlist"/"tradelist") que a distinguia. Agora listas sao todas
  // iguais (so nome+descricao), entao so removemos o campo type e garantimos
  // "description" - os itens e o nome que o usuario ja tinha sao preservados,
  // viram uma lista normal que ele pode renomear/apagar como qualquer outra.
  function migrateLegacyLists() {
    data.lists.forEach(function (l) {
      if (l.type !== undefined) delete l.type;
      if (l.description === undefined) l.description = "";
    });
  }

  var data = null;
  var listeners = [];
  var connectionStatus = { mode: "none" }; // "file" | "localStorage" | "none"

  function subscribe(fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (l) { return l !== fn; }); }; }
  function notify() { listeners.forEach(function (fn) { try { fn(data); } catch (e) { console.error(e); } }); }

  function persist() {
    notify();
    Storage.save(data);
    if (window.DataSync) DataSync.pushDebounced(data);
  }
  function persistImmediate() {
    notify();
    var result = Storage.saveImmediate(data);
    if (window.DataSync) DataSync.pushDebounced(data);
    return result;
  }

  // Aplica um estado vindo do GitHub (ver DataSync.pull(), chamado no boot em
  // app.js) - grava so localmente (cache/fallback offline) e NAO reenvia pro
  // GitHub, já que o dado acabou de vir de lá (evita um commit inutil a cada
  // carregamento de pagina).
  function applyRemoteState(newData) {
    if (!newData) return;
    data = newData;
    if (!data.catalog || !data.catalog.length) data.catalog = (window.SEED_CATALOG || []).slice();
    if (!data.lists) data.lists = [];
    migrateLegacyLists();
    if (!data.settings) data.settings = defaultSettings();
    if (data.settings.listsViewMode === undefined) data.settings.listsViewMode = "grid";
    if (!data.decks) data.decks = [];
    data.decks.forEach(function (d) {
      if (!d.collection) d.collection = [];
      if (d.isFavorite === undefined) d.isFavorite = false;
    });
    data.lists.forEach(function (l) { if (l.isFavorite === undefined) l.isFavorite = false; });
    if (!data.driveImageIndex) data.driveImageIndex = Object.assign({}, window.SEED_DRIVE_IMAGE_INDEX || {});
    if (!data.personalDriveImageIndex) data.personalDriveImageIndex = Object.assign({}, window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {});
    if (data.settings.driveImageIndexLastUpdate === undefined) data.settings.driveImageIndexLastUpdate = null;
    if (!data.schemaVersion) data.schemaVersion = SCHEMA_VERSION;
    notify();
    Storage.saveImmediate(data);
  }

  // ---------------- Init ----------------
  function init() {
    return Storage.load().then(function (loaded) {
      if (loaded && loaded.collection) {
        data = loaded;
        if (!data.catalog || !data.catalog.length) data.catalog = (window.SEED_CATALOG || []).slice();
        if (!data.lists) data.lists = [];
        migrateLegacyLists();
        if (!data.settings) data.settings = defaultSettings();
        if (data.settings.listsViewMode === undefined) data.settings.listsViewMode = "grid";
        if (!data.decks) data.decks = [];
        data.decks.forEach(function (d) {
          if (!d.collection) d.collection = [];
          if (d.isFavorite === undefined) d.isFavorite = false;
        });
        data.lists.forEach(function (l) { if (l.isFavorite === undefined) l.isFavorite = false; });
        // Migracao: instalacoes antigas tinham "imageOverrides" (link manual por
        // carta) e "imageLinks" (links OneDrive). O app nao le mais nenhum dos
        // dois campos (fonte de imagem agora e so o indice do Google Drive
        // oficial, ver driveImageIndex) - deixamos os campos antigos como estao
        // (nao apagamos dado do usuario), so paramos de usa-los.
        if (!data.driveImageIndex) data.driveImageIndex = Object.assign({}, window.SEED_DRIVE_IMAGE_INDEX || {});
        if (!data.personalDriveImageIndex) data.personalDriveImageIndex = Object.assign({}, window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {});
        if (data.settings.driveImageIndexLastUpdate === undefined) data.settings.driveImageIndexLastUpdate = null;
        if (!data.meta) data.meta = { catalogSeedApplied: true, seedVersion: 1 };
      } else {
        data = emptyState();
      }
      notify();
      return data;
    });
  }

  // ---------------- Catalog ----------------
  function getCatalog() { return data.catalog; }
  function getCatalogCard(cardId) { return data.catalog.find(function (c) { return c.id === cardId; }); }

  function replaceCatalog(newCatalogArray) {
    data.catalog = newCatalogArray;
    data.settings.lastCatalogUpdate = nowIso();
    persist();
  }

  // ---------------- Collection ----------------
  function getCollection() { return data.collection; }
  function getCollectionEntriesForCard(cardId) { return data.collection.filter(function (c) { return c.cardId === cardId; }); }
  function getCollectionQtyForCard(cardId) {
    return getCollectionEntriesForCard(cardId).reduce(function (sum, e) { return sum + e.quantity; }, 0);
  }

  function addCollectionEntry(fields) {
    var entry = {
      id: uuid(),
      cardId: fields.cardId,
      quantity: fields.quantity || 1,
      condition: fields.condition || "NM",
      pricePaid: fields.pricePaid != null ? fields.pricePaid : undefined,
      currency: fields.currency || data.settings.defaultCurrency || "BRL",
      isFoil: !!fields.isFoil,
      isPromo: !!fields.isPromo,
      isCurio: !!fields.isCurio,
      notes: fields.notes || "",
      addedAt: nowIso(),
      updatedAt: nowIso()
    };
    data.collection.push(entry);
    persist();
    return entry;
  }

  function updateCollectionEntry(id, patch) {
    var entry = data.collection.find(function (e) { return e.id === id; });
    if (!entry) return null;
    Object.assign(entry, patch, { updatedAt: nowIso() });
    persist();
    return entry;
  }

  function incrementCollectionEntry(id, delta) {
    var entry = data.collection.find(function (e) { return e.id === id; });
    if (!entry) return null;
    entry.quantity = Math.max(0, entry.quantity + delta);
    entry.updatedAt = nowIso();
    if (entry.quantity === 0) {
      data.collection = data.collection.filter(function (e) { return e.id !== id; });
    }
    persist();
    return entry.quantity;
  }

  function removeCollectionEntry(id) {
    data.collection = data.collection.filter(function (e) { return e.id !== id; });
    persist();
  }

  // Quebra uma entrada de quantidade N (todas as copias com a mesma
  // condicao/foil/preco/notas) em N entradas de quantidade 1 - permite editar
  // cada copia individualmente depois (ex: uma das N na verdade e foil, ou foi
  // paga com valor diferente). Preserva id original na primeira copia.
  function splitCollectionEntry(id) {
    var entry = data.collection.find(function (e) { return e.id === id; });
    if (!entry || entry.quantity <= 1) return null;
    var qty = entry.quantity;
    var clones = [];
    for (var i = 0; i < qty; i++) {
      clones.push(Object.assign({}, entry, { id: i === 0 ? entry.id : uuid(), quantity: 1, updatedAt: nowIso() }));
    }
    data.collection = data.collection.filter(function (e) { return e.id !== id; }).concat(clones);
    persist();
    return clones;
  }

  // Reagrupa entradas de uma mesma carta que tenham EXATAMENTE as mesmas
  // caracteristicas (condicao, foil/promo/curio, preco, moeda, notas) numa
  // unica entrada com a quantidade somada - o inverso de splitCollectionEntry,
  // pra voltar ao padrao "uma pilha, mesma caracteristica" quando fizer sentido.
  function mergeCollectionEntriesForCard(cardId) {
    var entries = data.collection.filter(function (e) { return e.cardId === cardId; });
    var others = data.collection.filter(function (e) { return e.cardId !== cardId; });
    var groups = {};
    var order = [];
    entries.forEach(function (e) {
      var key = [e.condition, !!e.isFoil, !!e.isPromo, !!e.isCurio, e.pricePaid != null ? e.pricePaid : "", e.currency || "", e.notes || ""].join("|");
      if (!groups[key]) { groups[key] = []; order.push(key); }
      groups[key].push(e);
    });
    var merged = order.map(function (key) {
      var group = groups[key];
      if (group.length === 1) return group[0];
      var base = group.slice().sort(function (a, b) { return new Date(a.addedAt) - new Date(b.addedAt); })[0];
      var totalQty = group.reduce(function (s, e) { return s + e.quantity; }, 0);
      return Object.assign({}, base, { quantity: totalQty, updatedAt: nowIso() });
    });
    data.collection = others.concat(merged);
    persist();
    return merged;
  }

  // ---------------- Decks ----------------
  function getDecks() { return data.decks; }
  function getDeck(id) { return data.decks.find(function (d) { return d.id === id; }); }

  function createDeck(fields) {
    var deck = {
      id: uuid(),
      name: fields.name || "Novo Deck",
      avatar: fields.avatar || null,
      atlas: fields.atlas || [],
      spellbook: fields.spellbook || [],
      collection: fields.collection || [], // reserva de ate 10 cartas usada durante a partida (secao "Collection" do deck)
      format: fields.format || "Constructed",
      notes: fields.notes || "",
      sourceMode: fields.sourceMode || "all", // "collection" | "all"
      isFavorite: !!fields.isFavorite,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };
    data.decks.push(deck);
    persist();
    return deck;
  }

  function updateDeck(id, patch) {
    var deck = getDeck(id);
    if (!deck) return null;
    Object.assign(deck, patch, { updatedAt: nowIso() });
    persist();
    return deck;
  }

  function deleteDeck(id) {
    data.decks = data.decks.filter(function (d) { return d.id !== id; });
    persist();
  }

  // Atalho pra favoritar/desfavoritar um deck (usado tanto na lista de decks
  // quanto de dentro do proprio construtor de deck) - retorna o novo estado.
  function toggleDeckFavorite(id) {
    var deck = getDeck(id);
    if (!deck) return null;
    deck.isFavorite = !deck.isFavorite;
    deck.updatedAt = nowIso();
    persist();
    return deck.isFavorite;
  }

  function getFavoriteDecks() { return data.decks.filter(function (d) { return d.isFavorite; }); }

  function duplicateDeck(id) {
    var deck = getDeck(id);
    if (!deck) return null;
    var copy = JSON.parse(JSON.stringify(deck));
    copy.id = uuid();
    copy.name = deck.name + " (cópia)";
    copy.createdAt = nowIso();
    copy.updatedAt = nowIso();
    data.decks.push(copy);
    persist();
    return copy;
  }

  function decksContainingCard(cardId) {
    return data.decks.filter(function (d) {
      var inAvatar = d.avatar && d.avatar.cardId === cardId;
      var inAtlas = d.atlas.some(function (e) { return e.cardId === cardId; });
      var inBook = d.spellbook.some(function (e) { return e.cardId === cardId; });
      var inCollection = (d.collection || []).some(function (e) { return e.cardId === cardId; });
      return inAvatar || inAtlas || inBook || inCollection;
    }).map(function (d) {
      var qty = 0;
      if (d.avatar && d.avatar.cardId === cardId) qty += d.avatar.quantity;
      d.atlas.forEach(function (e) { if (e.cardId === cardId) qty += e.quantity; });
      d.spellbook.forEach(function (e) { if (e.cardId === cardId) qty += e.quantity; });
      (d.collection || []).forEach(function (e) { if (e.cardId === cardId) qty += e.quantity; });
      return { deck: d, quantity: qty };
    });
  }

  // ---------------- Lists ----------------
  // Listas sao criadas livremente pelo usuario (nome + descricao opcional) -
  // nao existe mais "Wishlist"/"Lista de Troca" fixas.
  function getLists() { return data.lists; }
  function getList(id) { return data.lists.find(function (l) { return l.id === id; }); }

  function createList(fields) {
    fields = fields || {};
    var list = {
      id: uuid(),
      name: fields.name || "Nova Lista",
      description: fields.description || "",
      items: [],
      isFavorite: !!fields.isFavorite,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };
    data.lists.push(list);
    persist();
    return list;
  }

  function updateList(id, patch) {
    var list = getList(id);
    if (!list) return null;
    Object.assign(list, patch, { updatedAt: nowIso() });
    persist();
    return list;
  }

  function deleteList(id) {
    data.lists = data.lists.filter(function (l) { return l.id !== id; });
    persist();
  }

  // Atalho pra favoritar/desfavoritar uma lista (mesmo padrao dos decks) -
  // retorna o novo estado.
  function toggleListFavorite(id) {
    var list = getList(id);
    if (!list) return null;
    list.isFavorite = !list.isFavorite;
    list.updatedAt = nowIso();
    persist();
    return list.isFavorite;
  }

  function getFavoriteLists() { return data.lists.filter(function (l) { return l.isFavorite; }); }

  function addListItem(listId, item) {
    var list = data.lists.find(function (l) { return l.id === listId; });
    if (!list) return null;
    var existing = list.items.find(function (i) { return i.cardId === item.cardId; });
    if (existing) {
      existing.quantity += item.quantity || 1;
      if (item.notes) existing.notes = item.notes;
    } else {
      list.items.push({ cardId: item.cardId, quantity: item.quantity || 1, notes: item.notes || "" });
    }
    list.updatedAt = nowIso();
    persist();
    return list;
  }

  function updateListItem(listId, cardId, patch) {
    var list = data.lists.find(function (l) { return l.id === listId; });
    if (!list) return null;
    var item = list.items.find(function (i) { return i.cardId === cardId; });
    if (!item) return null;
    Object.assign(item, patch);
    list.updatedAt = nowIso();
    persist();
    return item;
  }

  function removeListItem(listId, cardId) {
    var list = data.lists.find(function (l) { return l.id === listId; });
    if (!list) return;
    list.items = list.items.filter(function (i) { return i.cardId !== cardId; });
    list.updatedAt = nowIso();
    persist();
  }

  // Remove uma carta de TODAS as listas que a contem - usado quando a carta
  // e adicionada de fato a colecao (deixa de fazer sentido continuar numa
  // lista tipo "quero conseguir essa carta").
  function removeCardFromAllLists(cardId) {
    var touched = false;
    data.lists.forEach(function (l) {
      var before = l.items.length;
      l.items = l.items.filter(function (i) { return i.cardId !== cardId; });
      if (l.items.length !== before) { l.updatedAt = nowIso(); touched = true; }
    });
    if (touched) persist();
  }

  // Listas que contem esta carta, com a quantidade - usado na aba "Listas" do
  // modal de detalhe da carta.
  function listsContainingCard(cardId) {
    return data.lists.filter(function (l) {
      return l.items.some(function (i) { return i.cardId === cardId; });
    }).map(function (l) {
      var item = l.items.find(function (i) { return i.cardId === cardId; });
      return { list: l, quantity: item.quantity, notes: item.notes };
    });
  }

  // ---------------- Settings ----------------
  function getSettings() { return data.settings; }
  function updateSettings(patch) {
    Object.assign(data.settings, patch);
    persist();
  }

  // ---------------- Reset / Import ----------------
  function resetUserData() {
    data.collection = [];
    data.decks = [];
    data.lists = [];
    persist();
  }

  function replaceFullState(newData) {
    data = newData;
    if (!data.catalog || !data.catalog.length) data.catalog = (window.SEED_CATALOG || []).slice();
    if (!data.lists) data.lists = [];
    migrateLegacyLists();
    if (!data.settings) data.settings = defaultSettings();
    if (data.settings.listsViewMode === undefined) data.settings.listsViewMode = "grid";
    if (!data.decks) data.decks = [];
    data.decks.forEach(function (d) {
      if (!d.collection) d.collection = [];
      if (d.isFavorite === undefined) d.isFavorite = false;
    });
    data.lists.forEach(function (l) { if (l.isFavorite === undefined) l.isFavorite = false; });
    if (!data.driveImageIndex) data.driveImageIndex = Object.assign({}, window.SEED_DRIVE_IMAGE_INDEX || {});
    if (!data.personalDriveImageIndex) data.personalDriveImageIndex = Object.assign({}, window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {});
    if (data.settings.driveImageIndexLastUpdate === undefined) data.settings.driveImageIndexLastUpdate = null;
    if (!data.schemaVersion) data.schemaVersion = SCHEMA_VERSION;
    persistImmediate();
  }

  // ---------------- Indice de imagens (Google Drive oficial) ----------------
  // Mapa "<slug>.png" -> ID do arquivo no Google Drive. Vive dentro de
  // State.data como qualquer outro dado do app (catalogo, colecao, decks,
  // listas) - atualizado rodando "Atualizar Catalogo" (que reaproveita o
  // slug ja vindo da API oficial) ou importando um backup/data.json que ja
  // traga o indice atualizado (ver imageResolver.js, que le daqui).
  function getDriveImageIndex() { return data.driveImageIndex || {}; }
  function getDriveImageIndexCount() { return Object.keys(data.driveImageIndex || {}).length; }

  // mode "merge" (padrao): adiciona/atualiza chaves sem apagar nada que ja
  // existia. mode "replace": troca o mapa inteiro pelo informado.
  function updateDriveImageIndex(newIndexObj, mode) {
    newIndexObj = newIndexObj || {};
    if (mode === "replace") {
      data.driveImageIndex = Object.assign({}, newIndexObj);
    } else {
      if (!data.driveImageIndex) data.driveImageIndex = {};
      Object.assign(data.driveImageIndex, newIndexObj);
    }
    data.settings.driveImageIndexLastUpdate = nowIso();
    persist();
    return getDriveImageIndexCount();
  }

  // ---------------- Indice de imagens (pasta pessoal do usuario) ----------------
  // Mesmo esquema do indice oficial acima, mas pra pasta pessoal do usuario no
  // Drive (chave e o nome de arquivo real dessa pasta, nao o slug da API) -
  // ver imageResolver.js e personal-drive-image-index-data.js.
  function getPersonalDriveImageIndex() { return data.personalDriveImageIndex || {}; }
  function getPersonalDriveImageIndexCount() { return Object.keys(data.personalDriveImageIndex || {}).length; }

  function updatePersonalDriveImageIndex(newIndexObj, mode) {
    newIndexObj = newIndexObj || {};
    if (mode === "replace") {
      data.personalDriveImageIndex = Object.assign({}, newIndexObj);
    } else {
      if (!data.personalDriveImageIndex) data.personalDriveImageIndex = {};
      Object.assign(data.personalDriveImageIndex, newIndexObj);
    }
    persist();
    return getPersonalDriveImageIndexCount();
  }

  window.State = {
    uuid: uuid,
    nowIso: nowIso,
    init: init,
    subscribe: subscribe,
    notify: notify,
    persist: persist,
    persistImmediate: persistImmediate,
    get data() { return data; },

    getCatalog: getCatalog,
    getCatalogCard: getCatalogCard,
    replaceCatalog: replaceCatalog,

    getCollection: getCollection,
    getCollectionEntriesForCard: getCollectionEntriesForCard,
    getCollectionQtyForCard: getCollectionQtyForCard,
    addCollectionEntry: addCollectionEntry,
    updateCollectionEntry: updateCollectionEntry,
    incrementCollectionEntry: incrementCollectionEntry,
    removeCollectionEntry: removeCollectionEntry,
    splitCollectionEntry: splitCollectionEntry,
    mergeCollectionEntriesForCard: mergeCollectionEntriesForCard,

    getDecks: getDecks,
    getDeck: getDeck,
    createDeck: createDeck,
    updateDeck: updateDeck,
    deleteDeck: deleteDeck,
    duplicateDeck: duplicateDeck,
    decksContainingCard: decksContainingCard,
    toggleDeckFavorite: toggleDeckFavorite,
    getFavoriteDecks: getFavoriteDecks,

    getLists: getLists,
    getList: getList,
    createList: createList,
    updateList: updateList,
    deleteList: deleteList,
    addListItem: addListItem,
    updateListItem: updateListItem,
    removeListItem: removeListItem,
    removeCardFromAllLists: removeCardFromAllLists,
    listsContainingCard: listsContainingCard,
    toggleListFavorite: toggleListFavorite,
    getFavoriteLists: getFavoriteLists,

    getSettings: getSettings,
    updateSettings: updateSettings,

    getDriveImageIndex: getDriveImageIndex,
    getDriveImageIndexCount: getDriveImageIndexCount,
    updateDriveImageIndex: updateDriveImageIndex,

    getPersonalDriveImageIndex: getPersonalDriveImageIndex,
    getPersonalDriveImageIndexCount: getPersonalDriveImageIndexCount,
    updatePersonalDriveImageIndex: updatePersonalDriveImageIndex,

    resetUserData: resetUserData,
    replaceFullState: replaceFullState,
    applyRemoteState: applyRemoteState,
    emptyState: emptyState
  };
})();
