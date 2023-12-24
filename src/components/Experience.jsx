import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cardex from "./Cardex";
import Line from "../images/line1.png";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div
            className="col-3"
            style={{ marginBottom: "5px", marginLeft: "60px" }}
          >
            <div className="row">
              <Cardex title1={"7+"} title2={"Countries"} />
            </div>
            <div className="row" style={{ marginTop: "20%" }}>
              <Cardex title1={"100+"} title2={"Features"} />
            </div>
          </div>
          <div
            className="col-3"
            style={{ padding: "6% 0 0 0", marginLeft: "-5px" }}
          >
            <div className="row">
              <Cardex title1={"50+"} title2={"Cities"} />
            </div>
            <div className="row" style={{ marginTop: "20%" }}>
              <Cardex title1={"750+"} title2={"outlets"} />
            </div>
          </div>
          <div
            className="col-6"
            style={{ padding: "50px", marginTop: "30px", marginLeft: "-5%" }}
          >
            <div className="heading_first">
              <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>
                What is Repos?
              </h1>
              <img src={Line} alt="" />
            </div>
            <div className="desc" style={{ padding: "5% 0 0 0 " }}>
              <p
                style={{ color: "gray", fontSize: "16px", padding: "0px 7px" }}
              >
                RePOS is much more than just any other POS Software. It has been
                conceived, designed and brought to reality by a team of software
                experts. It serves all the requirements a restaurant has in
                order to achieve its goal of customer satisfaction.
              </p>
              <p
                style={{ color: "gray", fontSize: "16px", padding: "0px 7px" }}
              >
                RePOS is a Full-featured POS software application that can
                handle counter sales, inventory tracking, customer data
                management, mobile connectivity, and robust integrations. It is
                a solution for Casual / Fine Dine Restaurants, Quick Serve
                Restaurants, Bakery, Cake Shops, Cafe / Coffee Shops, Ice Cream
                / Juice Centers, Food Chains, Pizza Chains, Delivery Kitchen,
                Food Trucks and so on!
              </p>
            </div>

            <button type="button" class="btn btn-primary btn-lg experience-btn">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
