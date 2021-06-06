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
/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
*/
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
function cutFruitPieces(fruit) {
  return fruit * 5;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

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
