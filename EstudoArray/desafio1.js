const PROMPT = require("prompt-sync")();

let notas = [];

let nota1 = Number(PROMPT("Digite o 1º número"));
notas.push(nota1);
    
let nota2 = Number(PROMPT("Digite o 2º número"));
notas.push(nota2);
    
let nota3 = Number(PROMPT("Digite o 3º número"));
notas.push(nota3);

let nota4 = Number(PROMPT("Digite o 4º número"));
notas.push(nota4);



let media = notas.reduce((x,y)=> x+y)/ notas.length;
console.log("A média é "+media)

