console.clear()
const PROMPT = require('prompt-sync')()
console.log("Lista de frutas:\n1: Banana\n2: Uva\n3: Maçã\nQualquer outro número: Sair")
let numero = Number(PROMPT('Informe o número da fruta que quer me oferecer: '))
console.clear()

switch (numero) {
    case 1:
        console.log("Vou comer uma banana!")
        break;
    case 2:
        console.log("Vou comer uma uva!")
        break;
    case 3:
        console.log("Vou comer uma maçã!")
        break;

    default:
        console.log("Não quero comer frutas hoje.")
        break;
}