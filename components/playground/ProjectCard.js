import styles from '../../styles/playground/ProjectCard.module.css';
import Image from 'next/image';
import LinkBtn from '../shared/LinkBtn';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectCard({ project }) {
  return (
    <li key={project.title} className={styles.projectCard}>
      <a href={project.buttons[0].href} target='_blank' rel='noreferrer' className={styles.cardImg}>
        <Image priority='true' src={project.src} alt={project.alt} width={345} height={233} />
      </a>
      <div className={styles.projectContent}>
        <h4>{project.title}</h4>
        <ul className={styles.techList}>
          {project.tech.map((item) => (
            <li key={uuidv4()}>{item}</li>
          ))}
        </ul>
        {project.description.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className={styles.projectBtns}>
          {project.buttons.map((button) => (
            <LinkBtn
              key={button.href}
              href={button.href}
              title={button.title}
              icon={button.icon}
              ariaLabel={button.ariaLabel}
              src={button.src}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
