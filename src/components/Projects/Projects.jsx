import React from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                })}
            </div>
            {/*
            <div className={styles.leftBlur}/>
            <div className={styles.rightBlur}/>
            <div className={styles.leftBlur2}/>
            <div className={styles.rightBlur2}/>
            <div className={styles.rightBlur3}/>
            */}
        </section>
    );
};