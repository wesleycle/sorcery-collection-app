/* netlify/functions/data-get.js
 * Le o arquivo de dados do app (catalogo/colecao/decks/listas/config) direto
 * do repositorio GitHub, que funciona como "banco de dados" leve entre
 * dispositivos - sem servidor proprio, sem Postgres.
 *
 * O token de acesso ao GitHub SO existe aqui, como variavel de ambiente do
 * Netlify (GH_DATA_TOKEN, configurada em Project configuration > Environment
 * variables). Nunca fica em nenhum arquivo versionado no git nem e enviado
 * ao navegador - o navegador so fala com esta funcao (mesma origem, sem
 * CORS), nunca direto com a API do GitHub.
 */
"use strict";

var GITHUB_OWNER = "wesleycle";
var GITHUB_REPO = "sorcery-collection-app";
var GITHUB_BRANCH = "main";
var GITHUB_PATH = "appdata/data.json";

exports.handler = async function () {
  var token = process.env.GH_DATA_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GH_DATA_TOKEN não configurado nas variáveis de ambiente do Netlify." })
    };
  }

  var url = "https://api.github.com/repos/" + GITHUB_OWNER + "/" + GITHUB_REPO +
    "/contents/" + encodeURIComponent(GITHUB_PATH) + "?ref=" + GITHUB_BRANCH + "&_=" + Date.now();

  try {
    // Accept "raw" faz o GitHub devolver os bytes do arquivo direto no corpo
    // da resposta, sem embrulhar em JSON+base64. Isso importa porque a API
    // "normal" (application/vnd.github+json) só devolve o campo "content"
    // preenchido pra arquivos menores que 1MB - acima disso vem vazio, e o
    // app ficava sempre achando que não havia dados nenhum no repositorio.
    var res = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/vnd.github.raw+json",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });

    if (res.status === 404) {
      // Arquivo ainda nao existe no repo (primeira vez que o app roda) - o
      // cliente trata isso como "sem dados remotos ainda" e segue com o que
      // tiver localmente ate a primeira gravacao criar o arquivo.
      return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: null }) };
    }
    if (!res.ok) {
      var errText = await res.text();
      return { statusCode: 502, body: JSON.stringify({ error: "GitHub respondeu " + res.status + ": " + errText.slice(0, 300) }) };
    }

    var text = await res.text();
    var data = null;
    try { data = JSON.parse(text); } catch (e) { /* conteudo remoto invalido, trata como ausente */ }

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: data }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
