import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;




const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(500);

const cliente2 = new Cliente();
const conta2 =new ContaCorrente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
conta2.agencia = 102;

let valor = 200;
ContaCorrenteRicardo.transferir(valor,conta2);
console.log(conta2);
