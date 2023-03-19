import React from "react";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "149310df1cftbof1b8c36c6e03299a7d";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  let city = props.city;

  Axios.get(apiURL).then(handleResponse);
  return (
    <div className="row">
      <div className="col">
        <div className="forecast-day">Mon</div>
        <div className="forecast-icon">icon</div>{" "}
        <div className="forecast-temperatures">
          <span className="forecast-max-temp">21</span>{" "}
          <span className="forecast-min-temp">19</span>
        </div>
      </div>
    </div>
  );
}
