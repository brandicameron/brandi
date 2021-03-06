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
            {footerLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} target='blank'>
                  <img src={link.src} alt='' height='40' width='40' />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <small>© {currentYear} Brandi Cameron</small>
      </section>
    </>
  );
}

const footerLinks = [
  {
    href: 'mailto:hello@brandicameron.com?subject=Hi%20Brandi!',
    src: './images/icons/email-icon.svg',
    title: 'Email',
  },
  {
    href: '/brandi-cameron-resume.pdf',
    src: './images/icons/resume-icon.svg',
    title: 'Resumé',
  },
  {
    href: 'https://github.com/brandicameron',
    src: '/images/icons/github-icon.svg',
    title: 'Github',
  },
];
