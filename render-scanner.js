/* render-scanner.js - Modulo Scanner (/scanner)
 * Fluxo zero-friccao: escanear -> confirmar -> salva e volta pra camera. */
(function () {
  "use strict";

  var videoEl = null;
  var cameraStarted = false;
  var lastContainer = null;

  function render(container) {
    lastContainer = container;
    var html = '<div class="page-header"><h2>Scanner de Cartas</h2></div>';
    html += '<div class="scanner-frame" id="scanner-frame">' +
      '<div class="scanner-video-wrap">' +
      '<video id="scanner-video" autoplay playsinline muted></video>' +
      '<div class="scan-guide"></div>' +
      "</div>" +
      '<div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">' +
      '<button class="btn btn-primary" id="scan-btn">' + Icon("scanner", { cls: "icon-sm" }) + ' Escanear Carta</button>' +
      "</div>" +
      '<div style="margin-top:10px;color:var(--text-secondary);font-size:13px;">ou</div>' +
      '<div style="margin-top:8px;"><label class="btn" style="display:inline-flex;">' + Icon("image", { cls: "icon-sm" }) + ' Enviar foto da galeria<input type="file" accept="image/*" capture="environment" id="scan-gallery-input" style="display:none;"></label></div>' +
      "</div>";
    html += '<div id="scanner-status" style="text-align:center;color:var(--text-secondary);font-size:13px;"></div>';
    html += '<div id="scanner-result-slot"></div>';

    container.innerHTML = html;
    videoEl = container.querySelector("#scanner-video");

    startCameraIfPossible(container);
    container.querySelector("#scan-btn").onclick = function () { doScan(container, function () { return Ocr.captureFrame(videoEl); }); };
    container.querySelector("#scan-gallery-input").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      Ocr.readFileAsDataURL(file).then(function (dataUrl) { doScan(container, function () { return dataUrl; }); });
    };
  }

  function startCameraIfPossible(container) {
    if (!Ocr.isCameraAvailable()) {
      container.querySelector("#scanner-status").textContent = "Câmera indisponível — use o envio de foto da galeria abaixo.";
      container.querySelector("#scan-btn").disabled = true;
      return;
    }
    Ocr.startCamera(videoEl).then(function () {
      cameraStarted = true;
    }).catch(function (err) {
      container.querySelector("#scanner-status").textContent = "Não foi possível acessar a câmera (" + err.message + "). Use o envio de foto da galeria.";
      container.querySelector("#scan-btn").disabled = true;
    });
  }

  function doScan(container, getImageSource) {
    var statusEl = container.querySelector("#scanner-status");
    var resultSlot = container.querySelector("#scanner-result-slot");
    statusEl.textContent = "Reconhecendo texto da carta...";
    resultSlot.innerHTML = "";
    var imageSource = getImageSource();
    Ocr.recognize(imageSource, function (pct) { statusEl.textContent = "Reconhecendo texto... " + pct + "%"; })
      .then(function (rawText) {
        var matches = Ocr.matchCatalog(rawText, State.getCatalog(), 5);
        statusEl.textContent = "";
        if (matches.length && matches[0].score >= 0.55) {
          var strongMatches = matches.filter(function (m) { return m.score >= 0.55; });
          if (strongMatches.length === 1 || strongMatches[0].score - (strongMatches[1] ? strongMatches[1].score : 0) > 0.15) {
            renderIdentified(container, strongMatches[0].card, rawText, matches);
          } else {
            renderMultiMatch(container, strongMatches, rawText, imageSource);
          }
        } else {
          renderNoMatch(container, rawText, imageSource);
        }
      })
      .catch(function (err) {
        statusEl.textContent = "Erro no OCR: " + err.message;
        renderNoMatch(container, "", imageSource);
      });
  }

  function renderIdentified(container, card, rawText, allMatches) {
    var resultSlot = container.querySelector("#scanner-result-slot");
    var html = '<div class="panel"><h3>Carta Identificada!</h3>' +
      '<div class="scan-result-card"><img data-card-id="' + card.id + '">' +
      '<div><strong>' + UI.escapeHtml(card.name) + "</strong><br>" +
      UI.rarityBadgeHtml(card.rarity) + " " + UI.elementsBadgesHtml(card.elements) + " " + card.set + "<br>" +
      (card.power != null ? "Power: " + card.power + " | " : "") + (card.cost != null ? "Custo: " + card.cost : "") +
      "</div></div>" +
      '<button class="link-plain" id="scan-manual-search">Não é essa carta? Buscar manualmente</button>' +
      "<hr class=\"section-divider\">" +
      '<div class="section-title">Cadastrar na Coleção</div>' +
      '<div class="qty-stepper" style="margin-bottom:10px;"><span>Quantidade:</span><button id="scan-qty-minus">−</button><span class="qty-val" id="scan-qty-val">1</span><button id="scan-qty-plus">+</button></div>' +
      '<div class="form-row"><label>Condição</label><select id="scan-condition">' + UI.CONDITION_LIST.map(function (c) { return '<option ' + (c === "NM" ? "selected" : "") + '>' + c + "</option>"; }).join("") + "</select></div>" +
      '<div class="form-row"><label>Preço pago</label><input type="number" step="0.01" id="scan-price"></div>' +
      '<div class="toggle-row" style="margin-bottom:10px;"><span class="toggle-chip" id="scan-foil">' + Icon("sparkle", { cls: "icon-sm" }) + ' Foil</span><span class="toggle-chip" id="scan-promo">' + Icon("ribbon", { cls: "icon-sm" }) + ' Promo</span><span class="toggle-chip" id="scan-curio">' + Icon("gem", { cls: "icon-sm" }) + ' Curio</span></div>' +
      '<div class="form-row"><label>Notas</label><textarea id="scan-notes"></textarea></div>' +
      '<div style="display:flex;gap:10px;"><button class="btn" id="scan-cancel">Cancelar</button><button class="btn btn-primary btn-block" id="scan-confirm">' + Icon("save", { cls: "icon-sm" }) + ' Adicionar</button></div>' +
      "</div>";
    resultSlot.innerHTML = html;
    UI.hydrateImages(resultSlot);

    var qty = 1;
    resultSlot.querySelector("#scan-qty-plus").onclick = function () { qty++; resultSlot.querySelector("#scan-qty-val").textContent = qty; };
    resultSlot.querySelector("#scan-qty-minus").onclick = function () { qty = Math.max(1, qty - 1); resultSlot.querySelector("#scan-qty-val").textContent = qty; };
    ["scan-foil", "scan-promo", "scan-curio"].forEach(function (id) {
      resultSlot.querySelector("#" + id).onclick = function () { resultSlot.querySelector("#" + id).classList.toggle("active"); };
    });
    resultSlot.querySelector("#scan-manual-search").onclick = function () { renderNoMatch(container, rawText, null, allMatches); };
    resultSlot.querySelector("#scan-cancel").onclick = function () { resultSlot.innerHTML = ""; };
    resultSlot.querySelector("#scan-confirm").onclick = function () {
      State.addCollectionEntry({
        cardId: card.id,
        quantity: qty,
        condition: resultSlot.querySelector("#scan-condition").value,
        pricePaid: resultSlot.querySelector("#scan-price").value ? parseFloat(resultSlot.querySelector("#scan-price").value) : undefined,
        isFoil: resultSlot.querySelector("#scan-foil").classList.contains("active"),
        isPromo: resultSlot.querySelector("#scan-promo").classList.contains("active"),
        isCurio: resultSlot.querySelector("#scan-curio").classList.contains("active"),
        notes: resultSlot.querySelector("#scan-notes").value
      });
      Toast.show(card.name + " adicionada à coleção.");
      resultSlot.innerHTML = "";
      // Zero friccao: volta automaticamente para a camera, pronta pro proximo scan.
    };
  }

  function renderMultiMatch(container, matches, rawText, imageSource) {
    var resultSlot = container.querySelector("#scanner-result-slot");
    var html = '<div class="panel"><h3>Múltiplas correspondências</h3><p style="color:var(--text-secondary)">Selecione a carta correta:</p>';
    matches.forEach(function (m) {
      html += UI.matchChoiceHtml(m.card, 'data-pick="' + m.card.id + '"', Math.round(m.score * 100) + "% match");
    });
    html += '<button class="link-plain" id="scan-manual-search-2" style="margin-top:8px;">Nenhuma dessas? Buscar manualmente</button></div>';
    resultSlot.innerHTML = html;
    UI.hydrateImages(resultSlot);
    resultSlot.querySelectorAll("[data-pick]").forEach(function (el) {
      el.onclick = function () { renderIdentified(container, State.getCatalogCard(el.getAttribute("data-pick")), rawText, matches); };
    });
    resultSlot.querySelector("#scan-manual-search-2").onclick = function () { renderNoMatch(container, rawText, imageSource, matches); };
  }

  function renderNoMatch(container, rawText, imageSource, matches) {
    var resultSlot = container.querySelector("#scanner-result-slot");
    var html = '<div class="panel"><h3>Carta não identificada automaticamente</h3>';
    if (rawText) html += '<div class="ocr-raw-text">' + UI.escapeHtml(rawText.slice(0, 500)) + "</div>";
    html += '<div class="form-row" style="margin-top:10px;"><label>Buscar manualmente</label><input type="text" class="search-bar" id="scan-manual-input" placeholder="Digite o nome da carta..."></div>' +
      '<div id="scan-manual-results"></div></div>';
    resultSlot.innerHTML = html;
    var input = resultSlot.querySelector("#scan-manual-input");
    input.oninput = function () {
      var q = input.value.toLowerCase();
      var results = q.length < 2 ? [] : State.getCatalog().filter(function (c) { return c.name.toLowerCase().indexOf(q) !== -1; }).slice(0, 10);
      var manualResultsSlot = resultSlot.querySelector("#scan-manual-results");
      manualResultsSlot.innerHTML = results.map(function (c) { return UI.matchChoiceHtml(c, 'data-pick="' + c.id + '"'); }).join("");
      UI.hydrateImages(manualResultsSlot);
      resultSlot.querySelectorAll("[data-pick]").forEach(function (el) {
        el.onclick = function () { renderIdentified(container, State.getCatalogCard(el.getAttribute("data-pick")), rawText, matches || []); };
      });
    };
    if (input) input.focus();
  }

  window.RenderScanner = { render: render, stop: function () { Ocr.stopCamera(); cameraStarted = false; } };
})();
