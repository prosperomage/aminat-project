import React from "react";
import Initiatives from "../components/Initiatives/Initiatives";
import Vision from "../components/Vision/Vision";
import Mission from "../components/Mission/Mission";
import Cta from "../components/CTA/Cta";

const MainContent = () => {
  return (
    <div>
      <Initiatives />
      <Vision />
      <Mission />
      <Cta />
    </div>
  );
};

export default MainContent;
