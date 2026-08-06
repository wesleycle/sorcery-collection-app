/* storage.js
 * Persistencia local sem servidor:
 *  - localStorage: fonte de verdade local (por navegador/dispositivo).
 *  - Export/Import manual de backup .json (funciona em qualquer navegador,
 *    util como rede de seguranca ou pra migrar dados manualmente).
 *
 * A sincronizacao "de verdade" entre dispositivos e automatica via GitHub
 * (ver dataSync.js / netlify/functions) - nao existe mais conexao manual de
 * arquivo local via File System Access API.
 *
 * Uso (ver state.js / app.js):
 *   Storage.load()          -> le o estado salvo no localStorage (ou null)
 *   Storage.save(state)     -> grava no localStorage (debounced)
 *   Storage.saveImmediate(state)
 *   Storage.exportBackup(state)
 *   Storage.importBackupFile(file) -> Promise<obj>
 */
(function () {
  "use strict";

  var LS_KEY = "sorcery-app-state";
  var SAVE_DEBOUNCE_MS = 400;

  var saveTimer = null;
  var pendingState = null;

  // ---------------- Read ----------------
  function load() {
    var raw = localStorage.getItem(LS_KEY);
    if (!raw) return Promise.resolve(null);
    try { return Promise.resolve(JSON.parse(raw)); } catch (e) { return Promise.resolve(null); }
  }

  // ---------------- Write (debounced) ----------------
  function writeNow(state) {
    var json = JSON.stringify(state, null, 2);
    try {
      localStorage.setItem(LS_KEY, json);
      return Promise.resolve({ localStorage: true });
    } catch (e) {
      console.warn("Falha ao gravar localStorage", e);
      return Promise.resolve({ localStorage: false, error: String(e) });
    }
  }

  function save(state) {
    pendingState = state;
    return new Promise(function (resolve) {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        var s = pendingState;
        pendingState = null;
        writeNow(s).then(resolve);
      }, SAVE_DEBOUNCE_MS);
    });
  }

  function saveImmediate(state) {
    if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
    pendingState = null;
    return writeNow(state);
  }

  // ---------------- Backup export/import ----------------
  function exportBackup(state) {
    var json = JSON.stringify(state, null, 2);
    var blob = new Blob([json], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var d = new Date();
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var name = "backup-" + d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + ".json";
    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    return name;
  }

  function importBackupFile(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          resolve(data);
        } catch (e) {
          reject(new Error("Arquivo JSON invalido: " + e.message));
        }
      };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsText(file);
    });
  }

  window.Storage = {
    load: load,
    save: save,
    saveImmediate: saveImmediate,
    exportBackup: exportBackup,
    importBackupFile: importBackupFile
  };
})();
