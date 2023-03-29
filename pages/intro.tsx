import Image from 'next/image'
import styles from '@/styles/Intro.module.css'
import profileImage from '../images/testimonial1.png'

export default function Intro() {
    return(
        <main className={styles.display}>
            <section className="side-intro">
            <Image 
                src={profileImage}
                height = {144}
                width = {144}
                alt ="profile image"
                className={styles.image}
            />
        <h3>Sanij Shrestha</h3>
        <span>Computer Science @ DePauw University</span>
        <ul>
          <li><a className='social_icon' href='https://github.com/sanijcreates'><i className="uil uil-github"></i>Github</a></li>
          <li><a className='social_icon' href='to:saniz.sth123@gmail.com'><i className="uil uil-envelope"></i>Email</a></li>
          <li><a className='social_icon' href="https://www.linkedin.com/in/sanij-shrestha/"><i className="uil uil-linkedin"></i>LinkedIn</a></li>
        </ul>
            </section>
            <section className={styles.mainIntro}>
            <h1>SANIJ SHRESTHA</h1>
        <hr />
        <p>Hi, I am a <strong>Computer Science</strong> major student in the <a href="">Department of Computer Science</a> at <strong><a href="">DePauw University</a></strong>. </p>
        <br />
        <p>I am especifically interested in the field of Software Development. One of my recent goals has been to get a SWE internship, so if you are looking for a SWE intern, hire me :)</p>
        <button onClick="window.location.href='https://w3docs.com';" className='button'>My Resume</button>
            </section>
        </main>
    )
}