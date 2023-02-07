import styles from '../../styles/shared/Footer.module.css';
import Link from 'next/link';
import { footerLinks } from '../../data/footerLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <address>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  <img src='./images/home/home.svg' alt='' height='40' width='40' />
                  Home
                </a>
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} target='blank'>
                  <img src={link.src} alt='' height='40' width='40' />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </address>
        <a
          className={styles.inlineLink}
          href='https://github.com/brandicameron/brandi'
          target='_blank'
          rel='noreferrer'
        >
          View the Github Repo for this Site
        </a>
        <small>© {currentYear} Brandi Cameron</small>
      </footer>
    </>
  );
}
