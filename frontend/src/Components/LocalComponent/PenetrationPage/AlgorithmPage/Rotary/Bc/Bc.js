import React, { useState, useMemo } from "react";
import "./Bc.css";

function Bc() {
  const [K, setK] = useState("");
  const [E, setE] = useState("");
  const [RC, setRC] = useState("");

  const calculatePenetrationRate = () => {
    const flag = K * Math.log10(E / (RC / 12));
    const ans = 6 * 10 ** flag;
    return ans.toFixed(3);
  };

  const penetrationRate = useMemo(() => calculatePenetrationRate(), [K, E, RC]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDemoData = () => {
    setK(0.9);
    setE(500);
    setRC(80);
  };

  const handleResetData = () => {
    setK("");
    setE("");
    setRC("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./bc.png" alt="" className="bc-img" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="input-heading mb-3">
            Bauer and Calder,1967-Penetration Rate Calculation
          </h1>
          <p className="input-para mb-3">Input</p>
          <form onSubmit={handleSubmit}>
            <label> K-factor(K):</label>
            <input
              type="number"
              value={K}
              onChange={(event) => setK(event.target.value)}
              placeholder="Enter K Value"
              min="0"
              max="100"
              className="ml-3"
            />

            <br className="mb-3" />

            <label>Pulldown Force(E):</label>
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

export default Bc;
