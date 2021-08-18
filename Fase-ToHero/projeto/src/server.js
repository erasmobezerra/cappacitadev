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
// Acessando a rota '/pokemons', obtemos como resposta o retorno do método .send()
app.get('/pokemons',(req,res) =>  // req (requisição) /  res (resposta)
    res.send(dataBase.mostrarPokemons())
);

// REQUISIÇÃO GET
app.get('/pokemons/:id',(req,res) => 
    res.send(dataBase.mostrarPokemon(req.params.id))
);

// REQUISIÇÃO POST
app.post('/pokemons',(req,res) => {
    const pokemon = dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo
    })
    res.send(pokemon)
});


app.put('/pokemons/:id',(req,res) => {
    const pokemon = dataBase.atualizarPokemon(req.params.id,{
        nome: req.body.nome,
        tipo: req.body.tipo,
        id: req.params.id
    })
    res.send(pokemon)
});



// Setando o nº da porta usada para realizar a requisição no Browser
app.listen(3003);