import styles from '../../styles/home/CTA.module.css';
import Link from 'next/link';
import StripeBorder from '../shared/StripeBorder';

export default function CTA() {
  return (
    <section className={styles.ctaContainer}>
      <StripeBorder />
      <h2 aria-label='Hey, you should visit my code'>
        <span className={styles.heyText} aria-hidden></span>
        Visit my code{' '}
        <Link href='/playground'>
          <a>Playground </a>
        </Link>
        to see more fun projects!
      </h2>
    </section>
  );
}
