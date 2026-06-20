console.clear();

class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
    }
    adicionar(tarefa) {
        const novoNo = new No(tarefa);
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }
    remover(tarefa) {
        if (!this.cabeca) return;
        if (this.cabeca.valor.toLowerCase() === tarefa.toLowerCase()) {
            this.cabeca = this.cabeca.proximo;
            return;
        }
        let atual = this.cabeca;
        while (atual.proximo) {
            if (atual.proximo.valor.toLowerCase() === tarefa.toLowerCase()) {
                atual.proximo = atual.proximo.proximo;
                return;
            }
            atual = atual.proximo;
        }
    }
    exibir() {
        let atual = this.cabeca;
        const tarefas = [];
        while (atual) {
            tarefas.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(`Tarefas: ${tarefas.join(', ')}`);
    }
}   

const listaTarefas = new ListaLigada();

listaTarefas.adicionar("Comprar leite");
listaTarefas.adicionar("Lavar roupa");
listaTarefas.adicionar("Estudar JavaScript");
listaTarefas.adicionar("Fazer exercícios");
console.log("Lista de tarefas antes de remover:");
listaTarefas.exibir();
listaTarefas.remover("LaVar RoupA");
console.log("Lista de tarefas após remover a tarefa 'Lavar roupa':");
listaTarefas.exibir();