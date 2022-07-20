import styles from '../../styles/home/Project.module.css';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import LinkBtn from '../shared/LinkBtn';
import { motion } from 'framer-motion';

export default function Project({ project }) {
  return (
    <article className={styles.card}>
      <a
        target='blank'
        title='View Live'
        href={project.buttons[0].href}
        className={styles.projectImages}
      >
        <motion.div
          className={styles.ipad}
          variants={ipad}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          <Image src={project.ipad} alt={project.ipadAlt} width={620} height={474} />
        </motion.div>
        <motion.div
          className={styles.iphone}
          variants={iphone}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true }}
        >
          <Image src={project.iphone} alt={project.iphoneAlt} width={620} height={474} />
        </motion.div>
      </a>

      <section className={styles.content}>
        <h2>{project.title}</h2>
        <ul className={styles.techList}>
          {project.technologies.map((item) => (
            <li className={styles.techItem} key={uuidv4()}>
              {item}
            </li>
          ))}
        </ul>

        {project.description && project.description.map((p) => <p key={uuidv4()}>{p}</p>)}
        {project.link && (
          <a className={styles.link} href={project.link} target='_blank' rel='noreferrer'>
            {project.link}
          </a>
        )}

        {project.descriptionList && (
          <ul className={styles.descriptionList}>
            {project.descriptionList.map((li) => (
              <li key={uuidv4()}>{li}</li>
            ))}
          </ul>
        )}

        <div className={styles.projectBtns}>
          {project.buttons.map((button) => (
            <LinkBtn
              key={uuidv4()}
              href={button.href}
              title={button.title}
              ariaLabel={button.ariaLabel}
              src={button.src}
            />
          ))}
        </div>
      </section>
    </article>
  );
}

const iphone = {
  initial: {
    x: '15px',
  },
  animate: {
    x: 0,
    transition: {
      ease: 'linear',
      duration: 1.75,
    },
  },
};

const ipad = {
  initial: {
    y: '15px',
  },
  animate: {
    y: 0,
    transition: {
      ease: 'linear',
      duration: 1.5,
    },
  },
};
