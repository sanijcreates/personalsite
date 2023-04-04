import styles from '@/styles/Projects.module.css'
import CardUI from './components/projCard'

export default function Projects() {
    return (
        <div className={styles.masterContainer}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.cardContainer}>
                <CardUI 
                title = "Imagezon"
                details = "A project that I did to learn the basics of a e-commerce website"
                tech = {["React", "Next.js"]}
                />
                <CardUI 
                title = "Imagezon"
                details = "A project that I did to learn the basics of a e-commerce website"
                tech = {["React", "Next.js"]}
                />
                <CardUI 
                title = "Imagezon"
                details = "A project that I did to learn the basics of a e-commerce website"
                tech = {["React", "Next.js"]}
                />
            </div>
        </div>
    )
}