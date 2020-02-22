/**
 * Random generator from array
 */
function* shuffle(array) {
  let i = array.length;

  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
}

// Optional way without next
function shuffleArr(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * Generate next question random
 *
 * @return  {integer}  the next question index 2 or 3 (2 possibilities 50% each)
 */
export function nextQuestion() {
  return shuffleArr([2,3])[0];
}

/**
 * List of players avatars
 */
const avatar = ["bear", "girl", "girlpop", "granma", "kid", "man", "woman"];

/**
 * List of avatars default names
 */
const names = [
  "Homer",
  "Burns",
  "Wiggum",
  "Bart",
  "Krusty",
  "Marge",
  "Hans",
  "Kirk Van",
  "Apu",
  "Wally"
];

export const numberOfCardsToWin = 5;

/**
 * Generate a player profile
 *
 * @param   {integer}  count  the number of players you want to create
 *
 * @return  {object}         player profile
 */
export function generateProfiles(count) {
  const arrNum = [];
  for (let i = 1; i <= 7; i++) {
    arrNum.push(i);
  }
  const ranNums = shuffle(arrNum);
  let result = [];

  while (count--) {
    const number = ranNums.next().value - 1;
    result.push({
      avatar: avatar[number],
      name: names[number]
    });
  }

  return result;
}

/**
 * Get random cards
 *
 * @param   {object}  cards  list of cards
 *
 * @return  {object}         the random card
 */
export function randomCards(cards) {
  // cards without response yet
  const availableCards = Object.values(cards)
    .filter(c => c.correctPlayer === "" && c.failPlayer === "")
    .map(c => c.id);

  const rdmCards = shuffle(availableCards);

  return rdmCards.next().value;
}

/**
 * get random in correct answers for question one
 *
 * @param   {object}  cards           list of cards
 * @param   {string}  questionNumber  the number of the question
 * @param   {object}  card            current card
 *
 * @return  {array}                  incorrect answers
 */
export function randomIncorrectAnswers(cards, questionNumber, card) {
  // cards for the same category without response yet
  // and avoid the same card
  const availableCards = Object.values(cards).filter(
    c =>
      c.correctPlayer === "" &&
      c.failPlayer === "" &&
      c.category === card.category &&
      c.id !== card.id
  );

  // get random cards
  let rdmCards = shuffle(availableCards);
  const questionsArr = [];
  const INCORRECT_ANSWERS_COUNT = 4;

  for (let i = 0; i < INCORRECT_ANSWERS_COUNT; i++) {
    const ia = rdmCards.next();
    if (!ia.done) questionsArr.push(ia.value[questionNumber].correct);
    else break;
  }

  // add the correct answer to the list
  questionsArr.push(card[questionNumber].correct);

  return shuffleArr(questionsArr);
}

/**
 * Format title of the question
 *
 * @param   {string}  title
 *
 * @return  {string}         formatted title
 */
export function formatQuestionTitle(title) {
  switch (title) {
    case "Musician":
      return `Who is this ${title}?`;

    default:
      return `What is this ${title}?`;
  }
}
