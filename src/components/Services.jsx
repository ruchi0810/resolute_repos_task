import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cardservice from "./Cardservice";
import Cs1 from "../images/cs1.png";
import Cs2 from "../images/cs2.png";
import Cs3 from "../images/cs3.png";
import Cs4 from "../images/cs4.png";
import Cs5 from "../images/cs5.png";
import Cs6 from "../images/cs6.png";
import Cs7 from "../images/cs7.png";
import Cs8 from "../images/cs8.png";
import Line from "../images/line1.png";

function Services() {
  return (
    <div className="services" style={{ padding: "10px" }}>
      <div className="container">
        <div
          className=" service_heading"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <h1 style={{ fontSize: "36px" }}>
            What type of Restaurant uses RePOS?
          </h1>
          <img src={Line} alt="" />
        </div>
        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col-3">
            <Cardservice imageUrl={Cs1} title="Fine Dine" />
          </div>
          <div className="col-3">
            <Cardservice imageUrl={Cs2} title="pizzeria" />
          </div>
          <div className="col-3">
            <Cardservice imageUrl={Cs3} title="Ice Cream Parlor" />
          </div>
          <div className="col-3">
            <Cardservice imageUrl={Cs4} title="Food Trucks" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col-3">
            <Cardservice imageUrl={Cs5} title="Quick Serve Restaurants" />
          </div>
          <div className="col-3">
            <Cardservice imageUrl={Cs6} title="Bars & Pubs" />
          </div>
          <div className="col-3">
            <Cardservice imageUrl={Cs7} title="Backery & Confectionary" />
          </div>
          <div className="col-3">
            <Cardservice imageUrl={Cs8} title="Cafe & Lounges" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
