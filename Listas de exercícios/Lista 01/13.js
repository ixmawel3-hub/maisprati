
console.clear()
console.log("===== Cadastro de funcionários =====\n")
const PROMPT = require('prompt-sync')()

let sair = false
let funcionarios = []
let funcionario
let matricula
let nome
let salarioBruto
let i = 0

while(!sair) {
    matricula = PROMPT('Informe a matrícula do funcionário: ')
    nome = PROMPT('Informe o nome do funcionário: ')
    salarioBruto = PROMPT('Informe o salário bruto do funcionário: ')
    
    funcionario = {
        matriculaFuncionario: [matricula],
        nomeFuncionario: [nome],
        salarioBrutoFuncionario: [salarioBruto],
        valorDeducaoINSS: [salarioBruto * 0.12],
        salarioLiquidoFuncionario: [salarioBruto * 0.88]
    }

    funcionarios.push(funcionario)

    PROMPT('Deseja encerrar o cadastro? (S/N) ').toUpperCase() == 'S' ? sair = true : i++
    
    console.clear()
    console.log("===== Cadastro de funcionários =====\n")
}

console.clear()
console.log("===== Cadastro de funcionários =====\n")

ListarFuncionarios(funcionarios)

function ListarFuncionarios(funcionarios){
    for (i = 0; i< funcionarios.length; i++){
        console.log("====================================")
        console.log(`Dados do funcionário ${i+1}: `)
        console.log(`Matrícula: ${funcionarios[i].matriculaFuncionario}`)
        console.log(`Nome: ${funcionarios[i].nomeFuncionario}`)
        console.log(`Salário Bruto: R$${Number(funcionarios[i].salarioBrutoFuncionario).toFixed(2)}`)
        console.log(`Desconto INSS: R$${Number(funcionarios[i].valorDeducaoINSS).toFixed(2)}`)
        console.log(`Salário Líquido: R$${Number(funcionarios[i].salarioLiquidoFuncionario).toFixed(2)}`)
        console.log("====================================\n")
    }
}