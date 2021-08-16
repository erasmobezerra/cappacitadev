//caso não setado, o id será incrementado automaticamente 
const sequence = {
    _id: 1,
    get id() { return this._id++}
}


// recebe vazio pois nã há nenhum cadastro no momento
const pokemons = {}

// salva um novo pokemon na base de dados
function salvarPokemons(pokemon) {
    if ( !pokemon.id ) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

// mostra o Pokemon correspondente ao parâmtro (id) utilizado
function mostrarPokemon(id) {
    return pokemons[id] || {}
}

// mostra todos os Pokemons cadastros
function mostrarPokemons() {
    return Object.values(pokemons)
}

// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons }

