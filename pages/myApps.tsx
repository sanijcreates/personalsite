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
                src = "https://imgur.com/Cw8noE2.gif"
                yt = "false"
                github = "https://github.com/sanijcreates/Place-Pal"
                title = "Place Pal"
                details = "<ui><li style='padding-bottom:  15px'>Saves and retrieves user-specific information using <strong>SQLite</strong> for local data storage resulting in 80% faster efficiency</li><li style='padding-bottom:  15px'>Uses <strong>Google Places API</strong> to enable students to effortlessly choose and save their favorite places</li><li>Implemented Dexter for <strong>efficient permission handling</strong>, ensuring a secure and compliant user experience.</li></ui>"
                tech = {["Android Development", "Kotlin", "SQLite", "Google Places API"]}
                />
                <AppUI 
                id = "2"
                src = ""
                yt = "true"
                embedId = "r9rtYzlgKY0"
                github = "https://devpost.com/software/connectcampus"
                title = "Connect Campus"
                details = "<ui><li style='padding-bottom:  15px'>Secured <strong>1st place in best YCP hacks, 3rd place in best of show, and best use of auth0</strong> (sponsored by Major League Hacking) out of 180+ participants</li><li style='padding-bottom:  15px'> Developed a project within 36 hours that addressed the issue of logistical challenges for students stranded on a remote campus during emergencies and busy times.</li><li style='padding-bottom:  15px'>Implemented the front-end development of the website using <strong>React.js and integrated a chat system</strong> for users to interact.</li></ui>"
                tech = {["React.js", "Express.js", "PostgreSQL", "Chat System"]}
                />
                
                <AppUI 
                id = "3"
                src = "https://imgur.com/WtlZuXm.gif"
                yt = "false"
                github = "https://github.com/sanijcreates/Quizzical"
                title = "Quizzical"
                details = "<ui><li style='padding-bottom:  15px'>Developed a dynamic web application, leveraging <strong>React.js and React Hooks</strong> for efficient state management and seamless user experience.</li><li style='padding-bottom:  15px'>Utilized the nanoid library to generate unique identifiers for each question and answer, ensuring <strong>accurate tracking and manipulation of data</strong>.</li><li>Leveraged modern JavaScript features such as array methods and arrow functions for efficient data processing and manipulation.</li></ui>"
                tech = {["React.js", "RESTful API", "CSS"]}
                />
                <AppUI 
                id = "3"
                src = "https://imgur.com/kvx6mRv.gif"
                yt = "false"
                github = "https://github.com/sanijcreates/Tenzies-Game"
                title = "Tenzies"
                details = "<ui><li style='padding-bottom:  15px'>Developed a <strong>Front End application using React.js</strong>, leveraging its powerful features such as hooks (useState, useEffect) for state management and side effects handling.</li><li style='padding-bottom:  15px'>Implemented <strong>local storage functionality</strong> to persist data across sessions, enhancing user experience by saving and retrieving user's time data.</li><li>Utilized JavaScript's Date object and its methods to handle and manipulate time-related data, providing <strong>real-time feedback to the user.</strong></li></ui>"
                tech = {["React.js", "React Hooks", "CSS"]}
                />
                <AppUI 
                id = "3"
                src = "https://imgur.com/Gd6JIxT.gif"
                yt = "false"
                github = "https://github.com/sanijcreates/Speed-Typing-Game"
                title = "Speed Typing Practice"
                details = "<ui><li style='padding-bottom:  15px'>Implemented a <strong>custom React hook for managing the application's core logic</strong>, showcasing the ability to create reusable code and manage complex state logic.</li><li style='padding-bottom:  15px'>The application features a dynamic user interface that calculates and displays words per minute (WPM) and allows users to set their preferred practice duration</li></ui>"
                tech = {["React.js", "React Hooks", "CSS", "JavaScript"]}
                />
            </div>
        </div>
    )
}