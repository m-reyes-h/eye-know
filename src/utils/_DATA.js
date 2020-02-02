let cardColor = {
  colorGreen: "green",
  colorBlue: "blue",
  colorRed: "red"
};

let cardCategory = {
  categoryBio: "biology",
  categoryMusic: "music",
  categoryPeople: "people"
};

let players = {
  // user1: {
  //   id: "user1",
  //   name: "User 1",
  //   color: "",
  //   correctAnswers: ["sample1", "saomple2"],
  //   failAnswers: {
  //     0: {
  //       optionOne: "sample"
  //     }
  //   }
  // },
};

let cards = {
  11: {
    id: "11",
    pictureURL: "Ludwing van Beethoven",
    pictureTitle: "Musician",
    color: cardColor.colorRed,
    category: cardCategory.categoryPeople,
    correctPlayer: "",
    failPlayer: "",
    optionOne: {
      correct: "Ludwing van Beethoven",
      choices: ["Ludwing van Beethoven", "Mozart", "Arjona"]
    },
    optionTwo: {
      text: "Which of these musical works was composed by Beethoven?",
      correct: "Monnlight Sonata",
      choices: ["Bolero", "The Four Season", "Monnlight Sonata"]
    },
    optionThree: {
      text:
        "Johan Sebastian Bach wrote about being inspired by Beethoven's compositions in his memoirs",
      correct: false,
      choices: [true, false]
    }
  },
  21: {
    id: "21",
    pictureURL: "Moose",
    pictureTitle: "Animal",
    color: cardColor.colorGreen,
    category: cardCategory.categoryBio,
    correctPlayer: "",
    failPlayer: "",
    optionOne: {
      correct: "Moose",
      choices: ["Moose", "Chicken"]
    },
    optionTwo: {
      text:
        "The name moose is believed to come from the Algonquin word for what?",
      correct: "Twig eater",
      choices: ["Big animals", "Long lengs", "Twig eater"]
    },
    optionThree: {
      text: "European moose are called elk.",
      correct: true,
      choices: [true, false]
    }
  },
  34: {
    id: "34",
    pictureURL: "Trombone",
    pictureTitle: "Instrument",
    color: cardColor.colorBlue,
    category: cardCategory.categoryMusic,
    correctPlayer: "",
    failPlayer: "",
    optionOne: {
      correct: "Trombone",
      choices: ["Trombone", "Guitar", "Tompete"]
    },
    optionTwo: {
      text: "How many playing positions are there for the slide",
      correct: "7",
      choices: ["3", "7", "13"]
    },
    optionThree: {
      text: "The word trombone comes from the Italian word for 'big trumpet.",
      correct: true,
      choices: [true, false]
    }
  }
};

export let currentPlayer = null;

export function _setCurrentPlayer(player) {
  currentPlayer = player;
  return player;
}

/**
 * Get all the players from players DB
 *
 * @return  {object}
 */
export function _getPlayers() {
  return { ...players };
}

/**
 * Get all the cards from cards DB
 *
 * @return  {object}  
 */
export function _getCards() {
  return { ...cards };
}

export function _saveCardAnswer({ cid, correctAnswer, failAnswer }) {
  try {
    players = {
      ...players,
      [currentPlayer]: {
        ...players[currentPlayer],
        correctAnswers:
          correctAnswer !== null
            ? players[currentPlayer].correctAnswers.concat(correctAnswer)
            : [...players[currentPlayer].correctAnswers],
        failAnswers:
          failAnswer !== null
            ? {
                ...players[currentPlayer].failAnswers,
                [cid]: { [failAnswer.option]: failAnswer.response }
              }
            : { ...players[currentPlayer].failAnswers }
      }
    };

    cards = {
      ...cards,
      [cid]: {
        ...cards[cid],
        correctPlayer: correctAnswer !== null ? currentPlayer : null,
        failPlayer: failAnswer !== null ? currentPlayer : null
      }
    };
  } catch (error) {
    throw new Error("Error saving card answer.");
  }
}

//-----------------------------------------------------------------------------------------

/**
 * Data Functions
 */

function generatePlayerID(name) {
  return name.replace(/\s/g, "").toLowerCase();
}

function formatName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/^\w/, c => c.toUpperCase());
}

function formatPlayer({ name, color }) {
  const playerID = generatePlayerID(name);
  const playerName = formatName(name);

  return {
    id: playerID,
    name: playerName,
    color,
    correctAnswers: [],
    failAnswers: {}
  };
}

export function _savePlayers(_players) {
  _players.map(player => {
    const formatedPlayer = formatPlayer(player);
    return (players = {
      ...players,
      [formatedPlayer.id]: formatedPlayer
    });
  });

  return players;
}

export function _nextPlayer() {
  const playersArr = Object.values(players);
  var index = playersArr.findIndex(function(person) {
    return person.name === currentPlayer.name;
  });

  if (playersArr.length === index + 1) {
    currentPlayer = playersArr[0];
  } else {
    currentPlayer = playersArr[index + 1];
  }

  return currentPlayer;
}
