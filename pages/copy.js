import styles from '../styles/Copy.module.css';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from '../components/CodeBlock';

export default function copy() {
  return (
    <>
      <Head>
        <title>Copy🐱</title>
      </Head>
      <h1 className={styles.heading}>Copy🐱</h1>
      <section className={styles.container}>
        {copyCode.map((block) => (
          <CodeBlock key={uuidv4()} block={block} />
        ))}
      </section>
    </>
  );
}

const copyCode = [
  {
    title: 'Flex Center',
    code: `display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;`,
  },
  {
    title: 'Grid',
    code: `display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
    place-content: center;
    align-items: stretch;
    justify-items: stretch;
    gap: 2rem;`,
  },
  {
    title: 'Center Absolute XY',
    code: `position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);`,
  },
  {
    title: 'Center Absolute X',
    code: `position: absolute;
    left: 50%;
    transform: translateX(-50%);`,
  },
  {
    title: 'Media Query',
    code: `@media screen and (max-width: 600px) {

    }`,
  },
  {
    title: 'Box Shadow',
    code: `box-shadow: 5px 5px 10px -5px rgba(0 0 0 / 50%);`,
  },
  {
    title: 'Large Box Shadow',
    code: `box-shadow: 15px 20px 50px -20px rgb(34 34 34 / 70%);`,
  },
  {
    title: 'Filter Shadow',
    code: `filter: drop-shadow(5px 5px 5px rgba(0 0 0 / 30%));`,
  },
  {
    title: 'Inset Shadow',
    code: `box-shadow: inset 2px 2px 5px rgba(0 0 0 / 25%);`,
  },
  {
    title: 'Background Gradient',
    code: `background: linear-gradient(to right, #fc0e1b, #cd27fb);`,
  },
  {
    title: 'Random Unsplash',
    code: `'http://source.unsplash.com/random/150x150'`,
  },
  {
    title: 'Email Link',
    code: `<a href='mailto:{email}?subject={subject}&body={content}'>Email Us</a>`,
  },
  {
    title: 'SMS Link',
    code: `<a href='sms:{phone}?body={content}'>Send us a message</a>`,
  },
  {
    title: 'Phone Link',
    code: `<a href='tel:{phone}'>Call us</a>`,
  },
  {
    title: 'Picture Element',
    code: `<picture>
    <source media="(min-width: 715px)" srcset="" type="image/webp" />
    <source media="(min-width: 715px)" srcset="" type="image/jpeg" />
    <img src="mobile-img" alt="" />
    </picture>`,
  },
  {
    title: 'Next.js Lang',
    code: `module.exports = {
      nextConfig,
      i18n: {
      locales: ['en'],
      defaultLocale: 'en',
      },
      };`,
  },
];
