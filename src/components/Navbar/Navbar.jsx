import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-parent">
      <div className="nav-container">
        <div>
          <span>logo</span>
        </div>
        <div>
          <ul className="nav-links">
            <li>
             
              <a href="">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">About Us</a>{" "}
            </li>
            <li>
              
              <a href="">Contact Us</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">FAQ</a>{" "}
            </li>
            <button className="request-btn">Request Meal</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
