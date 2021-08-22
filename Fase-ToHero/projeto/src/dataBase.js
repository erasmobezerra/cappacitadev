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


function deletarPokemons() {
    if (pokemons.length === 0)
        return `Não há nenhum pokemons aqui para deletar.`
    else
        pokemons.splice(0, pokemons.length)
        return `Todos os pokemons deletados com sucesso!`    
}


function batalhaPokemon(id1, id2) {

    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp -= superEfetivo
        } else if (pokemon1.tipo == pokemon2.resistencia) {
            pokemon2.hp -= naoEfetivo
        } else {
            pokemon2.hp -= efetivo
        }
    }

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp -= superEfetivo
        } else if (pokemon2.tipo == pokemon1.resistencia) {
            pokemon1.hp -= naoEfetivo
        } else {
            pokemon1.hp -= efetivo
        }
    }

    if(pokemon1.hp < 0) pokemon1.hp = 0
    if(pokemon2.hp < 0) pokemon2.hp = 0

    return `${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}`    
}


function curarPokemon(id){
    let pocaoHP = 20
    let pokemonRec = pokemons[id]

    if (pokemonRec.hp < 100) {
        pokemonRec.hp += pocaoHP
        return `${pokemonRec.nome}: ${pokemonRec.hp}`               
    } else  {        
        return `hp de ${pokemonRec.nome} já está no máximo!`
    }      
}


function mostrarNomesPokemons() {
    const nomesPokemons = []
    if (pokemons.length === 0) {
        return `Nenhum Pokemon ainda foi cadastrado`
    } else {        
        for (const i in pokemons) {
            nomesPokemons.push(pokemons[i].nome)  
        }
        return `Nomes dos pokemons cadastrados: ${nomesPokemons}`    
    }
}


function mostrarPorTipoPokemons(tipo) {    
    if (pokemons.length === 0)
        return `Nenhum Pokemon ainda foi cadastrado`
    else        
    return pokemons.filter(pokemons => pokemons.tipo == tipo) 
}

// criando um módulo para deixar os métodos visíveis para outros arquivos
module.exports = {salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon, deletarPokemons, 
                    batalhaPokemon, curarPokemon, mostrarNomesPokemons, mostrarPorTipoPokemons}

