import Image from 'next/image';
// import profileImage from '../../images/testimonial1.png';
import styles from '@/styles/Card.module.css';
import { useState } from 'react';

const CardUI = (props: any) => {
    const [display, setDisplay] = useState(true)
    return (
        <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    {display? <a href = {props.github}><button className={`${styles.button50}`}>Github</button></a>: null}
                    <Image 
                    alt = "project display"
                    src={props.src}
                    width ={400}
                    height={200}
                    className={styles.image}
                    />
                </div>
                <div className={styles.projInfo}>
                    <p className={styles.title}>{props.title}</p>
                    <p>{props.details}</p>
                    <div className={styles.techs}>
                    {props.tech.map((el:any, index:any) => (
                        <span className={styles.button60} key = {index}>{el}</span>
                    ))}
                    </div>
                </div>
        </div>
    )
}

export default CardUI;