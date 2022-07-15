import styles from '../../styles/weather/Rain.module.css';
import { useState, useEffect } from 'react';
import Overcast from './Overcast';

export default function RainSnow({ weather }) {
  const [rainDrops, setRainDrops] = useState([]);

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < getRandomNumber(50, 80); i++) {
      tempArray.push(i);
    }
    setRainDrops(tempArray);
  }, []);

  return (
    <>
      <div className={styles.rainContainer}>
        {rainDrops.map((index) => (
          <div
            key={index}
            className={styles.rainDrop}
            style={{
              left: `${getRandomNumber(-20, 100)}vw`,
              top: `${getRandomNumber(1, 40)}px`,
              width: weather === 'snow' ? '6px' : '10px',
              height: weather === 'snow' ? '6px' : '3px',
              animationDelay: `-${getRandomNumber(1, 100)}00ms`,
              backgroundColor: weather === 'snow' ? '#bcbcbc' : 'var(--primary)',
            }}
          ></div>
        ))}
      </div>
      <Overcast />
    </>
  );
}
