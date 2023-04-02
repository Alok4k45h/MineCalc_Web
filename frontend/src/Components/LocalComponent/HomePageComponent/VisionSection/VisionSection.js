import React from "react";
import "./VisionSection.css";

function VisionSection() {
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center shadow p-3 mb-5 bg-white rounded">
              <h1 className="vision-section-sub-heading mb-3">Aim</h1>

              <p className="vision-section-description">
                We are developing a web page application specifically for the
                mining industry. On this page, we have designed algorithms on
                mining formulae from most of the domains of mining, such as
                drilling and blasting, rock mechanics, mine ventilation, and
                mine planning and design. We have only shown a demo here, but
                our goal is to cover everything. Each problem has been created
                to be user-friendly. It will also help the learner develop a
                passion for mining. Our algorithm was created in a unique
                approach. In the case of multiple parameter input, we also
                applied some data structure ideas to make input possible. Our
                website will also be dynamic in nature.
              </p>
            </div>

            <div className="col-md-1"></div>

            <div className="col-12 col-md-5 d-flex flex-column justify-content-center shadow p-3 mb-5 bg-white rounded">
              <h1 className="vision-section-sub-heading mb-3">Vision</h1>

              <p className="vision-section-description">
                We want to create a webpage that has all of the formulae for the
                entire mining domain. We also want to create a mining community
                where people will use these formulae and can correct them if
                they become obsolete. We aim to create a site that can be viewed
                from anywhere in the world and where miners can find any formula
                with a single click. We're also working on integrating
                technology that will allow those equations to solve several
                inputs at once. We're also creating this website in the hopes of
                generating interest in the mining field among students. This
                website will also assist researchers in obtaining collated
                material. This will assist students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
