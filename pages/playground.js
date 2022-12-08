import styles from '../styles/playground/Playground.module.css';
import Head from 'next/head';
import { playgroundProjects } from '../data/playgroundProjects';
import ProjectCard from '../components/playground/ProjectCard';
import FeatureProject from '../components/playground/FeatureProject';
import { v4 as uuidv4 } from 'uuid';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export default function Playground() {
  const { scrollY } = useViewportScroll();
  const xLeft = useTransform(scrollY, [0, 4000], ['-80%', '0vw']);

  return (
    <>
      <Head>
        <title>Welcome to Brandi&apos;s playground.</title>
        <meta
          name='description'
          content="Welcome to Brandi's playground, a place for showcasing small projects created for the fun of coding."
        />
      </Head>
      <section className={styles.playgroundContainer}>
        <h1 aria-label='Welcome to the playground.'>
          <img src='./images/playground/playground.svg' alt='' width={900} height={345} />
        </h1>
        <h2>
          Fun little projects created from scratch on this learning journey. Are they important?
          Nope. Is the code gorgeous? Probably not. But I hope you enjoy them.
        </h2>
        <FeatureProject />
        <ul className={styles.projectsContainer}>
          {playgroundProjects.map((project) => (
            <li key={uuidv4()}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <div className={styles.background}></div>
        <motion.p
          style={{ x: xLeft }}
          className={styles.runner}
          aria-label='All work and no play makes Brandi a dull girl.'
        >
          <span aria-hidden>
            All work and no play makes Brandi a dull girl. &nbsp; &nbsp; All work and no play makes
            Brandi a dull girl. &nbsp; &nbsp;All work and no play makes Brandi a dull girl. &nbsp;
            &nbsp;All work and no play makes Brandi a dull girl. &nbsp; &nbsp;All work and no play
            makes Brandi a dull girl.&nbsp; &nbsp; All work and no play makes Brandi a dull girl.
            &nbsp; &nbsp;All work and no play makes Brandi a dull girl. &nbsp; &nbsp;All work and no
            play makes Brandi a dull girl. &nbsp; &nbsp;All work and no play makes Brandi a dull
            girl.&nbsp; &nbsp; All work and no play makes Brandi a dull girl. &nbsp; &nbsp;All work
            and no play makes Brandi a dull girl.
          </span>
        </motion.p>
      </section>
    </>
  );
}
