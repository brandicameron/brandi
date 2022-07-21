import styles from '../styles/CodeBlock.module.css';
import { useState } from 'react';

export default function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <article className={styles.card}>
      <p>{block.title}</p>
      <pre style={{ whiteSpace: 'pre-line' }}>{block.code}</pre>
      <button
        onClick={() => copyToClipboard(block.code)}
        className={copied ? `${styles.copyBtn} ${styles.copied}` : `${styles.copyBtn}`}
      >
        <img
          src={copied ? '../images/icons/check.svg' : '../images/icons/copy.svg'}
          alt='Copy to Clipboard'
        />
      </button>
    </article>
  );
}
