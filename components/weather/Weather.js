import styles from '../../styles/weather/Weather.module.css';
import RainSnow from './RainSnow';
import Sunny from './Sunny';
import Cloudy from './Cloudy';
import Overcast from './Overcast';
import Stormy from './Stormy';

export default function Weather({ weather, isDay }) {
  return (
    <div className={styles.weather}>
      {weather === 'sunny' && <Sunny isDay={isDay} />}
      {weather === 'cloudy' && <Cloudy />}
      {weather === 'overcast' && <Overcast weather={weather} />}
      {weather === 'rain' && <RainSnow />}
      {weather === 'stormy' && <Stormy />}
      {weather === 'snow' && <RainSnow weather={weather} />}
    </div>
  );
}
