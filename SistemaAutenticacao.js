//ser "autenticavel" siginifica ter o método "autenticar"

export class SistemaAutenticacao{
    static login (autenticavel, senha){
        //retorna TRUE or False
        return autenticavel.autenticar(senha);
    }
}