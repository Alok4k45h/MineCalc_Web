import React, { useState } from "react";
import axios from "axios";
import "./Usbm.css";

function Usbm() {
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [d, setD] = useState("");
  const [RC, setRC] = useState("");

  const [ans, setAns] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      // .post("http://localhost:8000/usbm",
      // .post("http://127.0.0.1:8001/hndl_url/req_usbm_vp",
      .post("http://localhost:8001/hndl_url/req_usbm_vp",
      JSON.stringify({
        p: p,
        r: r,
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
    setP(1000);
    setR(4);
    setD(154);
    setRC(80);
  };

  const handleResetData = () => {
    setP("");
    setR("");
    setD("");
    setRC("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./usbm.png" alt="" className="usbm-img" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="input-heading mb-3">
            USBM,1969-Penetration Rate Calculation
          </h1>
          <p className="input-para mb-3">Input</p>
          <form onSubmit={handleSubmit}>
            <label> Drill Power(P):</label>
            <input
              type="number"
              value={p}
              onChange={(event) => setP(event.target.value)}
              placeholder="Enter P Value"
              min="0"
              max="5000"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>Specific Transmission Output(R):</label>
            <input
              type="number"
              value={r}
              onChange={(event) => setR(event.target.value)}
              placeholder="Enter R Value"
              min="0"
              max="5000"
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
              max="5000"
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
              max="5000"
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
                <p className="result">Penetration Rate(VP): {ans} Cm/min</p>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Usbm;