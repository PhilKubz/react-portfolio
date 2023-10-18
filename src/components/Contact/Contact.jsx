import React from "react";

import styles from "./Contact.module.css"
import { ScrollToTopButton } from "./ScrollToTopButton";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
    <footer className={styles.container} id="contacts">
        <div className={styles.text}>
            <h2>Contact</h2>
                <p>For any inquiries, please reach out!</p>
                <p> - Site developed by Phil - </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:philip.kubisz@gmail.com">philip.kubisz@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"/>
                <a href="https://www.linkedin.com/in/philipkubisz/">LinkedIn/philip-kubisz</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon"/>
                <a href="https://github.com/PhilKubz">GitHub/PhilKubz</a>
            </li>
        </ul>
        <div className={styles.buttons}>
            <ScrollToTopButton />
        </div>
    </footer>
    );
};