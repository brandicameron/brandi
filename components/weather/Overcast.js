import styles from '../../styles/weather/Overcast.module.css';
import Image from 'next/image';

export default function Overcast({ weather }) {
  return (
    <div className={styles.overcast}>
      <div className={`${styles.cloudContainer} ${styles.cloudsOne}`}></div>
      <div className={`${styles.cloudContainer} ${styles.cloudsTwo}`}></div>
      {weather === 'overcast' && (
        <div className={styles.cloudSmall}>
          <Image src='/images/weather/cloud-round.png' priority alt='' width={386} height={224} />
        </div>
      )}
    </div>
  );
}
