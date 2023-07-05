import React from "react";
import "./weatherPrediction.css";
import smallClouds from "../../assets/small_clouds.svg";
import { BsCalendarDate } from "react-icons/bs";

const WeatherPrediction = () => {
  return (
    <div className="weather-prediction">
      <p className="title">Weather Predictions</p>
      {["1", "2"].map((e) => (
        <div className="wp-card" key={e}>
          <img src={smallClouds} alt="" />
          <div className="card-info">
            <p>July 06</p>
            <p className="weather-type">
              Cloudy <span>29°/ 19°</span>
            </p>
          </div>
        </div>
      ))}
      <div className="next-btn">
        <BsCalendarDate size={20} />
        <p>Next 5 Days</p>
      </div>
    </div>
  );
};

export default WeatherPrediction;
