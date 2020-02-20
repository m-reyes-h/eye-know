import {
  RECEIVE_PLAYERS,
  ADD_PLAYERS,
  ANSWER_PLAYER
} from "../actions/players";

export default function players(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players;

    case ADD_PLAYERS:
      return action.players;

    case ANSWER_PLAYER:
      return {
        ...state,
        [action.currentPlayer]: {
          ...state[action.currentPlayer],
          correctAnswers:
            action.correctAnswer !== null
              ? state[action.currentPlayer].correctAnswers.concat(
                  action.correctAnswer
                )
              : [...state[action.currentPlayer].correctAnswers],
          failAnswers:
            action.failAnswer !== null
              ? {
                  ...state[action.currentPlayer].failAnswers,
                  [action.cid]: {
                    [action.failAnswer.question]: action.failAnswer.response
                  }
                }
              : { ...state[action.currentPlayer].failAnswers }
        }
      };

    default:
      return state;
  }
}
