import {useState} from 'react'
import styles from '@/styles/Card.module.css'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';

const AppUI = (props: any) => {
    const [display, setDisplay] = useState(true)

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'blue',
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.appContainer}>
                <div className={styles.gifInfo}>
                    <a href={props.github} target='_blank'><p className={styles.title}>{props.title}</p></a>
                    <div className={styles.desc} dangerouslySetInnerHTML={{__html: props.details}}></div>
                    <div className={styles.techs}>
                        {props.tech && props.tech.map((el:any, index:any) => (
                            <span className={styles.button60} key = {index}>{el}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
                
            );
        }

export default AppUI;