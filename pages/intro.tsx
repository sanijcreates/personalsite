import Image from 'next/image'
import styles from '@/styles/Intro.module.css'
import profileImage from '../images/profile.jpg'
import react from '../images/icons8-react.gif'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact } from '@fortawesome/free-solid-svg-icons'

// const myLoader = () => {
//     return `https://example.com/${profileImage}?w=${300}&q=${300 || 75}`
//   }


export default function Intro() {
    return(
        <main className={styles.display}>
            <div className={styles.mainContainer}>
            <section className={styles.sideIntro}>
                <div className={styles.profileParent}>
                <Image 
                    // loader={myLoader}
                    src={profileImage}
                    alt="Your image"
                    layout="responsive"
                    objectFit="cover"
                    priority
                    width={300}
                    height={300}
                    className={styles.image}
                />
                
                </div>
                <h3>Sanij Shrestha</h3>
            <span>Computer Science @ Gettysburg College</span>
            
            <ul className={styles.social}>
                <li><a className={styles.icon} href='https://github.com/sanijcreates'><i className={`${styles.icon} uil uil-github`}></i></a></li>
                <li><a className={styles.icon} href='mailto:saniz.sth123@gmail.com'><i className={`${styles.icon} uil uil-envelope`}></i></a></li>
                <li><a className={styles.icon} href="https://www.linkedin.com/in/sanij-shrestha/"><i className={`${styles.icon} uil uil-linkedin`}></i></a></li>
                <li><a className={styles.icon} href="https://www.instagram.com/sanijshresth/"><i className={`${styles.icon} uil uil-instagram`}></i></a></li>
            </ul>
            <div className={styles.scroll2}>
        <i className={`${styles.down} uil uil-angle-double-down`}></i>
        </div>
            </section>
            <section className={styles.mainIntro}>
        
        <h1 className={styles.name}>SANIJ SHRESTHA</h1>
        <div className={styles.nameContainer}></div>
        <p className={styles.mainContent}>Hey there, I am a <strong>Computer Science</strong> major and a <strong>Data Science</strong> minor student in the <a href="https://www.gettysburg.edu/academic-programs/computer-science/">Department of Computer Science</a> at <strong><a href="https://www.gettysburg.edu/">Gettysburg College</a></strong>. </p>
        <p>I am a tech geek, who is also passionate about solving real-world problems through software. You can usually find me with my laptop buried in lines of code and surviving on LOTS of caffeine. So, if you need a computer science <span className={styles.nerd}>nerd</span> with a caffeine addiction, look no further :)</p>
        <p>Please contact me for a detailed information about my work experiences.</p>
        <Link href = "/#contact"><button className={styles.button60}>Contact me</button></Link>
            </section>
            </div>
        <div className={styles.techStack}>
            {/* <Image 
            className={styles.react}
            alt="react"
            src = {react}/>
            {/* <img src={react}></img> */}
            {/* <FontAwesomeIcon icon={faReact} size="xl" />
            <FontAwesomeIcon icon={faReact} size="xl" /> */} 
        </div>
        <div className={styles.scroll}>
        <i className={`${styles.down} uil uil-angle-double-down`}></i>
        </div>
        </main>
    )
}