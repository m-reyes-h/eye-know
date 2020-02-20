import { RECEIVE_CARDS, ANSWER_CARD } from "../actions/cards";

export default function cards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;

    case ANSWER_CARD:
      return {
        ...state,
        [action.cid]: {
          ...state[action.cid],
          correctPlayer:
            action.correctAnswer !== null ? action.currentPlayer : null,
          failPlayer: action.failAnswer !== null ? action.currentPlayer : null
        }
      };

    default:
      return state;
  }
}
