var array = [
    {
        nome: "Lucas",
        sobrenome: "da Silva",
        idade: 21,
        genero: "Masculino",
        plano: "full",
        carencia: false,
        aquisicao: "12/01/2019"
    },
    {
        nome: "Ana",
        sobrenome: "Lima",
        idade: 17,
        genero: "Feminino",
        plano: "medium",
        carencia: false,
        aquisicao: "17/03/2019"
    },
    {
        nome: "Adriana",
        sobrenome: "Menezes",
        idade: 27,
        genero: "Feminino",
        plano: "full",
        carencia: true,
        aquisicao: "14/09/2020"
    }
]

console.log(array)

console.log("\nFiltrando o(s) objeto(s) com idade >= 18 e <= 26:\n")

var retornaLista = (array) => {
    function filtrar(array) {
        return array.idade >= 18 && array.idade <= 26;
    }
    return array.filter(filtrar)    
}

console.log(retornaLista(array))

/*
module.exports.retornaLista = (array) => {
    function filtrar(array) {
        return array.idade >= 18 && array.idade <= 26;
    }
    return array.filter(filtrar)
}

var retornaLista = (array) => {
    var arrayFinal = [];    
    for (const cliente in array) {
        if (array[cliente].idade >= 18 && array[cliente].idade <= 26) {
            arrayFinal.push(array[cliente]);
        }
    }
    return arrayFinal;
}
console.log(retornaLista(array));

*/


