console.clear()
let peso = Math.round(Math.random() * 100) 
let altura = (Math.random()) + 1
altura = Math.trunc(altura *100) /100


imc = peso / (altura ** 2)
imc = Math.trunc(imc *10) /10 // truncar em uma casa decimal.
console.log(`Altura: ${altura}m\nPeso: ${peso}kg\nIMC: ${imc}`)

if (imc < 18.5){
    console.log("Abaixo do peso")
} else if (imc <= 24.9) {
    console.log("Peso normal")
} else if (imc <= 29.9) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}