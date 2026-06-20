const PROMPT = require('prompt-sync')()
console.clear();

let contatos = [
    { nome: "Alice", telefone: "123-456-7890", email: "alice@example.com" },
    { nome: "Bob", telefone: "987-654-3210", email: "bob@example.com" },
    { nome: "Charlie", telefone: "555-1234", email: "charlie@example.com" }
];

contatos.forEach(contato => {
    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
});

let nomeBusca = PROMPT("Digite o nome do contato que deseja buscar:").trim().toLowerCase();

let contatoEncontrado = false;

for (const contato of contatos) {
    if (contato.nome.toLowerCase() === nomeBusca) {
        console.log(`Contato encontrado: Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        contatoEncontrado = true;
        break;
    }
}

if (!contatoEncontrado) {
    console.log("Contato não encontrado.");
}