import React from "react";
import logo from "../assets/logo_new.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src={logo} alt="logo" width="136" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button>Make Appointment</button>
        </div>
      </div>
    </>
  );
};

export default Header;
