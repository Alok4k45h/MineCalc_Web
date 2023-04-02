import React, { Component } from "react";

class PressureMineCalc extends Component {
  constructor() {
    super();

    this.state = {
      r: "null",
      n: "null",
      dailyoutput: "null",
    };

    this.rChangeHandler = this.rChangeHandler.bind(this);
    this.nChangeHandler = this.nChangeHandler.bind(this);
    this.dailyoutputChangeHandler = this.dailyoutputChangeHandler.bind(this);
    this.calculateHandler = this.calculateHandler.bind(this);
    this.demoDataHandler = this.demoDataHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  rChangeHandler(event) {
    this.setState({ r: event.target.value });
  }

  nChangeHandler(event) {
    this.setState({ n: event.target.value });
  }
  dailyoutputChangeHandler(event) {
    this.setState({ dailyoutput: event.target.value });
  }

  calculateHandler() {
    console.log(this.state);
    const { r, n, dailyoutput } = this.state;
    var x = n * 6.5;
    var y = dailyoutput * 2.5;
    var res = "null";
    var air = "null";
    if (x > y) {
      air = x / 60;
      res = r * air * air;
    }
    if (x <= y) {
      air = y / 60;
      res = r * air * air;
    }
    const result = res / 10 ** 6;
    this.setState({ output: result });
  }

  demoDataHandler() {
    this.setState({
      r: 4,
      n: 2,
      dailyoutput: 7,
      output: null,
    });
  }
  resetHandler() {
    this.setState({
      r: "null",
      n: "null",
      dailyoutput: "null",
      output: null,
    });
  }

  render() {
    return (
      <div>
        <div className="page-section pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <img src="./fan.jpg" className="page-section-image" alt="" />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Pressure Drop in a mine
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    R(Ns2/m8):
                    <input
                      value={this.state.r}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the R Value"
                      onChange={this.rChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    n:
                    <input
                      value={this.state.n}
                      className="ml-3"
                      type="number"
                      placeholder="Enter no of person working in largest shift"
                      onChange={this.nChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    dailyOutput(tonne):
                    <input
                      value={this.state.dailyoutput}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the daily output of coal"
                      onChange={this.dailyoutputChangeHandler}
                    />
                  </label>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-4 mb-5">
                      <div
                        className="btn btn-outline-dark"
                        onClick={this.demoDataHandler}
                      >
                        Demo data
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 mb-5">
                      <div
                        className="btn btn-outline-dark"
                        onClick={this.calculateHandler}
                      >
                        Calculate
                      </div>
                    </div>

                    <div className="col-12 col-sm-4 mb-5">
                      <div
                        className="btn btn-outline-dark"
                        onClick={this.resetHandler}
                      >
                        Reset
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="page-section-sub-heading">Output</h3>
                </div>
                <div className="col-12">
                  <p>Pressure drop(Mpa) : {this.state.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PressureMineCalc;
