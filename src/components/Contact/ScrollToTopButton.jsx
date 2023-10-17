import React from "react";

import styles from './ScrollToTopButton.module.css';

export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.container}>
            <button className={styles.scrollToTopButton} onClick={scrollToTop}>
                Jump to Top
            </button>
        </div>
    );
};