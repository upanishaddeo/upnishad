import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'


function Header() {
    return (
        <div className={styles.Header}>
            <Link href='/'><div className={styles.heroName}>Upnishad Deo<span>.</span></div></Link>
            <div className={styles.navContainer}>
                <div className={styles.navLink}>
                    <Link href='/about-me'>About Me</Link>
                    <Link href='/skills'>Skills</Link>
                    <Link href='/experience'>Experience</Link>
                    <Link href='/services'>Services</Link>
                </div>
                <button className={styles.hireButton}>Hire Me</button>
            </div>
        </div>
    )
}

export default Header
