let numeros = [1, 5, 4, 8, 3, 10]
let pares = 0

for (let pos = 0; pos < numeros.length; pos++){
    if (numeros[pos] % 2 == 0){
        pares++
    }
}

console.log(`O vetor [${numeros}] tem ${pares} números pares.`)