import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl} from "../.././utils"

export const Hero = () => {
    return <section className={styles.container}>
       <div className={styles.content}>
           <h1 className={styles.title}>Hi, I'm Phil</h1>
           <p className={styles.description}>I'm a Junior Software Engineer with a passion to create innovative applications and further my foundational understanding of all things software</p>
         {/* <a href ="mailto:philip.kubisz@gmail.com" className={styles.contactBtn}>Contact me</a> */}
           </div>
           <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
            <div className={styles.bottomBlur2}/>
            <div className={styles.bottomBlur3}/>
            <div className={styles.bottomBlur4}/>
            <div className={styles.bottomBlur5}/>
            <div className={styles.bottomBlur6}/>
            <div className={styles.bottomBlur7}/>
    </section>;
};