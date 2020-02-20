import { getInitialData, savePlayers, nextPlayer, saveAnswer } from "../utils/api";
import { receivePlayers, addPlayers, answerPlayer } from "./players";
import { setCurrentPlayer } from "./currentPlayer";
import { receiveCards, answerCard } from "./cards";

export function handleInitialData() {
  return (dispatch) => {
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

/**
 * Set current player
 *
 * @return  {Redux action}  set the current player
 */
export function handleNextPlayer() {
  return dispatch => {
    nextPlayer()
      .then(id => {
        // Store current player in Redux
        dispatch(setCurrentPlayer(id));
      })
      .catch(error => {
        console.log("There was an error setting current player", error);
      });
  };
}

export function handleSaveAnswer(cid, correctAnswer, failAnswer) {
  console.log("miii",  cid, correctAnswer, failAnswer );
  return dispatch => {
    saveAnswer({ cid, correctAnswer, failAnswer }).then(currentPlayer => {
      // Store answer in Redux
      dispatch(answerCard({ cid, correctAnswer, failAnswer, currentPlayer }));
      dispatch(answerPlayer({ cid, correctAnswer, failAnswer, currentPlayer }));
    }).catch(error => {
      console.log("There was an error setting the card answer", error);
    });
  }
}
