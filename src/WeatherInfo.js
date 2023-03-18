import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <header className="App-header">
        <h1>{props.weatherData.city}</h1>
      </header>
      <img src={props.weatherData.icon} alt={props.weatherData.description} />
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <p className="temp">
              {Math.round(props.weatherData.temperature)}°C
            </p>
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
