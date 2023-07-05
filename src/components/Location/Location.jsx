import React from "react";
import { BsChevronDown } from "react-icons/bs";
import "./location.css";

const Location = () => {
  return (
    <>
      <div className="location">
        <div className="place-name">
          <p>Sun</p>
          <span className="loc-name">
            Banten, Indonesia
            <BsChevronDown color="var(--btn-color)" />
          </span>
        </div>
        <p className="loc-temp">22°C</p>
      </div>
      <div className="divider" />
    </>
  );
};

export default Location;
