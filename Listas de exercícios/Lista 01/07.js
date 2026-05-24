console.clear()
let soma = 0
let quantidade = 0
let media
const PROMPT = require('prompt-sync')()
let numero = Number(PROMPT('Informe o primeiro número: '))

while (numero != 0){
    soma = soma + numero
    quantidade++
    numero = Number(PROMPT('Informe o próximo número: '))
}

media = soma /quantidade

console.log(`A médias dos ${quantidade} números digitados é igual a ${media}`)