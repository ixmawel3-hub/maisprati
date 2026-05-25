let alunos = [
    {
        nome: "Juliana",
        idade: 25,
        matriculado: false,
        notas: [8,8,9],
        endereco: {
            cidade: "Porto Alegre",
            estado: "RS"
        }
    },
    {
        nome: "Carlos",
        idade: 35,
        matriculado: true,
        notas: [6,8,9],
        endereco: {
            cidade: "Porto Alegre",
            estado: "RS"
        }
    }
]

for (let aluno of alunos){
    console.log(`Nome: ${aluno.nome}`)
    console.log(`Idade: ${aluno.idade}`)
    console.log(`Matriculado: ${aluno.matriculado ? "Sim" : "Não"}`)
    console.log(`Notas: ${aluno.notas}\n`)
}

let estudante = {
    nome: "Juliana",
    nota: 3,
    atualizaNota: function(novaNota){
        this.nota = novaNota
    }
}
console.log(estudante)

estudante.atualizaNota(8)

console.log(estudante)


for (let [chave, valor] of Object.entries(alunos)){
    console.log(`${valor.nome}`)
}
