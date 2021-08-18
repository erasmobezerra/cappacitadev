//O id é incrementado automaticamente 
const sequence = {
    _id: 1,
    get id() { return this._id++}
}


// recebe vazio pois nã há nenhum cadastro no momento

const pokemons = []

// mostra todos os Pokemons cadastrados
function mostrarPokemons() {
    return Object.values(pokemons)
}

// mostra o Pokemon correspondente ao parâmtro (id) utilizado
function mostrarPokemon(id) {
    return pokemons[id] || {}
}

// salva um novo pokemon na base de dados
function salvarPokemons(pokemon) {
    if ( !pokemon.id ) 
        pokemon.id = sequence.id        
    pokemons[pokemon.id] = pokemon
    return pokemon
}

// atualiza um pokemon já existente na base de dados
function atualizarPokemon(id, pokemon) {
    pokemons[id] = pokemon
    return pokemon
}

// deleta um pokemon já existente na base de dados
function deletarPokemon(id) {

    sequence._id -= 1  // Quando chamado o método deletarPokemon, a contagem de id será subtraída em menos um. 

    const pokemonDeletado = pokemons[id]  

    pokemons.splice(id, 1)  // Remove o elemento do array correspondente ao id

    pokemons.forEach(pokemon => {  // Executa uma ação específica em cada elemento do array
        if(pokemon.id > id) {
            pokemon.id -= 1
        }
    })

    return pokemonDeletado  
}


// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon}

