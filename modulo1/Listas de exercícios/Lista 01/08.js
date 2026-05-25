console.clear()
const PROMPT = require('prompt-sync')()
let numero = Number(PROMPT('Informe o número para calcular o fatorial: '))
let fatorial = 1

for (let i = numero; i >= 1; i--) {
    fatorial *= i
}

console.log(`${numero}! = ${fatorial}`)