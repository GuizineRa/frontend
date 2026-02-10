const strig_nomes = ("João, mariA, NicolaS, SocoRRo, zuLeiCa")

//remover o espaços vazios (trim)
const textotrim = texto.trim();

//split - separa em array

const nomesSujos = textotrim.split(", ")

console.log(nomesSujos);

//vetor de 5 nomes
let nomelimpo = [];

for (let i = 0; i < nomesSujos.length; index++) {
    nomelimpo[i] = nomesSujos[i].charAt(0).toUpperCase()
    +nomesSujos[i].slice(1).toLowercase();
}

console.log(nomesLimpos);

