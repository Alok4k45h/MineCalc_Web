import React, { useState } from "react";
import "./ExpandCollapseModal.css";
import { Collapse } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function ExpandCollapseModal(props) {
  const [open, setOpen] = useState(false);
  let arrowIcon;
  if (open) {
    arrowIcon = <FaAngleUp className="icon-angle mr-3" />;
  } else {
    arrowIcon = <FaAngleDown className="icon-angle mr-3" />;
  }
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="text-section">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="p-3"
                >
                  <h1 className="question-text">
                    {arrowIcon}
                    {props.question}
                  </h1>
                </div>
                <Collapse in={open}>
                  <div
                    id="example-collapse-text"
                    className="answer-text ml-3 pl-3"
                  >
                    {props.answer}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandCollapseModal;
