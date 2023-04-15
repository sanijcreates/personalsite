import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
    <div className={styles.footerBasic}>
        <div className={styles.container}>
        <footer className={styles.footer}>
            <h2>SANIJ SHRESTHA</h2>
            <p>Thank you for taking the time to explore my work and get to know me a little better. It's been a pleasure having you here, and I hope you found what you were looking for. If you have any questions, comments, or just want to say hello, feel free to drop me a message :)</p>
            <ul className={styles.social}>
                <li><a className={styles.icon} href='https://github.com/sanijcreates'><i className={`${styles.icon} uil uil-github`}></i></a></li>
                <li><a className={styles.icon} href='to:saniz.sth123@gmail.com'><i className={`${styles.icon} uil uil-envelope`}></i></a></li>
                <li><a className={styles.icon} href="https://www.linkedin.com/in/sanij-shrestha/"><i className={`${styles.icon} uil uil-linkedin`}></i></a></li>
                <li><a className={styles.icon} href="https://www.linkedin.com/in/sanij-shrestha/"><i className={`${styles.icon} uil uil-instagram`}></i></a></li>
            </ul>
            <p className={styles.copyright}>Built by Sanij Shrestha © 2023</p>
        </footer>
        </div>
    </div>
    )
}