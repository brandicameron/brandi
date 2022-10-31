import styles from './../styles/shopify/Shopify.module.css';

export default function Shopify() {
  return (
    <section className={styles.container}>
      <article className={styles.message}>
        <h1>Store closed November 1, 2022</h1>
        <p>
          You can still view the shopify store using code <strong>XXXX</strong> at the link below:
        </p>
        <a href='https://3dollartemplates.com/' target='blank'>
          https://3dollartemplates.com
        </a>
      </article>
    </section>
  );
}
