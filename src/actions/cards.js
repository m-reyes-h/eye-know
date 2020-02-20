export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const ANSWER_CARD = "ANSWER_CARD";

export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  };
}

export function answerCard({ cid, correctAnswer, failAnswer, currentPlayer }) {
  return {
    type: ANSWER_CARD,
    cid,
    correctAnswer,
    failAnswer,
    currentPlayer
  };
}
