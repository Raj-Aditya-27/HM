import React from "react";
import hero from "../assets/hero-banner.png";
import herobg from "../assets/hero-bg.png";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="hero-content" id="hero-content">
        <p>__________ Welcome Here</p>
        <h1>
          Find Nearest <br />
          Doctor.
        </h1>
        <div className="search">
          <p>Search doctors.clinics.hospitals.etc.</p>
          <hr />
          <div className="location">
            <input type="text" name="loc" id="loc" placeholder="Locations" />
            <button>Find Now</button>
          </div>
          <hr />
        </div>
      </div>
      <div className="hero-content">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
