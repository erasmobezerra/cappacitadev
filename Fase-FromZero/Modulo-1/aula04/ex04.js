/*
4) Vimos que os operadores lógicos ajudam a testar mais de uma condição ao mesmo
tempo. Escreva os algoritmos que realizam os seguintes testes:

a) Receber um valor e dizer se é maior que 10 e menor que 50, se não for diga “Insira
um valor entre 10 e 50”. Use o operador &&
*/
    var numero = 52

    if (numero > 10 && numero < 50) {
        console.log(numero + " é maior que 10 e menor que 50")
    } else {
        console.log("Insira um valor entre 10 e 50")
    }


/*b) Para entrar no cinema Tabajara é preciso ter idade maior que a idade de censura (14
anos) e ter o ingresso. Faça um algoritmo que receba idade e ingresso, idade recebe
um number e ingresso um boolean, se a idade for maior que 14 e ingresso true
escreva “Pode entrar”, se a idade for menor ou igual a 14 e ingresso true escreva
“Você não tem a idade mínima”, se a idade for maior que 14 e ingresso false escreva
“Você precisa ter o ingresso”*/

const idadeCensura = 14
var idadePessoa = 13
var ingresso = false

if (idadePessoa > idadeCensura && ingresso) {
    console.log("Pode entrar")
} else if (idadePessoa <= idadeCensura && ingresso) {
    console.log("Você não tem a idade mínima")
} else if (idadePessoa > idadeCensura && !ingresso) {
    console.log("Você precisa ter o igresso")
} else if (idadePessoa <= idadeCensura && !ingresso) {
    console.log("Você nem tem idade mínima e nem ingresso para entrar.")
}



//c) Receber um valor e dizer se é maior que 10 ou menor que 50, se não for diga “Insira
//um valor entre 10 e 50”. Use o operador ||

var numero = 52

    if (numero > 10 || numero < 50) {
        console.log(numero + " é maior que 10 ou menor que 50")
    } else {
        console.log("Insira um valor entre 10 e 50")
    }
