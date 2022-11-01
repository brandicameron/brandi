import styles from './../styles/copy/Copy.module.css';
import Head from 'next/head';
import CodeBlock from '../components/copy/CodeBlock';
import { copyCode } from '../data/copyCode';

import { v4 as uuidv4 } from 'uuid';

export default function Copy() {
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
