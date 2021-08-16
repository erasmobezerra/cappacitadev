// Importando o Express
const express = require('express');

// Instanciando o Express
const app = express();

app.get('/saudacao',(requisao,resposta) => // Acessando o parâmetro '/', obtemos como resposta o argumento em .send()
    resposta.send("Oi, tudo bem com vocês!?")
);

// Setando o nº da porta usada para realizar a requisição no Browser
app.listen(3003);