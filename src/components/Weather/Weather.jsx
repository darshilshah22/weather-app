import React, { useContext } from "react";
import "./weather.css";
import clouds from "../../assets/clouds.png";
import clouds2 from "../../assets/clouds2.png";
import DetailsCard from "../DetailsCard/DetailsCard";
import InfoHeader from "../InfoHeader/InfoHeader";
import cloudsun from "../../assets/cloudsun.png";
import { ContextAPI } from "../../Context/Context";

const Weather = () => {
  const {data, darkMode} = useContext(ContextAPI);

  return (
    <section className={darkMode ? "weather black" : "weather"}>
      <img src={clouds} alt="" />
      <img src={clouds2} alt="" className="cloud" />

      <div className="weather-details">
        <InfoHeader
          heading="Weather"
          subHeading="What's the weather."
          value={data.current["temp_c"] + "°C"}
          type={data.current.condition.text}
          icon={cloudsun}
        />

        <div className="wd-cards">
          <DetailsCard color="var(--text-color)" title="Pressure" value={data.current['pressure_mb'] + "mb"} />
          <DetailsCard color="#CCE16A" title="Visibility" value={`${data.current['vis_km']}km`} />
          <DetailsCard color="#FFF" title="Humidity" value={`${data.current['humidity']}%`} />
        </div>
      </div>
    </section>
  );
};

export default Weather;
