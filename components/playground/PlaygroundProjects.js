import styles from '../../styles/playground/PlaygroundProjects.module.css';
import { playgroundProjects } from '../../data/playgroundProjects';
import { featureProjects } from '../../data/featureProjects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function PlaygroundProjects() {
  return (
    <>
      <motion.section
        className={styles.featureContainer}
        variants={fadeUp}
        initial='initial'
        animate='animate'
      >
        <h3 className={styles.featureTitle}>Current Side Project</h3>
        <p>Working on a collection of faux movie/show sites, created in Next.js.</p>
        <ul className={styles.projectsContainer}>
          {featureProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </motion.section>

      <ul className={styles.projectsContainer}>
        {playgroundProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </>
  );
}

const fadeUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
    },
  },
};
