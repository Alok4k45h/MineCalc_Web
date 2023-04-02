import React from "react";
import { FaLinkedin } from "react-icons/fa";
import DeveloperData from "./DeveloperData";
import "./DeveloperSection.css";

function DeveloperSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3 text-center">
            <h1 className="pro-heading">Developers 🧑‍💻</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="developer-section pt-5 pb-5 text-center">
        <div className="container">
          <div className="row flex-with-center">
            {DeveloperData.map((person) => {
              return (
                <div
                  className="col-12 col-md-4 flex-with-center"
                  data-aos="fade-up"
                >
                  <div className="developer-card mb-3 shadow-lg p-3 mb-5 bg-white w-75">
                    <img
                      src={person.image}
                      className="developer-card-image"
                      alt=""
                    />

                    <div className="developer-content">
                      <h1 className="developer-card-title mt-3">
                        {person.name}
                      </h1>
                      <p className="developer-card-description">
                        {person.course}
                      </p>
                      <p className="developer-card-description">
                        {person.designation}
                      </p>

                      <div>
                        <a
                          href={person.portfoLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/2048px-Information_icon.svg.png"
                            alt=""
                            className="dev-icon"
                          />
                        </a>

                        <a
                          href={person.linkedinLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedin className="dev-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperSection;
