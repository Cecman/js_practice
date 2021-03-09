import React from "react";
import "../Styles/WeatherData.css";

function WeatherData(props) {
  
  let kelvinTemp = props.temperature + 273.15;

  return (
    <div className="weather-box">
      <div className="temp">
        <p>
          {props.temperature} &#8451; or {kelvinTemp}K
        </p>
      </div>
    </div>
  );
}

export default WeatherData;
