import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <header className="App-header">
        <h1>{props.weatherData.city}</h1>
      </header>
      <img
        className="weatherIcon"
        src={props.weatherData.icon}
        alt={props.weatherData.description}
      />
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <WeatherTemperature celsius={props.weatherData.temperature} />
          </div>
          <div className="col-6">
            <ul className="info">
              <li>
                <FormattedDate date={props.weatherData.date} />
              </li>
              <li className="text-capitalize">
                {props.weatherData.description}
              </li>
              <li>Humidity: {props.weatherData.humidity}%</li>
              <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
