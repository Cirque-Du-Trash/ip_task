import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = 'c4ce1341caa98fc26689d52fe7f8778d';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) return <div>날씨 정보를 불러오는 중...</div>;

  return (
    <div>
      <h2>서울 날씨</h2>
      <p>온도: {weather.main.temp}°C</p>
      <p>날씨: {weather.weather[0].description}</p>
    </div>
  );
}

export default Weather;