console.clear();
let jogador1 = {
  nome: "Ismael",
  vida: 8,
  ataque: 5,
  defesa: 5
};

let jogador2 = {
  nome: "Marcos",
  vida: 7,
  ataque: 4,
  defesa: 7
};


for (let propriedade in jogador1) {
    console.log(`${propriedade}: ${jogador1[propriedade]} | ${jogador2[propriedade]}`);
}

let poderTotalJogador1 = jogador1.vida + jogador1.ataque + jogador1.defesa;
let poderTotalJogador2 = jogador2.vida + jogador2.ataque + jogador2.defesa; 

if (poderTotalJogador1 > poderTotalJogador2) {
    console.log(`${jogador1.nome} tem maior poder total: ${poderTotalJogador1}`);
} else if (poderTotalJogador2 > poderTotalJogador1) {
    console.log(`${jogador2.nome} tem maior poder total: ${poderTotalJogador2}`);
} else {
    console.log(`Ambos os jogadores têm o mesmo poder total: ${poderTotalJogador1}`);
}