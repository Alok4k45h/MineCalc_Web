import React from "react";
import "./AimSection.css";

function AimSection() {
  return (
    <div className="pt-5 pb-5">
      <div>
        <div className="aim-section pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="text-center">
                  <img src="./aim.jpeg" className="aims-section-img" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-7 aim-section-content-container">
                <h1 className="aim-section-heading">Aim</h1>

                <p className="aim-section-description">
                  Our aim is to provide a comprehensive and user-friendly web
                  application specifically tailored for the mining industry. Our
                  platform features advanced algorithms designed to assist in
                  solving the mining problem involving mining formula, ranging
                  from drilling and blasting to rock mechanics, mine
                  ventilation, and mine planning and design. While our current
                  demo showcases a fraction of our capabilities, our ultimate
                  goal is to offer a complete and all-encompassing solution for
                  the industry.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-md-5">
                <div className="text-center">
                  <img src="./vision.png" className="aims-section-img" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-7 aim-section-content-container">
                <h1 className="aim-section-heading">Vision</h1>

                <p className="aim-section-description">
                  Our vision is to establish a comprehensive and globally
                  accessible web platform that serves as the ultimate reference
                  for mining formulae across all mining domains. We strive to
                  create a vibrant and engaged mining community where users can
                  leverage our extensive formulae database, correct obsolete
                  information, and collaborate with industry peers to advance
                  the field.To enhance the functionality of our platform, we are
                  actively integrating cutting-edge technology that enables
                  multiple inputs to be solved simultaneously, providing users
                  with unprecedented convenience and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AimSection;
