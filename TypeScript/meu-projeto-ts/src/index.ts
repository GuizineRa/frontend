// Exemplo de Aplicação de Typescript

// Criação de Hello World

function main(): string {
  return "Hello, World!";
}

console.log(main());

//============================
// Definição de Interface (Exercício 1)
//============================

interface Produto {
  // Definir as propriedades de produto
  nome: string;
  preco: number;
  categoria: string;
  emEstoque: boolean;
}

// ================
// Criar Funções Tipadas (Exercício)
// ================

// Função para calcular o desconto a um produto
function calcularDesconto(preco: number, percentual: number): number {
  return preco - preco * (percentual / 100);
} // Essa daqui é uma função tipada!!!!

// Função para exibir informações do produto
function exibirInfo(p: Produto, desconto: number = 0): void {
  console.log(`Produto ${p.nome.toUpperCase()}`);
  console.log("Categoria: " + p.categoria);
  console.log(`Preço ${p.emEstoque ? "Disponível" : "Indisponível"}`);
  if(desconto > 0) {
    const precoFinal = calcularDesconto(p.preco, desconto)}`);
  }
}
