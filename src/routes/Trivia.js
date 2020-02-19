import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/card/Card";
import PlayerAvatar from "../components/players/PlayerAvatar";
import Rating from "../components/players/Rating";
import { randomCards } from "../utils/helpers";
import { withRouter } from "react-router-dom";
import Result from "../components/card/Result";

class Trivia extends Component {
  state = {
    card: null,
    answerSelected: true,
    questionNumber: "",
    userAnswer: "",
    disableForm: false,
    answerIsCorrect: null
  };


  componentDidMount() {
    const { cards } = this.props;
    const card = randomCards(cards);
    this.setState({
      card: cards[card],
      questionNumber: "questionOne",
      userAnswer: ""
    });
  }

  answerSelected = userAnswer => {
    this.setState(state => ({
      answerSelected: false,
      userAnswer
    }));
  };

  handleSkipQuestion = e => {
    e.preventDefault();

    console.log(this.props);
    const location = {
      pathname: "/answer"
    };
    this.props.history.replace(location);
  };

  handleCheckAnswer = e => {
    e.preventDefault();

    // prevent user to check another question
    this.setState({
      disableForm: true
    });

    const { userAnswer, card, questionNumber } = this.state;
    // Correct
    if (userAnswer === card[questionNumber].correct) {
      this.setState({
        answerIsCorrect: true
      });
    } else {
      // Incorrect
      this.setState({
        answerIsCorrect: false
      });
    }
  };

  handleNextStep = (e) => {
    e.preventDefault();
    const {answerIsCorrect} = this.state;

    if (answerIsCorrect) {
      this.setState({
        questionNumber: "questionTwo",
        answerSelected: true,
        userAnswer: "",
        disableForm: false,
        answerIsCorrect: null
      });
    }
  }

  render() {
    const { currentPlayer } = this.props;
    const {
      card,
      questionNumber,
      answerSelected,
      disableForm,
      answerIsCorrect
    } = this.state;

    return (
      <form className="trivia-content" disabled={disableForm}>
        {/* Header */}
        <nav className="trivia-navbar">
          <div className="content d-flex">
            <div className="player-header d-flex align-items-end h-100">
              <PlayerAvatar
                title={currentPlayer.name}
                avatar={currentPlayer.avatar}
              />
              <Rating correctAnswers={currentPlayer.correctAnswers} />
            </div>
          </div>
        </nav>

        {/* Content */}
        {card && (
          <Card
            disabled={disableForm}
            questionNumber={questionNumber}
            onClick={value => this.answerSelected(value)}
            card={card}
          />
        )}

        {/* Footer */}
        <footer className="trivia-footer">
          {/* Qustion controls */}
          {answerIsCorrect === null && (
            <div className="content">
              <div className="d-flex justify-content-between align-items-center h-100 px-5 fix-width">
                <div className="skip d-flex align-items-center h-100">
                  <button className="button" onClick={this.handleSkipQuestion}>
                    SKIP
                  </button>
                </div>
                <div className="next d-flex align-items-center h-100">
                  <button
                    onClick={this.handleCheckAnswer}
                    disabled={answerSelected}
                    className="button button-success"
                  >
                    CHECK
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Correct */}
          {answerIsCorrect && (
            <Result
              onContinue={this.handleNextStep}
              correct={card[questionNumber]}
              type="correct"
            />
          )}

          {/* Incorrect */}
          {!answerIsCorrect && answerIsCorrect !== null && (
            <Result
              onContinue={this.handleNextStep}
              correct={card[questionNumber]}
              type="incorrect"
            />
          )}
        </footer>
      </form>
    );
  }
}

function mapStateToProps({ currentPlayer, players, cards }) {
  return {
    currentPlayer: players[currentPlayer],
    cards,
    players
  };
}

export default withRouter(connect(mapStateToProps)(Trivia));
