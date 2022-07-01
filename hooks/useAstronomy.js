import { useState, useEffect } from 'react';

export function useAstronomy(sunData) {
  const [isDay, setIsDay] = useState(true);

  const convertTime = (timeValue) => {
    const [time, amPm] = timeValue.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (amPm === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };

  const sunrise = convertTime(sunData.sunrise);
  const sunset = convertTime(sunData.sunset);
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  useEffect(() => {
    if (currentTime > sunrise && currentTime < sunset) {
      setIsDay(false); //***** delete when done testing
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, [currentTime]);

  useEffect(() => {
    if (isDay) {
      document.body.dataset.theme = '';
    } else {
      document.body.dataset.theme = 'dark';
    }
  }, [isDay]);

  return { isDay };
}
