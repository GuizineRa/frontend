const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const empresa = document.getElementById("empresa");
const cargo = document.getElementById("cargo");
const mensagemErro = document.getElementById("mensagemErro");
const listaConvidados = document.getElementById("listaConvidados");
const toggleDark = document.getElementById("toggleDark");

toggleDark.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        telefone.value.trim() === "" ||
        empresa.value.trim() === "" ||
        cargo.value.trim() === ""
    ) {
        mensagemErro.textContent = "Preencha todos os 5 campos obrigatórios.";
        return;
    }

    mensagemErro.textContent = "";

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Telefone:</strong> ${telefone.value}</p>
        <p><strong>Empresa:</strong> ${empresa.value}</p>
        <p><strong>Cargo:</strong> ${cargo.value}</p>
    `;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remover");

    btnRemover.addEventListener("click", function () {
        card.remove();
    });

    card.appendChild(btnRemover);
    listaConvidados.appendChild(card);

    form.reset();
});