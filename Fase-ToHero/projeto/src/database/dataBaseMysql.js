const { databaseConnection } = require('./connection')


const pokemons = {}

// salva um novo pokemon na base de dados
async function salvarPokemons(pokemon) {

    const queryInsertPokemon = `INSERT INTO pokemons(nome_pokemon, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}')`

    //Executa  a query inserindo-a no banco de dados 
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

// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = {salvarPokemons}

