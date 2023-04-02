import React, { useState } from "react";
import axios from "axios";
import "./Usbm.css";

function Usbm() {
  const [data, setData] = useState({
    p: "",
    r: "",
    d: "",
    RC: "",
  });

  const [ans, setAns] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("hello");
    axios
      // .post("http://localhost:8000/usbm", data)
      .post("http://127.0.0.1:8000/hndl_url/req_usbm_vp", JSON.stringify(data))
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
    setData({
      p: 2,
      r: 4,
      d: 6,
      RC: 80,
    });
  };

  const handleResetData = () => {
    setData({
      p: "",
      r: "",
      d: "",
      RC: "",
    });
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
              value={data.p}
              onChange={handleInputChange}
              placeholder="Enter P Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>Specific Transmission Output(R):</label>
            <input
              type="number"
              value={data.r}
              onChange={handleInputChange}
              placeholder="Enter R Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label> Blasthole Diameter(D):</label>
            <input
              type="number"
              value={data.d}
              onChange={handleInputChange}
              placeholder="Enter D Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label> UCS of Rock(RC):</label>
            <input
              type="number"
              value={data.RC}
              onChange={handleInputChange}
              placeholder="Enter E Value"
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
