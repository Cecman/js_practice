import React, { useState, useEffect } from "react";
import WeatherData from "./WeatherData";
import Widget from "./Widget";
import DayCard from "./DayCard";
import dateBuilder from "../dateBuilder";
import weatherApi from "../weather";
import "../Styles/App.css";

// console.log(weatherApi);

const url = "https://api.openweathermap.org/data/2.5/onecall?";
const api = "96163d593198b0ef807f2630c6d39143";

function App() {
  //state used with the API call, cant use the API anymore today, reached my limit, sorry
  //   const [responsePosts, setResponsePosts] = useState({});
  const [isExpanded, setExpanded] = useState(false);
  const [days, setDays] = useState([]);
  const weatherApiData = weatherApi;

  useEffect(() => {
    setDays((prevValue) => {
      return [...prevValue, ...weatherApiData.daily];
    });
  }, [setDays, weatherApiData]);

  function handleExpand() {
    setExpanded(!isExpanded);
  }

  return (
    <div
      className={
        typeof weatherApiData.current != "undefined"
          ? weatherApiData.current.temp > 17
            ? "app warm"
            : "app"
          : "app"
      }>
      <main>
        <div
          onClick={handleExpand}
          className={!isExpanded ? "normal" : "expanded"}>
          <div className="date">
            <h2>{dateBuilder(new Date())}</h2>
          </div>
          <WeatherData temperature={Math.round(weatherApiData.current.temp)} />
          {isExpanded && (
            <Widget
              windSpeed={weatherApiData.current.wind_speed}
              windDirection={weatherApiData.current.wind_deg}
              weather={weatherApiData.current.weather[0].main}
            />
          )}
        </div>
      </main>
    </div>
  );
}
// Reached the maximum API calls per day (forgot to copy over the data, just copied one dummy data)
//this was the code used in place of the current useEffect() hook.
//Free API calls only return data based on latitude and longitude so not ideal. Did not have time to reverse the coordinates to actual city

//   useEffect(() => {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=metric&appid=96163d593198b0ef807f2630c6d39143"
//     )
//       .then((response) => response.json())
//       .then((responseData) => {
//         setResponsePosts(responseData);
//       });
//   }, [setResponsePosts]);

//   console.log(responsePosts);

//   const { current: currentWeatherData } = responsePosts;
//   const { daily: dailyData } = responsePosts;
//   console.log(responseDataPost.responseData.current.wind_deg); //test data

export default App;
