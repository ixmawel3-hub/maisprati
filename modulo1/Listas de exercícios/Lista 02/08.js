console.clear();

let produtos = [
    { nome: "Papel A4", preco: 23.53, quantidade: 5 },
    { nome: "Caixa de borrachas", preco: 20.39, quantidade: 3 },
    { nome: "Grampeador", preco: 18.30, quantidade: 8 }
];

let valorTotalGeral = 0;

produtos.forEach(produto => {
    const valorTotal = produto.preco * produto.quantidade;
    valorTotalGeral += valorTotal;
    console.log(`${produto.nome}: Valor total em estoque: R$${valorTotal.toFixed(2)}`);
});

console.log(`Valor total geral do estoque: R$${valorTotalGeral.toFixed(2)}`);