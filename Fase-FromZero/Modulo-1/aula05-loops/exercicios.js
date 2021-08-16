console.log("// 1 - Faça um loop que imprima na tela uma contagem de 0 a 10"); 

for (var i = 0; i <=10; i++) {
    console.log(i);
}

console.log("\n// 2 - Faça um loop que imprima somente os número ímpares de 1 a 20")

for (var j = 1; j < 20; j++) {
    if (j % 2 == 1) 
    console.log(j);
}

console.log("\n// 3 - Faça um loop que imprima a multiplicação por 2 dos números de 1 a 5")

for (var j = 1; j <= 5; j++) {
    result = j * 2  
    console.log(result);
}


console.log("\n// 4 - Faça um loop que imprima os números em contagem regressiva de 20 a 0")

for (var j = 20; j >= 0; j--) {
    console.log(j);
}


console.log("\n// 5 - Faça um loop que imprima todos os itens do array doces =  [“bala”, ”pirulito”, ”chiclete”, ”jujuba”, ”chocolate”]") 

 let doces =  ['bala', 'pirulito', 'chiclete', 'jujuba', 'chocolate']

for (doce of doces) {
    console.log(doce)
}

// for (var i = 0; i < doces.length; i++){
//     console.log (doces[i])
// }


console.log("\n// 6 - Faça um loop que procure no array doces a palavra pirulito e troque por doce de leite ")

for (var i = 0; i < doces.length; i++){
        if (doces[i] == 'pirulito') {
            doces[i] = 'doce de leite'
        }
    }

    console.log(doces)
   

console.log("\n// 7 - Altere o conteúdo chiclete do array doces para doce de coco")

    for (var i = 0; i < doces.length; i++){
        if (doces[i] == 'chiclete') {
            doces[i] = 'doce de coco'
        }
    }

    console.log(doces)

console.log("\n// 8 -  Faça um loop que multiplique por 2 somente os números pares do array numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        result = numeros[i] * 2 
        console.log(result);
    }
}

console.log("\n// 9 - Faça um loop que imprima somente os nomes dos clientes no array de objetos ")

    var listaClientes = [
        {
            nome: 'Larissa',
            cidade: 'Sumaré'
        },
        {
            nome: 'Hugo',
            cidade: 'São vicente'
        },
        {
            nome: 'André',
            cidade: 'Osasco'
        }
    ]

    for (var i = 0; i < listaClientes.length; i++ ) {
        console.log(listaClientes[i].nome);
    }


console.log("\n// 10 - Faça um loop que imprima somente as cidades dos clientes da variável listaClientes")

 for (var i = 0; i < listaClientes.length; i++ ) {
        console.log(listaClientes[i].cidade)
    }