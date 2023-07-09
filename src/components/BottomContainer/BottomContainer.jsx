import React, { useContext, useEffect, useState } from "react";
import "./bottomContainer.css";
import LineChart from "../Chart/Chart";
import { ContextAPI } from "../../Context/Context";
import { Data } from "../../constants/constants";

const BottomContainer = () => {
  const { darkMode, forecast, data, unit } = useContext(ContextAPI);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => `${data.time}`),
    datasets: [
      {
        label: "Temperature ",
        data: [20, 30, 40, 50],
        backgroundColor: ["#F97F29", "#F97F29", "#F97F29", "#F97F29"],
        hoverBackgroundColor: "#000000",
        hoverBorderColor: "#000000",
        borderColor: "#F97F29",
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  });

  useEffect(() => {
    const getChartData = () => {
      if (forecast.length > 0) {
        setChartData({
          labels: Data.map((data) => `${data.time}`),
          datasets: [
            {
              label: "Temperature ",
              data:
                unit === "C"
                  ? [
                      forecast[0].hour[9]["temp_c"],
                      forecast[0].hour[16]["temp_c"],
                      forecast[0].hour[21]["temp_c"],
                      forecast[0].hour[22]["temp_c"],
                    ]
                  : [
                      forecast[0].hour[9]["temp_f"],
                      forecast[0].hour[16]["temp_f"],
                      forecast[0].hour[21]["temp_f"],
                      forecast[0].hour[22]["temp_f"],
                    ],
              backgroundColor: ["#F97F29", "#F97F29", "#F97F29", "#F97F29"],
              hoverBackgroundColor: "#000000",
              hoverBorderColor: "#000000",
              borderColor: "#F97F29",
              borderWidth: 1,
              tension: 0.5,
            },
          ],
        });
      }
    };
    getChartData();
  }, [forecast, unit]);

  return (
    <>
      {forecast.length > 0 ? (
        <div className="bottom-container">
          <div className="today-temp">
            <p>
              How's the <br />
              temperature today?
            </p>
            <LineChart chartData={chartData} darkmode={darkMode} />
          </div>
          <div className="tomorrow">
            <div className="content">
              <p>Tomorrow</p>
              <p className="place">
                {data.location.name}, {data.location.region}
              </p>
              <p className="temp">
                {unit === "C"
                  ? forecast[1].day["avgtemp_c"]
                  : forecast[1].day["avgtemp_f"]}
                °{unit}
              </p>
              <p>{forecast[1].day.condition.text}</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default BottomContainer;
