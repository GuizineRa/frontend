var prompt = require("prompt-sync")();

// funções
function soma(a,b){ return a+b; }
function sub(a,b){ return a-b; }
function multi(a,b){ return a*b; }
function div(a,b){ return a/b; }

function menu(){
    let operacao;
    let numero1;
    let numero2;
    let resultado;

    console.log("===Calculadora Simples===");
    console.log("| 1. Soma");
    console.log("| 2. Subtração");
    console.log("| 3. Multiplicação");
    console.log("| 4. Divisão");
    console.log("=========================");

    operacao = prompt("Escolha a operação: ");
    numero1 = Number(prompt("Digite o 1º número: "));
    numero2 = Number(prompt("Digite o 2º número: "));

    switch(operacao){
        case "1":
            resultado = soma(numero1,numero2);
            break;
        case "2":
            resultado = sub(numero1,numero2);
            break;
        case "3":
            resultado = multi(numero1,numero2);
            break;
        case "4":
            if(numero2 == 0){
                console.log("Não pode dividir por 0!");
                return;
            }
            resultado = div(numero1,numero2);
            break;
        default:
            console.log("Opção inválida");
            return;
    }

    console.log("Resultado = " + resultado);
}

// loop principal
var continuar = true;
while(continuar){
    menu();
    let escolha = prompt("1. Continuar | 2. Sair: ");
    if(escolha == "2"){
        continuar = false;
        console.log("Saindo...");
    }
}
