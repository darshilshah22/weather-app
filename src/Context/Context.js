import React, { createContext, useEffect, useState } from "react";
import { getForecast, getRealtimeWeather } from "../Api/api_services";

export const ContextAPI = createContext();

const Context = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [cord, setCord] = useState({lat: "", long: ""});
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        const loc = {lat: position.coords.latitude, long: position.coords.longitude};
        setCord(() => loc);
      });

      if (search) {
        const result = await getRealtimeWeather({city: search});
        console.log(result);
        setData(result);
      }else if (cord.lat && cord.long) {
        console.log(cord);
        const result = await getRealtimeWeather({lat: cord.lat, long: cord.long});
        setData(result);
        const forecastData = await getForecast(cord.lat, cord.long, 3);
        setForecast(forecastData.forecast.forecastday);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cord.lat, cord.long, search]);

  return (
    <ContextAPI.Provider value={{ darkMode, setDarkMode, data, search, setSearch, forecast }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default Context;
