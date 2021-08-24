'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const  openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 Enhanced object literals
  openingHours,

  orderDelivery: function(obj) {
    console.log(obj)
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/**
 * 120, 121, 122. Working with Strings
 */
const airline = 'TAP Air Portugal';
const plane = 'A320';

/*
//Part 1
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and E is middle seat
  const char = seat.slice(-1);
  console.log((char === 'B' || char === 'E') ? "It's middle seat" : "It's not middle seat");
}

checkMiddleSeat('11B');
checkMiddleSeat('34C');
checkMiddleSeat('22D');
checkMiddleSeat('2E');
*/

/*
//Part 2
console.log(airline.toLowerCase());
console.log('jonas'.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing 
const priceGB = '288,97@';
console.log(priceGB);
const priceUS = priceGB.replace(',', '.').replace('@', '$');
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('neo'));
console.log(plane1.includes('boeing'));
console.log(plane1.startsWith('boeing'));
console.log(plane1.startsWith('A320'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Pratice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allow on board');
  } else {
    console.log('Welcome aboard');
  }
}

checkBaggage('I have a laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

//Part 3
//Split
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')
console.log(firstName, lastName);

//Join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const word = name.split(' ');
  const result = []
  for (let item of word) {
    // const newWord = item[0].toUpperCase() + item.slice(1);
    const newWord = item.replace(item[0], item[0].toUpperCase())
    result.push(newWord);
  }
  console.log(result.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schemedtmann');

//Padding 
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(141241212));
console.log(maskCreditCard('554311319'));

//Repeat
const mess = 'Bad weather... All Departues Delayed...';
console.log(mess.repeat(5));

const planesInline = function(n) {
  console.log(`There are ${n} planes in line${'!'.repeat(5)}`);
}
planesInline(3);
planesInline(5);
planesInline(12);


/**
 * 117. Maps: Iteration
 */
/*
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer: "));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/


/**
 * 116. Maps: Fundamentals
 */
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1'));

const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.delete(11));
//rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/


/**
 * 115. Sets
 */
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Pasta', 'Pizza', 'Risotto']);
console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(new Set('Joanna'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('pizza'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('Jonas').size);
*/


/**
 * 113. Looping objects: Object Keys, Values and Entries
 */
/*
//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr)

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/


/**
 * 112. Optional Chaining (?)
 */
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'close';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) && 'Method does not exist');

//Arrays
const users = [{
  name: 'Jonas',
  email: 'jonas@gmail.com'
}]
console.log(users[0]?.name ?? 'User array empty'); //Jonas
console.log(users[1]?.name ?? 'User array empty'); //User array empty
*/


/**
 * 111. Enhanced Object Literals
 */
/*
console.log(restaurant);
console.log(restaurant.order(1,0));
let name = "Nhan";
let age = 29;
const person = {
  name,
  age,
}
console.log(person);
*/


/**
 * 110. Looping Arrays: The for-of loop
 */
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
*/


/**
 *108. The Nullish Coalescing Operator (??)
 */
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests || 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);


/**
 *107. Short circuiting (&& and ||)
 */
//Use ANY data type, return ANY data type, short circuiting
/*
console.log("===== OR =====");
console.log(0 || 'Jonas');
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("===== AND =====");
console.log(0 && 'Jonas');
console.log('Jonas' && true);
console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/


/**
 * 106. Rest Pattern and Parameters
 */
/*
//1) Destructuring
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(`${a} - ${b} - ${others}`);

const [pizza, , risotto, ...otherMenu] = [...restaurant.mainMenu, ... restaurant.starterMenu]
console.log(pizza, risotto, otherMenu);

//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2) Functions
const add = function(...numbers) {
  return numbers.reduce((a,b) => a + b);
}
console.log(add(2, 3));
console.log(add(1,5,6,7));
console.log(add(8,1,5,6,7,8,2));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach')
*/


/**
 * 105. The Spread Operator (...)
 */
/*
 const arr = [7, 8, 9];
 const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
 console.log(badNewArr)
 
 const newArr = [1, 2, ...arr]
 console.log(newArr);
 
 const newMenu = [...restaurant.mainMenu, 'Gnocci'];
 console.log(newMenu);
//Copy array
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...mainMenu]
console.log(menu);

//Iterable: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//Real-world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")]
// console.log(restaurant.orderPasta(...ingredients));

//Objects
const newRestaurant = {foundedIn: 1994, ...restaurant, founder: "A guy"}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Nha hang";
console.log('Copy: ', restaurantCopy.name);
console.log('Original: ', restaurant.name);
*/


/**
 * 104. Destructuring arrays
 */
/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, ,[j, k]] = nested;
console.log(i, j ,k);

//Default value
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/


/**
 * 103. Destructuring objects
 */
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

const { name, categories, openingHours} = restaurant;
console.log(name, categories, openingHours);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags)

//Default values
const { menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 900;
const obj = {a: 23, b: 7, c:14};
({a, b} = obj);
console.log(a, b);

//Nested objects
const {fri: {open, close}} = openingHours
console.log(open, close);
*/
