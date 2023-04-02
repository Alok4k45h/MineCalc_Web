import React, { useState } from "react";
import Baurer from "../AlgorithmPage/Rotary/Baurer/Baurer";
import Bc from "../AlgorithmPage/Rotary/Bc/Bc";
import Cw from "../AlgorithmPage/Rotary/Cw/Cw";
import Benaola from "../AlgorithmPage/RotaryPercussive/Benaola/Benaola";
import Norway from "../AlgorithmPage/RotaryPercussive/Norway/Norway";
import Usbm from "../AlgorithmPage/RotaryPercussive/Usbm/Usbm";

import "./ToolSelection.css";

function ComponentRotaryPurcussive() {
  const [showComponent, setShowComponent] = useState("0");
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (component) => {
    setShowComponent(component);
    setSelectedButton(component);
  };

  let componentToShow;

  if (showComponent === "1") {
    componentToShow = <Usbm />;
  } else if (showComponent === "2") {
    componentToShow = <Norway />;
  } else if (showComponent === "3") {
    componentToShow = <Benaola />;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="tool-heading">
              {" "}
              For Rotary Purcussive Drilling Machine
            </h1>
            <p className="tool-para">
              Available Algorithm for Calculation of Penetration Rate
              <br />
              Select any one Algorithm of Your Interest
            </p>

            <div className="">
              <button
                className={
                  selectedButton === "1"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("1")}
              >
                USBM, 1969
              </button>
              <button
                className={
                  selectedButton === "2"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("2")}
              >
                Norway, 1979
              </button>
              <button
                className={
                  selectedButton === "3"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("3")}
              >
                Benaola, 1985
              </button>
              {componentToShow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentRotary() {
  const [showComponent, setShowComponent] = useState("0");
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (component) => {
    setShowComponent(component);
    setSelectedButton(component);
  };

  let componentToShow;

  if (showComponent === "1") {
    componentToShow = <Bc />;
  } else if (showComponent === "2") {
    componentToShow = <Baurer />;
  } else if (showComponent === "3") {
    componentToShow = <Cw />;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="tool-heading">For Rotary Drilling Machine</h3>
            <p className="tool-para">
              Available Algorithm for Calculation of Penetration Rate
              <br />
              Select any one Algorithm of Your Interest
            </p>

            <div className="">
              <button
                className={
                  selectedButton === "1"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("1")}
              >
                Bauer and Calder, 1967
              </button>
              <button
                className={
                  selectedButton === "2"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("2")}
              >
                Baurer, 1971
              </button>
              <button
                className={
                  selectedButton === "3"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("3")}
              >
                Calder and Workman, 1994
              </button>
              {componentToShow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolSelection() {
  const [showComponent, setShowComponent] = useState("0");
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (component) => {
    setShowComponent(component);
    setSelectedButton(component);
  };

  let componentToShow;

  if (showComponent === "1") {
    componentToShow = <ComponentRotaryPurcussive />;
  } else if (showComponent === "2") {
    componentToShow = <ComponentRotary />;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="penetration-heading">
              Calculation of Penetration Rate
            </h1>
            <p className="penetration-para">
              First Select type of drilling Method
            </p>

            <div className="">
              <button
                className={
                  selectedButton === "1"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("1")}
              >
                Rotary Percussive drilling
              </button>
              <button
                className={
                  selectedButton === "2"
                    ? "selected-button"
                    : "not-selected-button"
                }
                onClick={() => handleButtonClick("2")}
              >
                Rotary drilling
              </button>
              {componentToShow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolSelection;
