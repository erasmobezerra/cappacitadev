// Para importar o módulo, passamos para uma variável a função require()
const modulo1 = require('./modulo')

console.log(modulo1)
console.log(modulo1.saudacao)


// É possível importar a chave específca que queremos do objeto
// Para isso, usamos "Destructure"
const {saudacao} = require('./modulo')
console.log(saudacao)



