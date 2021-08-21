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
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
});


app.put('/pokemons/:id',(req,res) => {
    const pokemon = dataBase.atualizarPokemon(req.params.id,{
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id) 
    })
    res.send(pokemon)
});

app.delete('/pokemons/:id',(req,res) => 
    res.send(dataBase.deletarPokemon(req.params.id))
);

app.delete('/pokemons',(req,res) => 
    res.send(dataBase.deletarPokemons())
);

app.post('/batalha', (req, res) => {
    res.send(dataBase.batalhaPokemon(req.body.id1, req.body.id2))
})

app.post('/recuperado', (req, res) => {
    res.send(dataBase.curarPokemon(req.body.id))
})

app.get('/nomes',(req,res) =>  
    res.send(dataBase.mostrarNomesPokemons())
);

app.post('/tipo', (req, res) => {
    res.send(dataBase.mostrarPorTipoPokemons(req.body.tipo))
})


// Setando o nº da porta usada para realizar a requisição no Browser
app.listen(3003);