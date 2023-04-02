import React, { useState, useMemo } from "react";
import "./Benaola.css";

function Benaola() {
  const [I, setI] = useState("");
  const [E, setE] = useState("");
  const [D, setD] = useState("");
  const [N, setN] = useState("");
  const [vButton, setVbutton] = useState("");
  const [vBevel, setVbevel] = useState("");

  const calculatePenetrationRate = () => {
    const lf = 1.7 * D - 0.7;
    const num = E * N * (51 * I + 90) * 10 ** -6;
    const den = D * lf ** 0.5;
    const ans = num / den;
    setVbutton((ans * 1.15).toFixed(5));
    setVbevel((ans * 0.85).toFixed(5));
    return ans.toFixed(5);
  };

  const penetrationRate = useMemo(
    () => calculatePenetrationRate(),
    [I, E, D, N, vBevel, vButton]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDemoData = () => {
    setI(25);
    setE(30);
    setD(10);
    setN(3);
  };

  const handleResetData = () => {
    setI("");
    setE("");
    setD("");
    setN("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./benaola.png" alt="" className="benaola-img" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="input-heading mb-3">
            Benaola,1985-Penetration Rate Calculation
          </h1>
          <p className="input-para mb-3">Input</p>
          <form onSubmit={handleSubmit}>
            <label> Ip(I):</label>
            <input
              type="number"
              value={I}
              onChange={(event) => setI(event.target.value)}
              placeholder="Enter Ip Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>Energy per Blow(E):</label>
            <input
              type="number"
              value={E}
              onChange={(event) => setE(event.target.value)}
              placeholder="Enter E Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label> Bit Diameter(D):</label>
            <input
              type="number"
              value={D}
              onChange={(event) => setD(event.target.value)}
              placeholder="Enter D Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label> Number of Blows/min(N):</label>
            <input
              type="number"
              value={N}
              onChange={(event) => setN(event.target.value)}
              placeholder="Enter N Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <button
              type="button"
              onClick={handleDemoData}
              className="btn btn-outline-dark mr-3 mb-3"
            >
              Demo Data
            </button>

            <button
              type="submit"
              onClick={calculatePenetrationRate}
              className="btn btn-outline-dark mr-3 mb-3"
            >
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
                <p className="result">
                  Penetration Rate(VP):
                  <br className="mb-3" />
                  For Insert Bit: {penetrationRate} feet/hr
                  <br className="mb-3" />
                  For Button Bit: {vButton} feet/hr
                  <br className="mb-3" />
                  For Bevel Bit: {vBevel} feet/hr
                </p>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Benaola;
