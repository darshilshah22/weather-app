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
import { useContext, useEffect, useRef, useState } from "react";
import { ContextAPI } from "./Context/Context";
import loader from "./assets/lottie/Loading-2.json";
import Lottie from "lottie-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Chart.register(CategoryScale);

function App() {
  const myEle = useRef(null);
  const { darkMode, data, loading, error } = useContext(ContextAPI);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    const el = myEle.current;
    setScroll(el.scrollTop > 0);
  };

  useEffect(() => {
    const showMessage = () => {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if(error){
      showMessage();
    }
  }, [error]);
  

  return (
    <>
      {loading ? (
        <div className="loader">
          <Lottie animationData={loader} loop={true} className="lottie" />
        </div>
      ) : (
        <div
          className="main"
          style={{ backgroundColor: darkMode ? "#2c2c2e" : "white" }}
        >
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
              <div
                className={darkMode ? "right-section dark" : "right-section"}
              >
                <div className="right">
                  <Location />
                  <Sunset />
                  <WeatherPrediction />
                </div>
              </div>
              <ToastContainer autoClose={3000} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
