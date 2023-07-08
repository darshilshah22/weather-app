import React, { useContext, useState } from "react";
import "./bottomContainer.css";
import LineChart from "../Chart/Chart";
import { ContextAPI } from "../../Context/Context";
import { Data } from "../../constants/constants";

const BottomContainer = () => {
  const {darkMode} = useContext(ContextAPI);
  const [chartData] = useState({
    labels: Data.map((data) => `${data.time}`),
    datasets: [
      {
        label: "Temperature ",
        data: Data.map((data) => data.temperature),
        backgroundColor: ["#F97F29", "#F97F29", "#F97F29", "#F97F29"],
        hoverBackgroundColor: "#000000",
        hoverBorderColor: "#000000",
        borderColor: "#F97F29",
        borderWidth: 1,
        tension: 0.5
      },
    ],
  });

  return (
    <div className="bottom-container">
        <div className="today-temp">
          <p>
            How's the <br />
            temperature today?
          </p>
          <LineChart chartData={chartData} darkmode={darkMode}/>
        </div>
        <div className="tomorrow">
            <div className="rain"></div>
          <p>Tomorrow</p>
          {/* <img src={rainy} alt="" /> */}
          <p className="place">Alam Barzah</p>
          <p className="temp">29°C</p>
          <p>Rainy</p>
        </div>
    </div>
  );
};

export default BottomContainer;
