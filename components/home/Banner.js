import styles from '../../styles/home/Banner.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWeather } from '../../hooks/useWeather';
import { useAstronomy } from '../../hooks/useAstronomy';
import { useWeatherText } from '../../hooks/useWeatherText';
import { useIsScrolling } from '../../hooks/useIsScrolling';
import Weather from '../weather/Weather';

export default function Banner({ weatherData, astroData }) {
  const { weather } = useWeather(weatherData);
  const { isDay } = useAstronomy(astroData);
  const { condition } = useWeatherText(weather, isDay);
  const { isScrolling } = useIsScrolling();
  const [temp, setTemp] = useState(60);

  useEffect(() => {
    if (weatherData.current) {
      setTemp(parseInt(weatherData.current.temp_f));
    }
  }, [weatherData]);

  return (
    <section className={styles.container}>
      {/* condition prevents flash of fallback sunshine */}
      {condition && <Weather weather={weather} isDay={isDay} />}
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
          <Image src='/images/home/brandi.png' alt='' width={242} height={371} />
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
