/* icons.js - Sistema de icones do app.
 * Substitui os emojis (que ficam "soltos" do tema) por um conjunto coeso de
 * icones em traço dourado, desenhados a mao no espirito de selo/gravura
 * medieval - condizente com a arte pintada e a atmosfera sombria de
 * Sorcery: Contested Realm. Sem dependencia externa: SVG inline puro.
 *
 * Uso: Icon("nome") retorna a tag <svg> pronta para entrar em qualquer
 * template string. Icon("nome", { cls: "icon-lg" }) para variar o tamanho.
 */
(function () {
  "use strict";

  // Cada entrada e o MIOLO do <svg> (paths/formas), sem os atributos de
  // wrapper - esses ficam centralizados em .icon no style.css (fill: none,
  // stroke: currentColor, etc.) para manter o markup enxuto. Detalhes
  // ornamentais (faiscas de runa, nucleo de gema, estrela do selo) usam
  // fill="currentColor" diretamente, sobrescrevendo a heranca do wrapper.
  var ICONS = {
    // ---- Marca ----
    brand:
      '<path d="M3 5.5C5.5 4.3 8.7 4.3 11 5.5V19c-2.3-1.2-5.5-1.2-8 0V5.5Z"/>' +
      '<path d="M21 5.5C18.5 4.3 15.3 4.3 13 5.5V19c2.3-1.2 5.5-1.2 8 0V5.5Z"/>' +
      '<path d="M12 6V19"/>' +
      '<path d="M12 1.1l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7Z" fill="currentColor" stroke="none"/>',

    // ---- Navegacao ----
    home:
      '<path d="M4 11 12 4l8 7"/>' +
      '<path d="M6 10.2V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9.8"/>' +
      '<path d="M10 21v-5a2 2 0 0 1 4 0v5"/>' +
      '<path d="M12 4V1.4"/>' +
      '<path d="M12 1.4 13.8 2.2 12 3Z" fill="currentColor" stroke="none"/>',
    collection:
      '<rect x="3.3" y="6.3" width="11" height="15" rx="1.6" transform="rotate(-10 8.8 13.8)"/>' +
      '<rect x="9.5" y="4" width="11" height="15" rx="1.6"/>',
    catalog:
      '<path d="M3 5.5C5.5 4.3 8.7 4.3 11 5.5V19c-2.3-1.2-5.5-1.2-8 0V5.5Z"/>' +
      '<path d="M21 5.5C18.5 4.3 15.3 4.3 13 5.5V19c2.3-1.2 5.5-1.2 8 0V5.5Z"/>' +
      '<path d="M12 6V19"/>' +
      '<path d="M15 9.3h4M15 12.3h4M15 15.3h3"/>',
    decks:
      '<rect x="5" y="3" width="14" height="18" rx="2"/>' +
      '<path d="M12 7.8 13.5 11l3.5.5-2.6 2.4.6 3.5L12 15.7l-3 1.7.6-3.5L7 11.5l3.5-.5Z"/>',
    scanner:
      '<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8"/>' +
      '<path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8"/>' +
      '<path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16"/>' +
      '<path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/>' +
      '<path d="M6.3 12S8.8 8.6 12 8.6 17.7 12 17.7 12 15.2 15.4 12 15.4 6.3 12 6.3 12Z"/>' +
      '<circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
    settings:
      '<circle cx="12" cy="12" r="3"/>' +
      '<path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.1 5.9l-1.7 1.7M7.6 16.4l-1.7 1.7M18.1 18.1l-1.7-1.7M7.6 7.6 5.9 5.9"/>' +
      '<circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',

    // ---- Acoes de interface ----
    search: '<circle cx="10.4" cy="10.4" r="6"/><path d="M15 15l5.3 5.3"/>',
    filter: '<path d="M4 5h16"/><path d="M7 5l4 6.4v6.3l2 1v-7.3L17 5"/>',
    grid:
      '<rect x="4" y="4" width="7" height="7" rx="1.2"/>' +
      '<rect x="13" y="4" width="7" height="7" rx="1.2"/>' +
      '<rect x="4" y="13" width="7" height="7" rx="1.2"/>' +
      '<rect x="13" y="13" width="7" height="7" rx="1.2"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" stroke-width="2.6"/>',
    plus: '<path d="M12 4v16M4 12h16"/>',
    edit:
      '<path d="M4 20l1-4.2L15.5 5.3a1.5 1.5 0 0 1 2.2 0l1 1a1.5 1.5 0 0 1 0 2.2L8.2 19 4 20Z"/>' +
      '<path d="M14 7l3 3"/>',
    trash:
      '<path d="M5 7h14"/>' +
      '<path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/>' +
      '<path d="M7 7l1 12.5A1.5 1.5 0 0 0 9.5 21h5a1.5 1.5 0 0 0 1.5-1.5L17 7"/>' +
      '<path d="M10 11v6M14 11v6"/>',
    save:
      '<circle cx="12" cy="9.8" r="6.3"/>' +
      '<path d="M12 4.2l.9 1.8 2 .3-1.5 1.4.4 2-1.8-.9-1.8.9.4-2-1.5-1.4 2-.3Z" fill="currentColor" stroke="none"/>' +
      '<path d="M8.6 15.2 7.2 21l4.8-1.9 4.8 1.9-1.4-5.8"/>',
    "export": '<path d="M12 15V3"/><path d="M7 8l5-5 5 5"/><path d="M4 15v4.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V15"/>',
    "import": '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 15v4.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V15"/>',
    refresh:
      '<path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.5"/><path d="M4 4v4.5h4.5"/>' +
      '<path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5"/><path d="M20 20v-4.5h-4.5"/>',
    duplicate: '<rect x="4" y="4" width="12" height="14" rx="2"/><rect x="9" y="9" width="12" height="14" rx="2"/>',
    close: '<path d="M5 5l14 14M19 5 5 19"/>',
    lock:
      '<rect x="5" y="11" width="14" height="9" rx="2"/>' +
      '<path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>' +
      '<circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none"/>' +
      '<path d="M12 16.3V17.8"/>',
    "check-circle": '<circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.6 2.6 5.4-5.8"/>',
    "x-circle": '<circle cx="12" cy="12" r="8.5"/><path d="M9 9l6 6M15 9l-6 6"/>',
    warning: '<path d="M12 3.4 21 19.6H3Z"/><path d="M12 9.4v4.3"/><circle cx="12" cy="16.4" r="0.9" fill="currentColor" stroke="none"/>',
    check: '<path d="M4 12.5l5 5L20 6"/>',
    star: '<path d="M12 3.4l2.4 5.3 5.6.7-4.1 4 1 5.7-4.9-2.8-4.9 2.8 1-5.7-4.1-4 5.6-.7Z"/>',
    sparkle:
      '<path d="M12 2v4.2M12 17.8V22M2 12h4.2M17.8 12H22" opacity=".5"/>' +
      '<path d="M12 6.2l1.7 3.9L17.6 12l-3.9 1.7L12 17.6l-1.7-3.9L6.4 12l3.9-1.9Z" fill="currentColor" stroke="none"/>',
    ribbon:
      '<path d="M6 3h12v8.2l-6 3.8-6-3.8Z"/>' +
      '<path d="M6 11l-2.2 8.4L6 18.3l2.2 1.1Z" opacity=".65"/>' +
      '<path d="M18 11l2.2 8.4L18 18.3l-2.2 1.1Z" opacity=".65"/>',
    gem: '<path d="M7 3h10l4 6-9 12L2 9Z"/><path d="M2 9h20M9 3 7 9l5 12M15 3l2 6-5 12"/>',
    stats: '<path d="M4 20V11"/><path d="M12 20V4"/><path d="M20 20v-7"/><path d="M4 20h16" opacity=".5"/>',
    exchange: '<path d="M4 8h13"/><path d="M14 4l3.5 4L14 12"/><path d="M20 16H7"/><path d="M10 20l-3.5-4L10 12"/>',
    image:
      '<rect x="3.3" y="4.5" width="17.4" height="15" rx="2"/>' +
      '<circle cx="8.3" cy="9.5" r="1.7" fill="currentColor" stroke="none"/>' +
      '<path d="M4 17l5.5-5.5 4 4 3-3 4.5 4.5"/>',
    "chevron-down": '<path d="M5 8.5 12 15.5 19 8.5"/>',

    // ---- Simbolos de elemento/threshold (custo de mana) ----
    // Triangulos vazados (contorno, sem preenchimento - herdam fill:none/
    // stroke:currentColor do .icon padrao), igual ao simbolo oficial do jogo:
    // Terra e Agua apontam pra baixo, Fogo e Ar apontam pra cima; a cor de
    // cada um vem da classe .icon-el-* (var(--pip-fire/water/earth/air)).
    "el-fire": '<path d="M12 4.2 20.3 18.5H3.7Z"/>',
    "el-air": '<path d="M12 4.2 20.3 18.5H3.7Z"/>',
    "el-earth": '<path d="M12 19.8 3.7 5.5H20.3Z"/>',
    "el-water": '<path d="M12 19.8 3.7 5.5H20.3Z"/>'
  };

  function svg(name, opts) {
    opts = opts || {};
    var inner = ICONS[name];
    if (!inner) return "";
    var cls = "icon" + (opts.cls ? " " + opts.cls : "");
    return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }

  window.Icon = svg;
})();
