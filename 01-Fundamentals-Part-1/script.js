/********** Values and Variables **********/
let country = 'Sweden';
let continent = 'Europe';
let population = '10,156,779 million';

console.log(`${country} is based in ${continent} and has a population of ${population} people`);

/******************* DATA TYPES ***************/
// Basic Operators
// Math operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Ohlsson';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/
////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/******************* CODING CHALLENGE #1 ***************/
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
*/

//Your tasks:
//1. Store Mark's and John's mass and height in variables
const massMark = '78';
const heightMark = ' 1.69';
const massJohn = '92';
const heightJohn = '1.95';

/*2. Calculate both their BMIs using the formula (you can even implement both 
versions)*/
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/*3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.*/
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI); // true

////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
