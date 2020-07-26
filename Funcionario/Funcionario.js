
export class Funcionario {
    constructor(nome, salario, cpf, bonificacao) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }
    /*substitui o get senha pelo método autenticar
    para não deixar a propriedade senha exposta
    e para cada objeto poder autenticar de maneira diferente
    (por exemplo, sem a necessidade de uma senha)
        get senha(){
            return this._senha;
        }
    */

    autenticar(senha) {
        return senha == this._senha
    }


    cadastrarSenha(senha) {
        this._senha = senha;
    }

}