/* netlify/functions/data-save.js
 * Grava o arquivo de dados do app (catalogo/colecao/decks/listas/config) no
 * repositorio GitHub, criando um commit a cada gravacao - e o "banco de
 * dados" do app (ver data-get.js para o motivo/arquitetura).
 *
 * Mesma regra de seguranca do data-get.js: o token vem so de
 * process.env.GH_DATA_TOKEN (variavel de ambiente do Netlify), nunca do
 * navegador ou de qualquer arquivo versionado.
 */
"use strict";

var GITHUB_OWNER = "wesleycle";
var GITHUB_REPO = "sorcery-collection-app";
var GITHUB_BRANCH = "main";
var GITHUB_PATH = "appdata/data.json";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  var token = process.env.GH_DATA_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GH_DATA_TOKEN não configurado nas variáveis de ambiente do Netlify." })
    };
  }

  var payload;
  try { payload = JSON.parse(event.body || "{}"); } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Corpo da requisição inválido (JSON esperado)." }) };
  }
  if (!payload || typeof payload.data === "undefined") {
    return { statusCode: 400, body: JSON.stringify({ error: "Campo 'data' ausente no corpo da requisição." }) };
  }

  var apiBase = "https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO + "/contents/" + encodeURIComponent(GITHUB_PATH);
  var headers = {
    Authorization: "Bearer " + token,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  try {
    // 1. Busca o sha atual do arquivo (exigido pela API do GitHub pra
    // sobrescrever um arquivo existente sem conflito). Se o arquivo ainda
    // nao existe (404), segue sem sha - a PUT abaixo cria o arquivo.
    var sha;
    var getRes = await fetch(apiBase + "?ref=" + GITHUB_BRANCH + "&_=" + Date.now(), { headers: headers });
    if (getRes.ok) {
      var getJson = await getRes.json();
      sha = getJson.sha;
    } else if (getRes.status !== 404) {
      var getErrText = await getRes.text();
      return { statusCode: 502, body: JSON.stringify({ error: "GitHub (leitura) respondeu " + getRes.status + ": " + getErrText.slice(0, 300) }) };
    }

    // 2. Grava o conteudo novo.
    var content = Buffer.from(JSON.stringify(payload.data, null, 2), "utf-8").toString("base64");
    var putBody = {
      message: "chore: sync data.json (" + new Date().toISOString() + ")",
      content: content,
      branch: GITHUB_BRANCH
    };
    if (sha) putBody.sha = sha;

    var putRes = await fetch(apiBase, {
      method: "PUT",
      headers: Object.assign({ "Content-Type": "application/json" }, headers),
      body: JSON.stringify(putBody)
    });
    if (!putRes.ok) {
      var putErrText = await putRes.text();
      return { statusCode: 502, body: JSON.stringify({ error: "GitHub (gravação) respondeu " + putRes.status + ": " + putErrText.slice(0, 300) }) };
    }

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
