let data = new Date();
console.log("Formato ISO (Date) => " + data);
// Wed Aug 11 2021 12:04:47 GMT-0300 (Horário Padrão de Brasília)

let dataUTC = data.toUTCString();
console.log("Formato UTC (String) => " + dataUTC);
//Wed, 11 Aug 2021 15:04:47 GMT

let data2 = new Date(dataUTC);
console.log("Convertendo UTC (String) para ISO (Date) => " + data2)
//Wed Aug 11 2021 12:04:47 GMT-0300 (Horário Padrão de Brasília)

let dataHora = ((data2.getDate() )) + "/" + ((data2.getMonth() + 1)) + "/" + data2.getFullYear() + " " 
                + data2.getHours() + ":" + data2.getMinutes() + ":" + data2.getSeconds();
console.log("Formatando data e hora com .get... (String) => " + dataHora)
//11/8/2021 12:4:47

console.log("Formatando data e hora (String) => " + data.toLocaleDateString() + ' ' + data.toLocaleTimeString())
//11/08/2021 12:04:47 PM



let hora = data.toLocaleTimeString();
console.log("Formatando para h:m:s (String) => " + hora) 
//12:04:47

let dataMesAno = data.toLocaleDateString()
console.log("Formatando para dd/mm/aaaa (String) => " + dataMesAno)
//11/08/2021


// Millisegundos para Hora/Minuto?segundo
var ms = 298999;
var time = new Date(ms);
console.log( time.getUTCHours() + ':' + time.getUTCMinutes() + ':' + time.getUTCSeconds() ); // "0:4:59"


/*
    COMPARANDO DATA E HORA
*/


// Podemos comparar diretamente duas datas em JavaScript com operadores de comparação como <, <=, > e >=.

var date1 = new Date('2020-10-23');
var date2 = new Date('2020-10-22');

console.log(date1 > date2);
console.log(date1 >= date2);
console.log(date1 < date2);
console.log(date1 <= date2);


// Convertemos duas datas em valores numéricos correspondentes ao seu tempo, utilizando o método getTime(), 
// e então podemos comparar duas delas diretamente.

var date1 = new Date(2019, 08, 07, 11, 45, 55); 
var date2 = new Date(2019, 08, 07, 11, 45, 55); 
if (date1.getTime() < date2.getTime()) 
  console.log("date1 is lesser than date2"); 
else if (date1.getTime() > date2.getTime()) 
  console.log("date1 is greater than date2"); 
else
  console.log("both are equal"); 

// Ou 

// Inicializamos o objeto Date() com data e horário atual
var date1 = new Date();
// Inicializamos uma data no passado
var date2 = new Date('2018-04-07 12:30:00');

//Verificamos se primeira data é igual, maior ou menor que a segunda
if (date1.getTime() === date2.getTime()) {
	console.log('As datas são iguais');
}
else if (date1.getTime() > date2.getTime()) {
	console.log(date1.toString() + ' maior que ' + date2.toString());
}
else {
	console.log(date1.toString() + ' menor que ' + date2.toString());
}


 
//   O método getTime() poderia verificar a igualdade de duas datas em JavaScript.

  var date1 = new Date();
  var date2 = new Date(date1);
  
  if (date1.getTime() == date2.getTime())
      console.log("Two dates are equal."); 
  
  if (date1.getTime() === date2.getTime())
      console.log("Two dates are equal.");   



// A função Number() converte o objeto Date para um número que representa o valor do objeto em Java. Ela retorna NaN se o objeto não puder ser convertido para um número legal.

var date1 = new Date(2019, 08, 07, 11, 45, 55); 
var date2 = new Date(2019, 08, 07, 11, 45, 55); 

console.log(Number(date1) === Number(date2)) 
console.log(Number(date1) == Number(date2) )
console.log(Number(date1) < Number(date2)) 
console.log(Number(date1) > Number(date2) )


/*
Essencialmente, para descobrir a diferença entre duas datas, precisamos:

-> Converter as datas em milisegundos usando getTime().

-> Fazer a subtração entre as datas.

-> Converter o resultado da subtração em um formato legível.

*/

// Data de hoje
var now = new Date(); 
var datando = '2014-07-07 12:30:00'
// Outra data no passado
var past = new Date(datando); 
// Subtrai uma data pela outra
var diff = Math.abs(now.getTime() - past.getTime());  // Math.abs -> Retorna O valor absoluto do número passado
// Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Math.ceil ->  Retorna O menor inteiro maior ou igual ao número fornecido.
// Mostra a diferença em dias
console.log('Entre 07/07/2014 até agora já se passaram ' + days + ' dias');


// Millisegundos para Hora/Minuto?segundo
var ms = 298999;
var time = new Date(ms);
console.log( time.getUTCHours() + ':' + time.getUTCMinutes() + ':' + time.getUTCSeconds() ); // "0:4:59"