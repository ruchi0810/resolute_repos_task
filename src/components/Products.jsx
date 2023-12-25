import React, { useState } from "react";
import "./Products.css";
import tab1 from "../images/tab1.png";
import tab2 from "../images/tab2.png";
import tab3 from "../images/tab3.png";
import tab4 from "../images/tab4.png";
import tab5 from "../images/tab5.png";
import tab6 from "../images/tab6.png";
import Line from "../images/line1.png";
import tab1logo from "../images/tab1_logo.png";
import tab2logo from "../images/tab2_logo.png";
import tab3logo from "../images/tab3_logo.png";
import tab4logo from "../images/tab4_logo.png";
import tab5logo from "../images/tab5_logo.png";
import tab6logo from "../images/tab6_logo.png";

function Products() {
  const [num, setNum] = useState(1);
  return (
    <div className="container-fluid ">
      <div
        className=" feature_heading"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "38px", padding: "6% 0px 0px 0px" }}>
          Our <strong>Products</strong>
        </h1>
        <img src={Line} alt="" style={{ padding: "0px 0px 3% 0px" }} />
      </div>
      <div className="row">
        <div className="col-12 center_div_this">
          <div
            className="nav_tab"
            style={{ borderBottom: "2px solid #eaeaea" }}
          >
            <div
              style={
                num == 1
                  ? { borderBottom: "0.18rem solid #1cdc8c" }
                  : { opacity: "0.6" }
              }
              onClick={() => setNum(1)}
            >
              RePOS
            </div>
            <div
              style={
                num == 2
                  ? { borderBottom: "0.18rem solid #1cdc8c" }
                  : { opacity: "0.6" }
              }
              onClick={() => setNum(2)}
            >
              Android RePOS
            </div>
            <div
              style={
                num == 3
                  ? { borderBottom: "0.18rem solid #1cdc8c" }
                  : { opacity: "0.6" }
              }
              onClick={() => setNum(3)}
            >
              IOS RePOS
            </div>
            <div
              style={
                num == 4
                  ? { borderBottom: "0.18rem solid #1cdc8c" }
                  : { opacity: "0.6" }
              }
              onClick={() => setNum(4)}
            >
              ReECHO
            </div>
            <div
              style={
                num == 5
                  ? { borderBottom: "0.18rem solid #1cdc8c" }
                  : { opacity: "0.6" }
              }
              onClick={() => setNum(5)}
            >
              ReANALYSE
            </div>
            <div
              style={
                num == 6
                  ? { borderBottom: "0.18rem solid #1cdc8c" }
                  : { opacity: "0.6" }
              }
              onClick={() => setNum(6)}
            >
              Tab My Order
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {num == 1 && (
            <>
              <div className="row center_div_this animation_component fade_in">
                <div className="col-4 ">
                  <div>
                    <img src={tab1} alt="" className="img-fluid " />
                  </div>
                </div>
                <div className="col-4 ">
                  {num == 1 && (
                    <div className="second_column">
                      <img src={tab1logo} alt="" className="img-fluid " />
                      <h1>Restaurant POS Solution</h1>
                      <h6>
                        Advanced cloud based & server based enterprise
                        management system for the food and beverage service
                        industry.
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {num == 2 && (
            <>
              <div className="row center_div_this animation_component fade_in">
                <div className="col-4 ">
                  <div>
                    <img src={tab2} alt="" className="img-fluid " />
                  </div>
                </div>
                <div className="col-4 ">
                  {num == 2 && (
                    <div className="second_column">
                      <img src={tab2logo} alt="" className="img-fluid " />
                      <h1>Restaurant Android POS Solution</h1>
                      <h6>
                        On-the go, easy, powerful RePOS, restaurant management
                        software provided on devices running the worlds most
                        popular operating system.
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {num == 3 && (
            <>
              <div className="row center_div_this animation_component fade_in">
                <div className="col-4 ">
                  <div>
                    <img src={tab3} alt="" className="img-fluid " />
                  </div>
                </div>
                <div className="col-4 ">
                  {num == 3 && (
                    <div className="second_column">
                      <img src={tab3logo} alt="" className="img-fluid " />
                      <h1>Restaurant IOS POS Solution</h1>
                      <h6>
                        Power of RePOS combined with the robustness of iOS
                        devices to provide a compact restaurant management
                        system.
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {num == 4 && (
            <>
              <div className="row center_div_this animation_component fade_in">
                <div className="col-4 ">
                  <div>
                    <img src={tab4} alt="" className="img-fluid " />
                  </div>
                </div>
                <div className="col-4 ">
                  {num == 4 && (
                    <div className="second_column">
                      <img src={tab4logo} alt="" className="img-fluid " />
                      <h1 style={{ fontSize: "20px" }}>
                        Customer Feedback App
                      </h1>
                      <h6>
                        Real-Time, Customizable, Analytical Tablet and Mobile
                        based app to record customer feedbacks and experiences
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {num == 5 && (
            <>
              <div className="row center_div_this animation_component fade_in">
                <div className="col-4 ">
                  <div>
                    <img src={tab5} alt="" className="img-fluid " />
                  </div>
                </div>
                <div className="col-4 ">
                  {num == 5 && (
                    <div className="second_column">
                      <img src={tab5logo} alt="" className="img-fluid " />
                      <h1 style={{ fontSize: "20px" }}>Mobile Reporting App</h1>
                      <h6>
                        Accurate & Real-Time mobile reporting app to keep track
                        of sales & other key aspects of a restaurant business.
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {num == 6 && (
            <>
              <div className="row center_div_this animation_component fade_in">
                <div className="col-4 ">
                  <div>
                    <img src={tab6} alt="" className="img-fluid " />
                  </div>
                </div>
                <div className="col-4 ">
                  {num == 6 && (
                    <div className="second_column">
                      <img src={tab6logo} alt="" className="img-fluid " />
                      <h1 style={{ fontSize: "20px" }}>Captain Ordering App</h1>
                      <h6>
                        Tablet based App for easy and quick ordering in a
                        restaurant to be used by captains and servers.
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
