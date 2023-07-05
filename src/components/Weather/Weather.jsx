import React from "react";
import "./weather.css";
import clouds from "../../assets/clouds.png";
import clouds1 from "../../assets/clouds1.png";
import DetailsCard from "../DetailsCard/DetailsCard";
import InfoHeader from "../InfoHeader/InfoHeader";
import cloudsun from "../../assets/cloudsun.png";

const Weather = () => {
  return (
    <section className="weather">
      <img src={clouds} alt="" />
      <img src={clouds1} alt="" className="cloud" />

      <div className="weather-details">
        <InfoHeader
          heading="Weather"
          subHeading="What's the weather."
          value="20°C"
          type="Partly Cloudy"
          icon={cloudsun}
        />

        <div className="wd-cards">
          <DetailsCard color="var(--text-color)" title="Pressure" value="800mb" />
          <DetailsCard color="#CCE16A" title="Visibility" value="4.3km" />
          <DetailsCard color="#FFF" title="Humidity" value="8.7%" />
        </div>
      </div>
    </section>
  );
};

export default Weather;
