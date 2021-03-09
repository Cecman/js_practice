import React from "react";
import "../Styles/WeatherData.css"

function Widget(props) {
  let currentWindSpeed = props.windSpeed * 3.6;
  let currentWindDirection = props.windDirection;
  let windBlowing;

  if (currentWindDirection >= 0 || currentWindDirection <= 90) {
    windBlowing = "North";
  } else if (currentWindDirection > 90 || currentWindDirection < 180) {
    windBlowing = "East";
  } else if (currentWindDirection >= 180 || currentWindDirection <= 270) {
    windBlowing = "South";
  } else {
    windBlowing = "West";
  }

  return (
    <div className="weather-box">
      <div className="weather">
        <p>Current Wind Speed is {Math.round(currentWindSpeed)} km/h</p>
        <p>The wind is blowing from the {windBlowing} direction</p>
        <p>Current Weather: {props.weather}</p>
      </div>
    </div>
  );
}

export default Widget;
