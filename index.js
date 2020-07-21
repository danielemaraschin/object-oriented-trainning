import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./contaPoupanca.js"
import {Conta} from "./conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309 );

const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001 );
ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.sacar(100);

const ContaPopanca = new ContaPoupanca (50, cliente1, 1001);

console.log(ContaCorrenteRicardo);
console.log(ContaPoupanca);