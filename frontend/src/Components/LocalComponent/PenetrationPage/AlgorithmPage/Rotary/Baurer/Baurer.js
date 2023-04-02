import React, { useState, useMemo } from "react";
import "./Baurer.css";

function Baurer() {
  const [RC, setRC] = useState("");
  const [E, setE] = useState("");
  const [D, setD] = useState("");
  const [N, setN] = useState("");

  const calculatePenetrationRate = () => {
    const ans = (61 - 28 * Math.log10(RC)) * (E / D) * (N / 300);
    return ans.toFixed(5);
  };

  const penetrationRate = useMemo(
    () => calculatePenetrationRate(),
    [RC, E, D, N]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDemoData = () => {
    setRC(50);
    setE(0.166);
    setD(6);
    setN(70);
  };

  const handleResetData = () => {
    setRC("");
    setE("");
    setD("");
    setN("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./baurer.png" alt="" className="usbm-img" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="input-heading mb-3">
            Baurer,1971-Penetration Rate Calculation
          </h1>
          <p className="input-para mb-3">Input</p>
          <form onSubmit={handleSubmit}>
            <label> UCS of Rock(RC):</label>
            <input
              type="number"
              value={RC}
              onChange={(event) => setRC(event.target.value)}
              placeholder="Enter RC Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>Feed Force(E):</label>
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

            <label> Blasthole Diameter(D):</label>
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

            <label> Rotary Speed(N):</label>
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
                  Penetration Rate(VP): {penetrationRate} feet/hr
                </p>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Baurer;
