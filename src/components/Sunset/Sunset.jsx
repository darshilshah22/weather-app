import React from "react";
import "./sunset.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const Sunset = () => {
  return (
    <>
      <div className="sunset">
        <p className="title">Sunrise & Sunset</p>
        <div className="timings">
          <span className="rise">
            <img src={sun} alt="" /> 6:35 AM
          </span>
          <span className="set">
            <img src={moon} alt="" style={{ height: "24px" }} /> 6:35 PM
          </span>
        </div>
      </div>
      <div className="uv">
        <img src={sun} alt="" style={{ height: "30px" }} />
        <div className="uv-text">
          <p className="uvi">20 UVI <span>Moderate</span></p>
          <p>Moderate risk of from UV rays</p>
        </div>
      </div>
    </>
  );
};

export default Sunset;
