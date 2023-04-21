import styles from '@/styles/Projects.module.css'
import CardUI from './projCard'
import picksome from '../images/picksome.png'
import speed from '../public/speedtyping.png'
import binary from '../public/binary.jpg'

export default function Projects() {
    return (
        <div className={styles.masterContainer}>
            <a id = "projects">
            <h1 className={styles.title}>Projects</h1> </a>
            <div className={styles.cardContainer}>
                <CardUI 
                id = "1"
                src = {picksome}
                github = "https://github.com/sanijcreates/PICk-SOME"
                title = "Imagezon"
                details = "React based e-commerce website that demonstrates the generic features of an e-commerce site"
                tech = {["React.js", "React Redux", "CSS", "HTML"]}
                />
                <CardUI 
                id = "2"
                src = {speed}
                github="https://github.com/sanijcreates/Project-Wiki"
                title = "Project Wiki"
                details = "A project from the Harvard's CS50 course that implements the basics of django"
                tech = {["Django", "Python", "CSS"]}
                />
                <CardUI
                id = "3"
                src = {speed}
                github = "https://github.com/sanijcreates/Speed-Typing-Game"
                title = "Speed-Typing Game"
                details = "Project provides feature to set the time using useRef, useState and useEffect"
                tech = {["React.js","CSS","HTML", "JS"]}        
                />
                <CardUI 
                id = "4"
                src = {binary}
                github ="https://github.com/sanijcreates/Binary-Search-Trees"
                title = "Counting Words"
                details = "Counts number of words in a file using Binary Search Tree and Bubble sort"
                tech = {["Binary Search Tree", "C++", "Data Structures"]}
                />
            </div>
        </div>
    )
}