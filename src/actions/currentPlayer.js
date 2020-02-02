export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";

export function setCurrentPlayer(id) {
  return {
    type: SET_CURRENT_PLAYER,
    id
  };
}
