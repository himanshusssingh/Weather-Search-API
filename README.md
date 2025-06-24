# 🌤️ Weather App

A simple and responsive weather app built using **React + Vite** that allows users to search for current weather information using the **OpenWeatherMap API**.

## 🔍 Features

- Search weather by city name
- Displays temperature, humidity, min/max temps, weather condition, and "feels like" temperature
- Error handling for invalid city names
- Clean and user-friendly UI using Material UI

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Material UI](https://mui.com/)

## 📦 Installation

### Clone the repository
- git clone https://github.com/your-username/weather-app.git
- cd weather-app
   
### Install dependencies
- npm install
   
### Set up environment variables
- Create a .env file in the root directory and add your API key like this:
  - VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
  - VITE_API_KEY=your_api_key_here
  - Start the development server
  - npm run dev
  - Open in browser: http://localhost:5173


##🔐 Security
- Make sure .env is listed in .gitignore to prevent pushing sensitive API keys to GitHub.

##🙌 Acknowledgments
- OpenWeatherMap for the free weather API.
- MUI for the beautiful components.

📝 License
- This project is open source and available under the MIT License.
