
import styles from './popupaula.module.css'
const PopUpMessage = ({typeColor, mensagem}) =>{
    let color = (typeColor === 'sucesso') ? styles.sucesso : styles.erro;
    let container = styles.maindiv + ' ' + color;
    return(
        <div className={container}>
            <h1>
          {mensagem || 'mensagem'} 
            </h1>
        </div>
    )
}

export default PopUpMessage