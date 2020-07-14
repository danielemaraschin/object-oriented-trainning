export class ContaCorrente{
    agencia;
    cliente;


//coloca _  na frente da palavra para especificar que é uma classe privada;
//o dev nem deveria ter acesso e nao eh pra ele mexer nessa var.
//estao tentando com a tralha na frente ser privado, mas ainda nao está oficial.

    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0 ) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
           }
}
