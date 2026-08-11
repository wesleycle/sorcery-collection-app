#!/usr/bin/env node
/* local-server.js
 * Servidor local para rodar o app INDEPENDENTE do Netlify, sem instalar
 * nada alem do Node (>= 18, que ja traz fetch() nativo) - sem npm install,
 * sem netlify-cli, sem conta Netlify.
 *
 * O que ele faz:
 *   1. Serve os arquivos estaticos do app (index.html, *.js, *.css, images/)
 *      igual a qualquer hospedagem estatica.
 *   2. Responde nas MESMAS rotas que o Netlify usa para as Functions
 *      (/.netlify/functions/data-get, data-save, catalog-fetch),
 *      executando o `exports.handler` de cada arquivo em
 *      netlify/functions/*.js SEM MODIFICA-LOS - e o mesmo codigo, a mesma
 *      logica de sincronizacao com o GitHub (ver esses arquivos para
 *      detalhes). Por isso nenhum arquivo do app (dataSync.js, sorceryApi.js,
 *      etc.) precisa saber se esta rodando no Netlify ou aqui local: as
 *      chamadas fetch("/.netlify/functions/...") funcionam do mesmo jeito
 *      nos dois ambientes.
 *
 * Uso:
 *   1. Copie .env.local.example para .env.local e preencha GH_DATA_TOKEN
 *      (mesmo token / mesmas instrucoes do README, secao "Sincronizacao
 *      entre dispositivos").
 *   2. node local-server.js
 *   3. Abra http://localhost:5500 no navegador.
 *
 * .env.local nunca e commitado (ver .gitignore) - o token fica so na sua
 * maquina, exatamente como fica so no Netlify quando rodando por la.
 */
"use strict";

var http = require("http");
var fs = require("fs");
var path = require("path");

var ROOT = __dirname;
var PORT = Number(process.env.PORT) || 5500;

// ---------------------------------------------------------------------
// Carrega .env.local (formato simples CHAVE=valor, uma por linha) sem
// depender de nenhum pacote externo (sem "npm install").
// ---------------------------------------------------------------------
function loadDotEnvLocal() {
  var envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  var lines = fs.readFileSync(envPath, "utf-8").split(/\r?\n/);
  lines.forEach(function (line) {
    var trimmed = line.trim();
    if (!trimmed || trimmed.indexOf("#") === 0) return;
    var eq = trimmed.indexOf("=");
    if (eq === -1) return;
    var key = trimmed.slice(0, eq).trim();
    var value = trimmed.slice(eq + 1).trim();
    // Remove aspas simples/duplas envolvendo o valor, se houver.
    if ((value[0] === '"' && value[value.length - 1] === '"') ||
        (value[0] === "'" && value[value.length - 1] === "'")) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  });
}
loadDotEnvLocal();

// ---------------------------------------------------------------------
// Servidor de arquivos estaticos
// ---------------------------------------------------------------------
var MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

function serveStatic(req, res, urlPath) {
  var relPath = urlPath === "/" ? "/index.html" : urlPath;
  var filePath = path.normalize(path.join(ROOT, decodeURIComponent(relPath)));

  // Nunca deixa sair da raiz do projeto (bloqueia "../../etc/passwd" etc.).
  if (filePath.indexOf(ROOT) !== 0) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 - arquivo nao encontrado: " + relPath);
      return;
    }
    var ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
}

// ---------------------------------------------------------------------
// Ponte para as Netlify Functions existentes (mesmo codigo, sem duplicar
// a logica de sincronizacao com o GitHub / API oficial de cartas).
// ---------------------------------------------------------------------
var FUNCTIONS = {
  "/.netlify/functions/data-get": require("./netlify/functions/data-get.js"),
  "/.netlify/functions/data-save": require("./netlify/functions/data-save.js"),
  "/.netlify/functions/catalog-fetch": require("./netlify/functions/catalog-fetch.js")
};

function readBody(req) {
  return new Promise(function (resolve, reject) {
    var chunks = [];
    req.on("data", function (c) { chunks.push(c); });
    req.on("end", function () { resolve(Buffer.concat(chunks).toString("utf-8")); });
    req.on("error", reject);
  });
}

function sendFunctionResult(res, result) {
  var headers = Object.assign({ "Content-Type": "application/json" }, result.headers || {});
  res.writeHead(result.statusCode || 200, headers);
  res.end(result.body || "");
}

async function handleFunction(req, res, urlPath, mod) {
  try {
    if (urlPath === "/.netlify/functions/data-save") {
      var body = await readBody(req);
      var result = await mod.handler({ httpMethod: req.method, body: body });
      sendFunctionResult(res, result);
      return;
    }
    var result2 = await mod.handler({ httpMethod: req.method });
    sendFunctionResult(res, result2);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: String(err && err.stack || err) }));
  }
}

// ---------------------------------------------------------------------
// Servidor HTTP
// ---------------------------------------------------------------------
var server = http.createServer(function (req, res) {
  var urlPath = req.url.split("?")[0];

  if (FUNCTIONS[urlPath]) {
    handleFunction(req, res, urlPath, FUNCTIONS[urlPath]);
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    res.end("Method not allowed");
    return;
  }

  serveStatic(req, res, urlPath);
});

server.listen(PORT, function () {
  var hasToken = !!process.env.GH_DATA_TOKEN;
  console.log("");
  console.log("  Sorcery Collection App - servidor local (sem Netlify)");
  console.log("  ------------------------------------------------------");
  console.log("  http://localhost:" + PORT);
  console.log("");
  console.log("  Sincronizacao com o GitHub (GH_DATA_TOKEN): " + (hasToken ? "configurado" : "NAO configurado (veja .env.local.example)"));
  console.log("  Imagens: carregadas direto do Google Drive (nenhuma configuracao extra precisa rodar aqui)");
  console.log("");
});
