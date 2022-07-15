import styles from '../../styles/playground/ProjectCard.module.css';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import LinkBtn from '../shared/LinkBtn';

export default function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      <a href={project.buttons[0].href} target='_blank' rel='noreferrer' className={styles.cardImg}>
        <Image src={project.src} alt={project.alt} width={1185} height={800} />
      </a>
      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        {project.description.map((p) => (
          <p key={uuidv4()}>{p}</p>
        ))}
        <div className={styles.projectBtns}>
          {project.buttons.map((button) => (
            <LinkBtn
              key={uuidv4()}
              href={button.href}
              title={button.title}
              icon={button.icon}
              ariaLabel={button.ariaLabel}
              src={button.src}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
