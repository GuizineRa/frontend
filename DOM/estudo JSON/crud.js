const fs = require("fs");
const promt = require("promt-sync")();

// 
function menu() {
    console.log("1. Adicionar um contato");
    console.log("2. Listar contatos");
    console.log("3. Atualizar contato");
    console.log("4. Excluir contato");
    console.log("5. Sair");
}

function main() {
    let opcao;
    do {
        menu();
        opcao = promt("Escolha uma opção: ");
        switch (opcao) {
            case "1":
                adicionar();
                break;
            case "2":
                listar();
                break;
            case "3":
                atualizar();
                break;
            case "4":
                excluir();
                break;
            case "5":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }  
    
    } while (opcao !== "5");
}

// Função para ler dados do arquivo JSON
function lerDados() {
    const dados = fs.readFileSync("contatos.json", "utf-8");
    return JSON.parse(dados || "[]");
}

// Função para adicionar um contato
function adicionar() {
    const nome = promt("Digite o nome do contato: ");
    const telefone = promt("Digite o telefone do contato: ");
    const novoContato = { nome, telefone };

    const contatos = lerDados();
    contatos.push(novoContato);
    salvarDados(contatos)
    console.log("Contato adicionado com sucesso!");
}

// Função para listar contatos
function listar() {
    const contatos = lerDados();
    console.log("Contatos:");
    contatos.forEach((contato, index) => {
        console.log(`${index + 1}. ${contato.nome} - ${contato.telefone}`);
    });
}

// Função para atualizar um contato
function atualizar() {
    const contatos = lerDados();
    const indexAtualizar = parseInt(promt("Digite o número do contato que deseja atualizar: ")) - 1;

    if (indexAtualizar >= 0 && indexAtualizar < contatos.length) {
        const novo_nome = promt("Digite o novo nome do contato: ");
        const novo_telefone = promt("Digite o novo telefone do contato: ");

        contatos[indexAtualizar] = { nome : novo_nome, telefone : novo_telefone };
        salvarDados(contatos);

        console.log("Contato atualizado com sucesso!");
    } else console.log("Número de contato inválido.");
}

// Função para excluir um contato
function excluir() {
    const indexExcluir = parseInt(promt("Digite o número do contato que deseja atualizar: ")) - 1;

    const contatos = lerDados();
    if (indexExcluir >= 0 && indexExcluir < contatos.length) {
        contatos.splice(indexExcluir, 1);
        salvarDados(contatos);
        console.log("Contato excluído com sucesso."

        );
    }else{
        console.log("Índice inválido")
    }

}

//Função para "salvar"/gravar os dados no JSON
function salvarDados(contatos){
    fs.writeFileSync("contatos.json", JSON.stringfy(contatos, null, 2));
}

//Inicia o programa
main();
        