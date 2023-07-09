import React, { useContext } from "react";
import "./weatherPrediction.css";
import smallClouds from "../../assets/small_clouds.svg";
import { BsCalendarDate } from "react-icons/bs";
import { ContextAPI } from "../../Context/Context";

const WeatherPrediction = () => {
  const { darkMode, forecast } = useContext(ContextAPI);

  return (
    <div className="weather-prediction">
      <p className="title">Weather Predictions</p>
      {forecast.map((e) => (
        <div
          className={darkMode ? "wp-card dark" : "wp-card"}
          key={e.date}
        >
          <img src={smallClouds} alt="" />
          <div className="card-info">
            <p>{new Date(e.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</p>
            <p className="weather-type">
              {e.day.condition.text} <span>{e.day["maxtemp_c"]}°/ {e.day["mintemp_c"]}°</span>
            </p>
          </div>
        </div>
      ))}
      <div className="next-btn">
        <BsCalendarDate size={20} />
        <p>Next 3 Days</p>
      </div>
    </div>
  );
};

export default WeatherPrediction;
