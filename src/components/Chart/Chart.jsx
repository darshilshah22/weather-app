import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
import { ContextAPI } from "../../Context/Context";

function LineChart({ chartData, darkmode }) {
  const {unit} = useContext(ContextAPI);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    const lableSet = () => {
      setLabel(chartData.datasets[0].data);
    }

    lableSet();
  }, [unit, chartData]);

  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x1: {
              border: {
                display: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                font: {
                  size: 16,
                  weight: 700,
                  family: "Satoshi",
                },
                color: darkmode ? "#fff" : "#000",
              },
              grid: {
                drawBorder: false,
                display: true,
              },
            },
            x: {
              labels: label.map((e) => `${e}°${unit}`),
              border: {
                display: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                font: {
                  size: 16,
                  weight: 700,
                  family: "Satoshi",
                },
                color: darkmode ? "#fff" : "#000",
              },
              grid: {
                drawBorder: false,
                display: true,
              },
            },
            y: {
              display: false,
              beginAtZero: true,
              ticks: {
                display: true,
                beginAtZero: true,
              },
              grid: {
                drawBorder: false,
                display: false,
              },
              max: unit === "C" ? 50 : 100,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
