import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/card/Card";
import PlayerAvatar from "../components/players/PlayerAvatar";
import Rating from "../components/players/Rating";
import { randomCards, nextQuestion } from "../utils/helpers";
import { withRouter } from "react-router-dom";
import Result from "../components/card/Result";
import { handleSaveAnswer } from "../actions/shared";

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

    const { card, questionNumber } = this.state;
    this.props.dispatch(
      handleSaveAnswer(card.id, null, {
        question: questionNumber,
        response: "Skip question"
      })
    );

    const location = {
      pathname: "/answer",
      state: {
        currentPlayer: this.props.currentPlayer,
        userSkip: true
      }
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
    if (userAnswer === card[questionNumber].correct.toString()) {
      this.setState({
        answerIsCorrect: true
      });

      // last question for the user ans is correct
      // store data
      if (questionNumber !== "questionOne") {
        this.props.dispatch(handleSaveAnswer(card.id, card.id, null));
      }
    } else {
      // Incorrect
      this.setState({
        answerIsCorrect: false
      });

      // any incorrect question must be stored
      this.props.dispatch(
        handleSaveAnswer(card.id, null, {
          question: questionNumber,
          response: userAnswer
        })
      );
    }
  };

  handleNextStep = e => {
    e.preventDefault();
    const { answerIsCorrect, questionNumber } = this.state;

    // Is last question
    // ...go to next user
    if (questionNumber !== "questionOne") {
      const location = {
        pathname: "/answer",
        state: {
          currentPlayer: this.props.currentPlayer,
          answerIsCorrect: true
        }
      };
      this.props.history.replace(location);
    }

    // Next question
    const question = nextQuestion() === 2 ? "questionTwo" : "questionThree";

    if (answerIsCorrect) {
      this.setState({
        questionNumber: question,
        answerSelected: true,
        userAnswer: "",
        disableForm: false,
        answerIsCorrect: null
      });
    }

    if (!answerIsCorrect) {
      const location = {
        pathname: "/answer",
        state: {
          currentPlayer: this.props.currentPlayer,
          answerIsCorrect: false
        }
      };
      this.props.history.replace(location);
    }
  };

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
          {/* Question controls */}
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
