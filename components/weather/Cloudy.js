import styles from '../../styles/weather/Cloudy.module.css';
import Image from 'next/image';

export default function Cloudy() {
  return (
    <>
      <div className={styles.partlyCloudy}></div>
      <div className={styles.cloudSmall}>
        <Image src='/images/weather/cloud-sm.png' alt='' width={255} height={167} />
      </div>
    </>
  );
}
