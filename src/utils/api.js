import { _getPlayers, _getCards, _savePlayers } from "./_DATA";

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

/**
 * Save new players
 *
 * @param   {object}  players  list of players
 *
 * @return  {object}           list of players
 */
export function savePlayers(players) {
  return new Promise(res => {
    res(_savePlayers(players));
  });
}
