 🌦️ Weather Data API

A simple RESTful API built with Node.js and Express.js that provides real-time weather information for any city using a weather service API.

🚀 Features

- Get current weather by city
- JSON responses
- Input validation
- Error handling
- Environment variable support

 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- Axios
- dotenv

📦 Installation
bash
git clone https://github.com/AbdulSobur498/weather-data-api.git
cd weather-data-api
npm install
npm run dev


Create a `.env` file:
env
WEATHER_API_KEY=your_api_key
PORT=5000

📡 Endpoint

GET /api/weather/:city
GET /api/forecast 
GET /api/weather-history/:id
DELETE /api/weather-history/:id
GET /api/multiple-weather

 👨‍💻 Author

Sobur Bello
