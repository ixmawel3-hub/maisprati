console.clear()
let nomes = []
let idades = []

const PROMPT = require('prompt-sync')()
for (let i = 0; i <= 8; i++){
    nomes.push(PROMPT('Digite o nome: '))
    idades.push(Number(PROMPT('Digite a idade: ')))
}

console.log("Lista das pessoas menores de idade: ")
for (let i = 0; i <= 8; i++){
    if (idades[i] <18){
        console.log(nomes[i])
    }
}