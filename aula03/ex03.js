// 3) Utilize o console para os exercícios a seguir:

//a) Crie um array meuNome contendo seu nome completo

    var meuNome = ['Erasmo Ribeiro Bezerra'];


//b) Imprima na tela a quantidade de caracteres na variável meuNome utilizando o método .length()

    console.log(meuNome.length);


//c) Com a variável meuNome invés de imprimir diretamente, guarde na variável qtdLetras
//   a quantidade de caracteres utilizando o método .length(). Imprima qtdLetras.

    qtdLetras = meuNome[0].length;
    console.log(qtdLetras);


//d) Na variável minhaFrase = “Vou praticar muito para aprender” imprima qual a posição
//no índice do primeiro caractere “p”. Use indexOf().

minhaFrase = 'Vou praticar muito para aprender'
console.log(minhaFrase.indexOf('p'));


//e) Com a mesma variável imprima a posição no índice da palavra “para”

console.log(minhaFrase.indexOf('para'));

//f) Com a mesma variável verifique se existe o caractere “w”

if (minhaFrase.indexOf('w') == 1) {
   console.log('true') 
} else {
    console.log('false')
}
