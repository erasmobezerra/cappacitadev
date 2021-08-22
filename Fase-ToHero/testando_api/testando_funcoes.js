const pokemons = [
    {
        nome: "Simula indice 0"
    },
    {
        nome: "Pikachu",
        tipo: "Eletrico",
        fraqueza: "Fogo",
        resistencia: "Agua",
        hp: 70,
        id: 1
    },
    {
        nome: "Charmander",
        tipo: "Fogo",
        fraqueza: "Agua",
        resistencia: "Grama",
        hp: 60,
        id: 2
    },
    {
        nome: "Vulpix",
        tipo: "Fogo",
        fraqueza: "Agua",
        resistencia: "Grama",
        hp: 90,
        id: 3
    },
    {
        nome: "Bulbasaur",
        tipo: "Grama",
        fraqueza: "Fogo",
        resistencia: "Agua",
        hp: 100,
        id: 4
    }
]

const pokemonsTipoFogo = pokemons.filter(pokemons => pokemons.tipo == "Fogo") 
console.log(pokemonsTipoFogo)

// function curarPokemon(id){
//     const pocao = 20

//     const pokemon1 = pokemons[id]

//     if (pokemon1.hp < 100){
//         pokemon1.hp = pokemon1.hp + pocao
//     }    
//     if (pokemon1.hp == 90){
//         pokemon1.hp = pokemon1.hp + 10
//     }
//     else if (pokemon1.hp >=  100) {
//         pokemon1.hp = 100
//     }
//     return `${pokemon1.hp}`
// }

// console.log(curarPokemon(4))

// function curarPokemon(id){
    
//     const pokemonC = pokemons[id]
//     const pocaoCura = 20

//     if (pokemonC.hp < 100) {
//         pokemonC.hp += pocaoCura
//         return `${pokemonC.nome}: ${pokemonC.hp}`

//     } else if (pokemonC.hp >= 100) {
//         return `Seu pokemon está com a vida máxima`  
//     }

// }