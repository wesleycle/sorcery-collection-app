/* exportImage.js - Exporta qualquer secao da tela (Listas, Decks - abas Lista
 * e Imagens) via a tela de impressao nativa do navegador ("Salvar como PDF").
 * Usamos so isso (nada de captura via canvas/html2canvas) porque, sob
 * file:// sem servidor, o Chrome trata cada imagem local de carta como uma
 * origem diferente e bloqueia a leitura de pixels de um canvas - a tela de
 * impressao nao tem essa restricao e funciona sempre, sem depender de
 * bibliotecas externas via CDN.
 */
(function () {
  "use strict";

  // Antes de imprimir, tiramos dos elementos os controles que so fazem
  // sentido interativamente na tela (nao numa imagem/PDF estatico):
  //  - atalho de quantidade (+/-) -> mantemos so o numero
  //  - acoes por item da Lista (Tenho!/Editar/Remover) -> removidas
  // Trabalhamos sobre uma COPIA do node (cloneNode) pra nao alterar a tela
  // real do usuario.
  function cleanNodeForPrint(node) {
    var clone = node.cloneNode(true);
    clone.querySelectorAll(".qty-stepper").forEach(function (stepper) {
      var valEl = stepper.querySelector(".qty-val");
      var replacement = document.createElement("span");
      replacement.className = "qty-fixed";
      replacement.textContent = valEl ? valEl.textContent : "";
      stepper.parentNode.replaceChild(replacement, stepper);
    });
    clone.querySelectorAll("[data-have], [data-edit-item], [data-remove-item]").forEach(function (btn) {
      btn.remove();
    });
    return clone;
  }

  // Abre a tela de impressao nativa do navegador com o conteudo do node
  // (limpo de controles interativos). O usuario escolhe "Salvar como PDF" no
  // dialogo de impressao.
  function printNodeFallback(node, title) {
    if (!node) return Promise.reject(new Error("Nada para exportar."));
    var printWin = window.open("", "_blank");
    if (!printWin) return Promise.reject(new Error('Não foi possível abrir a janela de impressão (verifique se o navegador não bloqueou um pop-up).'));
    var cleaned = cleanNodeForPrint(node);
    // <base> garante que os caminhos relativos (style.css, images/...) do
    // node clonado continuem resolvendo pra pasta certa do app, ja que a
    // nova janela comeca em "about:blank" (sem essa base, tudo relativo
    // quebraria).
    var html = "<!doctype html><html><head><meta charset=\"utf-8\">" +
      "<title>" + (title || "Exportar") + "</title>" +
      "<base href=\"" + document.baseURI + "\">" +
      '<link rel="stylesheet" href="style.css">' +
      "<style>body{margin:0;padding:20px;background:var(--bg-deep,#0d0a07);}</style>" +
      "</head><body>" + cleaned.outerHTML + "</body></html>";
    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    return new Promise(function (resolve) {
      function doPrint() {
        setTimeout(function () {
          printWin.focus();
          printWin.print();
          resolve();
        }, 400);
      }
      if (printWin.document.readyState === "complete") doPrint();
      else printWin.addEventListener("load", doPrint);
    });
  }

  window.ExportImage = { printNodeFallback: printNodeFallback };
})();
