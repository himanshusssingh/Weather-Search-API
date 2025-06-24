import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css"; // Assuming you have a CSS file for styling
import { useState } from 'react';

export default function Search({ updateWeatherData }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await response.json();
            if (!response.ok) {
                setError(true);
                return;
            }
            // You can handle the data as needed
            let weatherData = {
                temp: jsonResponce.main.temp,
                humidity: jsonResponce.main.humidity,
                temp_min: jsonResponce.main.temp_min,
                temp_max: jsonResponce.main.temp_max,   
                feels_like: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
                city: jsonResponce.name
            };
            console.log(weatherData);
            updateWeatherData(weatherData);
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
        // You can also add validation or other logic here
    }
    let handleSubmit = (e) => {
        try {
            e.preventDefault();
            console.log(city);
            getWeatherInfo(city);
            setCity(""); // Clear the input after submission
        }
        catch (err) {
            console.error("Error:", err);
            setError(true); // Set error state if there's an error
        }
    }

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city"  variant="outlined"   label="City Name" required value={city} onChange={handleChange}/>
                <Button variant="outlined" type='submit'>Search</Button>
                {error && <p>City not found. Please try again.</p>}
            </form>
            
        </div>

    );
}