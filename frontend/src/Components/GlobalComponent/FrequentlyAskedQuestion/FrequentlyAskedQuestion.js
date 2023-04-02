import React from "react";
import "./FrequentlyAskedQuestion.css";
import ExpandCollapseModal from "../ExpandCollapseModal/ExpandCollapseModal";

function FrequentlyAskedQuestion(props) {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-12">
          <h1 className="question-section-heading">Frequently used Question</h1>

          {props.Faq.map((each) => {
            return (
              <ExpandCollapseModal
                question={each.question}
                answer={each.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestion;
