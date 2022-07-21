import styles from '../../styles/weather/Sunny.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Sunny({ isDay }) {
  return (
    <>
      <div className={`${styles.sunMoonContainer} flex-center`}>
        {isDay && (
          <>
            <motion.svg
              variants={sun}
              initial='initial'
              animate='animate'
              className={styles.sunshine}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 245.7 238.6'
              width='100%'
              height='100%'
              aria-label='Image of a rotating sunshine.'
            >
              <motion.path
                variants={rays}
                d='M81.4,76.2c1.4,1.6,1.2,3.9-0.3,5.3l0,0c-1.5,1.4-3.9,1.2-5.3-0.3c0,0,0,0,0,0L48,49.3
                c-1.4-1.6-1.2-3.9,0.3-5.3l0,0c1.5-1.4,3.9-1.2,5.3,0.3c0,0,0,0,0,0L81.4,76.2z M127.1,59c0,2.1-1.6,3.7-3.7,3.8c0,0,0,0,0,0l0,0
                c-2.1,0-3.7-1.6-3.8-3.7c0,0,0,0,0,0l-0.3-42.3c0-2.1,1.6-3.8,3.7-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.7c0,0,0,0,0,0L127.1,59z
                M59.4,112.9c2.1,0.2,3.6,2,3.4,4l0,0c-0.2,2.1-2,3.6-4,3.4c0,0,0,0,0,0l-42-3.4c-2.1-0.2-3.6-2-3.4-4c0,0,0,0,0,0l0,0
                c0.2-2.1,2-3.6,4-3.4L59.4,112.9z M66.2,152.9c1.7-1.1,4-0.6,5.1,1.1c0,0,0,0,0,0l0,0c1.1,1.7,0.6,4.1-1.2,5.2l-35.7,22.6
                c-1.7,1.1-4,0.6-5.1-1.1c0,0,0,0,0,0l0,0c-1.1-1.7-0.6-4.1,1.2-5.2c0,0,0,0,0,0L66.2,152.9z M98.1,180.8c0.7-1.9,2.9-2.9,4.8-2.2
                c0,0,0,0,0,0l0,0c1.9,0.7,2.9,2.9,2.2,4.8L90.2,223c-0.7,1.9-2.9,2.9-4.8,2.2c0,0,0,0,0,0l0,0c-1.9-0.7-2.9-2.9-2.2-4.8c0,0,0,0,0,0
                L98.1,180.8z M178.6,160.9c-1.8-1-2.5-3.2-1.6-5c0,0,0,0,0,0l0,0c0.9-1.8,3.2-2.5,5-1.6c0,0,0,0,0,0l37.3,19.7c1.8,1,2.5,3.2,1.6,5
                c0,0,0,0,0,0l0,0c-0.9,1.8-3.2,2.5-5,1.6c0,0,0,0,0,0L178.6,160.9z M187.1,115.2c-2,0.2-3.9-1.2-4.1-3.3c0,0,0,0,0,0l0,0
                c-0.2-2,1.2-3.9,3.3-4.2c0,0,0,0,0,0l41.9-4.9c2-0.2,3.9,1.2,4.1,3.3c0,0,0,0,0,0l0,0c0.3,2.1-1.2,3.9-3.3,4.2c0,0,0,0,0,0
                L187.1,115.2z M159.7,220.6c0.7,1.9-0.3,4.1-2.3,4.8l0,0c-1.9,0.7-4.1-0.3-4.8-2.3c0,0,0,0,0,0l-14-39.9c-0.7-1.9,0.3-4.1,2.3-4.8
                l0,0c1.9-0.7,4.1,0.3,4.8,2.2c0,0,0,0,0,0L159.7,220.6z M166.6,77.2c-1.3,1.6-3.6,1.9-5.2,0.7c0,0,0,0,0,0l0,0
                c-1.6-1.3-1.9-3.6-0.6-5.2l26-33.3c1.3-1.6,3.6-1.9,5.2-0.7c0,0,0,0,0,0l0,0c1.6,1.3,1.9,3.6,0.6,5.3L166.6,77.2z'
              />
              <path
                d='M123.4,176.1c-29.8,0.1-54-24-54-53.7c-0.1-29.8,24-54,53.7-54s54,24,54,53.7c0,0.1,0,0.1,0,0.2
                C177.1,152,153.1,176.1,123.4,176.1z M123.4,77.8c-24.6-0.1-44.5,19.8-44.6,44.4s19.8,44.5,44.4,44.6c24.6,0.1,44.5-19.8,44.6-44.4
                c0,0,0-0.1,0-0.1C167.7,97.7,147.9,77.8,123.4,77.8z'
              />
            </motion.svg>
          </>
        )}
        {!isDay && (
          <div className={styles.moon}>
            <img src='/images/weather/moon.svg' alt='' />
          </div>
        )}
      </div>
      <div className={styles.cloudContainer}>
        <div className={styles.cloudFlat}>
          <Image src='/images/weather/cloud-flat.png' alt='' width={383} height={169} />
        </div>
        <div className={styles.cloudRound}>
          <Image priority src='/images/weather/cloud-round.png' alt='' width={386} height={224} />
        </div>
      </div>
    </>
  );
}

const sun = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 200,
      repeat: Infinity,
      ease: 'linear',
      originX: 0.5,
      originY: 0.5,
    },
  },
};

const rays = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.03,
    transition: {
      yoyo: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};
