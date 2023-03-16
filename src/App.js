import "./App.css";

import React from "react";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <WeatherInfo />
        <footer className="myName">
          This project was coded by <strong>Melissa Matos</strong> and is
          open-sourced on{" "}
          <a
            href="https://github.com/mmatos394/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
