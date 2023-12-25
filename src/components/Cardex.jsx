import React from "react";
import "./Cardex.css";

const Cardex = ({ title1, title2 }) => {
  return (
    <div className="cardex">
      <div className="cardex-title1">
        <p
          className="title1-ex"
          style={{
            color: "white",

            fontSize: "50px",
            
          }}
        >
          {title1}
        </p>
        <p
          className="title2-ex"
          style={{
            color: "white",
            fontSize: "20px",
          }}
        >
          {title2}
        </p>
      </div>
    </div>
  );
};

export default Cardex;
