import styles from '../../styles/shared/Footer.module.css';
import Link from 'next/link';
import StripeBorder from '../shared/StripeBorder';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <StripeBorder />
      <section className={styles.footer}>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  <img src='./images/home/home.svg' alt='' height='40' width='40' />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <a href='mailto:hello@brandicameron.com?subject=Hi%20Brandi!'>
                <img src='./images/icons/email-icon.svg' alt='' height='40' width='40' />
                Email
              </a>
            </li>
            <li>
              <a href='www.brandicameron.com'>
                <img src='./images/icons/resume-icon.svg' alt='' height='40' width='40' />
                Resumé
              </a>
            </li>
            <li>
              <a href='https://github.com/brandicameron'>
                <img src='/images/icons/github-icon.svg' alt='' height='40' width='40' />
                Github
              </a>
            </li>
          </ul>
        </nav>
        <small>© {currentYear} Brandi Cameron</small>
      </section>
    </>
  );
}
