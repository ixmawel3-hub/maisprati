console.clear()

const PROMPT = require('prompt-sync')()

let habitantes = []
let habitante
let numeroFilhos
let somaSalario = 0
let somaFilhos = 0
let maiorSalario = 0
let quantidadeSalariosMaior350 = 0
let sair = false
let i = 1

LerHabitantes()

function LerHabitantes (){

    while (!sair){
        salario = Number(PROMPT(`Informe salário da ${i}ª pessoa: `))
        numeroFilhos = Number(PROMPT(`Informe a quantidade de filhos da ${i}ª pessoa: `))

        habitante = {
            salario: [salario],
            numeroFilhos: [numeroFilhos]
        }

        salario > 350 ? quantidadeSalariosMaior350++ : i = i
        salario > maiorSalario ? maiorSalario = salario : i = i
        somaSalario += salario
        somaFilhos += numeroFilhos

        habitantes.push(habitante)

        PROMPT('Deseja encerrar o cadastro? (S/N) ').toUpperCase() == 'S' ? sair = true : i++

        console.clear()
    }

    let mediaFilhos = somaFilhos / i
    let mediaSalario = somaSalario / i
    let percentualSalariosAcima350 = quantidadeSalariosMaior350 / i * 100


    console.clear()
    console.log("===== Resultados =====\n")
    console.log(`Média Salarial: R$${mediaSalario.toFixed(2)}`)
    console.log(`Média de Filhos: ${Math.round(mediaFilhos)}`)
    console.log(`Maior Salário: R$${maiorSalario.toFixed(2)}`)
    console.log(`Percentual de pessoas recebendo acima de R$350,00: ${percentualSalariosAcima350.toFixed(2)}%`)

}