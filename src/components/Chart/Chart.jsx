import React from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";

function LineChart({ chartData }) {
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
                  family: "Satoshi"
                },
                color: "#000"
              },
              grid: {
                drawBorder: false,
                display: true,
              },
            },
            x: {
              labels: ["20°C", "28°C", "34°C", "30°C"],
              border: {
                display: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                font: {
                  size: 16,
                  weight: 700,
                  family: "Satoshi"
                },
                color: "#000"
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
              max: 50
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
