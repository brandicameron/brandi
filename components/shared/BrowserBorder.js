import styles from '../../styles/shared/BrowserBorder.module.css';

export default function BrowserBorder() {
  return (
    <>
      <div className={styles.borderTop}></div>
      <div className={styles.borderLeft}></div>
      <div className={styles.borderRight}></div>
      <div className={styles.borderBottom}></div>
    </>
  );
}
