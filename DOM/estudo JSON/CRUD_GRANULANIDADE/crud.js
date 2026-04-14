const fs = require("fs");
const prompt = require("prompt-sync")();

//Menu principal
function menu() {
    console.log("\n MENU DE CONTATOS: ");
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Atualizar contato");
    console.log("4. Excluir contato");
    console.log("5. Sair");
}

// Função para escolher grupo
function escolherGrupo() {
    console.log("\nTipo de contato: ")
    console.log("1. Aluno")
    console.log("2. Professor")

    const opcao = prompt("Escolha: ");
    
    if (opcao === "1") return "alunos";
    if (opcao === "2") return "professores";

    console.log("Opção inválida.");
    return null;
}

//Leitura do JSON
function lerDados() {
    const dados = fs.readFileSync("contatos.json", JSON.stringfy(Dados, null, 2));
}

//Função para adicionar
function adicionar() {
    const grupo = escolherGrupo();
    if (!grupo) return;

    const dados = lerDados();
    dados[grupo].push({ nome, telefone });

    salvarDados(dados);
    console.log("Contato adicionado com sucesso!");
}

//Função para listar
function listar () {
    const grupo = escolherGrupo();
    if dados = lerDados();

    console.log(`\nLista de ${grupo.toUpperCase()}: `);
    dados[grupo].forEach((Contato, index) => {
        console.log(`${index + 1}. ${Contato.nome} - ${Contato.telefone}
            `);
    });
}

//Função atualizar
function atualizar() {
    const grupo = escolherGrupo();
    if (!grupo) return;

    const dados = lerDados();

    const index = perseInt(prompt("index do contato: ")) - 1;

    if (index >= 0 && index < dados[grupo].length) {
        const nome = prompt("Novo nome: ");
        const telefone = prompt("Novo telefone: ");

        dados[grupo][index] = { nome, telefone };
        salvarDados(dados);

        console.log("Contato atualizado com sucesso.")
    } else {
        console.log("Índice inválido. ");
    }
        
}

//Função excluir
function excluir() {
    const grupo = escolherGrupo();
    if (!grupo) return;

    const dados = lerDados();
    const index = perseInt(prompt("Número do contato: ")) - 1;

    if (index >=0 && index < dados[grupo].length){
        dados[grupo].splice(index, 1);
        salvarDados(dados)
    }
}