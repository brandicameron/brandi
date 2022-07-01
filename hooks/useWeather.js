import { useState, useEffect } from 'react';

export function useWeather(weatherData) {
  const [weather, setWeather] = useState('');
  const weatherCode = weatherData.current.condition.code;
  // TEST CODES
  // const weatherCode = 1000;
  // const weatherCode = 1006;
  // const weatherCode = 1009;
  // const weatherCode = 1243;
  // const weatherCode = 1273;
  // const weatherCode = 1207;
  const sunnyCodes = [1000, 1003];
  const cloudyCodes = [1006];
  const overcastCodes = [1009, 1135, 1147];
  const stormyCodes = [1087, 1273, 1276];
  const rainCodes = [
    1030, 1150, 1153, 1168, 1171, 1063, 1180, 1183, 1240, 1273, 1087, 1186, 1189, 1243, 1276, 1192,
    1195, 1246,
  ];
  const snowCodes = [
    1066, 1069, 1072, 1114, 1207, 1210, 1213, 1216, 1255, 1279, 1117, 1219, 1222, 1225, 1237, 1258,
    1282,
  ];

  useEffect(() => {
    if (sunnyCodes.includes(weatherCode)) {
      setWeather('sunny');
    } else if (cloudyCodes.includes(weatherCode)) {
      setWeather('cloudy');
    } else if (overcastCodes.includes(weatherCode)) {
      setWeather('overcast');
    } else if (stormyCodes.includes(weatherCode)) {
      setWeather('stormy');
    } else if (rainCodes.includes(weatherCode)) {
      setWeather('rain');
    } else if (snowCodes.includes(weatherCode)) {
      setWeather('snow');
    } else {
      setWeather('sunny');
    }
  }, []);

  return { weather };
}
