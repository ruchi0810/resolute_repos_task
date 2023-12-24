import React, { useContext, useRef, useState } from "react";
import "./Contact.css";

import Forming from "../images/contact.png";
const Contact = () => {
  const form = useRef();

  return (
    <div
      className="contact-form"
      id="contact"
      style={{ backgroundColor: "#f1f9ff", padding: "10% 2% 0 0 " }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <img
              src={Forming}
              alt=""
              className="contact_img"
              style={{ marginLeft: "18%" }}
            />
          </div>
          <div className="col-4 ">
            <div className="c-right">
              <form ref={form}>
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Full Name"
                />

                <select name="country" className="user">
                  <option value="restaurant"> India</option>
                  <option value="cafe"> Austrelia</option>
                  <option value="pubs">South Africa</option>
                  <option value="bars">Canada</option>
                  <option value="coctails">UK</option>
                  <option value="party">USA</option>
                  <option value="bakery">Viyatnam</option>

                  {/* Add more options as needed */}
                </select>

                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="State*"
                />
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Brand"
                />
                <select name="role" className="user">
                  <option value="restaurant"> Your Role</option>
                  <option value="restaurant"> Manager</option>
                  <option value="cafe"> Founder</option>
                  <option value="pubs">CEO</option>
                  <option value="bars">CA</option>
                  <option value="coctails">Chef</option>
                  <option value="party">IT manager</option>
                  <option value="bakery">other</option>

                  {/* Add more options as needed */}
                </select>

                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={{
                    background: "#002365",
                    whiteSpace: "nowrap",
                    fontSize: "20px",
                    padding: "12px 22px 12px 22px",
                    width: "70%",
                    marginLeft: "-30%",
                  }}
                >
                  Submit Query
                </button>
              </form>
            </div>
          </div>
          <div className="col-3">
            <div className="c-right">
              <form ref={form}>
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Email"
                />
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="+91"
                />
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="City*"
                />
                <select name="restaurant" className="user">
                  <option value="restaurant"> Restaurant Type*</option>
                  <option value="cafe"> cafe</option>
                  <option value="pubs">pubs</option>
                  <option value="bars">bard</option>
                  <option value="coctails">coctails</option>
                  <option value="party">party</option>
                  <option value="bakery">backery</option>

                  {/* Add more options as needed */}
                </select>

                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="No of Outlets"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
