import styles from '../../styles/shared/Footer.module.css';
import StripeBorder from '../shared/StripeBorder';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <StripeBorder />
      <section className={styles.footer}>
        <small>© {currentYear} Brandi Cameron</small>
      </section>
    </>
  );
}
