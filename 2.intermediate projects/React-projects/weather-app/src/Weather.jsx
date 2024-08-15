import React, { useState } from 'react';
import axios from 'axios';

//You can get your API key by creating an account in: https://home.openweathermap.org/api_keys 
const API_KEY = "YOUR_API_KEY";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setWeather(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (response.data.cod === 200) {
        setWeather(response.data);
      } else {
        setError('City not found.');
      }
    } catch (err) {
      setError('API request failed. Please try again later.');
    }
  };

  const getBackgroundStyle = () => {
    if (!weather) {
      return {
        backgroundColor: '#f0f8ff', // default light background
      };
    }

    const temperature = weather.main.temp;
    let startColor, endColor;

    if (temperature > 27) {
      const intensity = Math.min((temperature - 27) * 10, 255);
      startColor = `rgba(255, ${200 - intensity}, 0, 1)`;
      endColor = `rgba(255, ${100 - intensity / 2}, 0, 1)`;
    } else if (temperature < 18) {
      const intensity = Math.min((18 - temperature) * 10, 255);
      startColor = `rgba(0, ${100 + intensity}, 255, 1)`;
      endColor = `rgba(0, ${200 + intensity / 2}, 255, 1)`;
    } else {
      startColor = '#f0f8ff'; // neutral color
      endColor = '#f0f8ff';
    }

    return {
      background: `linear-gradient(120deg, ${startColor}, ${endColor})`,
      animation: 'gradientAnimation 5s ease infinite',
    };
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    margin: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const weatherContainerStyle = {
    marginTop: '20px',
    textAlign: 'center'
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px'
  };

  return (
    <div style={{...getBackgroundStyle(), height: '100vh', color: '#333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif'}}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>Get Weather</button>
      {weather && (
        <div style={weatherContainerStyle}>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default Weather;
