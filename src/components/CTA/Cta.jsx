import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <div className="cta-container">
      <div className="cta-inner-div">
        <div className="cta-content">
          <span className="cta-header">
            Join the fight against <br />
            Hunger and food wastage!
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Itaque nisi eius voluptate deleniti dolore rem ratione, dignissimos
            esse libero, <br /> aliquid quasi nostrum tempore numquam vitae at
            odit sapiente consequatur <br /> natus maiores assumenda sit
            necessitatibus! <br /> Tempora quidem quam reiciendis dolore!
            Laborum?
          </span>
          <div className="cta-btns">
            <button className="cta-btn">Donate</button>
            <button className="cta-sec-btn">Volunteer</button>
          </div>
        </div>
        <div>
          <img src="" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
