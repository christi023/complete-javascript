'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,
  // functions
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/// STRINGS - PART 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
/*
///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log('B737'[0]); // B
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
 console.log(typeof new String('jonas').slice(1)); */

///////////////////////////////////////// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
//console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const time = [...gameEvents.keys()].pop();
console.log(time); // 92
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL
for (const [min, e] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${e}`);
}
*/

/*
///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));
// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]); */

/*
/////////////////////////// MAPS Fundamentals //////////////////////////////
const rest = new Map();
rest.set('name', 'Classico Italiano'); // add a new element to the data structure
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Malmo, Sweden');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

/*
//////////////////////// SETS /////////////////////////////
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']); // sets are iterable
console.log(orderSet); // Pasta, Pizza, Risotto
console.log(orderSet.size); // getting the size = 3
console.log(orderSet.has('Pizza')); // check if a certain element is there / true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread'); // adding to the set
orderSet.delete('Risotto'); // deleting
//orderSet.clear()// delete all elements from set
console.log(orderSet);
// Looping over a set
for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // ... set into array
console.log(staffUnique);
console.log(new Set(staff).size);
// Sets are used to remove duplicate values of arrays */

/*
///////// Looping over property names which are call KEYS
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// ENTRIES are Names and Values together / Entire object
const entries = Object.entries(openingHours);
//console.log(entries);
// Looping over object
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


//////////////////////////////////////////////////////////////////
/////////////////////////////Coding Challenge #2


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

//1. Loop over the game.scored array and print each player name to the console,along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1}: ${player} `);

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average); // 3.693

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them 
//(except for "draw"). Hint: Note how the odds and the game objects have the 
//same property names �


for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${teamStr}: ${odd} `);
}
*/
/*
/////////////////// Optional Chaining below ?.
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// only if the property before the ? exist then open otherwise return undefined
console.log(restaurant.openingHours.mon?.open); // property exist if its not null or undefined => if its 0 or ' ' then it still exists
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods with optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays with optional chaining
const users = [
  {
    title: 'John',
    email: 'john@yahoo.com',
  },
];
console.log(users[0]?.title ?? 'User array empty');
console.log(users[0]?.email ?? 'Please create email');
*/

/*
////////////////////// Looping Arrays - the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// current item
for (const item of menu) console.log(item);

// current index in for of
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
//console.log([...menu.entries()]);

/////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
GOOD LUCK 😀*/

//1. Create one player array for each team (variables 'players1' and 'players2')
/*
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

/*
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

extendObject(originalPerson); */

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
