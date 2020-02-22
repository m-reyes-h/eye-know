import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNextPlayer } from "../actions/shared";
import { withRouter } from "react-router-dom";
import PlayerAvatar from "../components/players/PlayerAvatar";
import Rating from "../components/players/Rating";
import { numberOfCardsToWin } from "../utils/helpers";

class Answer extends Component {
  componentDidMount() {
    this.props.dispatch(handleNextPlayer());
  }

  handleNextTrivia = () => {
    // redirect to trivia
    // (actually replace, prevent user to go back through the browser history)
    const location = {
      pathname: "/trivia"
    };
    this.props.history.replace(location);
  };

  render() {
    const { nextPlayer } = this.props;
    const {
      currentPlayer,
      userSkip,
      answerIsCorrect,
    } = this.props.location.state;

    const leftCards = numberOfCardsToWin - currentPlayer.correctAnswers.length;
    return (
      <div className="d-flex flex-column align-items-stretch justify-content-center vh-100">
        <div className="content d-flex flex-column align-items-center justify-content-center">
          <h1 className="d-flex flex-row align-items-center mb-5">
            Great job
            <PlayerAvatar
              style={{ margin: "0 1rem" }}
              title={currentPlayer.name}
              avatar={currentPlayer.avatar}
            />
            {currentPlayer.name}
          </h1>

          {userSkip && <h4>Try to make a mistake next time</h4>}

          {answerIsCorrect === false && (
            <h4>Mistakes are the best way to learn!</h4>
          )}

          {leftCards < 5 ? (
            <React.Fragment>
              <h2 className="motivation mb-4">
                You only have {leftCards} cards left to win
              </h2>

              <div>
                <Rating correctAnswers={currentPlayer.correctAnswers} />
              </div>
            </React.Fragment>
          ) : (
            <h3 className="motivation mt-2">
              Try harder and win your first card
            </h3>
          )}
        </div>

        <footer className="trivia-footer">
          <div className="content">
            <div className="d-flex justify-content-around align-items-center h-100 px-5 fix-width">
              <div className="skip d-flex align-items-center h-100">
                <h2 style={{ color: "#afafaf", fontWeight: "bolder" }}>
                  Next player: {nextPlayer.name}
                </h2>
              </div>
              <div className="next d-flex align-items-center h-100">
                <button
                  onClick={this.handleNextTrivia}
                  className="button button-success"
                >
                  CHECK
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

function mapStateToProps({ currentPlayer, players }) {
  return {
    nextPlayer: players[currentPlayer]
  };
}

export default withRouter(connect(mapStateToProps)(Answer));
