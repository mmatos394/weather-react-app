import "./App.css";
import SearchForm from "./SearchForm";
import React from "react";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <WeatherInfo />
        <footer class="myName">
          This project was coded by <strong>Melissa Matos</strong> and is
          <a
            href="https://github.com/mmatos394/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
