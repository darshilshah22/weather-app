import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";
import { BsBarChart, BsCalendarDate } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import { FiMapPin, FiSettings } from "react-icons/fi";

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
  {
    name: "GearSix",
    icon: FiSettings,
  },
  {
    name: "MapPin",
    icon: BsCalendarDate,
  },
];

const Sidebar = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      <p className="title">Weathry</p>

      <ul className="side-menu">
        {menus.map((menu, index) => (
          <li
            className={select === index ? "active" : ""}
            onClick={() => setSelect(index)}
          >
            <menu.icon size={24} className="active" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
