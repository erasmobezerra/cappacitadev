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

