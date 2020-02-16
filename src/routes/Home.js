import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { generateProfiles } from "../utils/helpers";
import { handleSavePlayers } from "../actions/shared";
import PlayerCard from "../components/players/PlayerCard";


class Home extends Component {
  state = {
    defaultPlayers: null
  };

  componentDidMount() {
    this.setState({
      defaultPlayers: generateProfiles(4)
    });
  }

  handleChangePlayerName = ({ name, id }) => {
    this.setState(prevState => ({
      defaultPlayers: prevState.defaultPlayers.map(p =>
        p.avatar === id ? { ...p, name: name } : { ...p, name: p.name }
      )
    }));
  };

  handleSelectPlayer = avatar => {
    this.setState(prevState => ({
      defaultPlayers: prevState.defaultPlayers.map(p =>
        p.avatar === avatar ? { ...p, selected: !p.selected } : { ...p }
      )
    }));
  };

  handleSetPlayers = () => {
    // Check minimun numbers of players in the game
    const selectedCount = this.state.defaultPlayers.filter(p => p.selected);
    if (selectedCount.length < 2) {
      return alert("Must select at least 2 players");
    }

    const players = this.state.defaultPlayers.filter(
      p => p.selected && p.selected === true
    );
    this.props.dispatch(handleSavePlayers(players));

    // redirect to trivia
    // (actually replace, prevent user to go back through the browser history)
    const location = { pathname: "/trivia" };
    this.props.history.replace(location);
  };

  render() {
    const { defaultPlayers } = this.state;

    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center vh-100"
      >
        <div className="content justify-content-center">
          <h1 className={`title text-center`}>Select Players</h1>
          <div className="d-flex flex-wrap justify-content-between my-5 py-5">
            {defaultPlayers &&
              defaultPlayers.map((player, index) => (
                <PlayerCard
                  key={index}
                  {...player}
                  onSelectPlayer={this.handleSelectPlayer}
                  onChangePlayerName={this.handleChangePlayerName}
                />
              ))}
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="button button-success"
              onClick={this.handleSetPlayers}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Home));
