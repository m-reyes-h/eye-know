export const RECEIVE_PLAYERS = "RECEIVE_PLAYERS";
export const ADD_PLAYERS = "ADD_PLAYERS";

export function receivePlayers(players) {
  return {
    type: RECEIVE_PLAYERS,
    players
  };
}

export function addPlayers(players) {
  return {
    type: ADD_PLAYERS,
    players
  };
}
