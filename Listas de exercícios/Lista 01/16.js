console.clear()

let matriz = []
let vetor = []
let quantideNegativosLinha
let linha = []
let linhaVetor = ""

for(let i = 0 ; i < 6 ; i++){
    quantideNegativosLinha = 0
    matriz[i] = []
    linha[i] = ""
    for (j = 0 ; j < 8; j++){
        matriz[i][j] = getRandomInt(-9,9)
        if(matriz[i][j] < 0){
            quantideNegativosLinha++
            linha[i] += `${matriz[i][j]} `
        } else {
            linha[i] += ` ${matriz[i][j]} `
        }

    }
    vetor.push(quantideNegativosLinha)
    console.log(linha[i])
}

for (let i = 0; i < vetor.length ; i++){
    linhaVetor += `${vetor[i]} `
}

console.log(`\nSegue o vetor com a quantidade de números negativos da matriz acima: [ ${linhaVetor}].`)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}