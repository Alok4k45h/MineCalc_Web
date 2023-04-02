import React from "react";
import { Link } from "react-router-dom";
import { FaCopyright, FaEnvelope, FaMapMarked } from "react-icons/fa";
import "./FooterSection.css";

function FooterSection() {
  return (
    <div className="footer-section mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className="footer-section-text">
              "To help, inspire and excite the mining Community
              <br /> through creativity and New Cutting-edge Technology."
            </h1>
            <p className="footer-section-sub-heading">#MISSION</p>
          </div>
          <div className="col-12 col-md-4 text-end">
            <Link as={Link} to={"/#"} className="link-tag">
              <h1 className="footer-icon-h1">
                <img
                  src="./mc_logo.png"
                  className="footer-icon-logo"
                  alt="..."
                />
                MineCalc
              </h1>
            </Link>
          </div>
        </div>
        <hr className="hr-tag" />
        <div className="row">
          <div className="col-12 col-md-6">
            <FaCopyright className="copyright-icon mr-2" />
            <span className="footer-section-copyright">2023 | MineCalc</span>
          </div>
          <div className="col-12 col-md-3">
            <FaMapMarked className="copyright-icon mr-2" />
            <span className="footer-section-copyright">IIT (ISM) DHANBAD</span>
          </div>
          <div className="col-12 col-md-3 text-end">
            <FaEnvelope className="copyright-icon mr-2" />
            <span className="footer-section-copyright">mineCalc@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
