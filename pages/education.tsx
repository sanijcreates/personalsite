import styles from '@/styles/Education.module.css'

export default function Education() {
    return (
        <div>
        <div  className={styles.upperdiv}>
        <h1 className={styles.contentTitle}>Education</h1>
        </div>
        <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
                        <h2 className={styles.title}>DePauw University '25</h2>
                        <h3 className={styles.subtitle}>Bachelors in Computer Science</h3>
                        <p className={styles.ul}>Honors and Awards</p>
                        <ul className={styles.list}>
                            <li><a href='https://depauw.meritpages.com/stories/Sanij-Shrestha-Named-to-DePauw-University-s-Fall-2022-Dean-s-List/102209832'>Dean's List, Fall 2022</a></li>
                           <li> <a href=''>Best FYS Writing Anthology</a></li>
                            <li>Receipent of $44,000/yr Merit Scholarship</li>  
                        </ul>
                        <p className={styles.ul}>Relevant Courses</p>
                        <ul className={styles.list}>
                        <li  className={styles.li}><a href="">CSC 232: Object Oriented Software Development</a></li>
                       <li  className={styles.li}> <a href="">CSC 122: Data Structures</a></li>
                        <li  className={styles.li}><a href="">CSC 231: Computer Systems</a></li>
                        <li  className={styles.li}><a href="">CSC 233: Foundation of Computation</a></li>
                        <li className={styles.li}><a href="">CSC 121: Intro to Computer Science</a></li>
                      <li className={styles.li}><a href="">MATH 123: Discrete Computational Mathematics</a></li>
                        </ul>
                    </div>
            </div>
            <div>
                <div className={`${styles.container} ${styles.right}`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Little Angels' College GCE Alevels</h2>
                        <h3 className={styles.subtitle}>GCE A level</h3>
                        <p className={styles.ul}>Honors and Awards</p>
                        <ul className={styles.list}>
                            <li><a href='https://depauw.meritpages.com/stories/Sanij-Shrestha-Named-to-DePauw-University-s-Fall-2022-Dean-s-List/102209832'>Dean's List, Fall 2022</a></li>
                           <li> <a href=''>Best FYS Writing Anthology</a></li>
                            <li>Receipent of $44,000/yr Merit Scholarship</li>  
                        </ul>
                        <p className={styles.ul}>Relevant Courses</p>
                        <ul className={styles.list}>
                        <li  className={styles.li}><a href="">CSC 232: Object Oriented Software Development</a></li>
                       <li  className={styles.li}> <a href="">CSC 122: Data Structures</a></li>
                        <li  className={styles.li}><a href="">CSC 231: Computer Systems</a></li>
                        <li  className={styles.li}><a href="">CSC 233: Foundation of Computation</a></li>
                        <li className={styles.li}><a href="">CSC 121: Intro to Computer Science</a></li>
                      <li className={styles.li}><a href="">MATH 123: Discrete Computational Mathematics</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}