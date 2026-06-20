// Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.

console.clear();
class Pilha {
    constructor() {
        this.itens = [];
    }
    visitar(pagina) {
        this.itens.push(pagina);
    }
    voltar() {
        return this.itens.pop();
    }
    paginaAtual() {
        return this.itens[this.itens.length - 1];
    }
}

const historico = new Pilha();  
historico.visitar("www.google.com");
console.log(`Página atual: ${historico.paginaAtual()}`);
historico.visitar("www.facebook.com");
console.log(`Página atual: ${historico.paginaAtual()}`);
historico.visitar("www.youtube.com");
console.log(`Página atual: ${historico.paginaAtual()}`);
historico.visitar("www.twitter.com");
console.log(`Página atual: ${historico.paginaAtual()}`);
historico.voltar();
console.log('<=');
console.log(`Página atual após voltar: ${historico.paginaAtual()}`);
historico.voltar();
console.log('<=');
console.log(`Página atual após voltar novamente: ${historico.paginaAtual()}`);