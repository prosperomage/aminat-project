import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-div">
        
          <span>LOGO</span>
          <div>
            Surplus saver alleviate food <br />
            insecurity by connecting surplus <br />
            food donors with those in need. <br />
            reducing food waste and <br />
            creating a positive social <br /> impact
          </div>
          <div>
          
            <ul>
            <h4>Links</h4>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Our Stand</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-info">
            <h1>Contact</h1>
            <span>Email: contact@surplussaver.com </span>
            <span>Phone: 841-89261892689</span>
            <span>Address: </span>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;
