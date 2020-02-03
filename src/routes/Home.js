import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button } from "react-bootstrap";
import s from "./Home.module.css";
import { generateProfiles } from "../utils/helpers";
import {handleSavePlayers} from '../actions/shared'
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
        p.avatar === avatar ? { ...p, selected: true } : { ...p }
      )
    }));
  };

  handleSetPlayers = () => {
    const players = this.state.defaultPlayers.filter(
      p => p.selected && p.selected === true
    );
    this.props.dispatch(handleSavePlayers(players));
  }

  render() {
    const { defaultPlayers } = this.state;

    return (
      <Container
        fluid="true"
        className="home d-flex flex-column justify-content-center vh-100"
      >
        <Container className={`content`}>
          <h1 className={`${s.title} text-center`}>Select Players</h1>
          <div className="d-flex flex-wrap justify-content-around w-75 mx-auto my-5">
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
            <Button className="btn btn-success" onClick={this.handleSetPlayers}>
              Start
            </Button>
          </div>
        </Container>
      </Container>
    );
  }
}

export default connect()(Home);
