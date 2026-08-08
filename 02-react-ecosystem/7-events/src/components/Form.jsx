function Form(){

    function cadastrarUser(e){ // Esse "e" é um parametro q vai servir para a fn rodar antes da pag resetar por causa do input, esse "e" pode ser qlqr coisa
        e.preventDefault() // o preventDefault carrega a fn e não dá reload na página
        console.log('User cadastrado!!')
    }

    return(
        <div>
            <h1>Meu Formulário React!!</h1>
            <form onSubmit={cadastrarUser}> 
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="submit" value="Cadastre-se" />  
                </div>
                
            </form>
        </div>
    )
}

// Esse método onSubmit serve para enviar dados do formulário, simplificando o rolê que teria que fazer em JS

export default Form