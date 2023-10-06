
import styles from './headerfinances.module.css'
const HeaderFinances = ({nome, email}) => {
    return(
        <div className={styles.profile}>
             <p className={styles.welcome}> {nome}</p>
             <p className={styles.useremail}>{email}</p>
        </div>
    )
} 
export default HeaderFinances      