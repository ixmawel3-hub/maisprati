console.clear();

let alunos = [
    { nome: "Carlos", nota: 8 },
    { nome: "Débora", nota: 5 },
    { nome: "Marcos", nota: 6 },
    { nome: "Ismael", nota: 4 },
    { nome: "Camila", nota: 9 },
    { nome: "Laura", nota: 3 }
];

let totalAprovados = 0;
let totalReprovados = 0;
let somaAprovados = 0;
let somaReprovados = 0;

for (const aluno of alunos) {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome}: Aprovado`);
        totalAprovados++;
        somaAprovados += aluno.nota;
    } else if (aluno.nota >= 5) {
        console.log(`${aluno.nome}: Recuperação`);
    } else {
        console.log(`${aluno.nome}: Reprovado`);
        totalReprovados++;
        somaReprovados += aluno.nota;
    }   
}

const mediaAprovados = totalAprovados > 0 ? somaAprovados / totalAprovados : 0;
const mediaReprovados = totalReprovados > 0 ? somaReprovados / totalReprovados : 0;
console.log(`\nMédia dos aprovados: ${mediaAprovados.toFixed(1)}`);
console.log(`Média dos reprovados: ${mediaReprovados.toFixed(1)}`);
