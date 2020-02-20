export const RECEIVE_PLAYERS = "RECEIVE_PLAYERS";
export const ADD_PLAYERS = "ADD_PLAYERS";
export const ANSWER_PLAYER = "ANSWER_PLAYER";

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

export function answerPlayer({
  cid,
  correctAnswer,
  failAnswer,
  currentPlayer
}) {
  return {
    type: ANSWER_PLAYER,
    cid,
    correctAnswer,
    failAnswer,
    currentPlayer
  };
}
