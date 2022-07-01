import { useState, useEffect } from 'react';

export function useWeatherText(weather, isDay) {
  const [condition, setCondition] = useState('');

  useEffect(() => {
    if (weather === 'sunny') {
      if (isDay) {
        setCondition('a beautiful sunny day.');
      } else {
        setCondition('a beautiful clear night.');
      }
    } else if (weather === 'cloudy') {
      if (isDay) {
        setCondition('partly cloudy today.');
      } else {
        setCondition('partly cloudy tonight.');
      }
    } else if (weather === 'overcast') {
      setCondition('overcast, nice coding weather.');
    } else if (weather === 'rain') {
      setCondition('rainy, the best coding weather.');
    } else if (weather === 'stormy') {
      setCondition('stormy, better push my code again...');
    } else if (weather === 'snow') {
      setCondition("OMG it's SNOWING!");
    }
  }, [weather, isDay]);

  return { condition };
}
