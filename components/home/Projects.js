import style from '../../styles/home/Projects.module.css';
import styles from '../../styles/shared/Buttons.module.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Project from './Project';

export default function Projects() {
  const [numProjectsShown, setNumProjectsShown] = useState(3);
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    setClickSound(new Audio('./sounds/coin.wav'));
  }, []);

  const handleViewMore = () => {
    clickSound.volume = 0.1;
    clickSound.play();
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

const projects = [
  {
    title: 'Recipe App',
    contribution: 'Design | Development',
    technologies: ['Next.js', 'Firebase', 'Tailwind'],
    ipad: '/images/projects/nosh-ipad.png',
    iphone: '/images/projects/nosh-iphone.png',
    ipadAlt: 'An ipad displaying a blueberry muffin recipe.',
    iphoneAlt: 'An iphone displaying a blueberry muffin recipe.',
    description: ['First Next.js project — a full featured "Netflix style" recipe app.'],
    descriptionList: [
      'Change the servings and the ingredient amounts automatically recalculate for you.',
      'Add recipes to your menu for quick switching right from the recipe page.',
      'When adding recipes, type fractional amounts naturally (e.g. 1/2 tsp vanilla) and the app takes care of the decimal conversion under the hood for servings recalculations.',
      "Drag & drop profile pic change, updates on any recipes you've previously added.",
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://nosh.brandicameron.com',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/nosh',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Blackjack',
    contribution: 'Design | Development',
    technologies: ['React', 'Redux', 'CSS Animations'],
    ipad: '/images/projects/blackjack-ipad.png',
    iphone: '/images/projects/blackjack-iphone.png',
    ipadAlt: 'An ipad displaying a blackjack game being played.',
    iphoneAlt: 'An iphone displaying a blackjack game being played.',
    description: [
      'My first React project and damn I jumped straight in the deep end, but hey — what a rush!',
      'The game plays with a custom designed 6 deck shoe, reshuffling after falling below 75 cards. Dealer must stand on 17, and blackjack pays 3:2. Selected chips animate to the table from the correct location in the bank.',
      'Figuring out how to score aces in all circumstances was an especially fun challenge.',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/blackjack/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/blackjack',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Clean & Green',
    contribution: 'Design | Development',
    technologies: ['HTML 5', 'Sass', 'GSAP'],
    ipad: '/images/projects/cleangreen-ipad.png',
    iphone: '/images/projects/cleangreen-iphone.png',
    ipadAlt: 'An ipad displaying the home page of the Clean and Green website.',
    iphoneAlt: 'An iphone displaying the home page of the Clean and Green website.',
    description: [
      'Sometimes service business sites can be, well, a bit boring — but we added a bit of whimsy with this one with some floating cleaning bubbles.',
      'This site brings in daily email inquiries, most resulting in a new weekly or bi-weekly client when within the service area.',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://cleanandgreennashville.com/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/cg',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Blood Pressure Tracker',
    contribution: 'Design | Development',
    technologies: ['React', 'Firebase', 'Sass'],
    ipad: '/images/projects/bp-ipad.png',
    iphone: '/images/projects/bp-iphone.png',
    ipadAlt: 'An ipad displaying blood pressure readings and heart rate readings.',
    iphoneAlt: 'An iphone displaying blood pressure readings and heart rate readings.',
    description: [
      'My second react project was a bit more sensible and I really got to see where components shine.',
      'You can instantly sign in as a guest, so give it a try!',
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/bp-react/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/bp-react/tree/master',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Cameron Home Inspection',
    contribution: 'Design | Development',
    technologies: ['HTML 5', 'Sass', 'Javascript'],
    ipad: '/images/projects/chi-ipad.png',
    iphone: '/images/projects/chi-iphone.png',
    ipadAlt: 'An ipad displaying the home page of the Cameron Home Inspection website.',
    iphoneAlt: 'An iphone displaying the home page of the Cameron Home Inspection website.',
    description: [
      'This guy is the best, and wanted to say it in as few words as possible. Mission accomplished.',
      'We also created a custom inspection rate calculator for the inspector and realtors to use, check it out here:',
    ],
    link: 'https://cameronhomeinspection.com/rates/',
    buttons: [
      {
        title: 'Live',
        href: 'https://cameronhomeinspection.com/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/cameron-inspection',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
  {
    title: 'Etch-a-Sketch Drawing',
    contribution: 'Design | Development',
    technologies: ['HTML 5', 'CSS 3', 'Javascript', 'GSAP'],
    ipad: '/images/projects/etchasketch-ipad.png',
    iphone: '/images/projects/etchasketch-iphone.png',
    ipadAlt: 'An ipad displaying an Etch-a-Sketch drawing website with an Apple pencil.',
    iphoneAlt: 'An iphone displaying an Etch-a-Sketch drawing website.',
    description: [
      'This dude started out as a proper Etch-a-Sketch, I swear. But as the project developed, and the desire to add additional functionality over took me...it became “more”. So much more, that it’s not even really an Etch-a-Sketch anymore.',
      "It still shakes though, and that's fun.",
    ],
    buttons: [
      {
        title: 'Live',
        href: 'https://brandicameron.github.io/etchasketch/',
        ariaLabel: 'View this project live, opens in a new window.',
        src: '/images/icons/new-window.svg',
      },
      {
        title: 'Code',
        href: 'https://github.com/brandicameron/etchasketch',
        ariaLabel: 'View this project on github, opens in a new window.',
        src: '/images/icons/github-icon.svg',
      },
    ],
  },
];
