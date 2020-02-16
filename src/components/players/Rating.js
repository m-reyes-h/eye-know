import React from "react";

const Rating = ({correctAnswers}) => {

  return (
    <div className="player-rating d-flex flex-row justify-content-center px-3">
      {Array.apply(null, Array(5)).map((r, i) => (
        <div key={i} className={`rating-item ${i < correctAnswers ? 'checked' : ''}`}></div>
      ))}
    </div>
  );
};

export default Rating;
