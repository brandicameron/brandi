import styles from './../styles/shopify/Shopify.module.css';

export default function Shopify() {
  return (
    <section className={styles.container}>
      <article className={styles.message}>
        <h1>
          I closed this Shopify business on November 1<sup>st</sup>
        </h1>
        <p>but you can still view the store at the link below using this password:</p>
        <small>Click to copy</small>
        <button type='button' aria-label='Click to copy passcode.' className={styles.passcode}>
          zrgpjf
        </button>
        <small>View the store:</small>
        <a className={styles.storeLink} href='https://3dollartemplates.com/' target='blank'>
          3dollartemplates.com
        </a>
      </article>
    </section>
  );
}
