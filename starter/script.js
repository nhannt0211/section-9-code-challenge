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
