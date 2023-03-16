import "./App.css";
import SearchForm from "./SearchForm";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchForm />
      </header>
      <footer>
        This project was coded by <strong>Melissa Matos</strong> and is
        <a href="https://github.com/mmatos394/Weather-App">
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}

export default App;
