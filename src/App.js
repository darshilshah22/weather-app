import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Weather from "./components/Weather/Weather";
import AirQuality from "./components/AirQuality/AirQuality";
import BottomContainer from "./components/BottomContainer/BottomContainer";
import Location from "./components/Location/Location";
import Sunset from "./components/Sunset/Sunset";
import WeatherPrediction from "./components/WeatherPrediction/WeatherPrediction";
import { useContext, useRef, useState } from "react";
import { ContextAPI } from "./Context/Context";

Chart.register(CategoryScale);

function App() {
  const myEle = useRef(null);
  const { darkMode, data } = useContext(ContextAPI);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    const el = myEle.current;
    setScroll(el.scrollTop > 0);
  };

  return (
    <>
      {typeof data.current !== "undefined" ? (
        <div
          className={darkMode ? "App dark" : "App light"}
          onScroll={handleClick}
          ref={myEle}
        >
          <Sidebar />
          <div className="mid-section">
            <Header scroll={scroll} />
            <div className="mid">
              <div className="info-cards">
                <Weather />
                <AirQuality />
              </div>
              <BottomContainer />
            </div>
          </div>
          <div className={darkMode ? "right-section dark" : "right-section"}>
            <Location />
            <Sunset />
            <WeatherPrediction />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
