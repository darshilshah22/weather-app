import React from "react";
import "./infoHeader.css";

const InfoHeader = ({heading, subHeading, value, type, icon}) => {
  return (
    <div className="info-header">
      <div className="wd-header">
        <img src={icon} alt="" />

        <div className="wd-heading">
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      <div className="wd-mid">
        <p>{value}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default InfoHeader;
