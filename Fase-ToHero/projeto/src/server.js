// Importando o Express
const express = require('express');

// Instanciando o pacote Express
const app = express();

// Importando dataBase,js
const dataBase = require('./database/dataBaseMysql');
// Importando pacote Body-parser 
const bodyParser = require('body-parser');

// Usando o body-parser 
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/pokemons', async (req,res) => {
    const pokemon =  await dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo      
    })
    res.send(pokemon)
});

// app.get('/pokemons',(req,res) =>  // req (requisição) /  res (resposta)
//     res.send(dataBase.mostrarPokemons())
// );

// // REQUISIÇÃO GET
// app.get('/pokemons/:id',(req,res) => 
//     res.send(dataBase.mostrarPokemon(req.params.id))
// );

// REQUISIÇÃO POST

// Setando o nº da porta usada para realizar a requisição no Browser
app.listen(3003);