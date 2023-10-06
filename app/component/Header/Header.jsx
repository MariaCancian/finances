import NavLink from "../NavLink/NavLink";
import styles from './header.module.css';
import Image from "next/image";


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.imageLogo}>
                <Image className={styles.logo} src={'/image.png'} width={50} height={50} />
            </div>
            <div className={styles.links}>

                <div className={styles.linksContainer}>
                    <NavLink className={styles.linksNavPages} rota={'/'} texto={'page1'} />
                </div>

                <div className={styles.linksContainer}>
                    <NavLink className={styles.linksNavPages} rota={'/login'} texto={'Login'} />
                </div>

                <div className={styles.linksContainer}>
                    <NavLink className={styles.linksNavPages} rota={'/contato'} texto={'Contato'} />
                </div>

                <div className={styles.linksContainer}>
                    <NavLink className={styles.linksNavPages} rota={'/SobreNos'} texto={'sobre nós'} />
                </div>

                <div className={styles.linksContainer}>
                    <NavLink className={styles.linksNavPages} rota={'/Senai'} texto={'senai'} />
                </div>
                

               
            
            </div>
        </div>
    );
}