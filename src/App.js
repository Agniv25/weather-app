import logo from "./logo.svg";
import react, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4d94208e4fd2b3f912e6abfbe75da7dd`;
  const searchLocation = (e) => {
    if (e.key == "Enter") {
      console.log("whatsup" + location);

      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch(() => {
          alert("Place not Found");
        });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => searchLocation(e)}
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data ? data.name : null}</p>
          </div>
          <div className="temp">
            <h1>{data ? data.main.temp + "°F" : null}</h1>
          </div>
          <div className="description">
            <p>{data ? data.weather[0].main : null}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data ? (
              <>
                <p>{data.main.feels_like} °F</p>
                <p>Feels Like</p>
              </>
            ) : null}
          </div>
          <div className="humidity">
            {data ? (
              <>
                <p>{data.main.humidity}</p>
                <p>Humidity</p>
              </>
            ) : null}
          </div>
          <div className="wind">
            {data ? (
              <>
                <p>{data.wind.speed} MPH</p>
                <p>Winds</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
