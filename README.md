﻿# Weather App (JavaScript & TypeScript Versions)

This is a simple, interactive weather application built in two versions — first in Vanilla JavaScript(https://niloy-is-testing.github.io/), then converted to TypeScript for improved type safety and maintainability. It uses the OpenWeatherMap API to fetch real-time weather data and Leaflet.js for map functionality. The typescript project is live at : abir-ashab.github.io/Weather-App/

## Features

* Interactive map: Click on any location on the map to fetch weather details using latitude and longitude.
* Search by city: Enter a city name to retrieve and display its current weather.
* Saves the last searched city using local storage
* Weather details: Displays temperature, weather condition, and other basic information.
* Type safety (in TS version): Interfaces and types are used for API data, lat/long, and city input to prevent runtime errors.

## Project Structure

```
weather-app/
├── weather app js              # Javascript project is there for better understanding the changes
├── config/                     # TypeScript-specific config (e.g., typed API configs)
├── dist/                       # Compiled JavaScript output from TypeScript
├── node_modules/
├── public/                     # Static assets (if any)
|   |── search.html
├── src/                        # Source code
|   ├── app.ts                  # Main application controller
│   ├── components/             # JavaScript modules
│   │   ├── api                 # API interactions
|   |   |    |── city.ts
|   |   |    └── map.ts          
│   │   ├── ui/ui.ts            # UI interactions
│   │   └── storage/storage.ts  # Local storage operations
|── index.html                  # Main HTML file
|── index.css                   # Main styles
└── README.md                   # Project documentation
├── package.json
├── package-lock.json
└── tsconfig.json

└── README.md
```

## How to Run

### Prerequisites

* Node.js and npm installed
* An OpenWeatherMap API key. This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

### Run JavaScript Version

```
cd "weather app js"
npx live-server
```

Or open `index.html` in a browser directly.

### Run TypeScript Version

```
npm install
npx live-server dist
```

Or open `index.html` in a browser directly.

## Tech Stack

* Frontend: HTML, CSS, Vanilla JavaScript, TypeScript
* Map: Leaflet.js
* Weather API: OpenWeatherMap

## Key TypeScript Enhancements

* Defined `City`, `Coordinates`, and `WeatherResponse` interfaces for strict typing
* Added types for DOM elements and fetch response structure
* Used type annotations for all input and output values

## Screenshots

<p align="center">
  <img src="image-2.png" alt="Screenshot 1" width="600" height="400">
</p>
<p align="center">
  <img src="image-3.png" alt="Screenshot 1" width="700" height="400">
</p>


## Browser Compatibility

This application works in all modern browsers that support ES6+ features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Abir Ashab Niloy
GitHub: https://github.com/Abir-Ashab/Weather-App

## License

MIT
