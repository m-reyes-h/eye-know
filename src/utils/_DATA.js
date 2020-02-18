let cardColor = {
  GREEN: "green",
  BLUE: "blue",
  RED: "red"
};

let cardCategory = {
  BIO: "biology",
  MUSIC: "music",
  PEOPLE: "people"
};

let questionType = {
  MULTIPLE_CHOICE: "multiple_choice",
  TRUE_FALSE: "true_false"
};

let players = {
  // user1: {
  //   id: "user1",
  //   name: "User 1",
  //   avatar: "",
  //   correctAnswers: ["sample1", "saomple2"],
  //   failAnswers: {
  //     0: {
  //       questionOne: "sample"
  //     }
  //   }
  // },
};

let cards = {
  r11: {
    id: "r11",
    pictureURL: "beethoven",
    color: cardColor.RED,
    category: cardCategory.PEOPLE,
    correctPlayer: "",
    failPlayer: "",
    questionOne: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Musician",
      correct: "Ludwing van Beethoven",
      choices: ["Ludwing van Beethoven", "Mozart", "Arjona"]
    },
    questionTwo: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Which of these musical works was composed by Beethoven?",
      correct: "Monnlight Sonata",
      choices: ["Bolero", "The Four Season", "Monnlight Sonata"]
    },
    questionThree: {
      type: questionType.TRUE_FALSE,
      text:
        "Johan Sebastian Bach wrote about being inspired by Beethoven's compositions in his memoirs",
      correct: false,
      choices: ["true", "false"]
    }
  },
  r16: {
    id: "r16",
    pictureURL: "robin_hood",
    color: cardColor.RED,
    category: cardCategory.PEOPLE,
    correctPlayer: "",
    failPlayer: "",
    questionOne: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Fictional Character",
      correct: "Robin Hood",
      choices: ["Robin Hood", "Carlo", "Mario"]
    },
    questionTwo: {
      type: questionType.MULTIPLE_CHOICE,
      text: "In which English county is Sherwood Forest located?",
      correct: "Nottinghamshire",
      choices: ["Clero", "Potosi", "Nottinghamshire"]
    },
    questionThree: {
      type: questionType.TRUE_FALSE,
      text:
        "The character of Robin Hood was created for the 1938 film, The Adventures of Robin Hood?",
      correct: false,
      choices: ["true", "false"]
    }
  },
  g11: {
    id: "g11",
    pictureURL: "moose",
    color: cardColor.GREEN,
    category: cardCategory.BIO,
    correctPlayer: "",
    failPlayer: "",
    questionOne: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Animal",
      correct: "Pato",
      choices: ["Gallo", "Cerdo"]
    },
    questionTwo: {
      type: questionType.MULTIPLE_CHOICE,
      text:
        "The name moose is believed to come from the Algonquin word for what?",
      correct: "Twig eater",
      choices: ["Big animals", "Long lengs", "Twig eater"]
    },
    questionThree: {
      type: questionType.TRUE_FALSE,
      text: "European moose are called elk.",
      correct: true,
      choices: ["true", "false"]
    }
  },
  g21: {
    id: "g21",
    pictureURL: "moose",
    color: cardColor.GREEN,
    category: cardCategory.BIO,
    correctPlayer: "",
    failPlayer: "",
    questionOne: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Animal",
      correct: "Moose",
      choices: ["Moose", "Chicken"]
    },
    questionTwo: {
      type: questionType.MULTIPLE_CHOICE,
      text:
        "The name moose is believed to come from the Algonquin word for what?",
      correct: "Twig eater",
      choices: ["Big animals", "Long lengs", "Twig eater"]
    },
    questionThree: {
      type: questionType.TRUE_FALSE,
      text: "European moose are called elk.",
      correct: true,
      choices: ["true", "false"]
    }
  },
  g57: {
    id: "g57",
    pictureURL: "black_widow_spider",
    color: cardColor.GREEN,
    category: cardCategory.BIO,
    correctPlayer: "",
    failPlayer: "",
    questionOne: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Spider",
      correct: "Black Widow",
      choices: ["Dog", "Chicken"]
    },
    questionTwo: {
      type: questionType.MULTIPLE_CHOICE,
      text:
        "Which of the following describes where the black widow spider is found?",
      correct: "Worldwide",
      choices: ["Australia", "North and South America", "Worldwide"]
    },
    questionThree: {
      type: questionType.TRUE_FALSE,
      text: "The black widow spider bite is usually deadly to humans.",
      correct: false,
      choices: ["true", "false"]
    }
  },
  r67: {
    id: "r67",
    pictureURL: "diana_pricessofwales",
    color: cardColor.RED,
    category: cardCategory.PEOPLE,
    correctPlayer: "",
    failPlayer: "",
    questionOne: {
      type: questionType.MULTIPLE_CHOICE,
      text: "Royalty",
      correct: "Diana, Princess of Wales",
      choices: ["Diana, Princess of Wales", "Pedro", "Luis"]
    },
    questionTwo: {
      type: questionType.MULTIPLE_CHOICE,
      text: "For which of these causes was Diana known for campaigning?",
      correct: "Banning of Landmines",
      choices: [
        "Banning of animal testing",
        "Opening trade with Somalia",
        "Banning of Landmines"
      ]
    },
    questionThree: {
      type: questionType.TRUE_FALSE,
      text:
        "Diana has no royal or aristocratic titles before she married Charles, Prince of Wales",
      correct: false,
      choices: ["true", "false"]
    }
  }
};

export let currentPlayer = null;

export function _setCurrentPlayer(player) {
  currentPlayer = player;
  return player;
}


export function _getPlayers() {
  return { ...players };
}

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

function formatPlayer({ name, avatar }) {
  const playerID = generatePlayerID(name);
  const playerName = formatName(name);

  return {
    id: playerID,
    name: playerName,
    avatar,
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

export function _nextPlayer(person = currentPlayer) {
  const playersArr = Object.values(players);

  var index = playersArr.findIndex(function(person) {
    return person.id === currentPlayer;
  });

  if (playersArr.length === index + 1) {
    currentPlayer = playersArr[0].id;
  } else {
    currentPlayer = playersArr[index + 1].id;
  }

  return currentPlayer;
}
