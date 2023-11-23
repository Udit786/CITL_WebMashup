import React from 'react';

const WeatherComponent = ({ weatherData }) => {
    return (
        <div>
            <h2>Weather Information</h2>
            <p>Temperature: {weatherData.main.temp} K</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherComponent;
