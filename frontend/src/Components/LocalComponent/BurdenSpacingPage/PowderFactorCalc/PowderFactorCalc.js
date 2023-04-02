import React, { Component } from "react";
import "./PowderFactorCalc.css";

// PowderFactorCalc Component
class PowderFactorCalc extends Component {
  constructor() {
    super();

    this.state = {
      burden: "null",
      spacing: "null",
      height: "null",
      stemming: "null",
      diameter: "null",
      subdrill: "null",
      explosiveDensity: "null",
    };

    this.burdenChangeHandler = this.burdenChangeHandler.bind(this);
    this.spacingChangeHandler = this.spacingChangeHandler.bind(this);
    this.heightChangeHandler = this.heightChangeHandler.bind(this);
    this.stemmingChangeHandler = this.stemmingChangeHandler.bind(this);
    this.diameterChangeHandler = this.diameterChangeHandler.bind(this);
    this.subdrillChangeHandler = this.subdrillChangeHandler.bind(this);
    this.explosiveDensityChangeHandler =
      this.explosiveDensityChangeHandler.bind(this);
    this.calculateHandler = this.calculateHandler.bind(this);
    this.demoDataHandler = this.demoDataHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  burdenChangeHandler(event) {
    this.setState({ burden: event.target.value });
  }

  spacingChangeHandler(event) {
    this.setState({ spacing: event.target.value });
  }

  heightChangeHandler(event) {
    this.setState({ height: event.target.value });
  }

  stemmingChangeHandler(event) {
    this.setState({ stemming: event.target.value });
  }

  diameterChangeHandler(event) {
    this.setState({ diameter: event.target.value });
  }

  subdrillChangeHandler(event) {
    this.setState({ subdrill: event.target.value });
  }

  explosiveDensityChangeHandler(event) {
    this.setState({ explosiveDensity: event.target.value });
  }

  calculateHandler() {
    const {
      burden,
      spacing,
      height,
      stemming,
      diameter,
      subdrill,
      explosiveDensity,
    } = this.state;
    const x = parseInt(height) + parseInt(subdrill) - parseInt(stemming);
    const result =
      (3.14 * diameter * diameter * x * explosiveDensity) /
      (burden * spacing * height * 1000 * 1000 * 4);

    this.setState({ output: result });
  }

  demoDataHandler() {
    this.setState({
      burden: 5,
      spacing: 10,
      height: 15,
      stemming: 20,
      diameter: 14,
      subdrill: 18,
      explosiveDensity: 15,
      output: null,
    });
  }
  resetHandler() {
    this.setState({
      burden: "null",
      spacing: "null",
      height: "null",
      stemming: "null",
      diameter: "null",
      subdrill: "null",
      explosiveDensity: "null",
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
                <img
                  src="./powderFactor.jpg"
                  className="page-section-image"
                  alt=""
                />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Powder Factor Calculation
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    Burden(m):
                    <input
                      value={this.state.burden}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Burden Value"
                      onChange={this.burdenChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Spacing(m):
                    <input
                      value={this.state.spacing}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Spacing Value"
                      onChange={this.spacingChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Height(m):
                    <input
                      value={this.state.height}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Height Value"
                      onChange={this.heightChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Stemming(m):
                    <input
                      value={this.state.stemming}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Rock Density Value"
                      onChange={this.stemmingChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Diameter(mm):
                    <input
                      value={this.state.diameter}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Diameter Value"
                      onChange={this.diameterChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Subdrill(m):
                    <input
                      value={this.state.subdrill}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Subdrill Value"
                      onChange={this.subdrillChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Density of Explosive(kg/m3):
                    <input
                      value={this.state.explosiveDensity}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Explosive Density Value"
                      onChange={this.explosiveDensityChangeHandler}
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
                  <p>Powder Factor(kg/m3) : {this.state.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PowderFactorCalc;
