import styles from '../../styles/shared/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  return (
    <>
      <a href='#skip-target' className={styles.skipToContentLink}>
        Skip to Content
      </a>
      <header className={styles.header}>
        <nav>
          <Link href='/'>
            <a>
              <img className={styles.homeBtn} src='./images/home/home.svg' alt='Go back home.' />
            </a>
          </Link>

          <ul className={styles.navList}>
            {nav.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <a
                    style={{
                      color:
                        router.asPath === link.href ? 'var(--primary)' : 'var(--themeTextColor)',
                    }}
                    title={link.name}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

const nav = [
  {
    name: 'Work',
    href: '/#projects',
  },
  {
    name: 'Play',
    href: '/playground',
  },
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Resume',
    href: '/#contact',
  },
  // {
  //   name: 'Contact',
  //   href: '/#contact',
  // },
];
