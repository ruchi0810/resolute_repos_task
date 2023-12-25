import React, { useEffect, useState } from "react";
import Logo from "../images/re-pos_logo.png";
import "./Header.css";
import { MdArrowDropDown } from "react-icons/md";
import Feee1 from "../images/feee1.png";
import Feee2 from "../images/feee2.png";
import Feee3 from "../images/feee3.png";
import Feee4 from "../images/feee4.png";
import Feee5 from "../images/feee5.png";
import Feee6 from "../images/feee6.png";
import Feee7 from "../images/feee7.png";
import Feee8 from "../images/feee8.png";
import tab1logo from "../images/tab1_logo.png";
import tab2logo from "../images/tab2_logo.png";
import tab3logo from "../images/tab3_logo.png";
import tab4logo from "../images/tab4_logo.png";
import tab5logo from "../images/tab5_logo.png";
import tab6logo from "../images/tab6_logo.png";

function Header() {
  const [showTourSubMenu, setShowTourSubMenu] = useState(false);
  const [showProductSubMenu, setShowProductSubMenu] = useState(false);

  const handleTourHover = () => {
    setShowTourSubMenu(true);
  };

  const handleTourLeave = () => {
    setShowTourSubMenu(false);
  };
  const handleProductHover = () => {
    setShowProductSubMenu(true);
  };

  const handleProductLeave = () => {
    setShowProductSubMenu(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.3rem 15%",
        alignItems: "center",
      }}
      className="sticky_navbar"
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.6rem",
          alignItems: "center",
        }}
      >
        <div
          onMouseEnter={handleTourHover}
          onMouseLeave={handleTourLeave}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <p style={{ cursor: "pointer", fontSize: "17px" }}>
            Tour <MdArrowDropDown size={22} />
          </p>
          {showTourSubMenu && (
            <ul
              style={{
                position: "absolute",
                top: "85%",
                left: 0,
                listStyleType: "none",
                padding: 0,
                marginTop: 0,
                background: "#fff", // Set the background color as needed
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                width: "680px",
                height: "230px",
                borderRadius: "3%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                className="part1"
                style={{ marginLeft: "10%", fontSize: "18px" }}
              >
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee1} // Your small image source
                  />
                  Point Of Sales
                </li>
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee2} // Your small image source
                  />
                  Stock Managment
                </li>
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee3} // Your small image source
                  />
                  Sales and Marketing
                </li>
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee4} // Your small image source
                  />
                  Customer Relationship
                </li>
              </div>
              <div
                className="part2"
                style={{ marginRight: "18%", fontSize: "18px" }}
              >
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee5} // Your small image source
                  />
                  Franchiesse Managment
                </li>
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee6} // Your small image source
                  />
                  Head Office Module
                </li>
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee7} // Your small image source
                  />
                  Reporting Analysis
                </li>
                <li className="dropdown-item">
                  <img
                    className="dropdown-img"
                    src={Feee8} // Your small image source
                  />
                  Setting
                </li>
              </div>
              {/* Add more submenu items as needed */}
            </ul>
          )}
        </div>

        <div
          onMouseEnter={handleProductHover}
          onMouseLeave={handleProductLeave}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <p style={{ cursor: "pointer", fontSize: "17px" }}>
            Products <MdArrowDropDown size={22} />
          </p>
          {showProductSubMenu && (
            <ul
              style={{
                position: "absolute",
                top: "85%",
                left: 0,
                listStyleType: "none",
                padding: 0,
                marginTop: 0,
                background: "#fff", // Set the background color as needed
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                width: "680px",
                height: "160px",
                borderRadius: "3%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="product-list">
                <li className="dropdown-item-product">
                  <img
                    className="dropdown-img-product"
                    src={tab5logo} // Your small image source
                  />
                  REANALYSIS-Reporting App
                </li>
                <li className="dropdown-item-product">
                  <img
                    className="dropdown-img-product"
                    src={tab4logo} // Your small image source
                  />
                  REECHO-Feedback App
                </li>
                <li className="dropdown-item-product">
                  <img
                    className="dropdown-img-product"
                    src={tab6logo} // Your small image source
                  />
                  TabMyOrder-RealTime Ordering App
                </li>
              </div>
            </ul>
          )}
        </div>
        <p style={{ cursor: "pointer", fontSize: "17px" }}>About</p>
        <p style={{ cursor: "pointer", fontSize: "17px" }}>RestroTrail</p>
        <p style={{ cursor: "pointer", fontSize: "17px" }}>Contact</p>
        <p
          type="button"
          class="btn btn-primary btn-xxl"
          style={{
            background:
              "linear-gradient(145deg, rgba(2,43,103,1) 0%, rgba(28,199,130,1) 100%)",
            fontSize: "18px",
            padding: "10px 25px",
          }}
        >
          Book a demo
        </p>
      </div>
    </div>
  );
}

export default Header;
