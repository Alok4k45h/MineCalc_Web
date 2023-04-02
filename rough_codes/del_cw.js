import React, { useState } from "react";
import axios from "axios";
import "./Cw.css";

function Cw() {
  const [data, setData] = useState({
    Rc: "",
    E: "",
    Nr: "",
    // RC: "",
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

    axios
      // .post("http://localhost:8000/cw", data)
      .post("http://127.0.0.1:8000/hndl_url/req_Calder_Workman", JSON.stringify(data))
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
      Rc: 7,
      E: 4,
      Nr: 6,
      // RC: "",
    });
  };

  const handleResetData = () => {
    setData({
      Rc: "",
      E: "",
      Nr: "",
      // RC: "",
    });
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
            <label> Feed Force(E):</label>
            <input
              type="number"
              value={data.E}
              onChange={handleInputChange}
              placeholder="Enter E Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            <label>Bit Rotation Speed(Nr):</label>
            <input
              type="number"
              value={data.Nr}
              onChange={handleInputChange}
              placeholder="Enter N Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" />

            {/* <label> Blasthole Diameter(D):</label>
            <input
              type="number"
              value={data.d}
              onChange={handleInputChange}
              placeholder="Enter D Value"
              min="0"
              max="100"
              className="ml-3"
            />
            <br className="mb-3" /> */}

            <label> UCS of Rock(Rc):</label>
            <input
              type="number"
              value={data.Rc}
              onChange={handleInputChange}
              placeholder="Enter Rc Value"
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
