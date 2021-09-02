const { databaseConnection } = require('./connection')


const pokemons = {}

// salva um novo pokemon na base de dados
async function salvarPokemons(pokemon) {
    const queryInsertPokemon = `INSERT INTO pokemons(nome_pokemon, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}')`
    
    const result = await databaseConnection.raw(queryInsertPokemon)
    
    console.log(result)

    if(result) {
        return {
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            id: result[0].insertID
        }
    } else {
        console.error("Deu erro!")
        return {
            error: "Deu erro na inserção!"
        }
    }
}

async function mostrarPokemon(id) {

    const querySelectPokemon = `SELECT * FROM pokemons WHERE id = ${id}`

    const result = await databaseConnection.raw(querySelectPokemon)

    return result[0]
}

async function mostrarPokemons(){
    const querySelectPokemons = `SELECT * FROM pokemons`

    const result = await databaseConnection.raw(querySelectPokemons)

    return result[0]
}

// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons}

