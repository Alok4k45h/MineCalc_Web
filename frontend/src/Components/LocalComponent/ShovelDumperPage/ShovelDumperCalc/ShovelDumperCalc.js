import React, { Component } from "react";
import "./ShovelDumperCalc.css";

class ShovelDumperCalc extends Component {
  constructor() {
    super();

    this.state = {
      annualproductionofcoal: null,
      annualproductionofoverburden: null,
      dumpersize: null,
      shovelsize: null,
      bucketfillfactor: null,
      cycletimedumper: null,
      cycletimeshovel: null,
      workingdaysinyear: null,
      workinghoursinday: null,
      output: [null, null],
    };

    this.annualproductionofcoalChangeHandler =
      this.annualproductionofcoalChangeHandler.bind(this);
    this.annualproductionofoverburdenChangeHandler =
      this.annualproductionofoverburdenChangeHandler.bind(this);
    this.dumpersizeChangeHandler = this.dumpersizeChangeHandler.bind(this);
    this.shovelsizeChangeHandler = this.shovelsizeChangeHandler.bind(this);
    this.bucketfillfactorChangeHandler =
      this.bucketfillfactorChangeHandler.bind(this);
    this.cycletimedumperChangeHandler =
      this.cycletimedumperChangeHandler.bind(this);
    this.cycletimeshovelChangeHandler =
      this.cycletimeshovelChangeHandler.bind(this);
    this.workingdaysinyearChangeHandler =
      this.workingdaysinyearChangeHandler.bind(this);
    this.workinghoursindayChangeHandler =
      this.workinghoursindayChangeHandler.bind(this);
    this.calculateHandler = this.calculateHandler.bind(this);
    this.demoDataHandler = this.demoDataHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  annualproductionofcoalChangeHandler(event) {
    this.setState({ annualproductionofcoal: event.target.value });
  }

  annualproductionofoverburdenChangeHandler(event) {
    this.setState({ annualproductionofoverburden: event.target.value });
  }

  dumpersizeChangeHandler(event) {
    this.setState({ dumpersize: event.target.value });
  }
  shovelsizeChangeHandler(event) {
    this.setState({ shovelsize: event.target.value });
  }
  bucketfillfactorChangeHandler(event) {
    this.setState({ bucketfillfactor: event.target.value });
  }
  cycletimedumperChangeHandler(event) {
    this.setState({ cycletimedumper: event.target.value });
  }

  cycletimeshovelChangeHandler(event) {
    this.setState({ cycletimeshovel: event.target.value });
  }

  workingdaysinyearChangeHandler(event) {
    this.setState({ workingdaysinyear: event.target.value });
  }

  workinghoursindayChangeHandler(event) {
    this.setState({ workinghoursinday: event.target.value });
  }

  calculateHandler() {
    const {
      annualproductionofcoal,
      annualproductionofoverburden,
      dumpersize,
      shovelsize,
      bucketfillfactor,
      cycletimedumper,
      cycletimeshovel,
      workingdaysinyear,
      workinghoursinday,
    } = this.state;
    var coal = (annualproductionofcoal * 10 ** 6) / 1.4;
    var totalmaterial =
      parseInt(coal) + parseInt(annualproductionofoverburden * 10 ** 6);
    var materialperday = totalmaterial / workingdaysinyear;
    var shovelproduction =
      shovelsize *
      bucketfillfactor *
      (60 / cycletimeshovel) *
      workinghoursinday;
    var noofshovel = materialperday / shovelproduction;
    var fillingdumper = dumpersize / shovelsize;
    var dumperfillingtime = fillingdumper * cycletimeshovel;
    var dumperpershovel = cycletimedumper / dumperfillingtime + 1;
    var noofdumper = noofshovel * dumperpershovel;
    const result = [Math.ceil(noofshovel), Math.ceil(noofdumper)];

    this.setState({ output: result });
    console.log(this.state.output[0]);
  }

  demoDataHandler() {
    this.setState({
      annualproductionofcoal: 5,
      annualproductionofoverburden: 10,
      dumpersize: 15,
      shovelsize: 20,
      bucketfillfactor: 25,
      cycletimedumper: 78,
      cycletimeshovel: 11,
      workingdaysinyear: 10,
      workinghoursinday: 13,
      output: [null, null],
    });
  }
  resetHandler() {
    this.setState({
      annualproductionofcoal: "null",
      annualproductionofoverburden: "null",
      dumpersize: "null",
      shovelsize: "null",
      bucketfillfactor: "null",
      cycletimedumper: "null",
      cycletimeshovel: "null",
      workingdaysinyear: "null",
      workinghoursinday: "null",
      output: [null, null],
    });
  }
  render() {
    return (
      <div>
        <div className="page-section pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <img src="./shovel.png" className="page-section-image" alt="" />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Shovel Dumper Combination
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    coal production per annum(Milliontonne):
                    <input
                      value={this.state.annualproductionofcoal}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the coal production per annum"
                      onChange={this.annualproductionofcoalChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    overburden removal per year(Million m3):
                    <input
                      className="ml-3"
                      value={this.state.annualproductionofoverburden}
                      type="number"
                      placeholder="Enter the overburden removal per year"
                      onChange={this.annualproductionofoverburdenChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    dumpersize(m3):
                    <input
                      value={this.state.dumpersize}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Height Value"
                      onChange={this.dumpersizeChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    shovelsize(m3):
                    <input
                      value={this.state.shovelsize}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the shovel size"
                      onChange={this.shovelsizeChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    bucketfillfactor:
                    <input
                      value={this.state.bucketfillfactor}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the bucketfillfactor"
                      onChange={this.bucketfillfactorChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    cycletimedumper(min):
                    <input
                      value={this.state.cycletimedumper}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the cycle time of dumper"
                      onChange={this.cycletimedumperChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    cycletimeshovel(min):
                    <input
                      value={this.state.cycletimeshovel}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the cycle time of shovel"
                      onChange={this.cycletimeshovelChangeHandler}
                    />
                  </label>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    workingdaysinyear(days):
                    <input
                      value={this.state.workingdaysinyear}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the working days in a year"
                      onChange={this.workingdaysinyearChangeHandler}
                    />
                  </label>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    workinghoursinday(hours):
                    <input
                      value={this.state.workinghoursinday}
                      className="ml-3"
                      type="number"
                      placeholder="Enter the working hours in a day"
                      onChange={this.workinghoursindayChangeHandler}
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
                  <p>Number of Shovel : {this.state.output[0]}</p>
                  <p>Number of Dumper : {this.state.output[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShovelDumperCalc;
