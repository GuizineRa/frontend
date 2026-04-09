//criar uma classe representando uma conta bancaria

class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido para depósito!");
      return;
    }
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso!`);
    this.exibirSaldo();
  }
  sacar(valor) {
    if (valor > this.saldo && valor > 0) {
      console.log("Saldo insuficiente para saque!");
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso!`);
    this.exibirSaldo();
  }
  exibirSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

let conta1 = new ContaBancaria("João");
conta1.depositar(150);
conta1.sacar(200); 
conta1.sacar(600); 
