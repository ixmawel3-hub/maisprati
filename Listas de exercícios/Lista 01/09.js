console.clear()
let numero = 1
let anterior = 0
let aux
let sequencia = "0, 1"

for (let i = 0; i <= 7; i++){
    sequencia += `, ${numero + anterior}`
    aux = numero
    numero += anterior
    anterior = aux
}

console.log(`A sequência de fibonacci é: (${sequencia})`)