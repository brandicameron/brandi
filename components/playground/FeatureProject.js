import styles from '../../styles/playground/FeatureProject.module.css';
import { featureSites } from '../../data/featureSites';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function FeatureProject() {
  return (
    <motion.section
      variants={fadeUp}
      initial='initial'
      animate='animate'
      className={styles.featureContainer}
    >
      <h3 className={styles.featureTitle}>Current Side Project</h3>
      <p>Working on a collection of faux sites, created in Next.js.</p>
      <ul className={styles.projectsContainer}>
        {featureSites.map((project) => (
          <li key={uuidv4()}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </motion.section>
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
