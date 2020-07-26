/*ser "autenticavel" siginifica ter o método "autenticar"
    "duck type" = usar um método ou propriedade que o objeto tem
     independente do  tipo de objeto
*/
export class SistemaAutenticacao {
    static login(autenticavel, senha) {
                                                //client
                                                //gerente
                                                //diretor
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
            //retorna TRUE or False
            return autenticavel.autenticar(senha);
        }
        return false;
    }

                        //client -- false
                        //gerente -- true
                        //diretor -- true

    static ehAutenticavel(autenticavel){
                //client -- false
                //gerente -- true                               gerente -- true
                //diretor -- true                               diretor -- true
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
//tipo de if para retornar true or false
    }
}

/* outra forma de fazer o return acima, q na vdd é um if é fazendo como abaixo, 
porém gastariamos mais 3 linhas.

if ("autenticar" in autenticavel && autenticavel.autenticar instanceof Function){
    return true
}else{ 
    return false
}*/