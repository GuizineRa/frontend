//Funções de String

const  mensagem = " JavaScript é Icrível ";

// contar quantos caracteres tem a variável
console.log(mensagem.length); // 23

//MAIÚSCULAS e minúsculas
console.log(mensagem.toUpperCase); // JAVASCRIPT É INCRÍVEL
console.log(mensagem.toLowerCase); // javascript é incrível

//substituição de partes da String
const mensagem2 = mensagem.replace("java","Type");
console.log("mensagem2"); // TypeScript é incrível

//partes do texto

comsole.log(mensagem.substring(0,5)); //" Java"
comsole.log(mensagem.slice(-11)); //JavaScript

//Tesoura (trim)
console.log(mensagem.trim()); // Remove espaços antes e depois texto

// Separação de String
const mensagem3 = "Boa tarde com muita alegria";
const array = mensagem3.split(" "); //usando o espaço para separar e transformar em vetor
comsole.log(array);

//Desafio

//converta o texto "João, mariA, NicolaS, SocoRRo, zuleiCa"
// em um array no seguinte formato: [João,Maria,Nicolas,Socorro,Zuleica]

