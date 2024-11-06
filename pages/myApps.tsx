import styles from '@/styles/Card.module.css'
import AppUI from './appCard'

export default function MyApps() {
    return (
        <div>
            <a id = "projects">
                <h1 className={styles.subtitle}>Projects</h1>
            </a>
            <div>
            <AppUI 
                id = "5"
                src = "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/075/862/datas/gallery.jpg"
                yt = "false"
                github = "https://devpost.com/software/calendar-weather-app"
                title = "Climately"
                details = "<ui><li style='padding-bottom:  15px'>Developed an intelligent chrome extension integrating <strong>real-time weather data</strong> to optimize scheduling, providing automated activity suggestions based on weather conditions and enhancing users' event planning capabilities through predictive weather alerts</li><li style='padding-bottom:  15px'>Engineered a robust Java Spring Boot backend managing <strong>multiple API integrations including Google Calendar, Weather API, and OpenAI for real-time event synchronization</strong></li><li style='padding-bottom:  15px'>Architected a responsive frontend using React.js, implementing Google OAuth authentication to seamlessly integrate user calendar data and preferences</li></ui>"
                tech = {["Spring boot", "OpenAI", "Chrome Extension", "Javascript", "API"]}
                />
            <AppUI 
                id = "5"
                src = ""
                yt = "true"
                embedId = "3ZTVrNvTw7I"
                github = "https://devpost.com/software/dermafyr"
                title = "Dermafyr"
                details = "<ui><li style='padding-bottom:  15px'>A skincare analysis system that is trained on <strong>19k datasets</strong> and analyzes facial skin condition using AI with 97% accuracy and operates both as in-store kiosks and web platform.</li><li style='padding-bottom:  15px'>Secured <strong>2nd place in Best Overall Project category</strong>, competing with over 40+ projects.</li><li>Led the development of backend utilizing FastAPI, integrated Llama model in Raspberry Pi 5 for <strong>offline analysis and suggestion system.</strong></li></ui>"
                tech = {["React.js", "Fast API", "Tensorflow", "Raspberry Pi 5", "AI", "MYSQL"]}
                />
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
            </div>
        </div>
    )
}