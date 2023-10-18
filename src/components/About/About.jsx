import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export const About = () => {
    return (
      <section className={styles.container} id="about">
       <h2 className={styles.title}>About</h2>
       <div className={styles.content}>
          <img 
            src={getImageUrl("about/aboutImage2.png")} 
            alt="picture of me digitalized"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>I am a Junior Software Engineer building my experience in order to best solve problems and create innovative/responsive programs</p>
            </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Web Developer</h3>
              <p>I have designed multiple applications that utilize the full-stack web development process
              </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Development</h3>
              <p>I am currently studying for multiple AWS certifications in order to develop software and utilize cloud functionality
              </p>
            </div>
            </li>
          </ul>
        </div>
      </section>
    );
};