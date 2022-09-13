import React from "react";
import "./Hero.css";

import logo from "../../Images/programming interface logo.png";
import vactorObject from "../../Images/hero vactor object.png";
import person from "../../Images/hero girl photo.png";

const Hero = () => {
  return (
    <section className="hero">
      <nav>
        <div className="navLogo">
          <img src={logo} alt="logo" width="100%" />
        </div>
        <div>
          <ul>
            <li>
              <a href="/#">HOME</a>
            </li>
            <li>
              <a href="/#">ABOUT</a>
            </li>
            <li>
              <a href="/#">PROTFOLIO</a>
            </li>
            <li>
              <a href="/#">SERVICES</a>
            </li>
            <li>
              <a href="/#">HIRE ME</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="detel">
        <h1>
          I,m Chalin <span>Amelia</span>
        </h1>
        <p>
          This is my official portfolio website to showes all <br /> Details and
          word exipriens web bevelopment
        </p>
        <a href="/#">DOWNLOAD CV</a>
      </div>

      <div className="images">
        <div className="shape">
          <img src={vactorObject} alt="vactorObj" width="100%" />
        </div>
        <div className="person">
          <img src={person} alt="person" width="100%" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
