import React, { Component } from "react";
import { connect } from "react-redux";
import Checkbox from '../components/checkbox/Checkbox';

class Trivia extends Component {
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
    return (
      <div className="trivia-content">
        {/* Header */}
        <nav className="trivia-navbar">
          <div className="content d-flex">
            <div className="player-header d-flex align-items-end h-100">
              <div className="player-avatar"></div>
              <div className="player-rating d-flex flex-row justify-content-center px-3">
                <div className="rating-item checked"></div>
                <div className="rating-item"></div>
                <div className="rating-item"></div>
                <div className="rating-item"></div>
                <div className="rating-item"></div>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="trivia-question d-flex flex-grow-1 flex-column align-items-center justify-content-center">
          <div className="content d-flex flex-column flex-grow-1">
            {/* Title */}
            <h1 className="trivia-title text-center mb-4">
              What is this animal?
            </h1>

            {/* Question */}
            <div className="question-area">
              <div className="area-image d-flex justify-content-center">
                <img
                  alt="moose"
                  src={require("../assets/trivia/beethoven.jpg")}
                  className="card-image"
                ></img>
              </div>
            </div>

            {/* Answers */}
            <div className="answer-area my-3 mt-4">
              <div className="d-flex justify-content-center w-100 flex-wrap">
                <Checkbox size="md">Big animals amore large</Checkbox>
                <Checkbox size="md">Long lengs little messy</Checkbox>
                <Checkbox size="md">Twig eater</Checkbox>
              </div>
            </div>
          </div>
        </div>

        <footer className="trivia-footer">
          <div className="content">
            <div className="d-flex justify-content-between align-items-center h-100 px-5 fix-width">
              <div className="skip d-flex align-items-center h-100">
                <button className="button">SKIP</button>
              </div>
              <div className="next d-flex align-items-center h-100">
                <button disabled className="button">CHECK</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect()(Trivia);
