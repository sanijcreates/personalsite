import styles from '@/styles/Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.logo}>SANIJ</a>
                <ul className={styles.navlist}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Experience</a>
                    </li>
                    <li>
                        <a>Education</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}