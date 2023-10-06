import styles from './buttons.module.css'

const Buttons = ({on, text, cor}) =>{
    return(
        <div>
            <button style={{backgroundColor : cor}}className={styles.buttonreceita} onClick={on}>{text}</button>
        </div>
    )
}

export default Buttons