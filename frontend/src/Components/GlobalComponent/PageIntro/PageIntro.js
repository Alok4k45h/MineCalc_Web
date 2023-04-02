import React from "react";
import "./PageIntro.css";

function PageIntro(props) {
  return (
    <div className="mt-5 pt-5 pb-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="page-intro-section-heading mb-3">{props.heading}</h1>
            <p className="page-intro-section-description">
              {props.description}
            </p>
          </div>

          {/* <div className="col-12">
            <img
              src={props.imgLink}
              alt=""
              className="page-intro-section-image"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PageIntro;
