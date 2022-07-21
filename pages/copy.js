import styles from '../styles/Copy.module.css';
import Head from 'next/head';

export default function copy() {
  // const copyToClipboard = () => {
  //   console.log('Clicked');
  // };
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.log(e);
    }
  };

  // const copy = (text) => {
  //   console.log('clicked');
  //   document.execCommand('copy', false, text);
  // };

  return (
    <>
      <Head>
        <title>Copy🐱</title>
      </Head>
      <h1 className={styles.heading}>Copy🐱</h1>
      <section className={styles.container}>
        <article className={styles.card}>
          <p>Flex Center</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`display: flex; 
                flex-direction: column; 
                justify-content: center; 
                align-items: center;`}
          </pre>
          <button onClick={() => copyToClipboard('Hi Brandi!')}>
            <img src='../images/icons/copy.svg' alt='Copy to Clipboard' />
          </button>
        </article>
        <article className={styles.card}>
          <p>Grid</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`display: grid;
              grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
              place-items: center;
              place-content: center;
              align-items: stretch;
              justify-items: stretch;
              gap: 2rem;
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Center Absolute XY</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`position: absolute;
              top: 50%;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Center Absolute X</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`position: absolute;
              left: 50%;
              transform: translateX(-50%);
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Media Query</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`@media screen and (max-width: 600px) {
              
            }
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Box Shadow</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`box-shadow: 5px 5px 10px -5px rgba(0 0 0 / 50%);
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Large Box Shadow</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`box-shadow: 15px 20px 50px -20px rgb(34 34 34 / 70%);
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Filter Shadow</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`filter: drop-shadow(5px 5px 5px rgba(0 0 0 / 30%));
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Inset Shadow</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`box-shadow: inset 2px 2px 5px rgba(0 0 0 / 25%);
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Background Gradient</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`background: linear-gradient(to right, #fc0e1b, #cd27fb);
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Random Unsplash</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`'http://source.unsplash.com/random/150x150'
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Email Link</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`<a href='mailto:{email}?subject={subject}&body={content}'>Email Us</a>
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>SMS Link</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`<a href='sms:{phone}?body={content}'>Send us a message</a>
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Phone Link</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`<a href='tel:{phone}'>Call us</a>
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Picture Element</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`<picture>
              <source media="(min-width: 715px)" srcset="" type="image/webp" />
              <source media="(min-width: 715px)" srcset="" type="image/jpeg" />
              <img src="mobile-img" alt="Nashville City Skyline" />
            </picture>
					`}
          </pre>
        </article>
        <article className={styles.card}>
          <p>Next.js Lang</p>
          <pre style={{ whiteSpace: 'pre-line' }}>
            {`module.exports = {
                nextConfig,
                i18n: {
                  locales: ['en'],
                  defaultLocale: 'en',
                },
            };
					`}
          </pre>
        </article>
      </section>
    </>
  );
}
