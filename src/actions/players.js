export const RECEIVE_PLAYERS = "RECEIVE_PLAYERS";

export function receivePlayers(players) {
  return {
    type: RECEIVE_PLAYERS,
    players
  }
}