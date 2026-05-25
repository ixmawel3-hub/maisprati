console.clear()
class Fila {
    constructor(){
        this.itens = []
    }

    //Adicionar um elemento ao final da fila
    enfileirar(elemento){
        this.itens.push(elemento)
    }

    //Imprime os elementos da fila
    imprimirFila(){
        console.log(this.itens.join(' <- '))
    }

    //Remove e retorna o primeiro elemento da fila
    desenfileirar(){
        if(this.vazio()){
            return "A fila está vazia!"
        }
        return this.itens.shift() // remover o primeiro elemento
    }

    // Verificar se a fila está vazia
    vazio(){
        return this.itens.length === 0
    }

    //Retorna primeiro elemento sem removê-lo
    proximo(){
        if(this.vazio()){
            return "A fila está vazia!"
        }
        return this.itens[0]
    }
}

const fila = new Fila()
console.log(`Próximo item a ser removido: ${fila.proximo()}`)
console.log(fila.desenfileirar())
fila.enfileirar(10)
fila.enfileirar(20)
fila.enfileirar(30)
fila.enfileirar(40)
fila.imprimirFila()
console.log(`Próximo item a ser removido: ${fila.proximo()}`)
console.log(`Removendo o elemento: ${fila.desenfileirar()}.`)
console.log(`Próximo item a ser removido: ${fila.proximo()}`)
fila.imprimirFila()
