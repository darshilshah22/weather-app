import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import Profile from "../../assets/profile.png";
import Searchbar from "../Searchbar/Searchbar";
import { ContextAPI } from "../../Context/Context";

const Header = ({ scroll }) => {
  const { data, unit, setUnit } = useContext(ContextAPI);
  const today = data.location.localtime.split(" ")[1].split(":")[0];

  const [greet, setGreet] = useState("");

  useEffect(() => {
    const getTime = () => {
      if (today >= 22 || today < 5) {
        setGreet("Good Night");
      } else if (today > 4 && today < 12) {
        setGreet("Good Morning");
      } else if (today >= 12 && today <= 17) {
        setGreet("Good Afternoon");
      } else if (today > 17 && today < 22) {
        setGreet("Good Evening");
      }
    };

    getTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className={scroll ? "header scroll" : "header"}>
      <img src={Profile} alt="Profile" />
      <div className="greet">
        <p>{greet},</p>
        <p>Adam Jones</p>
      </div>
      <Searchbar />
      <div className="unit" onClick={() => setUnit(unit === "C" ? "F" : "C")}>
        <p>{unit}</p>
      </div>
    </section>
  );
};

export default Header;
