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

Chart.register(CategoryScale);

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mid-section">
        <Header />
        <div className="info-cards">
          <Weather />
          <AirQuality />
        </div>
        <BottomContainer />
      </div>
      <div className="right-section">
        <Location />
        <Sunset />
        <WeatherPrediction />
      </div>
    </div>
  );
}

export default App;
