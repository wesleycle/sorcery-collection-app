/* storage.js
 * Persistencia local sem servidor:
 *  - File System Access API (Chrome/Edge desktop) para ler/escrever data.json direto no disco.
 *  - IndexedDB (~30 linhas, API nativa) guarda o FileSystemFileHandle entre sessoes do navegador.
 *  - Espelho em localStorage sempre atualizado como rede de seguranca / fallback.
 *  - Export/Import manual de backup .json (funciona em qualquer navegador, sem permissoes).
 *
 * Uso (ver app.js):
 *   Storage.init()                       -> tenta restaurar handle e ler dados automaticamente
 *   Storage.hasFSApi()                   -> bool
 *   Storage.connectNew() / connectOpen() -> fluxo de "Conectar arquivo de dados"
 *   Storage.requestReconnect()           -> 1 clique para restaurar permissao (banner)
 *   Storage.load()                       -> le estado atual (arquivo > localStorage)
 *   Storage.save(state)                  -> grava (debounced), espelha em localStorage sempre
 *   Storage.exportBackup(state)
 *   Storage.importBackupFile(file) -> Promise<obj>
 */
(function () {
  "use strict";

  var LS_KEY = "sorcery-app-state";
  var IDB_NAME = "sorcery-app-db";
  var IDB_STORE = "handles";
  var IDB_KEY = "data-json-handle";
  var SAVE_DEBOUNCE_MS = 400;

  // ---------------- IndexedDB tiny wrapper (native indexedDB, no library) ----------------
  function idbOpen() {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = function () {
        req.result.createObjectStore(IDB_STORE);
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function idbSet(key, value) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(IDB_STORE, "readwrite");
        tx.objectStore(IDB_STORE).put(value, key);
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  function idbGet(key) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(IDB_STORE, "readonly");
        var req = tx.objectStore(IDB_STORE).get(key);
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { reject(req.error); };
      });
    });
  }

  function idbDelete(key) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(IDB_STORE, "readwrite");
        tx.objectStore(IDB_STORE).delete(key);
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  // ---------------- Internal state ----------------
  var fileHandle = null;       // FileSystemFileHandle | null
  var saveTimer = null;
  var pendingState = null;
  var lastKnownGoodJSON = null;

  function hasFSApi() {
    return typeof window.showSaveFilePicker === "function" && typeof window.showOpenFilePicker === "function";
  }

  // ---------------- Connect flows ----------------
  function connectNew() {
    if (!hasFSApi()) return Promise.reject(new Error("File System Access API indisponivel neste navegador."));
    return window.showSaveFilePicker({
      suggestedName: "data.json",
      types: [{ description: "JSON", accept: { "application/json": [".json"] } }]
    }).then(function (handle) {
      fileHandle = handle;
      return idbSet(IDB_KEY, handle).then(function () { return handle; });
    });
  }

  function connectOpen() {
    if (!hasFSApi()) return Promise.reject(new Error("File System Access API indisponivel neste navegador."));
    return window.showOpenFilePicker({
      types: [{ description: "JSON", accept: { "application/json": [".json"] } }],
      multiple: false
    }).then(function (handles) {
      fileHandle = handles[0];
      return idbSet(IDB_KEY, fileHandle).then(function () { return fileHandle; });
    });
  }

  // Tenta restaurar o handle salvo e verificar permissao silenciosamente.
  // Retorna: "granted" | "prompt" | "none" (nenhum handle salvo ou API indisponivel)
  function restoreHandle() {
    if (!hasFSApi()) return Promise.resolve("none");
    return idbGet(IDB_KEY).then(function (handle) {
      if (!handle) return "none";
      fileHandle = handle;
      return handle.queryPermission({ mode: "readwrite" }).then(function (perm) {
        return perm; // "granted" | "prompt" | "denied"
      }).catch(function () { return "prompt"; });
    }).catch(function () { return "none"; });
  }

  // Chamado a partir de 1 clique do usuario (banner) - obrigatorio por seguranca do navegador.
  function requestReconnect() {
    if (!fileHandle) return Promise.resolve(false);
    return fileHandle.requestPermission({ mode: "readwrite" }).then(function (perm) {
      return perm === "granted";
    }).catch(function () { return false; });
  }

  function isConnected() {
    return !!fileHandle;
  }

  function forgetFile() {
    fileHandle = null;
    return idbDelete(IDB_KEY);
  }

  // ---------------- Read ----------------
  function readFromFile() {
    if (!fileHandle) return Promise.resolve(null);
    return fileHandle.getFile().then(function (file) {
      return file.text();
    }).then(function (text) {
      if (!text || !text.trim()) return null;
      try { return JSON.parse(text); } catch (e) { console.warn("data.json invalido:", e); return null; }
    });
  }

  function readFromLocalStorage() {
    var raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  }

  // Fonte da verdade: arquivo conectado (se permissao concedida) > localStorage
  function load() {
    if (fileHandle) {
      return fileHandle.queryPermission({ mode: "readwrite" }).then(function (perm) {
        if (perm === "granted") {
          return readFromFile().then(function (data) {
            if (data) {
              lastKnownGoodJSON = JSON.stringify(data);
              // mantem localStorage em sincronia
              try { localStorage.setItem(LS_KEY, lastKnownGoodJSON); } catch (e) {}
              return data;
            }
            return readFromLocalStorage();
          });
        }
        return readFromLocalStorage();
      });
    }
    return Promise.resolve(readFromLocalStorage());
  }

  // ---------------- Write (debounced) ----------------
  function writeNow(state) {
    var json = JSON.stringify(state, null, 2);
    lastKnownGoodJSON = json;
    // Sempre espelha em localStorage primeiro (rede de seguranca)
    try { localStorage.setItem(LS_KEY, json); } catch (e) { console.warn("Falha ao gravar localStorage", e); }

    if (!fileHandle) return Promise.resolve({ file: false, localStorage: true });

    return fileHandle.queryPermission({ mode: "readwrite" }).then(function (perm) {
      if (perm !== "granted") return { file: false, localStorage: true, needsReconnect: true };
      return fileHandle.createWritable().then(function (writable) {
        return writable.write(json).then(function () {
          return writable.close();
        }).then(function () {
          return { file: true, localStorage: true };
        });
      }).catch(function (err) {
        console.warn("Falha ao gravar data.json:", err);
        return { file: false, localStorage: true, error: String(err) };
      });
    });
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
    hasFSApi: hasFSApi,
    connectNew: connectNew,
    connectOpen: connectOpen,
    restoreHandle: restoreHandle,
    requestReconnect: requestReconnect,
    isConnected: isConnected,
    forgetFile: forgetFile,
    load: load,
    save: save,
    saveImmediate: saveImmediate,
    exportBackup: exportBackup,
    importBackupFile: importBackupFile
  };
})();
