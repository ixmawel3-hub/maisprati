console.clear();

let orcamento = {
    alimentacao: { planejado: 500, gasto: 450 },
    transporte: { planejado: 200, gasto: 250 },
    lazer: { planejado: 300, gasto: 150 },
    saude: { planejado: 400, gasto: 500 }
};

console.log("ORÇAMENTO MENSAL:");

let saldoGeral = 0;

for (let categoria in orcamento) {
    let saldo = orcamento[categoria].planejado - orcamento[categoria].gasto;
    saldoGeral += saldo;    
    if (saldo >= 0) {
        console.log(`${categoria.toUpperCase()}: Dentro do orçamento. Saldo: R$${saldo}`);
    } else {
        console.log(`${categoria.toUpperCase()}: Acima do orçamento. Saldo: R$${saldo}`);
    }
}

console.log(`SALDO GERAL DO MÊS: R$${saldoGeral}`);