import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="pt-5 pb-5">
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-12 mt-3">
              <h1 className="pro-heading">About Us</h1> <hr />
            </div>
          </div>
        </div>

        <div className="about-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-right border border-primary rounded-right">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="text-center">
                  <img src="./aim.jpeg" className="about-section-img" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-7 about-section-content-container">
                <h1 className="about-section-heading">Our Aim</h1>

                <p className="about-section-description">
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
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end">
          <div className="abouts-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-left border border-warning rounded-left">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-5 order-1 order-md-2">
                  <div className="text-center">
                    <img
                      src="./vision.png"
                      className="abouts-section-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7 order-2 order-md-1 about-section-content-container">
                  <h1 className="abouts-section-heading">Our Vision</h1>

                  <p className="abouts-section-description">
                    Our vision is to establish a comprehensive and globally
                    accessible web platform that serves as the ultimate
                    reference for mining formulae across all mining domains. We
                    strive to create a vibrant and engaged mining community
                    where users can leverage our extensive formulae database,
                    correct obsolete information, and collaborate with industry
                    peers to advance the field.To enhance the functionality of
                    our platform, we are actively integrating cutting-edge
                    technology that enables multiple inputs to be solved
                    simultaneously, providing users with unprecedented
                    convenience and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section pt-5 pb-5 shadow-lg p-3 mb-5 bg-white w-75 border-right border border-primary rounded-right">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="text-center">
                  <img
                    src="./whoWeare.png"
                    className="about-section-img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 about-section-content-container">
                <h1 className="about-section-heading">Who We Are</h1>

                <p className="about-section-description">
                  Welcome to our website! We are a group of passionate
                  individuals currently pursuing B-tech in mining engineering
                  from IIT(ISM) DHANBAD. As we all know, the mining industry is
                  the prime source of all the materials that we use in our daily
                  life. Therefore, we have decided to focus on developing tools
                  that will aid researchers, students, and industry experts to
                  ease complex mining Calculations. We strongly believe that the
                  formulas found after great research are the ruling principles
                  of this industry. Therefore, it is our deliberate attempt to
                  bring all the calculation based information related to mining
                  to one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
