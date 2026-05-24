console.clear()
// let pilha = []

// pilha.push("Livro 1")
// pilha.push("Livro 2")
// pilha.push("Livro 3")

// console.log("Topo: ", pilha[pilha.length - 1])
// console.log("Removido: ", pilha.pop())
// console.log("Agora o topo é: ", pilha[pilha.length - 1])

class Pilha{
    constructor(){
        this.items = []
    }

    isEmpty(){
        if(this.items.length == 0){
            return this.items.length === 0
        }
    }

    push(elemento){

        this.items.push(elemento)
    }

    pop(){
        if(this.isEmpty()){
            return "A pilha está vazia"
        }
        return this.items.pop()
    }

    print(){
        console.log(this.items)
    }
}

const pilha = new Pilha()

console.log(pilha.pop())
pilha.push("Livro 1")
pilha.push("Livro 2")
pilha.push("Livro 3")
pilha.print()
console.log("Item excluiído: ", pilha.pop())
pilha.print()
