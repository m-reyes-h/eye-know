import {RECEIVE_PLAYERS} from '../actions/players'

export default function players(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players

    default:
      return state
  }
}