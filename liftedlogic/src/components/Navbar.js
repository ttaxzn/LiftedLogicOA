import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/Logo-Blue.svg";
import home from "../assets/nav-icons/Home.svg";
import record from "../assets/nav-icons/Record.svg";
import music from "../assets/nav-icons/Music Note.svg";
import people from "../assets/nav-icons/People.svg"
import calendar from "../assets/nav-icons/Calendar.svg";
import burger from "../assets/nav-icons/navburger.svg"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation(); 
    setShowDropdown(!showDropdown);
  };
  
  const handleClickOutside = (e) => {
    if (showDropdown) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target !== dropdownRef.current) {
        setShowDropdown(false);
      }
    }
  };
  
  

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <>
   
    <nav>
      <a href="/">
        <img src={logo} />
      </a>
      <div className="linkWrapper"> 
      <a href="/">
        <div className="navIconWrapper">
        <img src={home} className="navIcon" />
        Home
        </div>
      </a>
      <a href="/">
        <div className="navIconWrapper">
        <img src={record} className="navIcon" />
        Records
        </div>
        </a>
      <a href="/">
      <div className="navIconWrapper">
        <img src={music} className="navIcon" />
        Music
        </div>
      </a>
      <a href="/">
      <div className="navIconWrapper">
        <img src={people} className="navIcon" />
        Artists
        </div>
      </a>
      <a href="/">
      <div className="navIconWrapper">
        <img src={calendar} className="navIcon" />
        Concerts
        </div>
      </a>
      </div>
      <button className="signUp">Sign Up</button>
      <button className="dropBtn" onClick={(e) => toggleDropdown(e)}>
  <img src={burger} className="navBurger" />
</button>

        {showDropdown && (
          <div ref={dropdownRef} className="dropdownMenu">
            <a href="/">Home</a>
            <a href="/">Records</a>
            <a href="/">Music</a>
            <a href="/">Artists</a>
            <a href="/">Concerts</a>
            
          </div>
        )}
    </nav>
    </>
  );
};

export default Navbar;
