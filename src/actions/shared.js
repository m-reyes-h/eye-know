import { getInitialData, savePlayers } from "../utils/api";
import { receivePlayers, addPlayers } from "./players";
import { receiveCards } from "./cards";

export function handleInitialData() {
  return (dispatch, getSate) => {
    const { players, cards } = getInitialData();
    // update react status with the new received data
    dispatch(receivePlayers(players));
    dispatch(receiveCards(cards));
  };
}

export function handleSavePlayers(players){
  return dispatch => savePlayers(players)
  .then(players => {
    dispatch(addPlayers(players))
  })
  .catch(error => {
    console.log("There was an error adding players", error);
  })
 }
