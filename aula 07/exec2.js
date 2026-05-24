let a = 8
let b = 10

let resultado = operacoes(a, b)



function operacoes(num1, num2){
    let soma = num1 + num2
    let multiplicacao = num1 * num2
    let subtracao = num1 - num2
    let divisao = num1 / num2

    console.log(`${num1} + ${num2} = ${soma}`)
    console.log(`${num1} * ${num2} = ${multiplicacao}`)
    console.log(`${num1} - ${num2} = ${subtracao}`)
    console.log(`${num1} / ${num2} = ${divisao}`)
}