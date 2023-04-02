import React, { useState } from "react";
import axios from "axios";
import "./Norway.css";

function Norway() {
  const [b, setB] = useState("");
  const [sj, setSJ] = useState("");
  const [drm, setDrm] = useState("");

  const [ans, setAns] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      // .post("http://localhost:8000/norway",
      .post("http://localhost:8001/hndl_url/norway_vp",
      JSON.stringify({
        b: b,
        sj: sj,
        drm: drm,
      }))
      .then((response) => {
        console.log("Penetration rate calculated:", response.data);
        const res = response.data;
        console.log(res);
        setAns(res);
      })
      .catch((error) => {
        console.error("Error calculating penetration rate:", error);
        // Handle the error, such as displaying an error message to the user
      });
  };

  const handleDemoData = () => {
    setB(50);
    setSJ(20);
    setDrm("hydraulicTopHammer");
  };

  const handleResetData = () => {
    setB("");
    setSJ("");
    setDrm("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./norway.jpg" alt="" className="norway-img" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="input-heading mb-3">
            Norway,1979-Penetration Rate Calculation
          </h1>
          <p className="input-para mb-3">Input</p>
          <form onSubmit={handleSubmit}>
            <label> Brittleness(S20):</label>
            <input
              type="number"
              value={b}
              onChange={(event) => setB(event.target.value)}
              placeholder="Enter Brittleness Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>SJ Value:</label>
            <input
              type="number"
              value={sj}
              onChange={(event) => setSJ(event.target.value)}
              placeholder="Enter SJ Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label htmlFor="options">Drilling Method:</label>
            <select
              id="options"
              value={drm}
              onChange={(event) => setDrm(event.target.value)}
            >
              <option value="hydraulicTopHammer">Hydraulic Top Hammer</option>
              <option value="pneumaticTopHammer">Pneumatic Top Hammer</option>
              <option value="highPressureDTH">
                High Pressure DTH Hammer(25bar)
              </option>
              <option value="rotary">Rotary</option>
              <option value="conventionalDTH">Conventional DTH</option>
            </select>
            <br className="mb-3" />

            <button
              type="button"
              onClick={handleDemoData}
              className="btn btn-outline-dark mr-3 mb-3"
            >
              Demo Data
            </button>

            <button type="submit" className="btn btn-outline-dark mr-3 mb-3">
              Calculate
            </button>

            <button
              type="button"
              onClick={handleResetData}
              className="btn btn-outline-dark mr-3 mb-3"
            >
              Reset Data
            </button>

            <p className="input-para">Output</p>

            {
              <div>
                <p className="result">Penetration Rate(VP): {ans} Cm/min</p>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Norway;