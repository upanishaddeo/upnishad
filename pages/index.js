import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.firstScreen}>
          <div className={styles.helloWorld}>Hey Folks !<br />I am</div>
          <div className={styles.heroName}>Upnishad Deo<span>.</span></div>
          <div className={styles.heroIntro}>A self taught Web Developer !</div>
          <p><span>*</span> I know this page is a bit boring head on to my next pages for some interesting stuff <span>!</span></p>
          <div className={styles.Hand1}><img src='hand1.png' /></div>
          <div className={styles.Hand2}><img src='hand2.png' /></div>
          <div className={styles.Hand3}><img src='hand3.png' /></div>
          <div className={styles.Hand4}><img src='hand4.png' /></div>
      </div>
    </div>
  )
}
