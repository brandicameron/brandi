import styles from '../../styles/shared/Nav.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigationLinks } from '../../data/navigationLinks';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleOpenCloseMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={menuOpen ? `${styles.header} ${styles.open}` : `${styles.header}`}>
      <a href='#skipToContent' className={styles.skipToContentLink}>
        Skip to Content
      </a>
      <nav>
        <button
          className={styles.hamburgerBtn}
          onClick={handleOpenCloseMenu}
          aria-label='Click to open navigation menu.'
        >
          <span
            className={`${styles.line} ${styles.line1}`}
            style={{
              backgroundColor:
                router.asPath === '/playground' ? 'var(--black)' : 'var(--themeTextColor)',
            }}
          ></span>
          <span
            className={`${styles.line} ${styles.line2}`}
            style={{
              backgroundColor:
                router.asPath === '/playground' ? 'var(--black)' : 'var(--themeTextColor)',
            }}
          ></span>
          <span
            className={`${styles.line} ${styles.line3}`}
            style={{
              backgroundColor:
                router.asPath === '/playground' ? 'var(--black)' : 'var(--themeTextColor)',
            }}
          ></span>
        </button>

        <ul className={menuOpen ? `${styles.navigation} ${styles.open}` : `${styles.navigation}`}>
          <li className={styles.homeBtnLi} onClick={handleCloseMenu}>
            <Link href='/'>
              <a>
                <img
                  className={styles.homeBtn}
                  src='./images/home/home.svg'
                  alt='Go back home.'
                  height='40'
                  width='40'
                  title='Home'
                />
              </a>
            </Link>
          </li>
          {navigationLinks.map((link) => (
            <li key={link.name} onClick={handleCloseMenu}>
              <Link href={link.href}>
                <a
                  style={{
                    color: router.asPath === link.href ? 'var(--primary)' : 'var(--themeTextColor)',
                  }}
                  title={link.name}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          <li onClick={handleCloseMenu}>
            <a
              className={styles.resumeLink}
              href='/brandi-cameron-resume.pdf'
              target='_blank'
              title='Resumé'
            >
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
