import React from "react";
import WeatherData from "./WeatherData";
import "../Styles/App.css";

function DayCard(props) {
  //generate the current week starting Monday
  function dates(currentDate) {
    let week = [];
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);
    for (let i = 0; i < 7; i++) {
      week.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return week;
  }

  let currentWeek = dates(new Date());

  let avgTemp = (props.min + props.max) / 2;

  return (
    <div className="normal">
      <WeatherData temperature={Math.round(avgTemp)} />
    </div>
  );
}

export default DayCard;
