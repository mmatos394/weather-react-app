import React, { useState } from "react";
import axios from "axios";

export default function WeatherInfo() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature);
    setReady(true);
  }

  if (ready) {
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
          <h1>Lisbon</h1>
        </header>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
          alt="WeatherIcon"
        />
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <p className="temp">{temperature}</p>
            </div>
            <div className="col-6">
              <ul className="info">
                <li>Date</li>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "149310df1cftbof1b8c36c6e03299a7d";
    let city = "Lisbon";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
}
