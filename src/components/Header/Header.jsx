import React, { useEffect, useState } from "react";
import "./header.css";
import Profile from "../../assets/profile.png";
import Searchbar from "../Searchbar/Searchbar";
import Bell from "../../assets/Bell.svg";

const Header = ({scroll}) => {
  const today = new Date();
  console.log(today.toLocaleDateString('en-us', {weekday:'long'}));

  const [greet, setGreet] = useState("");

  useEffect(() => {
    const getTime = () => {
      if(today.getHours > 4 && today.getHours < 12){
        setGreet("Good Morning");
      }else if(today.getHours < 17){
        setGreet("Good Afternoon");
      }else if(today.getHours < 22){
        setGreet("Good Evening");
      }else{
        setGreet("Good Night")
      }
    }

    getTime();
  }, [today])
  

  return (
    <section className={scroll ? "header scroll" : "header"}>
      <img src={Profile} alt="Profile" />
      <div className="greet">
        <p>{greet},</p>
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
