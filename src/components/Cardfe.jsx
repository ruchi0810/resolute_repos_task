import React, { useState } from "react";
import "./Cardfe.css";

const Cardfe = ({ imageUrl, changeImageUrl, title, desfe }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="cardfe"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="cardfe-image">
        <img src={isHovered ? changeImageUrl : imageUrl} />
      </div>
      <div className="cardfe-title">
        <h1
          className="cardfe-title"
          style={{
            textAlign: "center",
            fontSize: "20px",
            // color: "#403d39",
            padding: "15px 10px 10px 10px",
          }}
        >
          {title}
        </h1>
      </div>
      <div className="cardfe-desfe">
        <p
          className="cardfe-desfe"
          style={{
            textAlign: "center",
            // color: "#585348",
            padding: "0px 25px 0px 25px",
            fontSize: "16px",
          }}
        >
          {desfe}
        </p>
      </div>
      <button type="button" class="btn btn-primary btn-lg cardfe-btn">
        Know More
      </button>
    </div>
  );
};

export default Cardfe;
