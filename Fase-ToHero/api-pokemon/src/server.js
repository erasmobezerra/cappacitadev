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

app.get('/pokemons',async(req,res) =>  // req (requisição) /  res (resposta)
    res.send(await dataBase.mostrarPokemons())
);


app.get('/pokemons/:id', async(req,res) => 
    res.send(await dataBase.mostrarPokemon(req.params.id))
);


app.post('/pokemons', async (req,res) => {
    const pokemon =  await dataBase.salvarPokemons({
        nome_pokemon: req.body.nome_pokemon,
        tipo: req.body.tipo,
        local_origem: req.body.local_origem,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100      
    })
    res.send(pokemon)
});

app.put('/pokemons/:id', async (req,res) => {
    const pokemon =  await dataBase.alterarPokemon(req.params.id, {
        nome_pokemon: req.body.nome_pokemon,
        tipo: req.body.tipo,
        local_origem: req.body.local_origem,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia             
    })
    res.send(pokemon)
});

app.delete('/pokemons/:id', async(req,res) => 
    res.send(await dataBase.deletarPokemon(req.params.id))
);

app.get('/batalha', async(req,res) => 
    res.send(await dataBase.batalhaPokemon(req.body.id1,req.body.id2))
);

app.get('/cura/:id', async(req,res) => 
    res.send(await dataBase.curarPokemon(req.params.id))
);


// Setando o nº da porta usada para realizar a requisição no Browser
app.listen(3003);