function Evento( {numero} ) {

    function meuEvento(){
        console.log(`To sendo executado...${numero}`)
    }

    return(
        <div>
            <p>Clique para executar a função</p>
            <button onClick={meuEvento}>Executar</button>
        </div>
    )
}

// o onClick é igual ao .addEventListener click, soq pode ser colocado dentro de uma tag ou componente, facilitando a forma de trabalhar em cima do JS...gostei >.<

export default Evento