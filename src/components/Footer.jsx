import "./Footer.css";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowForward } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Flag1 from "../images/india.png";
import Flag2 from "../images/dubai.png";
import Flag3 from "../images/kuwait.png";
import Flag4 from "../images/mauritius.png";
import Flag5 from "../images/qatar.png";
import Flag6 from "../images/ghana.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="links">
          <div className="component_footer">
            <h4>Applications</h4>
            <div className="nav-links">
              <IoIosArrowForward />
              Fine Dine POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Pizzeria POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Ice Cream Parlor POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Food Trucks POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Quick Serve Restaurants POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Bars & Pubs POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Bakery & Confectionery POS
            </div>
            <div className="nav-links">
              <IoIosArrowForward />
              Cafe & Lounges POS
            </div>
          </div>
          <div>
            <div className="component_footer">
              <h4>Products</h4>
              <div className="nav-links">
                <IoIosArrowForward />
                ReANALYSE - Reporting App
              </div>
              <div className="nav-links">
                <IoIosArrowForward />
                ReECHO - Feedback App
              </div>

              <div className="nav-links">
                <IoIosArrowForward />
                TabMyOrder - Realtime Ordering App
              </div>

              <h4 className="quick-linkss" style={{ marginTop: "1rem" }}>
                Quick Links
              </h4>
              <div className="nav-links">
                <IoIosArrowForward />
                RestroTrail
              </div>
              <div className="nav-links">
                <IoIosArrowForward />
                Career
              </div>

              <div className="nav-links">
                <IoIosArrowForward />
                Integration
              </div>
              <div className="nav-links">
                <IoIosArrowForward />
                Partners
              </div>
            </div>
          </div>

          <div>
            <div className="component_footer">
              <h4>Get In Touch</h4>
              <div className="nav-links">
                <HiLocationMarker />
                Visit us
              </div>
              <div className="nav-links">
                <IoCallSharp />
                +91 82383 91804
              </div>
              <div className="nav-links">
                <HiMail />
                info@re-pos.in
              </div>
              <div className="nav-links">
                <FaStar />
                Google Review
              </div>
            </div>
            <div className="icons">
              <div className="icon">
                <FaFacebook />
              </div>
              <div className="icon">
                <FaLinkedin />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaWhatsapp />
              </div>
            </div>
            <div className="icons-flags">
              <div className="icon-flag">
                <img src={Flag1} alt="" />
              </div>
              <div className="icon-flag">
                <img src={Flag6} alt="" />
              </div>
              <div className="icon-flag">
                <img src={Flag3} alt="" />
              </div>
            </div>
            <div className="icons-flags">
              <div className="icon-flag">
                <img src={Flag5} alt="" />
              </div>
              <div className="icon-flag">
                <img src={Flag4} alt="" />
              </div>
              <div className="icon-flag">
                <img src={Flag2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="cities">
          <div>India</div>
          <div>Ahmedabad</div>
          <div>Goa</div>
          <div>Hyderabad</div>
          <div>Mumbai</div>
          <div>Pune</div>
          <div>Surat</div>
          <div>Vadodara</div>
          <div>Saudi Arabia</div>
          <div>Jeddah</div>
          <div>Mauritius</div>
          <div>Kenya</div>
          <div>Nairobi</div>
          <div>Ghana</div>
          <div>Accra</div>
          <div>Tanzania</div>
          <div>Uganda</div>
          <div>Mauritius</div>
          <div>Rwanda</div>
        </div>
        <hr className="line" />
        <div className="copyright">
          <h6> © 2023 All Rights Reserved by Resolute Solutions.</h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
