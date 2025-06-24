import Search from './Search'
import Info from './Info'
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherData, setWeatherData] = useState({
        feels_like: 35.92,
        humidity: 61,
        temp: 31.37,
        temp_max: 31.37,
        temp_min: 31.37,
        weather: "overcast clouds",
        city: "Gorakhpur"
    });

    function updateWeatherData(newData) {
        setWeatherData(newData);
    }

    return (
        <div className="weather-app">
            <h2>Weather Report Search</h2>
            <Search updateWeatherData={updateWeatherData} />
            <Info info={weatherData} />
        </div>
    );
}