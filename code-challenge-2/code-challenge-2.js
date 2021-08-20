'use strict'

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

//Task 1
console.log("=========== Task 1 ===========");
for (const [index, player] of game.scored.entries()){
  console.log(`Goal ${index + 1}: ${player}`);
}

//Task 2
console.log("=========== Task 2 ===========");
console.log(game.odds);
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += Number(odd);
}
const oddLen = Object.values(game.odds).length;
console.log(sum / oddLen);

//Task 3
console.log("=========== Task 3 ===========");
console.log(Object.entries(game.odds));
for (const [key, value] of Object.entries(game.odds)) {
  const str = (key == 'x') ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${str}: ${value}`);
}

//Bonus challenge
console.log("=========== Task bonus ===========");
const scorers = {}
for (let item of game.scored) {
  if (scorers.hasOwnProperty(item)) {
    scorers[item] += 1;
  } else {
    scorers[item] = 1;
  }
}
console.log(scorers);