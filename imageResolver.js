/* imageResolver.js
 * Resolve a URL da imagem de uma carta a partir do catalogo.
 *
 * 100% das imagens vem de uma unica fonte: a pasta PESSOAL do usuario no
 * Google Drive (Meu Drive > Sorcery > images > {alp,art,bet,dra,got,pro}).
 * O indice antigo "oficial" (drive-image-index-data.js /
 * SEED_DRIVE_IMAGE_INDEX) NAO e mais usado na resolucao - fica no repo soh
 * por historico/possivel uso futuro, mas buildResolutionChain nunca mais
 * consulta ele.
 *
 * Ordem de resolucao para cada (carta, variante):
 *   1. Match exato no indice pessoal: "{nome_do_arquivo_real}.png" -> ID do
 *      arquivo no Drive, guardado em State.data.personalDriveImageIndex
 *      (semeado de window.SEED_PERSONAL_DRIVE_IMAGE_INDEX, ver
 *      personal-drive-image-index-data.js).
 *   2. Se nao houver match exato (ex.: nome com grafia levemente diferente
 *      da usada no arquivo, apostrofo, etc.): fallback por NOME MAIS PROXIMO
 *      (fuzzy match) dentro do mesmo set+variante, usando distancia de
 *      Levenshtein normalizada (ver findClosestPersonalMatch). So usa o
 *      resultado se a similaridade for alta o bastante (>= FUZZY_MATCH_MIN_SIMILARITY)
 *      - caso contrario (nome "quase sem correspondencia"), NAO arrisca
 *      mostrar a imagem de uma carta errada: cai direto pro placeholder.
 *   3. images/placeholder.svg (estado "sem imagem" - desenho generico
 *      exibido quando nada acima resolveu essa carta).
 *
 * A URL de exibicao e sempre montada como
 * "https://lh3.googleusercontent.com/d/{fileId}=w{width}" - esse formato
 * (diferente de drive.google.com/uc?export=view) e o unico que carrega a
 * imagem direto num <img src>, sem tela intermediaria de aviso do Drive, e
 * aceita parametro de largura.
 *
 * Nao ha mais link manual por carta (a antiga aba "Fonte da Imagem" foi
 * removida) - a fonte automatica e a pasta pessoal do Drive acima.
 *
 * Convencao de chave do indice pessoal: "{setcode}-{nome-slug-com-
 * underscore}-b-{f|s}.png" pra Alpha/Beta/Arthurian Legends/Dragonlord/Gothic
 * (tag fixo "b"). Promo nao segue esse padrao fixo - cada carta/tiragem usa
 * um codigo de impressao proprio como tag (ex "op", "d", "wk", "ai", "scg",
 * "tc", "k", "dk"), entao pra Promo o resolvedor monta um indice auxiliar
 * agrupando as chaves reais por nome de carta e escolhendo foil/standard
 * pelo sufixo final do nome do arquivo (ver buildPersonalPromoIndex abaixo) -
 * sem isso nao daria pra adivinhar o tag certo so pelo nome da carta. O
 * fuzzy match tambem se aplica a Promo, comparando contra os nomes ja
 * agrupados nesse indice auxiliar.
 *
 * Como <img> nao dispara CORS sob file://, isso funciona sem servidor -
 * inclusive para uma URL remota (Google Drive), pois a restricao de CORS
 * local so afeta fetch()/XHR, nao carregamento de <img>.
 */
