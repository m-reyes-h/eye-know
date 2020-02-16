import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/card/Card";
import PlayerAvatar from "../components/players/PlayerAvatar";
import Rating from "../components/players/Rating";
import { randomCards } from "../utils/helpers";

class Trivia extends Component {
  state = {
    card: null
  };

  componentDidMount() {
    const { cards } = this.props;
    const card = randomCards(cards);
    this.setState({
      card: cards[card],
      questionNumber: "questionThree"
    });
  }

  // mostrar current user

  // next user - logica para obtener el proximo usuario

  // next question - logica para obtener una pregunta radom pasandole un objeto de preguntas
  // no obtener una pregunta que ya tenga respuesta

  // permitir escoger de una lista de posibles respuestas

  // si el usuario acepta o falla siempre preguntar los puntos

  // acepta: cuando el usuario acepte, pasar a la siguiente quiz de la misma pregunta
  // darle puntos al usuario

  // falla: quemar la pregunta como respondida y pasar a la siguiente

  render() {
    const { currentPlayer, cards } = this.props;
    const { card, questionNumber } = this.state;

    return (
      <div className="trivia-content">
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
        {card && <Card questionNumber={questionNumber} card={card} />}

        {/* Footer */}
        <footer className="trivia-footer">
          <div className="content">
            <div className="d-flex justify-content-between align-items-center h-100 px-5 fix-width">
              <div className="skip d-flex align-items-center h-100">
                <button className="button">SKIP</button>
              </div>
              <div className="next d-flex align-items-center h-100">
                <button disabled className="button">
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

function mapStateToProps({ currentPlayer, players, cards }) {
  return {
    currentPlayer: players[currentPlayer],
    cards,
    players
  };
}

export default connect(mapStateToProps)(Trivia);
