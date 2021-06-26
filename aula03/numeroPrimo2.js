var numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log("São Primos:")
for (let i = 0; i < numeros.length; i++) {
    if (ehPrimo(numeros[i])) {
        console.log(numeros[i])
    }    
}

function ehPrimo(numeros) {
    for (let i = 2; i < numeros; i++) 
      if (numeros % i === 0) {
        return false
      }
    return numeros > 1    
}