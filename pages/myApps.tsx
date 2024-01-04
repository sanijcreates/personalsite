import styles from '@/styles/Card.module.css'
import AppUI from './appCard'

export default function MyApps() {
    return (
        <div>
            <a id = "myApps">
                <h1 className={styles.subtitle}>Projects</h1>
            </a>
            <div>
                <AppUI 
                id = "1"
                src = ""
                github = "https://github.com/sanijcreates/Place-Pal"
                title = "Place Pal"
                details = "<ui><li style='padding-bottom:  15px'>Saves and retrieves user-specific information using <strong>SQLite</strong> for local data storage resulting in 80% faster efficiency</li><li style='padding-bottom:  15px'>Uses <strong>Google Places API</strong> to enable students to effortlessly choose and save their favorite places</li><li>Implemented Dexter for <strong>efficient permission handling</strong>, ensuring a secure and compliant user experience.</li></ui>"
                tech = {["Android Development", "Kotlin", "SQLite", "Google Places API"]}
                />
                <AppUI 
                id = "2"
                src = ""
                github = "https://devpost.com/software/connectcampus"
                title = "Connect Campus"
                details = "<ui><li style='padding-bottom:  15px'>Secured <strong>1st place in best YCP hacks, 3rd place in best of show, and best use of auth0</strong> (sponsored by Major League Hacking) out of 180+ participants</li><li style='padding-bottom:  15px'> Developed a project within 36 hours that addressed the issue of logistical challenges for students stranded on a remote campus during emergencies and busy times.</li><li style='padding-bottom:  15px'>Implemented the front-end development of the website using <strong>React.js and integrated a chat system</strong> for users to interact.</li></ui>"
                tech = {["React.js", "Express.js", "PostgreSQL", "Chat System"]}
                />
                <AppUI 
                id = "3"
                src = ""
                github = "https://github.com/sanijcreates/LibraryManagement"
                title = "Library Management"
                details = "<ui><li style='padding-bottom:  15px'>Developed a <strong>full-stack library management system</strong> using React and Node.js, allowing users to reserve and manage books in real-time</li><li style='padding-bottom:  15px'>Utilized <strong>RESTful API endpoints</strong> to handle CRUD operations on the backend, enabling seamless communication between the frontend and backend.</li><li>Implemented authentication and authorization mechanisms to ensure secure access to the system, with features such as login, registration, and password reset.</li></ui>"
                tech = {["React.js", "Node.js", "RESTful API", "Prisma"]}
                />
            </div>
        </div>
    )
}