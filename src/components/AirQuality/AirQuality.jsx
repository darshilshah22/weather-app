import React from "react";
import "./airQuality.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import Wind from "../../assets/Wind.svg";

const AirQuality = () => {
  return (
    <section className="air-quality">
      <div className="aq-details">
        <InfoHeader
          heading="Air Quality"
          subHeading="Main pollution: PM 2.5"
          value="390"
          type="West Wind"
          icon={Wind}
        />
        <div className="aq-card">
          <div className="heading">
            <p>Good</p>
            <p>Hazardous</p>
          </div>
          <div className="progress" style={{ backgroundSize: "50%" }}></div>
        </div>
      </div>
    </section>
  );
};

export default AirQuality;
