import styles from '../../styles/home/Banner.module.css';
import { motion } from 'framer-motion';
import { useWeather } from '../../hooks/useWeather';
import { useAstronomy } from '../../hooks/useAstronomy';
import { useWeatherText } from '../../hooks/useWeatherText';
import { useIsScrolling } from '../../hooks/useIsScrolling';
import Weather from '../weather/Weather';
import Bug from '../shared/Bug';

export default function Banner({ weatherData, sunRiseSet }) {
  const { weather } = useWeather(weatherData);
  const { isDay } = useAstronomy(sunRiseSet);
  const { condition } = useWeatherText(weather, isDay);
  const { isScrolling } = useIsScrolling();
  const temp = parseInt(weatherData.current.temp_f) || 75;

  return (
    <section className={styles.container}>
      <Weather weather={weather} isDay={isDay} />
      <div className={styles.bannerContent}>
        <h1 aria-label='Brandi, front-end developer, designer and domain hoarder.'>
          <span className={styles.name} aria-hidden>
            <img
              className={styles.nameSvg}
              src='/images/home/name.svg'
              alt=''
              width={900}
              height={172}
            />
            <motion.img
              variants={iDot}
              initial='initial'
              animate='animate'
              className={styles.dot}
              src='/images/home/dot.svg'
              alt=''
              width={100}
              height={22}
            />
          </span>

          <span className={styles.title} aria-hidden>
            Front-end Developer & Domain Hoarder
          </span>
          <span className={styles.weather}>
            in Nashville where it&apos;s {temp}° and {condition}
          </span>
        </h1>
        <div className={styles.brandi}>
          <img src='/images/home/brandi.png' alt='' width={242} height={371} />
          {isScrolling && (
            <img
              className={styles.surprise}
              src='/images/home/surprise.png'
              alt=''
              width={27}
              height={33}
            />
          )}
        </div>
      </div>
      {/* <ul className={styles.techIcons} aria-label="Technologies that I'm proficient in:">
        {techIcons.map((icon) => (
          <li key={icon.title} title={icon.title} aria-label={icon.title}>
            <img src={icon.src} alt='' width={35} height={35} />
          </li>
        ))}
      </ul> */}
      {/* <Bug /> */}
    </section>
  );
}

const iDot = {
  initial: {
    y: '-70vh',
  },
  animate: {
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

const techIcons = [
  {
    src: '/images/icons/html5-plain.svg',
    title: 'HTML 5',
  },
  {
    src: '/images/icons/css3-plain.svg',
    title: 'CSS 3',
  },
  {
    src: '/images/icons/javascript-plain.svg',
    title: 'Javascript',
  },
  {
    src: '/images/icons/react-plain.svg',
    title: 'React',
  },
  {
    src: '/images/icons/nextjs-plain.svg',
    title: 'Next JS',
  },
  {
    src: '/images/icons/firebase-plain.svg',
    title: 'Firebase Auth, Firestore and Storage',
  },
  {
    src: '/images/icons/gsap-plain.svg',
    title: 'GSAP/Greensock',
  },
  {
    src: '/images/icons/sass-plain.svg',
    title: 'Sass',
  },
  {
    src: '/images/icons/tailwind-plain.svg',
    title: 'Tailwind CSS',
  },
  {
    src: '/images/icons/a11y-plain.svg',
    title: 'a11y Accessibility',
  },
  {
    src: '/images/icons/shopify-plain.svg',
    title: 'Shopify',
  },
  {
    src: '/images/icons/photoshop-plain.svg',
    title: 'Adobe Photoshop',
  },
  {
    src: '/images/icons/illustrator-plain.svg',
    title: 'Adobe Illustrator',
  },
];
