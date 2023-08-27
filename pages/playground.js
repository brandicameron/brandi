import styles from '../styles/playground/Playground.module.css';
import Head from 'next/head';
import PlaygroundProjects from '../components/playground/PlaygroundProjects';
import Runner from '../components/playground/Runner';

export default function Playground() {
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
        <PlaygroundProjects />
        {/* <Runner /> */}
      </section>
    </>
  );
}
