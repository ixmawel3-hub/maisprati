console.clear()
function contarElementos(array) {
  const resultado = {};

  for (const elemento of array) {
    if (resultado[elemento]) {
      resultado[elemento]++
    } else {
      resultado[elemento] = 1
    }
  }

  return resultado;
}

const array = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
console.log(contarElementos(array));