import styles from './bigcard.module.css'

const BigCard = ({ titulo, cor }) => {
    return (
      
            <div  style={{backgorundColor:cor}}>
                 <p className={styles.registrosreceitastitle}>{titulo}</p>
      
            </div>
     
    )
}
export default BigCard