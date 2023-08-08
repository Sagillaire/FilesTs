import { AiFillFileAdd, AiOutlineLogout } from 'react-icons/ai'
import styles from './styles.module.css'

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <AiFillFileAdd />
                <AiOutlineLogout />
            </nav>
        </header>
    )
}
