import React from "react";
import { Link } from "react-router-dom";
import "./DomainSection.css";

function DomainSection() {
  return (
    <div className="pt-5 pb-5 domain-container" id="domainSection">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="domain-heading">Various Mining Section</h1>
            <p className="domain-para">
              In Various Section of mining, accuracy is not an option, it's a
              necessity.
              <br />
              Let our mining calculation website provide you with the precision
              you need to make informed decisions
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-2 col-lg-3">
            <div className="shadow domain-card p-3 text-center">
              <img
                src="./rockMech.jpg"
                alt="..."
                className="domain-card-image"
              />
              <h1 className="card-h1">Rock Mechanics</h1>
              <p className="card-para">
                "Optimizing Mining Operations through Rock Mechanics Analysis"
              </p>

              <Link as={Link} to={"/rockmechanics"}>
                <button className="btn btn-outline-dark">View</button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-2 col-lg-3">
            <div className="shadow domain-card p-3 text-center">
              <img
                src="./drill.jpg"
                alt="..."
                className="domain-card-image mb-3"
              />
              <h1 className="card-h1">Drilling & Blasting</h1>
              <p className="card-para">
                "Optimizing Drilling and Blasting Through Advanced Calculations"
              </p>
              <Link as={Link} to={"/drilling"}>
                <button className="btn btn-outline-dark">View</button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-2 col-lg-3">
            <div className="shadow domain-card p-3 text-center">
              <img
                src="./venti.png"
                alt="..."
                className="domain-card-image mb-3 mt-5"
              />
              <h1 className="card-h1">Mine Ventilation</h1>
              <p className="card-para">
                "Enhancing Mine Safety with Accurate Ventilation Calculations"
              </p>
              <Link as={Link} to={"/ventilation"}>
                <button className="btn btn-outline-dark">View</button>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-2 col-lg-3">
            <div className="shadow domain-card p-3 text-center">
              <img src="./mpae.jpg" alt="..." className="domain-card-image" />
              <h1 className="card-h1">Planning & Economics</h1>
              <p className="card-para">
                "Optimizing Profits:Intersection of Planning and Economic
                Analysis"
              </p>
              <Link as={Link} to={"/planning"}>
                <button className="btn btn-outline-dark">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainSection;
