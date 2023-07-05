import React from "react";
import "./header.css";
import Profile from "../../assets/profile.png";
import Searchbar from "../Searchbar/Searchbar";
import Bell from "../../assets/Bell.svg";

const Header = () => {
  return (
    <section className="header">
      <img src={Profile} alt="Profile" />
      <div className="greet">
        <p>Good Night,</p>
        <p>Khushi Shah</p>
      </div>
      <Searchbar />
      <div className="notification">
        <img src={Bell} alt="bell" />
      </div>
    </section>
  );
};

export default Header;
