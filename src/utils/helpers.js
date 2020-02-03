function* shuffle(array) {
  let i = array.length;

  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
}

const avatar = ["bear", "girl", "girlpop", "granma", "kid", "man", "woman"];

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

export function generateProfiles(count) {
  const arrNum = []
  for(let i = 1; i <= 7; i++) {
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
