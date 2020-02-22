import React from "react";

const Result = ({ type, correct, onContinue }) => {
  return (
    <div
      className={`content pt-4 pb-5  ${
        type === "correct" ? "bg-correct" : "bg-incorrect"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center h-100 px-5 fix-width">
        <div className="d-flex align-items-center h-100 content-result-learn">
          <span className={`${ type === "correct" ? "circle-correct" : 'circle-incorrect'} d-flex justify-content-center align-items-center`}></span>
          <div className="d-flex flex-column">
            <h5 className="footer-title my-1">Correct solution:</h5>
            <p>
              {correct.correct}
            </p>
          </div>
        </div>
        <div className="next d-flex align-items-center h-100">
          <button onClick={onContinue} className={`button ${type==='correct' ? 'button-success' : 'button-danger'} `}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
