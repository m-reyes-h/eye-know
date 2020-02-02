import { _getPlayers, _getCards } from "./_DATA";

/**
 * Get initial data
 *
 * @return  {object}
 */
export function getInitialData() {
  return {
    players: _getPlayers(),
    cards: _getCards() // TODO card may not be neccessary to lokup at this point
  };
}
