import styles from './../styles/shopify/Shopify.module.css';

export default function Shopify() {
  return (
    <section className={styles.container}>
      <article className={styles.message}>
        <h1>I closed this Shopify business on November 1, 2022</h1>
        <p>
          but if you REALLY want to see it, and are patient enough for Wayback Machine to load,
          you're welcome to check it out here:
        </p>

        <small>View the store:</small>
        <a
          className={styles.storeLink}
          href='https://web.archive.org/web/20220818180710/https://3dollartemplates.com/'
          target='blank'
        >
          3dollartemplates.com
        </a>
      </article>
    </section>
  );
}
