import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-9">
              <form>
                <input
                  class="form-control form-control-sm"
                  type="search"
                  placeholder="Enter a city..."
                />
              </form>
            </div>
            <div className="col-3">
              <button type="submit" class="btn btn-light btn-sm">
                Search
              </button>
            </div>
          </div>
        </div>
        <header className="App-header">
          <h1>{weatherData.city}</h1>
        </header>
        <img src={weatherData.icon} alt={weatherData.description} />
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <p className="temp">{Math.round(weatherData.temperature)}°C</p>
            </div>
            <div className="col-6">
              <ul className="info">
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "149310df1cftbof1b8c36c6e03299a7d";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
