let idade = Math.round(Math.random() * 100) // Ou um número. 
console.log(`A pessoa tem ${idade} anos de idade.`)
if(idade <0) {
    console.log("Idade inválida!")    
} else if(idade <=12){
    console.log("A pessoa é criança.")
} else if (idade <=19) {
    console.log("A pessoa é adolescente.")
} else if (idade <= 59) {
    console.log("A pessoa é adulta.")
} else if(idade >=60) {
    console.log("A pessoa é idosa.")
} 