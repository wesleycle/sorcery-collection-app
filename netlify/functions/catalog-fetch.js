/* netlify/functions/catalog-fetch.js
 * Busca AO VIVO a API publica oficial de Sorcery: Contested Realm
 * (https://api.sorcerytcg.com/api/cards), rodando no servidor pra nao sofrer
 * CORS (o servidor da API nao manda Access-Control-Allow-Origin, entao um
 * fetch() direto do navegador e sempre bloqueado - ver sorceryApi.js). Nao
 * precisa de nenhum token/credencial: e uma API publica e sem autenticacao.
 *
 * Usada pelo botao "Atualizar base cartas" em Configuracoes, pra pegar
 * cartas/edicoes novas mesmo antes do snapshot local (sorcery-api-cards-data.js)
 * ser regenerado num proximo deploy.
 */
"use strict";

var API_URL = "https://api.sorcerytcg.com/api/cards";

exports.handler = async function () {
  try {
    var res = await fetch(API_URL, { headers: { Accept: "application/json" } });
    if (!res.ok) {
      var errText = await res.text();
      return { statusCode: 502, body: JSON.stringify({ error: "API oficial respondeu " + res.status + ": " + errText.slice(0, 300) }) };
    }
    var text = await res.text();
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: text };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
