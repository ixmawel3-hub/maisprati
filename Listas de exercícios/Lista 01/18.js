console.clear()

const dados = {
  nome: "Ismael",
  idade: 30,
  ativo: true,
  hobbies: ["Música", "Leitura", "Viagem"],
  notas: [8, 9, 7],
  cidade: "Campina Grande",
  numeros: [1, 2, 3, 4],
  salario: 5000
}


function filtrarArrays(obj) {
  const resultado = {}

  for (let chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave]
    }
  }

  return resultado
}

console.log(filtrarArrays(dados))