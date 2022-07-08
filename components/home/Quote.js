import styles from '../../styles/home/Quote.module.css';
import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className={`${styles.container} flex flex-center`}>
      <blockquote className={styles.quote}>
        The dopamine
        <motion.img
          variants={rush}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true }}
          aria-label='rush'
          className={styles.rush}
          src='/images/home/rush.svg'
          alt=''
          width='640'
          height='170'
        />
        from a job well done is
        <img
          aria-label='free'
          className={styles.free}
          src='/images/home/free.svg'
          alt=''
          width='640'
          height='170'
        />
      </blockquote>
    </section>
  );
}

const rush = {
  initial: {
    skewX: 75,
    x: '-50vw',
  },
  animate: {
    skewX: 0,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.75,
      bounce: 2,
    },
  },
};

// const free = {
//   initial: {
//     scale: 0,
//   },
//   animate: {
//     scale: 1,
//     transition: {
//       duration: 0.25,
//       delay: 0.2,
//     },
//   },
// };
