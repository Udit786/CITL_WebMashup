import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherComponent from './WeatherComponent';
import NewsComponent from './NewsComponent';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  const handleSearch = async () => {
  
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88d3cafedb8ef38a5234cfea4b8726bb`
    );
    const weatherJson = await weatherResponse.json();
    setWeatherData(weatherJson);

    const newsResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${location}&apiKey=147aa95289054a2c9a30b0b0e73709b7`
    );
    const newsJson = await newsResponse.json();
    setNewsData(newsJson.articles);
  };

  return (
    <div>
      <h1>CITL WebMashUp</h1>
      <SearchBar location={location} setLocation={setLocation} onSearch={handleSearch} />
      {weatherData && <WeatherComponent weatherData={weatherData} />}
      {newsData && <NewsComponent newsData={newsData} />}
    </div>
  );
};

export default App;
