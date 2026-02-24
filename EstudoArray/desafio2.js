const PROMPT = require("prompt-sync")();

let a = true;

while (a === true) {
  // Variáveis
  let listaAlunos = [];

  console.log("================================");
  console.log("=GERENCIADOR DE NOTAS DE ALUNOS=");
  console.log("================================\n");


  console.log("Quantos alunos serão inseridos?");
  let q_alunos = Number(PROMPT());

  for (f = 0; f < q_alunos; f++) {
    let listaNotas = [];

    console.log("\n-----------------");
    console.log((f+1) + "º Aluno:");
    console.log("-----------------");

    for (i = 0; i < 3; i++) {
      console.log("Insira a " + (i + 1) + "ª nota:");
      let nota = Number(PROMPT());
      listaNotas.push(nota);
    }

    listaAlunos.push(listaNotas);
  }

  console.log("\nAqui está a tabela de notas de cada aluno: ");
  listaAlunos.forEach(e => {
    console.log(e)
  })

  let b = 1;
  console.log("\nMédia de cada aluno: ");
  listaAlunos.forEach((e) => {
    let media = e.reduce((x, y) => x + y) / e.length;
    if (media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    console.log("Média do " + b + "º Aluno: " + media + " -> " + resultado);
    b++;
  });

  console.log(
    "\nSuas médias já foram encontradas! Pressione [R] para reiniciar e [S] para sair:",
  );
  var resposta = PROMPT();
  if (resposta.toLowerCase === "s") {
    a = false;
  } else {
    a = true;
  }
}

console.log("\nPrograma encerrado.");
