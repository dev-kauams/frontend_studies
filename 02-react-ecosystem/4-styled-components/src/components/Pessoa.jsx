import styles from './Pessoa.module.css'

function Pessoa({foto, nome, idade, profissao}){
    return(
        <div>
            <h2 className={styles.textNome}>Nome: {nome}</h2>
            <p className={styles.textIdade}>Idade: {idade}</p>
            <p className={styles.textProfissao}>Profissão: {profissao}</p>
            <img src={foto} alt={nome} className={styles.foto} />
        </div>
    )
}

export default Pessoa