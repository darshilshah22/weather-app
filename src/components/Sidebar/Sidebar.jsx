import React, { useContext, useState } from "react";
import "./sidebar.css";
import logo from "../../assets/logo.svg";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { ContextAPI } from "../../Context/Context";
import { menus } from "../../constants/constants";

const Sidebar = () => {
  const [select, setSelect] = useState(0);
  const { darkMode, setDarkMode } = useContext(ContextAPI);

  return (
    <div className={darkMode ? "sidebar dark" : "sidebar"}>
      <img src={logo} alt="logo" />
      <p className="title">Weathry</p>

      <ul className="side-menu">
        {menus.map((menu, index) => (
          <li
            key={menu.name}
            className={select === index ? "active" : ""}
            onClick={() => setSelect(index)}
          >
            <menu.icon size={22} className="active" />
          </li>
        ))}
      </ul>

      <div
        className={darkMode ? "switch toggle" : "switch"}
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className="btn"
          style={{ backgroundColor: darkMode ? "#FFF" : "#19283f" }}
        ></div>
        <div className="icon">{darkMode ? <FiSun size={16}/> : <BiMoon size={16}/>}</div>
      </div>
    </div>
  );
};

export default Sidebar;
