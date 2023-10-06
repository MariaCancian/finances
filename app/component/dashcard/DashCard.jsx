import styles from './dashcard.module.css'

const DashCard = ({titulo, cor,  valor}) =>{
return(
    <div className={styles.card} style={{backgroundColor:cor}}>
            <p className={styles.cardTitle}>{titulo}</p>
            <p className={styles.cardValue}>R${valor}</p>
          </div>
)
}

export default DashCard