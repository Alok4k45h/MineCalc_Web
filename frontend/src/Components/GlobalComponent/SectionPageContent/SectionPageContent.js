import React, { Component } from "react";

import CalcCard from "../CalcCard/CalcCard";

import "./SectionPageContent.css";

class SectionPageContent extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;
    const { RockMechanicsFormulaList, sectionName } = this.props;

    const searchResults = RockMechanicsFormulaList.filter(
      (data) =>
        data.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="app-container">
        <div className="sectionPage-search-container">
          <h1 className="heading">{sectionName}</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search Formula"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="sectionPage-list">
            {searchResults.map((data) => (
              <CalcCard title={data.title} pageLink={data.pageLink} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SectionPageContent;
