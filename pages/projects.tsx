import styles from '@/styles/Projects.module.css'
import CardUI from './components/projCard'

export default function Projects() {
    return (
        <div className={styles.masterContainer}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.cardContainer}>
                <CardUI 
                github = "https://github.com/sanijcreates/PICk-SOME"
                title = "Imagezon"
                details = "React based e-commerce website that demonstrates the generic features of an e-commerce site"
                tech = {["React.js", "JS", "CSS", "HTML"]}
                />
                <CardUI 
                github="https://github.com/sanijcreates/Project-Wiki"
                title = "Project Wiki"
                details = "A project from the Harvard's CS50 course that implements the basics of django"
                tech = {["Django", "Python", "CSS"]}
                />
                <div className = {styles.lastCard}>
                <CardUI
                title = "Imagezon"
                details = "A project that I did to learn the basics of a e-commerce website"
                tech = {["React", "Next.js", "CSS","HTML"]}        
                />
                </div>
            </div>
        </div>
    )
}