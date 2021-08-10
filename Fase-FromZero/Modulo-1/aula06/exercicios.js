console.log("// 1 - Crie as funções sem parâmetro a seguir: \n ") 

console.log(" a. Uma função que calcule a multiplicação de dois valores - uma função sem  parâmetro, ou seja, atribua os valores dentro da função") 

function multiplicar() {
    var n1 = 5;
    var n2 = 2;
    console.log(n1 * n2)
}
multiplicar();


console.log("\n// b. Uma função que calcule a subtração de dois valores, crie essas variáveis dentro da sua função")

function subtrair(a,b) {
    var n1 = 5;
    var n2 = 2;
    console.log(n1 - n2)
}

subtrair();


console.log("\n// c Uma função que imprima todos os itens do array - você pode definir esta variável dentro da função:")

function imprimirArray() {
    var listaDadosClientes = [
        {
            nome: 'Daiane',
            idade: 24,
            endereco: 'Rua Freire, 24, Consolação, São Paulo'
        },
        {
            nome: 'Gabriel',
            idade: 19,
            endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
        },
        {
            nome: 'Bruno',
            idade: 37,
            endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
        }
    ]

    for (cliente of listaDadosClientes) {
        console.log(cliente)
    }

}

imprimirArray();


console.log("\n // d. Uma função que imprima somente os nomes dos clientes no array listaDadosClientes(você pode definir esta variável dentro da função");

function imprimirNomesArray(){

    var listaDadosClientes = [
        {
            nome: 'Daiane',
            idade: 24,
            endereco: 'Rua Freire, 24, Consolação, São Paulo'
        },
        {
            nome: 'Gabriel',
            idade: 19,
            endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
        },
        {
            nome: 'Bruno',
            idade: 37,
            endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
        }
    ]

    for (lista in listaDadosClientes) {
        console.log(listaDadosClientes[lista].nome)
    }
}

imprimirNomesArray();


console.log("\n// 2 - Crie as funções parametrizadas a seguir: \n// a. Uma função que receba dois valores por parâmetro e multiplique um pelo outro ")

    function multiplica(a,b){
        return a * b
    }


console.log("\n// b. Uma função que receba dois valores e retorne o menor deles, se forem iguais retorne que são iguais")

    function menor(a,b) {
        if (a==b) {
            console.log("<valores idênticos>")
        } else if (a<b) {
            console.log(a)
        } else {
            console.log(b)
        }
    }


console.log("\n// c. Uma função que receba um array e imprima todos os itens na tela")

    function imprimirArray(listaDadosClientes) {
        for (lista of listaDadosClientes) {
            console.log(lista)
        }
    }
    

console.log("\n// d. Uma função que receba um o array listaDadosCliente e retorne outro array contendo somente os endereços destes clientes")

var listaDadosClientes = [
    {
        nome: 'Daiane',
        idade: 24,
        endereco: 'Rua Freire, 24, Consolação, São Paulo'
    },
    {
        nome: 'Gabriel',
        idade: 19,
        endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
    },
    {
        nome: 'Bruno',
        idade: 37,
        endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
    }
]
    var listaDeEnderecos = [];
    function imprimirEnderecosArray(listaDadosClientes) {
        for (lista in listaDadosClientes) {
            listaDeEnderecos[lista] = listaDadosClientes[lista].endereco
        }
        return listaDeEnderecos
    }    

    console.log(imprimirEnderecosArray(listaDadosClientes));


console.log("\n// e. Uma função que receba um o array listaDadosCliente e retorne outro array contendo somente os nomes desses clientes")

    var listaDeNomes = [];
    function imprimirNomesArray(listaDadosClientes) {
        for (lista in listaDadosClientes) {
        listaDeNomes[lista] = listaDadosClientes[lista].nome
        }
        return listaDeNomes
    }    

    console.log(imprimirNomesArray(listaDadosClientes));