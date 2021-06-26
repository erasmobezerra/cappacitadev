var numero = 14
var divisores = 0;

for (var count = 1; count <= numero; count++)
    if (numero % count == 0)
        divisores++;       

if (divisores == 2)
    console.log('É primo');
else
    console.log('Não é primo');