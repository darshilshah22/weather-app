import React, { useContext } from "react";
import "./weatherPrediction.css";
import { ContextAPI } from "../../Context/Context";

const WeatherPrediction = () => {
  const { darkMode, forecast, unit } = useContext(ContextAPI);

  return (
    <div className="weather-prediction">
      <p className="title">Weather Predictions</p>
      {forecast.map((e) => (
        <div className={darkMode ? "wp-card dark" : "wp-card"} key={e.date}>
          <img src={e.day.condition.icon} alt="" />
          <div className="card-info">
            <p>
              {new Date(e.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="weather-type">
              {e.day.condition.text}{" "}
              <span>
                {unit === "C"
                  ? `${e.day["maxtemp_c"]}°/${e.day["mintemp_c"]}°`
                  : `${e.day["maxtemp_f"]}°/${e.day["mintemp_f"]}°`}
              </span>
            </p>
          </div>
        </div>
      ))}
      {/* <div className="next-btn">
        <BsCalendarDate size={20} />
        <p>Next 3 Days</p>
      </div> */}
    </div>
  );
};

export default WeatherPrediction;
