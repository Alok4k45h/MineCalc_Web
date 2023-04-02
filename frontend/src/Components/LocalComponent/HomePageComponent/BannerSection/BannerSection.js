import React from "react";
import Typewriter from "typewriter-effect";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div
      className="banner-sections-bg-container d-flex justify-content-center flex-column"
      style={{
        backgroundImage: `url(https://www.milkenreview.org/assets/Gilbert-Alex-Mining-in-Space-q2v1-2.jpg)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1 className="banner-h1">
              Welcome
              <br />
              In
              <br />
              Modern Mining
              <br />
              Era
            </h1>
          </div>

          <div className="col-12 col-md-8">
            <div className="text-center mt-3">
              <h1 className="banner-heading-home mb-3">
                <Typewriter
                  options={{
                    strings: [
                      "Unleash the Potential of Mining with Accurate Calculations",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="banner-caption-home mb-4">
                Perform Any Calculation With Ease
              </p>
              <a href="#domainSection">
                <button className="btn btn-outline-light">Explore</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
