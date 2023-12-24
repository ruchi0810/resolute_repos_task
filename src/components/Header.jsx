import React, { useEffect, useState } from "react";
import Logo from "../images/re-pos_logo.png";
import "./Header.css";
import { MdArrowDropDown } from "react-icons/md";

function Header() {
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
        <p style={{ cursor: "pointer", fontSize: "17px" }}>
          Tour <MdArrowDropDown size={22} />
        </p>

        <p style={{ cursor: "pointer", fontSize: "17px" }}>
          Products <MdArrowDropDown size={22} />
        </p>
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
