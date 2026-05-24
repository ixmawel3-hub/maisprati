console.clear()

let matriz = []

for(let i = 0 ; i < 7 ; i++){
    matriz[i] = ""
    for (j = 0 ; j < 7; j++){
        i == j ? matriz[i] += "1 " : matriz[i] += "0 "
    }
    console.log(matriz[i])
}

