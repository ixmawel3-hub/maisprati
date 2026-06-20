console.clear();
let funcionario = {
    nome: "Ana", 
    cargo: "Desenvolvedora",
    salario: 5000,
    anosExperiencia: 6
};

for (let propriedade in funcionario) {
    console.log(`${propriedade.toUpperCase()}: ${funcionario[propriedade]}`);
}

let bonus;
if (funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else {
    bonus = funcionario.salario * 0.15;
}

console.log(`BÔNUS ANUAL: R$ ${bonus.toFixed(2)}`);