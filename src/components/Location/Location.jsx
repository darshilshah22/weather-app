import React, { useContext } from "react";
import "./location.css";
import { ContextAPI } from "../../Context/Context";

const Location = () => {
  const {data, unit} = useContext(ContextAPI);
  const day = new Date().toLocaleDateString('en-us', {weekday:'long'});

  return (
    <>
      <div className="location">
        <div className="place-name">
          <p>{day}</p>
          <span className="loc-name">
            {`${data.location.name}, ${data.location.region}`}
          </span>
        </div>
        <p className="loc-temp">{(unit === "C" ? data.current["temp_c"] : data.current["temp_f"]) + `°${unit}`}</p>
      </div>
      <div className="divider" />
    </>
  );
};

export default Location;
