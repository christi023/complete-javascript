'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
GOOD LUCK 😀

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

// 1 => Destructuring
//1. Create one player array for each team(variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
//TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function (...players) {
  // rest parameter will aggregate all incoming arguments into one array
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win'); */

///////////////////////////////////////
// The Nullish Coalescing Operator
/*restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); */

/*
console.log('--------- OR---------'); // ||

// Logical Operators - Use ANY data type, return ANY data type, short circuiting
console.log(3 || 'Jenny'); // if first is true then the other operand will not be evaluated
console.log('' || 'Jenny'); // false
console.log(true || 0); // true
console.log(undefined || null); // null

/// || returns the first truthy value of all the operands or simply the last value if all are falsy
// short circuit the truthy value and returned
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // || looks for truthy values and return that truth
console.log(guests2);

console.log('--------- AND ---------'); // &&
console.log(0 && 'Jonas'); // return the first falsy without evaluating the second operand
console.log(7 && 'Jenny'); // only true if all operands are true

console.log('Hello' && 23 && null && 'jonas'); // return falsy null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
/////////////// && return the first false value or the last truth value if all is truthy
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); */

/*
/////////////////////////// Destructuring 1
// Spread Array => Spread because of right side of =
const arr = [1, 2, ...[3, 4]];
// REST , Because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// Objects = took out sat
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

/////// Functions 2 = REST parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'olive', 'spinach', 'onions');
restaurant.orderPizza('mushrooms');
*/
/*
/////////////////////////////////// Spread Operator ////////////////////////////////
const arr = [7, 8, 9];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Penne'];
console.log(newMenu);
// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT Objects
// Real world example

const ingredients = [
 // prompt("Let's make pasta! Ingredient 1? "),
 // prompt("Let's make pasta! Ingredient 2? "),
 // prompt("Let's make pasta! Ingredient 3? "),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects with spread operators
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'James' };
console.log(newRestaurant);

// change the name in the restaurant
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Lazio';
console.log(restaurantCopy); */

////// TEST
const originalPerson = { name: 'Olle', age: 22, hobbies: ['football', 'food'] };
function extendObject(person) {
  // Clone the object and add
  // music as a hobby
  // eyeColor = blue
  // without changing the original object

  let hobbies = [...person.hobbies, 'music'];
  let eyeColor = 'blue';

  const newPerson = { ...person, eyeColor, hobbies };

  console.log(newPerson);
}

extendObject(originalPerson);

/*
////////////// Object destructuring /////////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'Solgatan 6',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// variables names different from property names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// setting a default value eg. API
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/*
//////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

/*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); 

// reassigning the values of the 2 variables / Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary); // easier way

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const [i, , [j, k]] = nested;
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
