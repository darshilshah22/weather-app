import React, { useContext } from "react";
import "./location.css";
import { ContextAPI } from "../../Context/Context";

const Location = () => {
  const {data} = useContext(ContextAPI);
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
        <p className="loc-temp">{data.current["temp_c"]}°C</p>
      </div>
      <div className="divider" />
    </>
  );
};

export default Location;
