import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-sub-container">
        <div>
          <h1>No waste</h1>
          <h1>
            {" "}
            fighting food <br /> insecurity together
          </h1>
          <div>
            <button className="hero-btn">Sign in</button>
            <button className="hero-sec-btn">Sign up</button>
          </div>
        </div>
        <div>
          <img src="" alt="image goes here" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
