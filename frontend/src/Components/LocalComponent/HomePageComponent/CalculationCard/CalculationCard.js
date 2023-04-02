import React, { Component } from "react";
import pageCard from "../../../../Resources/HomePage/PageCard";
import CalcCard from "../../../GlobalComponent/CalcCard/CalcCard";
import "./CalculationCard.css";

class CalculationCard extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;

    const searchResults = pageCard.filter((data) =>
      data.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="calculation-app-container" id="calculationSection">
        <div className="container">
          <div className="row">
            <div className="calculation-search-container text-center">
              <h1 className="calculation-heading">
                Important Formula: a glance
              </h1>
              <div className="calculation-search-input-container">
                <input
                  type="search"
                  className="calculation-search-input"
                  placeholder="Search by Title"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                  alt="search icon"
                  className="calculation-search-icon"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ul className="calculation-list">
                {searchResults.map((each) => {
                  return (
                    <CalcCard title={each.title} pageLink={each.pageLink} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculationCard;
