class Produto {
  //atributos
  nome;
  preco;
  estoque;

  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  vender(qtd) {
    if (this.estoque < qtd) {
      console.log("Estoque insificiente!");
      return;
    }
    return (this.estoque -= qtd);
  }
  repor(qtd) {
    console.log(`Produto: ${this.nome}
            Preco: ${this.preco}, Estoque: ${this.estoque}`);
  }
}

let produto1 = new Produto("Tomate", 5, 450);
produto1.exibirInfo();
produto1.vender(110);
produto1.repor(20);
produto1.vender(110);
produto1.exibirInfo();