import React from "react";
import { Link } from "react-router-dom";
import "./CalcCard.css";

function CalcCard(props) {
  return (
    <div className="col-12 col-md-3">
      <Link to={props.pageLink} className="link-tag">
        <div className="calculation-card text-center mb-3 d-flex flex-column justify-content-center">
          <h1 className="calculation-card-title">{props.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default CalcCard;
