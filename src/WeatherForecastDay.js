import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function iconPic() {
    return props.data.condition.icon_url;
  }

  function iconDes() {
    return props.data.condition.icon;
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        {" "}
        <img className="weatherForecastIcon" src={iconPic()} alt={iconDes()} />
      </div>{" "}
      <div className="forecast-temperatures">
        <span className="forecast-max-temp">{maxTemperature()}</span>{" "}
        <span className="forecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
