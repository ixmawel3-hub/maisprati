console.clear()
const PROMPT = require('prompt-sync')()
let numero = Number(PROMPT('Informe o número que quer verificar a tabuada: '))
console.clear()
console.log(`Tabuada do número ${numero}:\n`)

let condSub 


console.log("========== SOMA ========== | ======= SUBTRAÇÃO ========")

for( let i = 0; i <= 9 ; i++){
    if(numero + i <= 9){ //apenas por questões de tabulação
        console.log(` ${numero} + ${i} =  ${numero + i}                |   `
                      + `${numero +i} - ${numero} = ${i}`)

    }else {
        console.log(` ${numero} + ${i} = ${numero + i}                |  `
                      + `${numero +i} - ${numero} = ${i}`)

    }
}

console.log("========================== | ==========================\n")

// console.log("======= SUBTRAÇÃO ========") 

// for( let i = 0; i <= 9 ; i++){
//     if (numero +i <= 9){ //apenas por questões de tabulação
//         console.log(`  ${numero +i } - ${numero} = ${i}`)

//     }else{
//         console.log(` ${numero +i } - ${numero} = ${i}`)
//     }
// }
// console.log("==========================\n")

// console.log("====== MULTIPLICAÇÃO =====")

// for( let i = 0; i <= 9 ; i++){
//     if(numero * i <=9){ //apenas por questões de tabulação
//         console.log(` ${numero} x ${i} =  ${numero * i}`)

//     }
//     else{
//         console.log(` ${numero} x ${i} = ${numero * i}`)
//     }
// }
// console.log("==========================\n")

// console.log("======== DIVISÃO =========")

// for( let i = 0; i <= 9 ; i++){
//     if (numero*i <= 9){ //apenas por questões de tabulação
//         console.log(`  ${numero * i} / ${numero} = ${i}`)
//     }else{
//         console.log(` ${numero * i} / ${numero} = ${i}`)

//     }
// }
// console.log("==========================\n")