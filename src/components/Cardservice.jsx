import React from "react";
import "./Cardservice.css";

const Cardservice = ({ imageUrl, title }) => {
  return (
    <div className="cardservice" >
      <div className="cardservice-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="cardservice-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Cardservice;
