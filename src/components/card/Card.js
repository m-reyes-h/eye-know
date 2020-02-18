import React from "react";
import Title from "./Title";
import Question from "./Question";
import Answers from './Answers'

const Card = ({ card, questionNumber, onClick, disabled }) => {
  return (
    <div className="trivia-question d-flex flex-grow-1 flex-column align-items-center justify-content-center">
      <div className="content d-flex flex-column justify-content-center flex-grow-1">
        {/* Title */}
        <Title questionNumber={questionNumber}>
          {card[questionNumber].text}
        </Title>

        {/* Question Image */}
        {questionNumber === "questionOne" && (
          <Question pictureURL={card.pictureURL} />
        )}

        {/* Answers */}
        <Answers
          disabled={disabled}
          onClick={(value) => onClick(value)}
          card={card}
          questionNumber={questionNumber}
        />
      </div>
    </div>
  );
};

export default Card;
