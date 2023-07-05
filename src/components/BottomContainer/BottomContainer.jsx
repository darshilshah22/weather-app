import React, { useState } from "react";
import "./bottomContainer.css";
import { BsBarChart } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import LineChart from "../Chart/Chart";

const menus = [
  {
    name: "ChartBar",
    icon: BsBarChart,
  },
  {
    name: "Calendar",
    icon: BiLineChart,
  },
  {
    name: "ChartLine",
    icon: FiMapPin,
  },
];

const Data = [
  {
    id: 1,
    time: "Morning",
    temperature: 20,
  },
  {
    id: 2,
    time: "Afternoon",
    temperature: 28,
  },
  {
    id: 3,
    time: "Evening",
    temperature: 34,
  },
  {
    id: 4,
    time: "Night",
    temperature: 30,
  },
];

const BottomContainer = () => {
  const [select, setSelect] = useState(0);
  const [chartData, setChartData] = useState({
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
        tension: 0.5,
      },
    ],
  });

  return (
    <div className="bottom-container">
      <div className="bottom-header">
        <div className="today-temp">
          <p>
            How's the <br />
            temperature today?
          </p>
          <LineChart chartData={chartData} />
        </div>
        <ul className="bottom-menu">
          {menus.map((menu, index) => (
            <li
              className={select === index ? "active" : ""}
              onClick={() => setSelect(index)}
            >
              <menu.icon size={18} />
            </li>
          ))}
        </ul>
        <div className="tomorrow">
            <div className="rain"></div>
          <p>Tomorrow</p>
          <p className="place">Alam Barzah</p>
          <p className="temp">29°C</p>
          <p>Rainy</p>
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;
