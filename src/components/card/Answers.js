import React, { Component } from "react";
import Checkbox from "../checkbox/Checkbox";
import { connect } from "react-redux";
import { randomIncorrectAnswers } from "../../utils/helpers";

class Answers extends Component {
  state = {};

  componentDidMount() {
    const { cards, questionNumber, card } = this.props;
    console.log(randomIncorrectAnswers(cards, questionNumber, card));
  }

  render() {
    return (
      <div className="answer-area my-3 mt-4">
        <div className="d-flex justify-content-center w-100 flex-wrap">
          <Checkbox size="md">Big animals amore large</Checkbox>
          <Checkbox size="md">Long lengs little messy</Checkbox>
          <Checkbox size="md">Twig eater</Checkbox>
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
