import React, { useContext } from "react";
import "./sunset.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { ContextAPI } from "../../Context/Context";

const Sunset = () => {
  const { darkMode, astro } = useContext(ContextAPI);

  return (
    <>
      <div className={darkMode ? "sunset dark" : "sunset"}>
        <p className="title">Sunrise & Sunset</p>
        <div className="timings">
          <span className="rise">
            <img src={sun} alt="" /> {astro.sunrise}
          </span>
          <span className="set">
            <img src={moon} alt="" style={{ height: "24px" }} /> {astro.sunset}
          </span>
        </div>
      </div>
      <div className="uv">
        <img src={sun} alt="" style={{ height: "30px" }} />
        <div className="uv-text">
          <p className="uvi">
            20 UVI <span>Moderate</span>
          </p>
          <p>Moderate risk of from UV rays</p>
        </div>
      </div>
    </>
  );
};

export default Sunset;
