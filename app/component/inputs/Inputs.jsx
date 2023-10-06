import styles from './inputs.module.css'

const Inputs = ({valor, tipo, nome, plh, on}) =>{
    return(
        <div>
        <input className={styles.inputs} value={valor} type={tipo} name={nome} placeholder={plh} onChange={on} />
        </div>
    )
}

export default Inputs;