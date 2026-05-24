console.clear()
let nomes = []
let nome
const PROMPT = require('prompt-sync')()
for (let i = 0; i <= 6; i++){
    nomes.push(PROMPT('Digite o nome: '))
}

for (let i = 6; i >= 0 ; i--){
    console.log(nomes[i])
}