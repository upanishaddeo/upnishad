import React from 'react'
import styles from '../styles/Skills.module.css'


function SkillCard(props) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImage}>
                <img src={props.Image} />
            </div>
            <div className={styles.cardHeading}>
                <h1>{props.Heading}</h1>
            </div>
            <div className={styles.cardDescription}>
                <p>{props.Description}</p>
            </div>
            <div className={styles.cardRate}>
                <p>I would rate myself {props.Rate}/10 in {props.Heading}</p>
            </div>
        </div>
    )
}


const HtmlDesc = "Html is a backbone fof development, it is one necessary laguage and is always demanding in fron-tend it allows us to setup the DOM structure of our website application."
const CssDesc = "CSS has become the part of web development and is now a key skill to mster to become a successfull front-end engineer. CSS allows us to style our DOM structure and Html tags."
const ReactJs = "React is a JavaScript library for building user interfaces. It handles the views of MVT pattern of the architecture and gives you the choice to decide rest of the front-end architecture of Model and Template !"
const JavaScript = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm."
const NextJs = "Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications. it really makes the task easy for developer specially the Server Side Rendering"
const ReduxDesc = "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture"


function skills() {
    return (
        <div className={styles.skillsSection}>
            <div className={styles.SkillsHeading}>Below are some skills that I have acquired and <span>taught myself</span> !</div>
            <div className={styles.cardSection}>
                <div className={styles.CardRow}>
                    <SkillCard Image={'Html.jpg'} Heading={"HTML5"} Description={HtmlDesc} Rate={"10"} />
                    <SkillCard Image={'css3.jpg'} Heading={"CSS3"} Description={CssDesc} Rate={"9"} />
                    <SkillCard Image={'javascript.jpg'} Heading={"JavaScript"} Description={JavaScript} Rate={"7"} />
                </div>
                <div className={styles.CardRow}>
                    <SkillCard Image={'ReactJs.png'} Heading={"ReactJs"} Description={ReactJs} Rate={"8"} />
                    <SkillCard Image={'Redux.png'} Heading={"Redux"} Description={ReduxDesc} Rate={"7"} />
                    <SkillCard Image={'NextJs.png'} Heading={"NextJs"} Description={NextJs} Rate={"9"} />
                </div>
            </div>
            <div className={styles.SkillsSource}>My source of knowledge was mainly Youtube, <a href='https://www.freecodecamp.org/' target="_blank">FreeCodeCamp.org</a> and Stackoverflow !</div>
        </div>
    )
}

export default skills
