const { databaseConnection } = require('./connection')


const pokemons = {}

// salva um novo pokemon na base de dados
async function salvarPokemons(pokemon) {
    // const queryInsertPokemon = `INSERT INTO pokemons(nome_pokemon, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}')`
    // const result = await databaseConnection.raw(queryInsertPokemon)
   
    const insertPokemon = {
        nome_pokemon: pokemon.nome_pokemon,
        tipo: pokemon.tipo,
        local_origem: pokemon.local_origem,
        fraqueza: pokemon.fraqueza,
        resistencia: pokemon.resistencia,
        hp: pokemon.hp
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
        local_origem: pokemon.local_origem,
        fraqueza: pokemon.fraqueza,
        resistencia: pokemon.resistencia        
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

async function batalhaPokemon(id1, id2) {

    var id = id1
    const pokemon1 = await databaseConnection.select().from('pokemons').where({id})
    var id = id2
    const pokemon2 = await databaseConnection.select().from('pokemons').where({id})

    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10    

    if(pokemon1[0].hp != 0 && pokemon2[0].hp != 0) {
        if(pokemon1[0].tipo == pokemon2[0].fraqueza) {
            pokemon2[0].hp -= superEfetivo
            var id = id2    
            const updatePokemon = {hp: pokemon2[0].hp}  
            const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)    
        } else if (pokemon1[0].tipo == pokemon2[0].resistencia) {
            pokemon2[0].hp -= naoEfetivo
            var id = id2    
            const updatePokemon = {hp: pokemon2[0].hp}  
            const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
        } else {
            pokemon2[0].hp -= efetivo
            var id = id2    
            const updatePokemon = {hp: pokemon2[0].hp}  
            const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
        }
    }

    if(pokemon1[0].hp != 0 && pokemon2[0].hp != 0) {
        if(pokemon2[0].tipo == pokemon1[0].fraqueza) {
            pokemon1[0].hp -= superEfetivo
            var id = id1    
            const updatePokemon = {hp: pokemon1[0].hp}  
            const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
        } else if (pokemon2[0].tipo == pokemon1[0].resistencia) {
            pokemon1[0].hp -= naoEfetivo
            var id = id1    
            const updatePokemon = {hp: pokemon1[0].hp}  
            const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
        } else {
            pokemon1[0].hp -= efetivo
            var id = id1    
            const updatePokemon = {hp: pokemon1[0].hp}  
            const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
        }
    }

    if(pokemon1[0].hp < 0) {
        pokemon1[0].hp = 0
        var id = id1    
        const updatePokemon = {hp: pokemon1[0].hp}  
        const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
    } 

    if(pokemon2[0].hp < 0) {
        pokemon2[0].hp = 0
        var id = id2    
        const updatePokemon = {hp: pokemon2[0].hp}  
        const result2 = await databaseConnection('pokemons').where({id}).update(updatePokemon)
        
    }     

    return `${pokemon1[0].nome_pokemon}: ${pokemon1[0].hp} / ${pokemon2[0].nome_pokemon}: ${pokemon2[0].hp}`    
}


// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons, alterarPokemon, deletarPokemon,
                    batalhaPokemon}

