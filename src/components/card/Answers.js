import React, { Component } from "react";
import Selection from "../selection/Selection";
import { connect } from "react-redux";
import { randomIncorrectAnswers } from "../../utils/helpers";
import uuid from "uuid";

class Answers extends Component {
  state = {
    answerOption: "",
    randomAnswer: ''
  };

  radioChangeHandler = event => {
    const {value} = event.target;

    this.setState({
      answerOption: value
    });

    // send user answer to parent
    this.props.onClick(value);
  };

  componentDidMount() {
    const { cards, questionNumber, card } = this.props;

    this.setState({
      randomAnswer: randomIncorrectAnswers(cards, questionNumber, card)
    });
  }

  render() {
    const { questionNumber, card, disabled } = this.props;
    const {answerOption, randomAnswer} = this.state;

    const possibleAnswer =
      randomAnswer && questionNumber === "questionOne"
        ? randomAnswer
        : card[questionNumber].choices;

    const size = questionNumber === "questionOne" ? "md" : "";
    const orientation =
      questionNumber === "questionOne"
        ? "flex-wrap"
        : "flex-column flex-nowrap";

    return (
      <div className="answer-area my-3 mt-4">
        <div className={`d-flex justify-content-center w-100 ${orientation}`}>
          {possibleAnswer &&
            possibleAnswer.map(answer => (
                <Selection
                  disabled={disabled}
                  key={uuid()}
                  size={size}
                  value={answer}
                  onChange={this.radioChangeHandler}
                  isSelected={answerOption === answer}
                >
                  {answer}
                </Selection>

            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cards }, { questionNumber, card }) {
  return {
    card,
    cards,
    questionNumber
  };
}

export default connect(mapStateToProps)(Answers);
