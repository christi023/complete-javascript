'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Mary');
}
// invoking / calling / running the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////////////////
// Function Declarations vs. Expressions
//const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1988);
console.log(age1, age2);

///////////////////////////////////////
// Arrow functions
/*const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */

///////////////////////////////////////
// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
  return fruit * 5;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));*/

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Mary')); // 19
console.log(yearsUntilRetirement(1950, 'Jim')); // -2

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(4, 5, 6));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71); // 46
let scoreKoalas = calcAverage(65, 54, 49); // 56
console.log(scoreDolphins, scoreKoalas);

// function
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41); // 46
scoreKoalas = calcAverage(23, 34, 27); // 56
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Mike';
const friend2 = 'Sally';
const friend3 = 'Stacy';

const friends = ['Mike', 'Sally', 'Stacy']; // literal syntax
console.log(friends);
// another way of writing an Array
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // expression produce a value

friends[2] = 'Josh';
console.log(friends);

const jonas = ['Jonas', 'Lewis', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
// Exercise
const calcAges = function (birthYeah) {
  return 2037 - birthYeah;
};

const years1 = [1990, 1967, 2002, 2010, 2018];
const age11 = calcAges(years1[0]);
const age12 = calcAges(years1[1]);
const age13 = calcAges(years1[years.length - 1]);
console.log(age11, age12, age13);

const ages = [calcAges(years1[0]), calcAges(years1[1]), calcAges(years1[years1.length - 1])];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const myFriends = ['Jim', 'Lucas', 'Lily'];
myFriends.push('Matthew'); // method to Add an item to the end of an Array
console.log(myFriends);

myFriends.unshift('John'); //Add an item to the beginning of an Array
console.log(myFriends);

myFriends.pop(); //Remove an item from the end of an Array
const popped = myFriends.pop();
console.log(popped);
console.log(myFriends);

myFriends.shift(); //Remove an item from the beginning of an Array
console.log(myFriends);

console.log(myFriends.indexOf('Lucas')); //Find the index of an item in the Array

myFriends.push(23);
console.log(myFriends.includes('Jim'));
console.log(myFriends.includes(23));

if (myFriends.includes('Jim')) {
  console.log('You have a friend name Jim');
}

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/
// create function
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
//console.log(calcTip(bill));// 15

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects
const jonasArray = ['Jonas', 'Smith', 2037 - 1991, 'teacher', ['Jim', 'Lucas', 'Lily']];
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Smith',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Jim', 'Lucas', 'Lily'],
};*/

///////////////////////////////////////
// Dot vs. Bracket Notation
const jimmy = {
  firstName: 'Jimmy',
  lastName: 'Smith',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Jim', 'Lucas', 'Lily'],
};

console.log(jimmy);
console.log(jimmy.lastName);
console.log(jimmy['lastName']);

const nameKey = 'Name';
console.log(jimmy['first' + nameKey]);
console.log(jimmy['last' + nameKey]);

// example - receive elements from object
/*const question = prompt(
  'What do you want to know about Jimmy? Choose between firstName , lastName, age, job, and friends',
);

if (jimmy[question]) {
  console.log(jimmy[question]);
} else {
  console.log('Wrong Request !');
}

jimmy.location = 'Sweden';
jimmy['email'] = 'jim@yahoo.com';
console.log(jimmy);
*/
// Challenge
// "Jimmy has 3 friends, and his best friend is called Lucas"
console.log(
  `${jimmy.firstName} have ${jimmy.friends.length} friends and his best friend is called ${jimmy.friends[1]}.`,
);

///////////////////////////////////////
// Object Methods
const jack = {
  firstName: 'Jack',
  lastName: 'Smith',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Jim', 'Lucas', 'Lily'],
  hasDriverLicense: true,

  /* calcAgee: function (birthYeah) {
    return 2037 - birthYeah;
  },*/
  /* calcAgee: function () {
     console.log(this);
     return 2037 - this.birthYeah;
   },*/

  calcAgee: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  // Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAgee()}-year old ${jack.job} and he has ${
      this.hasDriverLicense ? 'a' : 'no'
    } driver's license `;
  },
};
console.log(jack.calcAgee()); // dot notation
//console.log(jack['calcAgee'](1991)); // bracket notation
console.log(jack.age);
console.log(jack.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const Mark = {
  fullName: 'Mark Miller',
  mass: '78',
  height: '1.69',

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

//console.log(Mark.calcBMI()); // 27.309

const John = {
  fullName: 'John Smith',
  mass: '92',
  height: '1.95',

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi); // 24.194

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.fullName}'s BMI(${Mark.bmi} is higher than ${John.fullName}'s BMI(${John.bmi}))`,
  );
} else if (John.bmi > Mark.bmi) {
  console.log(
    `${John.fullName}'s BMI(${John.bmi} is higher than ${Mark.fullName}'s BMI(${Mark.bmi}))`,
  );
}

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}*/

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jimArray = ['Jim', 'Smith', 2037 - 1991, 'teacher', ['Jim', 'Lucas', 'Lily'], true];

const types = [];
/*
for (let i = 0; i < jimArray.length; i++) {
  console.log(jimArray[i], typeof jimArray[i]); // read values from an array
  //types[i] = typeof jimArray[i];// Filling types array
  types.push(typeof jimArray[i]);
}
console.log(types); */

const allYears = [1991, 2007, 2011, 2016];
const allAges = [];
for (let i = 0; i < allYears.length; i++) {
  allAges.push(2037 - allYears[i]);
}
console.log(allAges);

// continue and break
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < jimArray.length; i++) {
  if (typeof jimArray[i] !== 'string') continue;
  console.log(jimArray[i], typeof jimArray[i]); // read values from an
}

console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < jimArray.length; i++) {
  if (typeof jimArray[i] === 'number') break;
  console.log(jimArray[i], typeof jimArray[i]); // read values from an
}

//////////////////////////////////////
// Looping Backwards and Loops in Loops
const mary = ['Mary', 'Jones', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

for (let i = mary.length - 1; i >= 0; i--) {
  console.log(i, mary[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------STARTING EXERCISE ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

///////////////////////////////////////
// The while Loop

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
// creating a random number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is ending .....');
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/
const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  const tip1 = calcTip1(bills1[i]);
  tips1.push(tip1);
  totals1.push(tip1 + bills1[i]);
}
console.log(tips1, totals1);

// BONUS
const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage1(totals1)); // 275.19
console.log(calcAverage1(tips)); // 46.18
