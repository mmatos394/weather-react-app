import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function search() {
    const apiKey = "149310df1cftbof1b8c36c6e03299a7d";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-9">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control form-control-sm"
                  type="search"
                  placeholder="Enter a city..."
                  onChange={handleChange}
                  name="city"
                />
              </form>
              <WeatherInfo weatherData={weatherData} />
            </div>
            <div className="col-3">
              <button
                type="submit"
                className="btn btn-light btn-sm"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
