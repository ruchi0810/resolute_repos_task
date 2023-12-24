import React from "react";
import Hc1 from "../images/hc1.png";
import Hc2 from "../images/hc2.png";
import Hc3 from "../images/hc3.png";
import Hc4 from "../images/hc4.jpg";
import Hc5 from "../images/hc5.png";
import Hc6 from "../images/hc6.png";
import Hc7 from "../images/hc7.png";
import Hc8 from "../images/hc8.png";
import Hc9 from "../images/hc9.png";
import Hc10 from "../images/hc10.png";
import Hc11 from "../images/hc11.png";
import Hc12 from "../images/hc12.png";
import Hc13 from "../images/hc13.jpg";
import Hc14 from "../images/hc14.png";
import Hc15 from "../images/hc15.png";
import Hc16 from "../images/hc16.png";
import Hc17 from "../images/hc17.png";
import Hc18 from "../images/hc18.png";
import Hc19 from "../images/hc19.jpg";
import Hc20 from "../images/hc20.jpg";
import Hc21 from "../images/hc21.jpg";
import Hc22 from "../images/hc22.jpg";
import Hc23 from "../images/hc23.png";
import Hc24 from "../images/hc24.jpg";
import Hc25 from "../images/hc25.jpg";
import Bg4 from "../images/bg4.png";
import Line from "../images/line1.png";

function Happyc() {
  const imageStyle = {
    transform: "scale(0.7)",
  };
  const zoomStyles = {
    backgroundImage: `url(${Bg4})`,
    backgroundSize: "120%", // Adjust the scale factor as needed
    transition: "background-size 1.5s ease", // Add a smooth transition
    marginTop: "5%",
  };
  return (
    <div className="happyc" style={zoomStyles}>
      <div
        className=" happyc_heading"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", padding: "18% 0px 0px 0px" }}>
          Our Happy Clients
        </h1>
        <img src={Line} alt="" />
      </div>
      <div className="container-fluid" style={{ padding: "5% 6% 5% 6%" }}>
        <div className="row" style={{ marginTop: "-40px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={Hc1} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc2} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc3} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc4} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc5} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "-40px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={Hc6} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc7} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc8} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc9} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc10} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "-40px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={Hc11} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc12} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc13} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc14} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc15} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "-40px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={Hc16} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc17} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc18} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc19} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc20} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "-40px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={Hc21} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc22} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc23} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc24} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-2">
            <img src={Hc25} alt="" className="img-fluid" style={imageStyle} />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Happyc;
