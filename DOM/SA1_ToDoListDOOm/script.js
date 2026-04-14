// Lógica de funcionamento da Lista de tarefas

// Criar um ouvinte para a tarefa
let bnEnviar = document.getElementById("btnEnviar"); //obj para controlar o botão
let tarefa = document.getElementById("tarefa"); // Obj para controle do input

btnEnviar.addEentListener(
    "click", criarTarefa
);

//Criar a função para criar a tarefa
function criarTarefa(){
    let texto = tarefa.value.trim();
    //Verificar se tarefa está vazia
    if(texto==""){
        return;
    }
    // Se não estiver vazia =. Não precisa do else -> vai continuar o código se texto não vazio
    let li = document.createElement("li"); // Crição de um list item
li.innerHTML = texto+'<button onclick="removerTarefa(this)" class="btnRemove">Remover</button>';
// Adicionar o li => ul
let ul = document.getElementById("lista");
// limpa o campo do input
tarefa.value = "";
}

function removerTarefa(botao){
    botao.parentElement.remove(); // Remove a tarefa da lista
}

//estilizando pelo DOM
document.body.style.backgroundColor = "grey";
document.body.style.textAlign = "center";
document.body.style.fontfamily = "Comic Sans MS";

let container = document.querySelector(".container");
container.style.width = "50%";
container.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.borderRadius = "15px";

tarefa.style.width = "50%";
tarefa.style.padding = "10px";
tarefa.style.borderRadius = "5px";

btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "green"
btnEnviar.style.color = "white"
bnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";

let lista = document.getElementById("lista");
lista.style.listStyle = "none";

