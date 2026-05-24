console.clear()
const PROMPT = require('prompt-sync')()
let altura = Number(PROMPT('Informe a altura da pessoa: '))

console.log("\n=========================\n")
console.log("1 - Masculino\n2 - Feminino")
console.log("\n=========================\n")


let sexo = PROMPT('Escolha o sexo da pessoa: ')

if(sexo == '1' || sexo == '2'){
    let peso = pesoIdeal(altura, sexo)
    console.log(`\nO peso ideal para ${sexo == '2' ? "uma mulher" : "um homem"} de ${altura.toFixed(2)}m é ${peso.toFixed(2)}kg.\n`)
} else{
    console.log("Impossível calcular!")
}

function pesoIdeal(alt, sex){
    if (sex ==  '1'){
        return 72.7 * alt - 58
    } else if(sex == '2'){
        return 62.1 * alt - 44.7
    } 
}