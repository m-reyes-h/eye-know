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

/**
 * Set players
 *
 * @param   {object}  players
 *
 * @return  {Redux action}           once the players are store in the API,
 *                                   the players will be stored in the Redux state
 */
export function handleSavePlayers(players) {
  return dispatch =>
    savePlayers(players)
      .then(players => {
        // Store in Redux
        dispatch(addPlayers(players));
      })
      .catch(error => {
        console.log("There was an error adding players", error);
      });
}
