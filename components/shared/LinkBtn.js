import styles from '../../styles/shared/Buttons.module.css';

export default function LinkBtn({ href, title, ariaLabel, src }) {
  return (
    <a href={href} className={styles.btn} target='blank' title={title} aria-label={ariaLabel}>
      <span className={styles.btnShadow}></span>
      <span className={styles.btnFront}>
        {title} <img alt='' src={src} width={25} height={25} className={styles.icon} />
      </span>
    </a>
  );
}
