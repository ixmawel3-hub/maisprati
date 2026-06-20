console.clear();

let musicas = [
    { titulo: "Música 1", artista: "Artista 1", duracao: 174 },
    { titulo: "Música 2", artista: "Artista 2", duracao: 287 },
    { titulo: "Música 3", artista: "Artista 3", duracao: 390 }
];

for (const musica of musicas) {
    const minutos = Math.floor(musica.duracao / 60);
    const segundos = musica.duracao % 60;
    console.log(`${musica.artista} — ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, '0')})`);
}

let duracaoTotal = 0;
musicas.forEach(musica => {
    duracaoTotal += musica.duracao;
});

const minutosTotais = Math.floor(duracaoTotal / 60);
const segundosTotais = duracaoTotal % 60;
console.log(`Duração total: ${minutosTotais}:${segundosTotais.toString().padStart(2, '0')}`);