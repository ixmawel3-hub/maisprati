console.clear();
let produto = {
  nome: "Notebook",
  preco: 3500,
  categoria: "Eletrônicos",
  quantidade: 15
};

for (let propriedade in produto) {
  console.log(`${propriedade}: ${produto[propriedade]}`);
}


let precoFinal = produto.preco * 0.9; // desconto de 10%
console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);
