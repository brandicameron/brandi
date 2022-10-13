import styles from '../../styles/home/CTA.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className={styles.ctaContainer}>
      <h2 aria-label='Hey, you should visit my code'>
        <span className={styles.heyText} aria-hidden></span>
        visit my code{' '}
        <Link href='/playground'>
          <a>
            Playground{' '}
            <motion.span
              className={styles.underline}
              variants={link}
              initial='initial'
              whileInView={'animate'}
            ></motion.span>{' '}
          </a>
        </Link>
        to see more fun projects!
      </h2>
    </section>
  );
}

const link = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      delay: 0.25,
    },
  },
};
