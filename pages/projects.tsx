import styles from '@/styles/Projects.module.css'
import CardUI from './projCard'
import picksome from '../images/picksome.png'
import speed from '../public/speedtyping.png'
import binary from '../public/binary.jpg'
import wiki from '../images/wiki.png'

export default function Projects() {
    return (
        <div className={styles.masterContainer}>
            <a >
            <h1 className={styles.title}>Projects</h1> </a>
            <div className={styles.cardContainer}>

                <CardUI 
                id = "2"
                src = {wiki}
                github="https://github.com/sanijcreates/LibraryManagement"
                title = "Library Management[Group Project]"
                details = "A full-stack library management system that allows users to reserve the books in real-time and admins to manage the books. The project also utilizes authentication mechanisms."
                tech = {["React.js", "Node.js", "MongoDB", "Git"]}
                />
                <CardUI
                id = "3"
                src = {speed}
                github = "https://replit.com/@ColePedro/ObjOr-Battleship"
                title = "Battleship[Group Project]"
                details = "A command-line interface battleship game developed using the concepts of Object Oriented Programming using Java"
                tech = {["OOP", "Java"]}        
                />
                <CardUI 
                id = "4"
                src = {binary}
                github ="https://github.com/sanijcreates/Bank-simulation"
                title = "Banking System Simulation[Personal Project]"
                details = "Project simulates a banking system using Object Oriented Programming concepts allowing users to create bank accounts, choose between checking and saving accounts, and create credit cards."
                tech = {["OOP", "Java"]}
                />
               <CardUI 
                id = "1"
                src = {picksome}
                github = "https://github.com/sanijcreates/PICk-SOME"
                title = "Imagezon"
                details = "React based e-commerce website that demonstrates the generic features of an e-commerce site"
                tech = {["React.js", "React Redux", "React Router"]}
                />
            </div>
        </div>
    )
}