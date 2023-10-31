import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo-Blue.svg";
import home from "../assets/nav-icons/Home.svg";
import record from "../assets/nav-icons/Record.svg";
import music from "../assets/nav-icons/Music Note.svg";
import people from "../assets/nav-icons/People.svg"
import calendar from "../assets/nav-icons/Calendar.svg";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} />
      </a>
      <div className="linkWrapper"> 
      <a href="/">
        <div className="navIconWrapper">
        <img src={home} class="navIcon" />
        Home
        </div>
      </a>
      <a href="/">
        <div className="navIconWrapper">
        <img src={record} class="navIcon" />
        Records
        </div>
        </a>
      <a href="/">
      <div className="navIconWrapper">
        <img src={music} class="navIcon" />
        Music
        </div>
      </a>
      <a href="/">
      <div className="navIconWrapper">
        <img src={people} class="navIcon" />
        Artists
        </div>
      </a>
      <a href="/">
      <div className="navIconWrapper">
        <img src={calendar} class="navIcon" />
        Concerts
        </div>
      </a>
      </div>
      <button>Sign Up</button>
    </nav>
  );
};

export default Navbar;
