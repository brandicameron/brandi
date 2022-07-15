import styles from '../styles/playground/Playground.module.css';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import ProjectCard from '../components/playground/ProjectCard';

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
        <motion.h1 aria-label='Welcome to the playground.'>
          <img src='./images/playground/playground.svg' alt='' width={900} height={345} />
        </motion.h1>
        <h2>
          Fun little projects created from scratch on this learning journey. Are they important?
          Nope. Is the code gorgeous? Probably not. But I hope you enjoy them.
        </h2>
        <motion.ul
          variants={fadeUp}
          initial='initial'
          animate='animate'
          className={styles.projectsContainer}
        >
          {playProjects.map((project) => (
            <li key={uuidv4()}>
              <ProjectCard project={project} />
            </li>
          ))}
        </motion.ul>
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

const playProjects = [
  {
    title: 'Texting Test',
    src: '/images/playground/texting-test.jpg',
    alt: 'The homepage of the Texting Test website.',
    description: [
      'A comical no fail game to make sure a tween in your life will text responsibly before giving them your digits.',
      '(this was actually my very first real coding project)',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/texting-test/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/texting-test',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Hangman',
    src: '/images/playground/hang-cole.jpg',
    alt: 'A screen shot of an online hangman game.',
    description: [
      'Well, hang “Cole” really - just another game to mess with my nephew.',
      'The face changes as you miss letters and he gets closer to death.',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/hangcole/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/hangcole',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Monster Match',
    src: '/images/playground/monster-match.jpg',
    alt: 'The screen shot of the Moster Match card game.',
    description: [
      'The classic match game, but with adorable little monsters.',
      "There's also a “hard mode” with slightly less adorable monsters.",
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/monster-match/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/monster-match',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'US Map Quiz',
    src: '/images/playground/map-quiz.jpg',
    alt: 'A screen shot of the US Map Quiz game.',
    description: [
      "Do you know where all those tiny northeastern states are? I sure didn't.",
      'This quiz has auditory & visual feedback for correct answers, and a crowd even applauses when you finish. What more can you ask for??',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/us-map-quiz/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/us-map-quiz',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Statue Art',
    src: '/images/playground/statues.jpg',
    alt: 'A screen shot of a webpage displaying two women statue heads framed above a bouquet of flowers, with the text Anyone can do Anything spinning around the statues.',
    description: [
      'Just some weird animated art for the heck of it.',
      'These are actual family member photos that I “statue-ized” in Photoshop - they were suitably horrified.',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/statues/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/statues',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Wordy Clock',
    src: '/images/playground/wordy-clock.jpg',
    alt: 'A screen shot of an clock that displays the time in words instead of numbers.',
    description: ['A clock, but with words. 🤪'],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/wordy-clock/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/wordy-clock',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
];
