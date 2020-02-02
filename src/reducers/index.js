import players from "./players";
import cards from "./cards";
import currentPlayer from './currentPlayer'
import { combineReducers } from "redux";

export default combineReducers({
  players,
  cards,
  currentPlayer
});
