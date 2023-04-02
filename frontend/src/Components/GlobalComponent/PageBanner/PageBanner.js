import React from "react";
import Typewriter from "typewriter-effect";
import "./PageBanner.css";

function PageBanner(props) {
  return (
    <div className="banner-page-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-center text-center">
            <h1 className="banner-page-section-heading pb-2">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`Welcome to ${props.title} Section`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`${props.desc}`)
                    .pauseFor(2500)
                    .start();
                }}
              />
            </h1>
            <div className="d-md-none">
              <img src="" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-5 order-2 order-md-1 d-none d-md-block ">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
