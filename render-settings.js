/* render-settings.js - Modulo Configuracoes (/settings) */
(function () {
  "use strict";

  function formatDateTime(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  function render(container) {
    var settings = State.getSettings();

    var html = '<div class="page-header"><h2>' + Icon("settings", { cls: "icon-sm" }) + ' Configurações</h2></div>';

    // ---- Base de cartas (catalogo + imagens) ----
    // Catalogo e indice de imagens sao mantidos automaticamente e em silencio
    // a cada carregamento de pagina (snapshot embutido no app - ver app.js).
    // Este botao forca uma busca AO VIVO na API oficial (pra pegar cartas
    // novas antes do proximo deploy) e reaplica o indice de imagens embutido.
    var personalIndexCount = State.getPersonalDriveImageIndexCount();
    var lastCatalogUpdate = settings.lastCatalogUpdate;
    html += '<div class="settings-section"><h3>Base de Cartas</h3>';
    html += '<p class="status-line">Cartas no catálogo: <strong>' + State.getCatalog().length + '</strong>' + (lastCatalogUpdate ? " — última atualização em " + formatDateTime(lastCatalogUpdate) : "") + '. <strong>' + personalIndexCount + '</strong> ' + (personalIndexCount === 1 ? "imagem indexada" : "imagens indexadas") + '.</p>';
    html += '<p style="font-size:12px;color:var(--text-secondary);">O catálogo e o índice de imagens já se mantêm atualizados sozinhos a cada vez que o app é aberto. Use o botão abaixo só quando uma coleção/edição nova for lançada: ele busca ao vivo na API pública oficial de Sorcery: Contested Realm (mantida pela equipe do Curiosa.io) as cartas mais recentes e reaplica o índice de imagens da pasta do Drive. Cartas e coleção/decks/listas já existentes não são perdidos; só os dados são atualizados/completados.</p>';
    html += '<div class="toolbar"><button class="btn btn-primary" id="settings-update-cards-db">' + Icon("refresh", { cls: "icon-sm" }) + ' Atualizar base cartas</button></div>';
    html += "</div>";

    // ---- Backup (unico jeito de importar/atualizar dados em massa) ----
    html += '<div class="settings-section"><h3>Dados do App</h3>';
    html += '<p style="font-size:12px;color:var(--text-secondary);">Um único arquivo JSON com tudo: catálogo, coleção, decks, listas, índice de imagens e preferências. É o único jeito de atualizar esses dados em massa — exporte, edite/substitua se precisar, e importe de volta.</p>';
    html += '<div class="toolbar">' +
      '<button class="btn" id="backup-export">' + Icon("export", { cls: "icon-sm" }) + ' Exportar Backup</button>' +
      '<label class="btn" style="display:inline-flex;">' + Icon("import", { cls: "icon-sm" }) + ' Importar Backup<input type="file" accept="application/json" id="backup-import-input" style="display:none;"></label>' +
      '<button class="btn btn-danger" id="reset-data">' + Icon("trash", { cls: "icon-sm" }) + ' Resetar Dados</button>' +
      "</div></div>";

    // ---- Preferencias ----
    html += '<div class="settings-section"><h3>Preferências</h3>';
    html += '<div class="form-inline">';
    html += '<div class="form-row"><label>Moeda padrão</label><select id="pref-currency">' + ["BRL", "USD", "EUR"].map(function (c) { return '<option ' + (settings.defaultCurrency === c ? "selected" : "") + '>' + c + "</option>"; }).join("") + "</select></div>";
    html += '<div class="form-row"><label>Visualização padrão</label><select id="pref-view">' +
      '<option value="grid" ' + (settings.collectionViewMode === "grid" ? "selected" : "") + '>Grade</option>' +
      '<option value="list" ' + (settings.collectionViewMode === "list" ? "selected" : "") + '>Lista</option>' +
      "</select></div>";
    html += "</div></div>";

    container.innerHTML = html;
    wire(container);
  }

  function wire(container) {
    container.querySelector("#backup-export").onclick = function () {
      var name = Storage.exportBackup(State.data);
      Toast.show("Backup exportado: " + name);
    };
    container.querySelector("#backup-import-input").onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      if (!confirm("Importar este backup vai SOBRESCREVER todos os dados atuais (catálogo, coleção, decks, listas, índice de imagens e configurações). Continuar?")) { e.target.value = ""; return; }
      Storage.importBackupFile(file).then(function (data) {
        State.replaceFullState(data);
        Toast.show("Backup importado com sucesso.");
        render(container);
      }).catch(function (err) { Toast.show("Erro ao importar: " + err.message); });
    };
    container.querySelector("#reset-data").onclick = function () {
      if (!confirm("Isso vai apagar Coleção, Decks e Listas (o catálogo e as configurações são mantidos). Esta ação NÃO pode ser desfeita. Continuar?")) return;
      if (!confirm("Tem certeza ABSOLUTA? Todos os dados de coleção/decks/listas serão perdidos.")) return;
      State.resetUserData();
      Toast.show("Dados resetados.");
      render(container);
    };

    container.querySelector("#pref-currency").onchange = function (e) { State.updateSettings({ defaultCurrency: e.target.value }); };
    container.querySelector("#pref-view").onchange = function (e) { State.updateSettings({ collectionViewMode: e.target.value }); };

    var updateCardsDbBtn = container.querySelector("#settings-update-cards-db");
    if (updateCardsDbBtn) updateCardsDbBtn.onclick = function () {
      if (!window.SorceryApi) { Toast.show("Módulo de importação da API não carregado."); return; }
      updateCardsDbBtn.disabled = true;
      var originalLabel = updateCardsDbBtn.innerHTML;
      updateCardsDbBtn.innerHTML = Icon("refresh", { cls: "icon-sm" }) + " Atualizando base cartas...";

      var beforePersonal = State.getPersonalDriveImageIndexCount();

      SorceryApi.updateCatalogLive().then(function (stats) {
        var countPersonal = State.updatePersonalDriveImageIndex(window.SEED_PERSONAL_DRIVE_IMAGE_INDEX || {}, "merge");
        var addedPersonal = countPersonal - beforePersonal;
        State.updateSettings({ lastCatalogUpdate: new Date().toISOString() });
        Toast.show("Base atualizada: " + stats.added + " carta(s) nova(s), " + stats.updated + " atualizada(s) (" + stats.totalPrintings + " impressões na API); +" + addedPersonal + " imagem(ns) nova(s) (" + countPersonal + " no total).");
        render(container);
      }).catch(function (err) {
        Toast.show("Erro ao atualizar base cartas: " + err.message);
        updateCardsDbBtn.disabled = false;
        updateCardsDbBtn.innerHTML = originalLabel;
      });
    };
  }

  window.RenderSettings = { render: render };
})();
