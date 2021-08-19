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

//task 1
console.log("============== Task 1 ==============");
const [players1, players2] = game.players;
console.log("Team 1: ", players1)
console.log("Team 2: ", players2);

//task 2
console.log("============== Task 2 ==============");
const [gk, ...fieldPlayers] = players1;
console.log("Team 1 GK + Fieldplayer: ", gk, fieldPlayers);

//task 3
console.log("============== Task 3 ==============");
const allPlayers = [...players1, ...players2];
console.log("All players: ",allPlayers);

//task 4
console.log("============== Task 4 ==============");
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log("Team 1 final: ", players1Final)

//task 5
console.log("============== Task 5 ==============");
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

//task 6
console.log("============== Task 6 ==============");
function printGoals(...players) {
  console.log(`${players.length} goals were scored by`);
  console.log(...players);
}

console.log('=== Example value ===');
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log('===Real value ===');
printGoals(...game.scored);

//task 7
console.log("============== Task 7 ==============");
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
