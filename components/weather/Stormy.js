import styles from '../../styles/weather/Stormy.module.css';
import Image from 'next/image';
import RainSnow from './RainSnow';
import Lightning from './Lightning';

export default function Stormy() {
  return (
    <div>
      <div className={`${styles.lightningBolt} ${styles.lightningLeft}`}>
        <Image src='/images/weather/lightning.svg' alt='' width={64} height={82} />
      </div>
      <div className={`${styles.lightningBolt} ${styles.lightningRight}`}>
        <Image src='/images/weather/lightning.svg' alt='' width={64} height={82} />
      </div>
      <RainSnow />
      <Lightning />
    </div>
  );
}
