import React from "react";
import Bg2 from "../images/bg2.png";

function Getstart() {
  return (
    <div className="getstart">
      <div className="container-fluid">
        <div className="gs-image">
          <img src={Bg2} alt="" style={{ width: "100%" }} />
          <div className="title1"></div>
        </div>
      </div>
    </div>
  );
}

export default Getstart;
