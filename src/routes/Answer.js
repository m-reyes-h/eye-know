import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNextPlayer } from "../actions/shared";
import {withRouter} from 'react-router-dom'

class Answer extends Component {
  state = {};

  handleNextPlayer = () => {
    this.props.dispatch(handleNextPlayer());
    // redirect to trivia
    // (actually replace, prevent user to go back through the browser history)
    const location = {
      pathname: "/trivia"
    };
    this.props.history.replace(location);
  };

  render() {
    return (
      <div>
        <p>user bla bla</p>
        <button onClick={this.handleNextPlayer}>Next user</button>
      </div>
    );
  }
}

export default withRouter(connect()(Answer));
