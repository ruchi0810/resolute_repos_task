import React from "react";
import "./IntroHeader.css";
import Bg1 from "../images/introbg.png";

function IntroHeader() {
  return (
    <div className="introheader" style={{ marginTop: "7rem" }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "85vh",
            }}
          >
            <img
              src={Bg1}
              alt=""
              style={{
                position: "absolute",
                zIndex: "-1",
                height: "75vh",
                marginTop: "4%",
              }}
              class="img-fluid"
            />
            <h1
              style={{
                padding: "20px 0px 0px 0px",
                fontSize: "33px",
                fontWeight: 500,
              }}
            >
              Simple, Powerful & Affordable
            </h1>
            <h1
              style={{
                fontSize: "3.3rem",
                fontWeight: "bold",
                color: "#002365",
              }}
            >
              POS SOFTWARE SOLUTION
            </h1>
            <h1
              style={{
                fontSize: "33px",
              }}
            >
              For All Restaurant Types
            </h1>
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style={{
                background: "#002365",
                whiteSpace: "nowrap",
                fontSize: "18px",
                marginTop: "7px",
                padding: "12px 30px 12px 30px",
              }}
            >
              Book A Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroHeader;
