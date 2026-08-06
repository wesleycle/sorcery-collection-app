/* ocr.js
 * Scanner de cartas: camera (getUserMedia) + fallback de upload de galeria +
 * OCR offline via Tesseract.js (carregado por <script> no index.html) +
 * match do texto reconhecido contra o catalogo local (fuzzy, via DeckUtils).
 *
 * Fluxo zero-friccao (ver render-scanner.js):
 *  1. startCamera(videoEl)
 *  2. captureFrame(videoEl) -> dataURL
 *  3. recognize(dataURL) -> texto bruto
 *  4. matchCatalog(texto, catalogo) -> lista de candidatos ordenada por score
 */
(function () {
  "use strict";

  var currentStream = null;

  function isCameraAvailable() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  function startCamera(videoEl) {
    if (!isCameraAvailable()) return Promise.reject(new Error("Camera indisponivel neste navegador/dispositivo."));
    return navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    }).then(function (stream) {
      currentStream = stream;
      videoEl.srcObject = stream;
      return videoEl.play().then(function () { return stream; });
    });
  }

  function stopCamera() {
    if (currentStream) {
      currentStream.getTracks().forEach(function (t) { t.stop(); });
      currentStream = null;
    }
  }

  // Captura o frame atual do <video> como dataURL (jpeg)
  function captureFrame(videoEl) {
    var canvas = document.createElement("canvas");
    canvas.width = videoEl.videoWidth || 640;
    canvas.height = videoEl.videoHeight || 480;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.92);
  }

  // Le um <input type=file> (fallback de galeria) como dataURL
  function readFileAsDataURL(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsDataURL(file);
    });
  }

  // Executa OCR via Tesseract.js (global window.Tesseract, carregado via CDN script tag)
  function recognize(imageSource, onProgress) {
    if (!window.Tesseract) return Promise.reject(new Error("Tesseract.js nao carregou (verifique conexao com a internet)."));
    return window.Tesseract.recognize(imageSource, "eng", {
      logger: function (m) {
        if (onProgress && m.status === "recognizing text") onProgress(Math.round((m.progress || 0) * 100));
      }
    }).then(function (result) {
      return result && result.data ? result.data.text : "";
    });
  }

  // Extrai linhas nao-vazias uteis do texto bruto (ignora linhas muito curtas/numericas)
  function usefulLines(rawText) {
    return String(rawText || "")
      .split(/\r?\n/)
      .map(function (l) { return l.trim(); })
      .filter(function (l) { return l.length >= 3 && !/^\d+$/.test(l); });
  }

  // Faz fuzzy match do texto OCR contra o catalogo. Retorna candidatos ordenados.
  function matchCatalog(rawText, catalog, limit) {
    var lines = usefulLines(rawText);
    if (!lines.length) return [];
    var best = {}; // cardId -> melhor score encontrado em qualquer linha
    lines.forEach(function (line) {
      catalog.forEach(function (card) {
        var score = DeckUtils.similarity(line, card.name);
        if (!best[card.id] || score > best[card.id].score) {
          best[card.id] = { card: card, score: score };
        }
      });
    });
    var arr = Object.keys(best).map(function (k) { return best[k]; });
    arr.sort(function (a, b) { return b.score - a.score; });
    return arr.slice(0, limit || 5);
  }

  window.Ocr = {
    isCameraAvailable: isCameraAvailable,
    startCamera: startCamera,
    stopCamera: stopCamera,
    captureFrame: captureFrame,
    readFileAsDataURL: readFileAsDataURL,
    recognize: recognize,
    matchCatalog: matchCatalog,
    usefulLines: usefulLines
  };
})();
