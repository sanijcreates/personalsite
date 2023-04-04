import Image from 'next/image';
import profileImage from '../../images/testimonial1.png';
import styles from '@/styles/Card.module.css';

const CardUI = (props: any) => {

    return (
        <div className={styles.mainContainer}>
                <div className={styles.projectContainer}>
                    <Image 
                    alt = "project displat"
                    src={profileImage}
                    width= {300}
                    height={100}
                    className={styles.image}
                    />
                    <p>{props.title}</p>
                    <p>{props.details}</p>
                    {props.tech.map((el:any) => (
                        <span>{el}</span>
                    ))}
                </div>
        </div>
    )
}

export default CardUI;