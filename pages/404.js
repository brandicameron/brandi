import styles from '../styles/404.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Hey, you look lost... 😮</title>
      </Head>
      <section className={styles.container}>
        <h1>
          How&apos;d you find <em>this</em> place???
        </h1>
        <p>I didn&apos;t even know it existed. Weird.</p>
        <Link href='/'>
          <a className='btn lg'>
            <span className='btn-shadow'></span>
            <span className='btn-front'>Go Back Home</span>
          </a>
        </Link>
      </section>
    </>
  );
}
