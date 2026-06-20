const PROMPT = require('prompt-sync')()
console.clear();
let inventario = {
    espada: 0,
    pocao: 5,
    escudo: 2
};

console.log("INVENTÁRIO DO JOGADOR:");
for (let item in inventario) {
    console.log(`${item.toUpperCase()}: ${inventario[item]}`);
}

let itemUsar = PROMPT("Digite o nome do item que deseja usar:").toLowerCase();
if (inventario[itemUsar] > 0) {
    inventario[itemUsar]--;
    console.log(`Você usou um ${itemUsar}. Quantidade restante: ${inventario[itemUsar]}`);
} else {
    console.log(`Item esgotado. Não é possível usar ${itemUsar}.`);
}   

