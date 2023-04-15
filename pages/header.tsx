import styles from '@/styles/Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.logo}>SANIJ</a>
                <ul className={styles.navlist}>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href = "#projects">Projects</a>
                    </li>
                    <li>
                        <a href = "#education">Education</a>
                    </li>
                    <li>
                        <a href = "#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}