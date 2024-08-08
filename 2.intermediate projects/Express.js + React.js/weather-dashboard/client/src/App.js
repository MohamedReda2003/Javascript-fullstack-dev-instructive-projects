import React, { useState } from 'react';
import WeatherCard from './WeatherCard.js';
import $ from 'jquery';
API_KEY = "YOUR_API_KEY";
//You can get your APi key from the website: https://home.openweathermap.org/users/sign_up
const App = () => {
    const [weatherData, setWeatherData] = useState([]);

    const fetchWeather = () => {
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}`, function(data) {
            setWeatherData([data]);
        });
    };

    return (
        <div className="container">
            <h1>Weather Dashboard</h1>
            <button className="btn btn-primary" onClick={fetchWeather}>Fetch Weather</button>
            <div className="dashboard mt-4">
                {weatherData.map((weather, index) => (
                    <WeatherCard key={index} weather={weather} />
                ))}
            </div>
        </div>
    );
};

export default App;
