import styles from './receitascard.module.css'

const ReceitasCard = ({titulo, cor,  valor}) =>{
    return(
        <div className={styles.card} style={{backgroundColor:cor}}>
                <p className={styles.cardTitle}>{titulo}</p>
                <p className={styles.cardValue}>R${valor}</p>
              </div>
    )
    }
    
    export default ReceitasCard