import React from "react";
import "./detailsCard.css";

const DetailsCard = ({ color, title, value }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <p style={{ color: color === "var(--text-color)" ? "#FFF" : "var(--text-color)" }}>{title}</p>
      <p style={{ color: color === "var(--text-color)" ? "#FFF" : "var(--text-color)" }}>{value}</p>
    </div>
  );
};

export default DetailsCard;
