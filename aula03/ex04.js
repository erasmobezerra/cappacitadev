
//4) Vimos que podemos criar arrays que guardam objetos. Exemplo:

var moradores = [
    {
        nome: 'José',
        apartamento: '12A',
        vagaGaragem: 4,
        possuiPet: false
    },
    {
        nome: 'Alice',
        apartamento: '21B',
        vagaGaragem: 14,
        possuiPet: true
    }
]
/*    
Num condomínio moram:
    José no apartamento 12A, que possui a vaga de garagem número 4 e não possui pets.
    Alice no apartamento 21B, que possui a vaga de garagem número 14 e possui animais de estimação.
    Ana Clara no apartamento 02A, vaga de garagem 10 e não possui pets.
    Levi no apartamento 09B, vaga de garagem 1 e possui pets
    Igor no apartamento 17B, vaga de garagem 11 e possui pets


a) Crie o array cadastroMoradores e guarde essas informações. */

var cadastroMoradores = [
    {
        nome: 'José',
        apartamento: '12A',
        vagaGaragem: 4,
        possuiPet: false,
    },
    {
        nome: 'Alice',
        apartamento: '21B',
        vagaGaragem: 14,
        possuiPet: true
    },
    {
        nome: 'Ana Clara',
        apartamento: '02A',
        vagaGaragem: 10,
        possuiPet: false,
    },
    {
        nome: 'Levi',
        apartamento: '09B',
        vagaGaragem: 1,
        possuiPet: true,
    },
    {
        nome: 'Igor',
        apartamento: '17B',
        vagaGaragem: 11,
        possuiPet: true,
    },
]

//b) Imprima somente os dados do Igor

console.log(cadastroMoradores[4]);

//c) Ana Clara adotou um gatinho, altere a informação na sua variável

cadastroMoradores[2].possuiPet = true;

//d) Imprima somente os dados da Ana Clara

console.log(cadastroMoradores[2]);

//e) Imprima na tela a quantidade de moradores usando console.log(cadastroMoradores.length)

console.log(cadastroMoradores.length);