import React from 'react';

const Question = ({pictureURL}) => {
  return (
    <div className="question-area">
      <div className="area-image d-flex justify-content-center">
        <img
          alt="g"
          src={require(`../../assets/trivia/${pictureURL}.jpg`)}
          className="card-image"
        ></img>
      </div>
    </div>
  );
}

export default Question;