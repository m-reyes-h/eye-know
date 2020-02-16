import React, { Fragment } from "react";
import { formatQuestionTitle } from "../../utils/helpers";

const Title = ({ children, questionNumber }) => {
  let title = null,
    subtitle = null;

  switch (questionNumber) {
    case "questionOne":
      title = formatQuestionTitle(children);
      break;

    case "questionTwo":
      title = children;
      break;

    case "questionThree":
      title = "Mark the correct answer";
      subtitle = children;
      break;

    default:
      title = "Title Error";
  }

  return (
    <Fragment>
      <h1 className="title text-center mb-4">{title}</h1>
      {subtitle && (
        <h2 className="subtitle text-center mb-4">{subtitle}</h2>
      )}
    </Fragment>
  );
};

export default Title;
