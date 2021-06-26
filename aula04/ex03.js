// 3)Considere os problemas a seguir e escreva o código

//b) Faça um algoritmo que recebe um valor e diz “É par” ou “É ímpar”. Use % 2.

var numero = 12

if (numero % 2 == 0) {
    console.log("É par")
} else {
    console.log("É ímpar")
}


//c) Precisamos testar se uma pessoa é obrigada a votar. Faça um algoritmo que teste
//se a idade é maior que 18, se for escreva “Você deve votar” senão “Você ainda não
//é obrigado a votar”

var idade = 18;

if (idade > 18) {
    console.log("Você deve votar")
} else {
    console.log("Você ainda não é obrigado a votar")
}


//d) Precisamos dizer para o usuário se a conta dele está positiva ou não, para isso faça
//um algoritmo que receba o valor disponível na conta e verifique se é igual a 0, se for
//escreva “Você não possui saldo”, se for maior que 0 escreva “Seu está positivo”,
//senão escreva “Seu saldo está negativo”

var valorEmConta = 1200

if (valorEmConta > 0) {
    console.log("Seu saldo está positivo")
} else if (valorEmConta == 0) {
    console.log("Você não possui saldo")
} else {
    console.log("Seu saldo está negativo")
}


//e) Precisamos dizer ao usuário se ele tem idade para se aposentar ou não,
//considerando que a idade mínima é 65 anos, faça um algoritmo que receba uma
//idade, se for maior ou igual a 65 diga “Você pode se aposentar” senão diga “Você
//ainda não tem a idade mínima”

var idade = 64

if (idade >= 65) {
    console.log("Você pode se aposentar")
} else {
    console.log("Você ainda não tem a idade mínima")
}