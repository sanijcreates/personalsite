import styles from '@/styles/Footer.module.css'

export default function Footer() {
    <div className={styles.footerBasic}>
        <footer>
            <div className={styles.social}><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className={styles.listInline}>
                <li className={styles.listinlineitem}><a href="#">Home</a></li>  
                <li className={styles.listinlineitem}><a href="#">Services</a></li>
                <li className={styles.listinlineitem}><a href="#">About</a></li>
                <li className={styles.listinlineitem}><a href="#">Terms</a></li>
                <li className={styles.listinlineitem}><a href="#">Privacy Policy</a></li>
            </ul>
            <p className={styles.copyright}>Company Name © 2018</p>
        </footer>
    </div>
}