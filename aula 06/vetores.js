let vazio = []
vazio.push(10)
vazio.push(20)
vazio.push(30)
let numeros = [1, 2, 3, 4, 5]

vazio.unshift(5) 

// for(let i=0; i < vazio.length; i++) {
//     console.log("Número na posição " + (i+1) + ": " + vazio[i])
// }

// for(let i=0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }


// vazio.forEach(function(numeros){
//     console.log(numeros)
// })

for(let pos in numeros){
    console.log(numeros[pos])
}
