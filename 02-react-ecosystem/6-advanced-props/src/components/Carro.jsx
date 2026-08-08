import PropTypes from "prop-types";

function Carro(props){
    console.log(props);

    return(
        <li>
            {props.marca} - {props.ano_lancamento}
        </li>
    )
}

Carro.propTypes = {
    marca: PropTypes.oneOf(["Ford"]).isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

Carro.defaultProps = {
    marca: 'Marca pendente.',
    ano_lancamento: 0,
}

export default Carro