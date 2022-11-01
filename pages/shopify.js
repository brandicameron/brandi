import styles from './../styles/shopify/Shopify.module.css';
import { useCopytoClipboard } from '../hooks/useCopytoClipboard';

export default function Shopify() {
  const { copied, copyToClipboard } = useCopytoClipboard();
  const passcode = 'zrgpjf';

  return (
    <section className={styles.container}>
      <article className={styles.message}>
        <h1>I closed this Shopify business on November 1</h1>
        <p>but you can still view the store at the link below using this password:</p>
        <small>Click to copy passcode.</small>
        <button
          type='button'
          aria-label='Click to copy passcode.'
          className={copied ? `${styles.passcode} ${styles.copied}` : `${styles.passcode}`}
          onClick={() => copyToClipboard(passcode)}
        >
          {copied && (
            <img
              className={styles.checkmark}
              src='../images/icons/check.svg'
              alt='Copied to clipboard.'
            />
          )}
          {!copied && <span>{passcode}</span>}
        </button>
        <small>View the store:</small>
        <a className={styles.storeLink} href='https://3dollartemplates.com/' target='blank'>
          3dollartemplates.com
        </a>
      </article>
    </section>
  );
}
