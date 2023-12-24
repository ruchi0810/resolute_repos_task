import React from "react";
import Wave from "../images/wave.png";
import Cardfe from "./Cardfe";
import Fe1 from "../images/fe1.png";
import Fe2 from "../images/fe2.png";
import Fe3 from "../images/fe3.png";
import Fe4 from "../images/fe4.png";
import Fe5 from "../images/fe5.png";
import Fe6 from "../images/fe6.png";
import Fe7 from "../images/fe7.png";
import Fe8 from "../images/fe8.png";
import Feee1 from "../images/feee1.png";
import Feee2 from "../images/feee2.png";
import Feee3 from "../images/feee3.png";
import Feee4 from "../images/feee4.png";
import Feee5 from "../images/feee5.png";
import Feee6 from "../images/feee6.png";
import Feee7 from "../images/feee7.png";
import Feee8 from "../images/feee8.png";
import Bg2 from "../images/bg2.png";
import Line from "../images/line1.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Feature.css";

function Feature() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="row" style={{ marginTop: "5rem" }}>
              <img src={Wave} />
            </div>

            <div className="row">
              <div className="col-12">
                <div
                  className="feature"
                  style={{
                    padding: "0 9rem",
                    backgroundColor: "#e9f3fd",
                  }}
                >
                  <div
                    className=" feature_heading"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h1 style={{ fontSize: "36px", padding: "5% 0px 0px 0px" }}>
                      Explore our awesome Feature Set
                    </h1>
                    <img src={Line} alt="" />
                  </div>
                  <div className="container-fluid">
                    <div
                      className="row"
                      style={{
                        gap: "110px",

                        marginTop: "4%",
                        paddingBottom: "7rem",
                      }}
                    >
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee1}
                          changeImageUrl={Fe1}
                          title={"Point Of Sale"}
                          desfe={
                            "Introducing a combination of unparalleled characteristics for managing your restaurant "
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee2}
                          changeImageUrl={Fe2}
                          title={"Stock Management"}
                          desfe={
                            "Helps you efficiently manage stock, unused items, reduce wastage and record new stock "
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee3}
                          changeImageUrl={Fe3}
                          title={"Sales & Marketing"}
                          desfe={
                            "Enables you to drive result oriented sales and marketing campaigns for your restaurant "
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee4}
                          changeImageUrl={Fe4}
                          title={"Customer Relationship"}
                          desfe={
                            "Helps you analyse customer behavior and enables you to stay in touch with your customers"
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee5}
                          changeImageUrl={Fe5}
                          title={"Franchise Management"}
                          desfe={
                            "An exclusive feature for multichain restaurants or businesses operating on the franchisee model "
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee6}
                          changeImageUrl={Fe6}
                          title={"Head Office Module"}
                          desfe={
                            "Central management of overall functioning of menus, recipes, inventory, user roles & permissions "
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee7}
                          changeImageUrl={Fe7}
                          title={"Reporting & Analytics"}
                          desfe={
                            "Get powerful insights about your restaurant on-the-go and use it to improvise your business"
                          }
                        />
                      </div>
                      <div className="col-2">
                        <Cardfe
                          imageUrl={Feee8}
                          changeImageUrl={Fe8}
                          title={"Settings & Configuration"}
                          desfe={
                            "Assists you in operating your business effectively with options that best suit your processes"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                backgroundImage: `url(${Bg2})`, // Set the background image
                backgroundSize: "cover",
                height: "70vh",
                width: "100vw",
              }}
            >
              <div
                className="getstart"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70vh",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "46px",
                    fontWeight: "bold",
                    margin: "1rem 0",
                  }}
                >
                  Speak To Our Specialists And Get
                </h1>
                <h1
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "bold",
                  }}
                >
                  Started
                </h1>
                <button
                  type="button"
                  class="btn btn-primary btn-lg feature-get-start-btn"
                >
                  Request a demo
                </button>
                <div
                  className="socialmedia"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <FaFacebookF
                    size={35}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      backgroundColor: "#1cc782",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                  <FaLinkedinIn
                    size={35}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      backgroundColor: "#1cc782",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                  <FaInstagram
                    size={35}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      backgroundColor: "#1cc782",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
