import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [response, setResponse] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setResponse(response);
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "149310df1cftbof1b8c36c6e03299a7d";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit" class="btn btn-light btn-sm">
        Search
      </button>
    </form>
  );

  if (loaded) {
    let temperature = Math.round(response.data.temperature.current);
    let wind = Math.round(response.data.wind.speed);
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {temperature}°C </li>
          <li>Description: {response.data.condition.description} </li>
          <li>Humidity: {response.data.temperature.humidity} </li>
          <li>Wind: {wind} </li>
          <li>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt="weathericon"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
