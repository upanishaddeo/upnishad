import React from 'react'
import styles from '../styles/About.module.css'

function AboutMe() {
    return (
        <div className={styles.AboutSection}>
            <div className={styles.boyImage}>
                <img src='boy5.png' />
            </div>
            <div className={styles.aboutContent}>
                <h1 className={styles.helloFont}>Hola <span>!</span></h1>
                <div>Well I am a Chemistry grad turned Developer, you ask the reason for transition? Well Interest makes things possible.</div>
                <div className={styles.hobbies}>My hobbies include Guitar, singing Reading self-help books and yes ! <span>Black Holes and space theories</span></div>
                <div className={styles.interests}>A keen interest in <span>UI design</span> and <span>development</span> was the one thing which attracted me towards itself !</div>
                <div>Developing UIs with latest technology stacks and UI practices makes my work fulfilling to eyes and completes its prupose of development without any doubt.</div>
                <div className={styles.attention}>* Aaghh Yes, I am clearly not that fat ! 😊 </div>
            </div>
        </div>
    )
}

export default AboutMe
