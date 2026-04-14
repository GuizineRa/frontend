//Correção da Situação de aprendizagem 2 = Gerenciamento de notas dos Alunos

// 1º Passo - Cadastrar Alunos
// Saber o nº de alunos
// Saber que cada aluno possuí 3 notas
// calcular a média dos alunos
// Identificar o status do aluno (Aprovado/reprovado)
// Imprimir as notas em formatos de tabela


let matrizNota = []; //Declarção de um vetor

let quantAlunos; // Undefined

var prompt = required("prompt-sync");

quantAlunos = Number(prompt("Quantos alunos tem na sala?"));

// Cadastrar a nota dos alunos

for(let i=0; i<quantAlunos;i++){
    matrizNota[i]=[]; //Vetor dentro do vetor
    for(let j=0; j<3;j++){
        console.log(`Nota${j+1} dp aluno${i+1}`);
        matrizNota[i][j]=Number(prompt());
    }
}


// Imprimira tabela

console.log(matrizNota);

// Calcular a média do aluno (reduce)

for(let i = 0; i<quantAlunos;i++){
    let media = matrizNota[1].reduce((soma,nota)=>soma+nota)/3
    console.log(`A média do aluno${i+1}=${media.toFixed(2)}`);
    // Verificar o Statutos do Aluno
    if(media>=7){
        console.log("Aprovado");
    } else{
        console.log("Reprovado");
    }

}
