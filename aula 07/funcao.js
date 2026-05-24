// function mensagem (){
//     console.log("Olá, mundo!")
// }

// mensagem()
console.log('Início do programa.\n')
saudacao('Ismael')


let nota1 = 9
let nota2 = 10

let resultado = soma(nota1, nota2)
let media = calcularMedia(nota1, nota2)

console.log(`A soma das notas foi ${resultado}`)
console.log(`A média das notas foi ${media}`)

console.log('\nFim do programa')



function soma (a, b) {
    return a+b
}

function calcularMedia(a, b){
    return (soma(a, b)) /2
}

function saudacao(nome){
    console.log(`Olá, ${nome}.\n`)
}