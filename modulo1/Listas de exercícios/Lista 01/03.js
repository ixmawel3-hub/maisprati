let nota = 4

if(nota < 0 || nota >10) {
    console.log("Nota inválida!")
}else if(nota < 4) {
    console.log("Reprovado")
} else if (nota < 7){
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}