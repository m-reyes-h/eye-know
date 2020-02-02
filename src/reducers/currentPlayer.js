import { SET_CURRENT_PLAYER } from "../actions/currentPlayer";

export default function currentPlayer(state = "", action) {
  switch (action.type) {
    case SET_CURRENT_PLAYER:
      return action.id;

    default:
      return state;
  }
}
