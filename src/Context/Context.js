import React, { createContext, useEffect, useState } from "react";
import { getForecast, getRealtimeWeather, getSunriseSunset } from "../Api/api_services";

export const ContextAPI = createContext();

const Context = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [cord, setCord] = useState({ lat: "", long: "" });
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("C");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [astro, setAstro] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(function (position) {
        const loc = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        setCord(() => loc);
      });

      if (search) {
        setError("");
        const result = await getRealtimeWeather({ city: search });
        if (result.status === 200) {
          const data = await result.json();
          setData(data);
          const forecastData = await getForecast(search, 6);
          setForecast(forecastData.forecast.forecastday);
          const res = await getSunriseSunset(search);
          setAstro(res.astronomy.astro);
          setLoading(false);
        } else {
          const data = await result.json();
          setError(data.error.message);
          setLoading(false);
        }
      } else if (cord.lat && cord.long) {
        console.log(cord);
        const result = await getRealtimeWeather({
          lat: cord.lat,
          long: cord.long,
        });
        if (result.status === 200) {
          const data = await result.json();
          setData(data);
          const forecastData = await getForecast(
            `${cord.lat}, ${cord.long}`,
            6
          );
          setForecast(forecastData.forecast.forecastday);
          const res = await getSunriseSunset(data.location.name);
          setAstro(res.astronomy.astro);
          setLoading(false);
        } else {
          const data = await result.json();
          setError(data.error.error.message);
          setLoading(false);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cord.lat, cord.long, search]);

  return (
    <ContextAPI.Provider
      value={{
        darkMode,
        setDarkMode,
        data,
        search,
        setSearch,
        forecast,
        unit,
        setUnit,
        loading,
        error,
        astro
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default Context;
