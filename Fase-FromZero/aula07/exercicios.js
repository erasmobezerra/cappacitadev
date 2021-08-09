console.log("1 - Remova o último item da variável e Imprima a nova variável para verificar se o elemento foi removido:")
var listaDeDoces = ['barra de chocolate', 'bombom', 'bala de goma', 'cocada'];

console.log(listaDeDoces);
listaDeDoces.pop();
console.log(listaDeDoces);



console.log("\n\n 2 - Agora não vamos só remover, você deve guardar o último elemento da variável listaDeDoces em uma nova variável")

var listaDeDoces1 = ['barra de chocolate', 'bombom', 'bala de goma', 'cocada'];
ultimoElemento = listaDeDoces1.pop();
console.log(ultimoElemento)



console.log("3 - Utilize a função .map() no array a seguir e retorne a raiz quadrada de cada elemento usando também a função Math.sqrt (exemplo no slide no slide), não esqueça de imprimir na tela para ver o resultado.")

var numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6];
//var quadradoArray = numerosAleatorios.map(x => Math.sqrt(x));
var quadradoArray = numerosAleatorios.map(Math.sqrt);
console.log(quadradoArray);



console.log("\n\n 4 - Utilize a função .map() na variável numerosAleatorios com o seguinte callback:")

//var metadeArray = numerosAleatorios.map(num => num / 2);

function dividir(x){
    return x/2;
}
//var metadeArray = numerosAleatorios.map(x => dividir(x));
var metadeArray = numerosAleatorios.map(dividir);
console.log(metadeArray);



console.log("5 - Crie uma função que retorna os números pares, a seguir, utilize a função .filter() na  variável numerosAleatorios passando a função que você criou como callback. Veja no slide sobre .filter() como fizemos")

function ehPar(x) {
    if (x % 2 == 0) return x;
}

//var paresArray = numerosAleatorios.filter(x => ehPar(x))
var paresArray = numerosAleatorios.filter(ehPar);
console.log(paresArray);

