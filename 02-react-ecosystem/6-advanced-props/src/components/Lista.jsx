import PropTypes from "prop-types";

import Carro from "./Carro"

function Lista(){
    return(
        <>
            <ul>
                <Carro marca={123} ano_lancamento="2020" />
                <Carro marca="Ford" ano_lancamento={2004} />
                <Carro />
                <Carro marca="Fiat" ano_lancamento={2000} />
            </ul>
        </>
    )
}

export default Lista