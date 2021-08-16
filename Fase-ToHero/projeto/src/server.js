// Importando o Express
const express = require('express');

// Instanciando o pacote Express
const app = express();

// Importando dataBase,js
const dataBase = require('./dataBase.js');
// Importando pacote Body-parser 
const bodyParser = require('body-parser');

// Usando o body-parser 
app.use(bodyParser.urlencoded({ extended: true}))


// REQUISIÇÃO GET
// Acessando o parâmetro '/', obtemos como resposta o argumento em .send()
app.get('/pokemons',(requisao,resposta) => 
    resposta.send(dataBase.mostrarPokemons())
);

// REQUISIÇÃO GET
app.get('/pokemons/:id',(requisao,resposta) => // Acessando o parâmetro '/', obtemos como resposta o argumento em .send()
    resposta.send(dataBase.mostrarPokemon(requisao.params.id))
);

// REQUISIÇÃO POST
app.post('/pokemons',(requisao,resposta) => {// Acessando o parâmetro '/', obtemos como resposta o argumento em .send()
    const pokemon = dataBase.salvarPokemons({
        nome: requisao.body.nome,
        tipo: requisao.body.tipo
    })
    resposta.send(pokemon)
});

// Setando o nº da porta usada para realizar a requisição no Browser
app.listen(3003);