console.clear();

class Fila {
    constructor() {
        this.itens = [];
    }
    chegarPaciente(nome) {
        this.itens.push(nome);
        this.exibirFila();
    }
    chamarProximo() {
        if (this.itens.length === 0) {
            console.log("Nenhum paciente na fila.");
            return null;
        }
        let pacienteChamado = this.itens.shift();
        this.exibirFila();
        return pacienteChamado;
    }
    exibirFila() {
        console.log(`Fila de espera: ${this.itens.join(', ')}`);
    }
}

const fila = new Fila();

fila.chamarProximo();
fila.chegarPaciente("João");
fila.chegarPaciente("Maria");
fila.chamarProximo();
fila.chegarPaciente("Pedro");
fila.chegarPaciente("Ana");
fila.chamarProximo();
fila.chegarPaciente("Carlos");
fila.chamarProximo();
