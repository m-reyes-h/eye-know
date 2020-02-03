import React from "react";
import s from "./PlayerCard.module.css";

class PlayerCard extends React.Component {
  state = {
    playerName: ""
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

  render() {
    const { avatar, onSelectPlayer } = this.props;
    const { playerName } = this.state;
    return (
      <div className="player_card mb-4">
        <label className={s.card_content}>
          <input
            className={s.checkbox}
            id={avatar}
            type="checkbox"
            onClick={event => onSelectPlayer(event.target.id)}
          />
          <span className={s.checkmark}></span>
          <span className={s.selection}></span>
          <div className={`${s.avatar} ${avatar}`}></div>
          <input
            maxLength="10"
            id={avatar}
            onChange={this.handleOnChange}
            type="text"
            className={s.nameBox}
            value={playerName}
          ></input>
        </label>
      </div>
    );
  }
}

export default PlayerCard;
