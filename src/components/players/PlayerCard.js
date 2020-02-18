import React from "react";
import s from "./PlayerCard.module.css";

class PlayerCard extends React.Component {
  state = {
    playerName: "",
    active: false
  };

  componentDidMount() {
    this.setState({
      playerName: this.props.name
    });
  }

  handleOnChange = event => {
    const { value, id } = event.target;
    this.setState({
      playerName: value
    });

    this.props.onChangePlayerName({ name: value, id });
  };

  handleSelectPlayer = event => {
    this.props.onSelectPlayer(event.target.id);
    this.setState(state => ({
      active: !state.active
    }));
  };

  render() {
    const { avatar } = this.props;
    const { playerName, active } = this.state;
    return (
      <div className="player_card mb-4">
        <label
          className={`${
            active ? "active" : ""
          } p-3 selection d-flex flex-column`}
          htmlFor={avatar}
        >
          <input
            type="checkbox"
            name="q"
            id={avatar}
            onClick={this.handleSelectPlayer}
          />
          <div className={`${s.avatar} ${avatar}`}></div>
          <input
            maxLength="10"
            id={avatar}
            onChange={this.handleOnChange}
            type="text"
            className={`${s.nameBox}`}
            value={playerName}
          ></input>
        </label>
      </div>
    );
  }
}

export default PlayerCard;
