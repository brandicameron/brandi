import Rain from './Rain';
import Sunny from './Sunny';
import Cloudy from './Cloudy';
import Overcast from './Overcast';
import Stormy from './Stormy';

export default function Weather({ weather, isDay }) {
  return (
    <>
      {weather === 'sunny' && <Sunny isDay={isDay} />}
      {weather === 'cloudy' && <Cloudy />}
      {weather === 'overcast' && <Overcast weather={weather} />}
      {weather === 'rain' && <Rain />}
      {weather === 'stormy' && <Stormy />}
      {weather === 'snow' && <Rain weather={weather} />}
    </>
  );
}
