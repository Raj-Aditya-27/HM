import React from "react";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

function Services() {
  return (
    <div className="services">
      <div>
        <img src={icon1} alt="" />
        <h3>Psychiatry</h3>
        <p>
          Providing compassionate care and evidence-based treatments for mental
          health concerns, ensuring holistic well-being and support for
          individuals and families.
        </p>
      </div>
      <div>
        <img src={icon2} alt="" />
        <h3>Gynecology</h3>
        <p>
          Dedicated to women's health, offering comprehensive services from
          routine screenings to specialized care, empowering women to make
          informed decisions about their health.
        </p>
      </div>
      <div>
        <img src={icon3} alt="" />
        <h3>Pulmonology</h3>
        <p>
          Delivering expert respiratory care with cutting-edge diagnostics and
          personalized treatment plans, fostering lung health and improved
          quality of life for every patient.
        </p>
      </div>
      <div>
        <img src={icon4} alt="" />
        <h3>Orthopedics</h3>
        <p>
          Offering advanced orthopedic solutions for bone and joint health, our
          team specializes in innovative treatments and surgeries, restoring
          mobility and functionality with precision and care.
        </p>
      </div>
    </div>
  );
}

export default Services;
