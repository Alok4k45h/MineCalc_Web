import React, { useState } from "react";
import axios from "axios";
import "./Cw.css";

function Cw() {
  const [f, setF] = useState("");
  const [n, setN] = useState("");
  const [d, setD] = useState("");
  const [RC, setRC] = useState("");

  const [ans, setAns] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      // .post("http://localhost:8000/cw", 
      .post("http://localhost:8001/hndl_url/req_Calder_Workman",
      JSON.stringify({
        f: f,
        n: n,
        d: d,
        RC: RC,
      }))
      .then((response) => {
        console.log("Penetration rate calculated:", response.data);
        const res = response.data;
        console.log(res);
        setAns(res.toFixed(5));
      })
      .catch((error) => {
        console.error("Error calculating penetration rate:", error);
        // Handle the error, such as displaying an error message to the user
      });
  };

  const handleDemoData = () => {
    setF(250);
    setN(40);
    setD(154);
    setRC(80);
  };

  const handleResetData = () => {
    setF("");
    setN("");
    setD("");
    setRC("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./cw.png" alt="" className="cw-img" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="input-heading mb-3">
            Calder and Workman,1994-Penetration Rate Calculation
          </h1>
          <p className="input-para mb-3">Input</p>
          <form onSubmit={handleSubmit}>
            <label> Feed Force(f):</label>
            <input
              type="number"
              value={f}
              onChange={(event) => setF(event.target.value)}
              placeholder="Enter f Value"
              min="0"
              max="1000"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>Bit Rotation Speed(N):</label>
            <input
              type="number"
              value={n}
              onChange={(event) => setN(event.target.value)}
              placeholder="Enter N Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label> Blasthole Diameter(D):</label>
            <input
              type="number"
              value={d}
              onChange={(event) => setD(event.target.value)}
              placeholder="Enter D Value"
              min="0"
              max="1000"
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
                <p className="result">Penetration Rate(VP): {ans} m/hr</p>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cw;