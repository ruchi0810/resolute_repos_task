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
            fontWeight: "bold",
            fontSize: "40px",
            padding: "15px",
          }}
        >
          {title1}
        </p>
        <p
          className="title2-ex"
          style={{
            color: "white",
            fontSize: "20px",
            padding: "0px 0px 15px 0px",
          }}
        >
          {title2}
        </p>
      </div>
    </div>
  );
};

export default Cardex;
