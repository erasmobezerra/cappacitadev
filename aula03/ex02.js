/*
2) Para criarmos um array utilizamos os colchetes [ ]. Por exemplo:
    
    var listaDeCompras = [“pasta de dente”, “detergente”, “sabonete”, “sabão em pó”]

Se quisermos imprimir o array inteiro fazemos  =>  console.log(listaDeCompras)
Para imprimir somente “pasta de dente” fazemos => console.log(listaDeCompras[0])
Para alterar um item na nossa lista fazemos    => listaDeCompras[2] = “vassoura”, ao imprimir todo
o array veremos que listaDeCompras passou a ser: 
   
    [“pasta de dente”, “detergente”, “vassoura”, “sabão em pó”]

    Faça os exercícios a seguir utilizando o console:
*/
// a) Crie um array

    var listaAnimes = ['Koe no Katachi', "Shingeki no Kyojin", 'Kimetsu no Yaiba', 'Naruto', 'Death Note' ]

// b) Imprima todos os itens

    console.log(listaAnimes);

// c) Altere o conteúdo na última posição

    listaAnimes[4] = 'Akame ga Kill';

// d) Imprima novamente para verificar se alterou

    console.log(listaAnimes);