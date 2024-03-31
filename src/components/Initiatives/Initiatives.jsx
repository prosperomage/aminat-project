import React from "react";
import "./Initiatives.css";

const Initiatives = () => {
  return (
    <div className="initiatives-parent-container">
      <div className="initiative-child-container">
        <h1>Our Initiatives</h1>
        <div className="btn-container">
          <button className="btn-children">Fight Hunger</button>
          <button className="btn-children">Reduce Food Waste</button>
          <button className="btn-children">Community Impact</button>
        </div>
        <div className="ini-content">
          <div>
            <img src="" alt="image goes here" />
          </div>
          <div>
            <h3>Fight Hunger</h3>
            <span>
              <p>
                We provide a seamless platform for <br /> restuarants and
                individuals to donate surplus <br /> food. Every meal donated
                through <br /> SurplusSaver goes directly to those in need,{" "}
                <br /> helping to combat hunger and malnutrition.
              </p>
              <span>Read more</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
