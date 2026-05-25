class Deque{
    constructor(){
        this.itens = []
    }

    //Adiciona um item no inicio do Deque
    adicionarFrente(elemento){
        this.itens.unshift(elemento)
    }

    //Adiciona um item no fim do Deque
    adicionarFim(elemento){
        this.itens.push(elemento)
    }

    //Remove e retorna um item no inicio do Deque
    removeFrente(elemento){
        return this.itens.shift(elemento)
    }

    //Remove e retorna um item no fim do Deque
    removeFim(elemento){
        return this.itens.pop(elemento)
    }
}

const deque = new Deque()

deque.adicionarFim(3)
deque.adicionarFim(2)
deque.adicionarFim(9)
deque.adicionarFim(10)
console.log(deque)
deque.adicionarFrente(6)
console.log(deque)
deque.adicionarFim(19)
console.log(deque)
console.log("Removendo o item do fim: ", deque.removeFim())
console.log(deque)
console.log("Removendo o item do inicio: ", deque.removeFrente())
console.log(deque)
