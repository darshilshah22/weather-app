import React, { useContext, useEffect, useState } from "react";
import "./airQuality.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import Wind from "../../assets/Wind.svg";
import { getAQI } from "../../Api/api_services";
import { ContextAPI } from "../../Context/Context";

const AirQuality = () => {
  const [aqi, setAqi] = useState(0);
  const [aqiStatus, setAqiStatus] = useState("");
  const { data, darkMode } = useContext(ContextAPI);

  useEffect(() => {
    const fetchAQI = async () => {
      const res = await getAQI(data.location.name);
      setAqi(res["overall_aqi"]);
      if(res["overall_aqi"] < 50){
        setAqiStatus("Good");
      }else if(res["overall_aqi"] === 50){
        setAqiStatus("Standard");
      }else {
        setAqiStatus("Hazardous");
      } 
    };

    fetchAQI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className={darkMode ? "air-quality black" : "air-quality"}>
      <div className="aq-details">
        <InfoHeader
          heading="Air Quality"
          subHeading="Main pollution: PM 2.5"
          value={data.current["wind_degree"]}
          type={data.current["wind_dir"]}
          icon={Wind}
        />
        <div className="aq-card">
          <div className="heading">
            <p>Good</p>
            <p>Hazardous</p>
          </div>
          <div className="progress" style={{ backgroundSize: `${aqi}%` }}>
            <span className="tooltiptext" style={{left: `${aqi}%`}}>{aqiStatus}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirQuality;
