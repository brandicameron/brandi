import { useState, useEffect } from 'react';

export function useAstronomy(astroData) {
  const [isDay, setIsDay] = useState(true);
  // fallbacks in case api call fails
  const [sunrise, setSunrise] = useState('05:36');
  const [sunset, setSunset] = useState('19:00');

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

  useEffect(() => {
    if (astroData.astronomy) {
      setSunrise(convertTime(astroData.astronomy.astro.sunrise));
      setSunset(convertTime(astroData.astronomy.astro.sunset));
    }
  }, []);

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
