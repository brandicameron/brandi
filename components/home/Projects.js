import style from '../../styles/home/Projects.module.css';
import styles from '../../styles/shared/Buttons.module.css';
import { useState } from 'react';
import { projects } from '../../data/projects';
import Project from './Project';

import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
  const [numProjectsShown, setNumProjectsShown] = useState(3);

  const handleViewMore = () => {
    if (numProjectsShown === 3) {
      setNumProjectsShown(projects.length);
    } else {
      setNumProjectsShown(3);
    }
  };

  return (
    <section className={style.container} id='projects'>
      <ul className={style.projects}>
        {projects.slice(0, numProjectsShown).map((project) => (
          <li className={style.project} key={uuidv4()}>
            <Project project={project} />
          </li>
        ))}
      </ul>
      <button className={`${styles.btn} ${styles.lg}`} onClick={handleViewMore}>
        <span className={styles.btnShadow}></span>
        <span className={styles.btnFront}>
          {numProjectsShown === 3 ? 'View More Projects' : 'View Less Projects'}
        </span>
      </button>
    </section>
  );
}
