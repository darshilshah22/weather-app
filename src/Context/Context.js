import React, { createContext, useEffect, useState } from "react";
import { getRealtimeWeather } from "../Api/api_services";

export const ContextAPI = createContext();

const Context = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [cord, setCord] = useState({lat: "", long: ""});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        const loc = {lat: position.coords.latitude, long: position.coords.longitude};
        setCord(() => loc);
      });

      if (cord.lat && cord.long) {
        console.log(cord);
        const result = await getRealtimeWeather(cord.lat, cord.long);
        console.log(result);
        setData(result);
      }
    };

    fetchData();
  }, [cord.lat, cord.long]);

  return (
    <ContextAPI.Provider value={{ darkMode, setDarkMode, data }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default Context;
