const { databaseConnection } = require('./connection')


const pokemons = {}

// salva um novo pokemon na base de dados
async function salvarPokemons(pokemon) {
    // const queryInsertPokemon = `INSERT INTO pokemons(nome_pokemon, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}')`
    // const result = await databaseConnection.raw(queryInsertPokemon)
   
    const insertPokemon = {
        nome_pokemon: pokemon.nome_pokemon,
        tipo: pokemon.tipo,
        local_origem: pokemon.local_origem
    }
   
    const result = await databaseConnection('pokemons').insert(insertPokemon)       
    console.log(result)

    if(result) {
        return {
            // nome_pokemon: pokemon.nome_pokemon,
            // tipo: pokemon.tipo,
            // local_origem: pokemon.local_origem,
            ...pokemon,
            id: result[0]
        }
    } else {
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção!"
        }
    }
}

async function mostrarPokemon(id) {
    // const querySelectPokemon = `SELECT * FROM pokemons WHERE id = ${id}`
    // const result = await databaseConnection.raw(querySelectPokemon)
    const result = await databaseConnection.select().from('pokemons').where({id})
    return result[0]
}

async function mostrarPokemons(){
    // const querySelectPokemons = `SELECT * FROM pokemons`
    // const result = await databaseConnection.raw(querySelectPokemons)
    const result = await databaseConnection.select().table('pokemons')
    return result
}

async function alterarPokemon(id, pokemon) {   
    const updatePokemon = {
        nome_pokemon: pokemon.nome_pokemon,
        tipo: pokemon.tipo,
        local_origem: pokemon.local_origem
    }
   
    const result = await databaseConnection('pokemons').where({id}).update(updatePokemon)     
    console.log(result)

    if(result) {
        return {
            ...pokemon,
            id: result[0]
        }
    } else {
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção!"
        }
    }
}

async function deletarPokemon(id) {    
    const result = await databaseConnection('pokemons').where({id}).del()
    return result[0]
}

// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons, alterarPokemon, deletarPokemon}

