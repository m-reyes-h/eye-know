import { getInitialData } from "../utils/api";
import { receivePlayers } from "./players";
import { receiveCards } from "./cards";

export function handleInitialData() {
  return (dispatch, getSate) => {
    const { players, cards } = getInitialData();
    // update react status with the new received data
    dispatch(receivePlayers(players));
    dispatch(receiveCards(cards));
  };
}
