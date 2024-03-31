import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div>
      <div className="mission-inner-container">
        <h1>how we do it</h1>
        <div>
          <div className="missions-ressons">
            <div className="block-1">
              <div className="inner-block">
                <img src="" alt="image goes here" className="img-style" />
              </div>

              <div className="inner-block-content">
                <h1>Partnership</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dicta suscipit sed laborum harum repudiandae, culpa
                </span>
                <span>Read more</span>
              </div>
            </div>
            {/* block 2 */}
            <div className="block-1">
              <div>
                <img src="" alt="image goes here" />
              </div>

              <div>
                <h1>Partnership</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dicta suscipit sed laborum harum repudiandae, culpa
                </span>
                <span>Read more</span>
              </div>
            </div>
            {/* block 3 */}
            <div className="block-1">
              <div>
                <img src="" alt="image goes here" />
              </div>

              <div>
                <h1>Partnership</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dicta suscipit sed laborum harum repudiandae, culpa
                </span>
                <span>Read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
