console.clear()
function totalPorVendedor(vendas) {
  const resultado = {}

  for (const venda of vendas) {
    const { vendedor, valor } = venda;

    if (resultado[vendedor]) {
      resultado[vendedor] += valor
    } else {
      resultado[vendedor] = valor
    }
  }

  return resultado;
}

const vendas = [
    {vendedor: "Ismael", valor: 100},
    {vendedor: "Camila", valor: 150},
    {vendedor: "Marcos", valor: 200},
    {vendedor: "Ismael", valor: 350},
    {vendedor: "Marcos", valor: 80},
    {vendedor: "Marcos", valor: 120},
]

console.log(totalPorVendedor(vendas))