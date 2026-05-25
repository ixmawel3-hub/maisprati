console.clear()

const obj1 = {
  nome: "Ismael",
  idade: 38,
  cidade: "Campina Grande"
}

const obj2 = {
  idade: 35,
  pais: "Brasil"
}

const resultado = combinarObjetos(obj1, obj2)

console.log(resultado)

function combinarObjetos(obj1, obj2) {
  return {
    ...obj1,
    ...obj2
  }
}