(function () {
  "use strict";

  var PLACEHOLDER = "images/placeholder.svg";
  var DEFAULT_WIDTH = 600;

  // Formato validado no prototipo: e o unico que carrega a imagem do Drive
  // direto num <img src>, sem tela de aviso/download, e aceita "=w{largura}".
  function buildDriveImageUrl(fileId, width) {
    return "https://lh3.googleusercontent.com/d/" + fileId + "=w" + (width || DEFAULT_WIDTH);
  }

  var SET_CODES = {
    "Alpha": "alp",
    "Beta": "bet",
    "Arthurian Legends": "art",
    "Dragonlord": "dra",
    "Gothic": "got",
    "Promo": "pro"
  };

  function getPersonalDriveIndex() {
    if (!window.State || !State.getPersonalDriveImageIndex) return {};
    return State.getPersonalDriveImageIndex();
  }

  // Slug com underscore entre palavras (ex: "13_treasures_of_britain") - e o
  // padrao usado nos nomes de arquivo da pasta pessoal do usuario no Drive
  // (fonte 2), diferente do slug com hifen usado no resto do app (que vem
  // da API oficial). Apostrofo e outra pontuacao somem sem virar underscore
  // (ex: "Night's" -> "nights").
  function slugifyUnderscore(name) {
    return String(name || "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/['']/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  // ---- Indice auxiliar pra Promo (fonte 2) ----
  // As chaves de Promo na pasta pessoal nao seguem o padrao fixo "-b-{f|s}"
  // (cada tiragem usa um codigo proprio como tag: "op", "d", "wk", "ai",
  // "scg", "tc", "k", "dk"...) - entao pra Promo nao da pra montar a chave
  // direto a partir do nome da carta como fazemos pras outras edicoes. Em
  // vez disso, agrupamos as chaves reais (ja carregadas no indice) por nome
  // de carta (ignorando a tag do meio) e guardamos o fileId de foil e de
  // standard separadamente, decidindo qual e qual pelo sufixo final do nome
  // do arquivo (antes do ".png"): termina em "f" (ou "rf") = foil, termina
  // em "s" = standard. Reconstruido a cada chamada a partir do indice atual
  // (indice pequeno, nao precisa de cache).
  function buildPersonalPromoIndex(personalIndex) {
    var byName = {};
    Object.keys(personalIndex).forEach(function (key) {
      // key ex: "pro-avatar_of_air-op-rf.png" -> rest = "avatar_of_air-op-rf"
      var m = key.match(/^pro-(.+)\.png$/i);
      if (!m) return;
      var parts = m[1].split("-");
      if (parts.length < 3) return; // precisa de pelo menos nome-tag-acabamento
      var finish = parts[parts.length - 1];
      var name = parts[0];
      var entry = byName[name] || (byName[name] = {});
      if (/f$/i.test(finish)) { if (!entry.f) entry.f = personalIndex[key]; }
      else if (/^s$/i.test(finish)) { if (!entry.s) entry.s = personalIndex[key]; }
    });
    return byName;
  }

  // ---- Fallback por nome mais proximo (fuzzy match) ----
  // Usado quando a carta nao bate por chave exata no indice pessoal (ex.:
  // grafia diferente da usada no nome do arquivo). So pode ser usado dentro
  // do MESMO set+variante (nunca compara entre sets diferentes) e so retorna
  // um resultado se a similaridade for alta o bastante - do contrario,
  // devolve null e quem chamou cai pro placeholder (nunca mostra a imagem de
  // uma carta muito diferente so por ter "alguma" proximidade de nome).
  var FUZZY_MATCH_MIN_SIMILARITY = 0.82;

  // Distancia de Levenshtein (numero minimo de insercoes/remocoes/trocas de
  // caractere pra transformar "a" em "b"). Implementacao iterativa O(n*m).
  function levenshteinDistance(a, b) {
    a = String(a || "");
    b = String(b || "");
    var m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    var prev = new Array(n + 1);
    var curr = new Array(n + 1);
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      curr[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        curr[j] = Math.min(
          prev[j] + 1,      // remocao
          curr[j - 1] + 1,  // insercao
          prev[j - 1] + cost // substituicao
        );
      }
      var tmp = prev; prev = curr; curr = tmp;
    }
    return prev[n];
  }

  // Similaridade normalizada em [0, 1] (1 = identico), baseada na distancia
  // de Levenshtein relativa ao tamanho da maior string comparada.
  function nameSimilarity(a, b) {
    a = String(a || ""); b = String(b || "");
    var maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 1;
    return 1 - (levenshteinDistance(a, b) / maxLen);
  }

  // Acha, dentre uma lista de slugs candidatos, o mais parecido com
  // targetSlug. Retorna { slug, similarity } do melhor candidato, ou null se
  // a lista estiver vazia.
  function findClosestSlug(targetSlug, candidateSlugs) {
    var best = null;
    var bestSim = -1;
    for (var i = 0; i < candidateSlugs.length; i++) {
      var sim = nameSimilarity(targetSlug, candidateSlugs[i]);
      if (sim > bestSim) { bestSim = sim; best = candidateSlugs[i]; }
    }
    if (best === null) return null;
    return { slug: best, similarity: bestSim };
  }

  // Retorna o fileId (ou null) na pasta pessoal pra essa carta+variante,
  // tentando primeiro chave exata e, se nao achar, o nome mais proximo
  // dentro do mesmo set+variante (so se a similaridade for alta o bastante).
  function personalDriveFileId(card, variant) {
    if (!card) return null;
    var setCode = SET_CODES[card.set];
    if (!setCode) return null;
    var personalIndex = getPersonalDriveIndex();
    var slug = slugifyUnderscore(card.name);

    if (setCode === "pro") {
      var promoIndex = buildPersonalPromoIndex(personalIndex);
      var entry = promoIndex[slug];
      if (entry && entry[variant]) return entry[variant];
      // Fuzzy fallback: compara contra os nomes ja agrupados no indice de Promo.
      var promoNames = Object.keys(promoIndex).filter(function (n) { return promoIndex[n][variant]; });
      var promoMatch = findClosestSlug(slug, promoNames);
      if (promoMatch && promoMatch.similarity >= FUZZY_MATCH_MIN_SIMILARITY) {
        return promoIndex[promoMatch.slug][variant] || null;
      }
      return null;
    }

    var key = setCode + "-" + slug + "-b-" + variant + ".png";
    if (personalIndex[key]) return personalIndex[key];

    // Algumas cartas especiais (fichas/tokens como Foot Soldier, Frog, Rubble,
    // e o verso dos Avatares) nao usam o tag fixo "b" - usam "bt" (back
    // token) ou "pd". Ainda e um match EXATO pelo mesmo nome/slug, so que
    // com um tag alternativo conhecido - por isso tentamos antes do fuzzy.
    var ALT_TAGS = ["bt", "pd"];
    for (var t = 0; t < ALT_TAGS.length; t++) {
      var altKey = setCode + "-" + slug + "-" + ALT_TAGS[t] + "-" + variant + ".png";
      if (personalIndex[altKey]) return personalIndex[altKey];
    }

    // Fuzzy fallback: so entre chaves do MESMO set+variante, testando o tag
    // "b" e os alternativos conhecidos ("{setCode}-...-{tag}-{variant}.png").
    var prefix = setCode + "-";
    var candidateSlugs = [];
    var slugToKey = {};
    ["b"].concat(ALT_TAGS).forEach(function (tag) {
      var suffix = "-" + tag + "-" + variant + ".png";
      Object.keys(personalIndex).forEach(function (k) {
        if (k.indexOf(prefix) !== 0 || k.slice(-suffix.length) !== suffix) return;
        var candidateSlug = k.slice(prefix.length, k.length - suffix.length);
        if (!(candidateSlug in slugToKey)) {
          candidateSlugs.push(candidateSlug);
          slugToKey[candidateSlug] = k;
        }
      });
    });
    var match = findClosestSlug(slug, candidateSlugs);
    if (match && match.similarity >= FUZZY_MATCH_MIN_SIMILARITY) {
      return personalIndex[slugToKey[match.slug]] || null;
    }
    return null;
  }

  function slugify(name) {
    return String(name || "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Nome-base do arquivo pra uma carta (sem variante/extensao), ex: "alp-abundance-b".
  function baseNameFor(card) {
    if (!card) return "";
    var setCode = SET_CODES[card.set] || slugify(card.set).slice(0, 3);
    return card.imagePath || (setCode + "-" + slugify(card.name));
  }

  function variantFor(isFoil) { return isFoil ? "f" : "s"; }

  // Gera a lista de URLs candidatas, em ordem de prioridade, pra uma
  // carta+variante: pasta pessoal do Drive (exata ou fuzzy) > placeholder.
  function buildResolutionChain(card, isFoil, width) {
    if (!card) return [PLACEHOLDER];
    var variant = variantFor(isFoil);
    var chain = [];

    var personalFileId = personalDriveFileId(card, variant);
    if (personalFileId) chain.push(buildDriveImageUrl(personalFileId, width));

    chain.push(PLACEHOLDER);
    return chain;
  }

  // Mantido por compatibilidade (nome usado antes) - mesma coisa que buildResolutionChain.
  function resolveCandidates(card, isFoil, width) {
    return buildResolutionChain(card, isFoil, width);
  }

  // Aplica em um elemento <img> a cadeia de fallback via onerror. width
  // (opcional): largura pedida ao Drive (=w{width}) - maior no popup de
  // detalhe, menor (padrao) nas grades/miniaturas.
  function attach(imgEl, card, isFoil, width) {
    var candidates = buildResolutionChain(card, isFoil, width);
    var i = 0;
    imgEl.alt = card ? card.name : "Carta";
    function tryNext() {
      if (i >= candidates.length) return;
      imgEl.src = candidates[i];
      i++;
    }
    imgEl.onerror = function () { tryNext(); };
    tryNext();
    return imgEl;
  }

  // Retorna uma <img> pronta (util para render de grades)
  function createImg(card, isFoil, className, width) {
    var img = document.createElement("img");
    if (className) img.className = className;
    img.loading = "lazy";
    attach(img, card, isFoil, width);
    return img;
  }

  window.ImageResolver = {
    resolveCandidates: resolveCandidates,
    buildResolutionChain: buildResolutionChain,
    attach: attach,
    createImg: createImg,
    baseNameFor: baseNameFor,
    variantFor: variantFor,
    PLACEHOLDER: PLACEHOLDER,
    DEFAULT_WIDTH: DEFAULT_WIDTH,
    slugify: slugify,
    buildDriveImageUrl: buildDriveImageUrl
  };
})();
