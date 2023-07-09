import React, { useContext, useEffect, useState } from "react";
import "./sunset.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { getSunriseSunset } from "../../Api/api_services";
import { ContextAPI } from "../../Context/Context";

const Sunset = () => {
  const [astro, setAstro] = useState([]);
  const { darkMode, search } = useContext(ContextAPI);
  const { data } = useContext(ContextAPI);

  useEffect(() => {
    const fetchAQI = async () => {
      if (search) {
        const res = await getSunriseSunset(search);
        setAstro(res.astronomy.astro);
      } else {
        const res = await getSunriseSunset(data.location.name);
        setAstro(res.astronomy.astro);
      }
    };

    fetchAQI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
