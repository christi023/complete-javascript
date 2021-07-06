'use strict';
/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 1000);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // skip a default parameter by using undefined
*/
/*
///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LH234';
const jen = {
  name: 'Jen Smith',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

//checkIn(flight, jen);
//console.log(flight);
//console.log(jen);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jen);
checkIn(flight, jen); */

/*
///////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  // takes 1 string and return a new one without any spaces
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name} `);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// example = JS uses callbacks all the time
const highFive = function () {
  console.log('👋');
};
document.body.addEventListener('click', highFive);

['Jonas', 'Martha', 'Adam'].forEach(highFive);

///////////////////////////////////////
// Functions Returning Functions

const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet('Hey');
greeterHey('Jim');

greet('Hello')('Jim'); */

///////////////////////////////////////
// The call and apply Methods
const britishAirways = {
  airline: 'British Airways',
  iataCode: 'BA',
  bookings: [],
  book(flightNum, title) {
    console.log(`${title} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings && this.bookings.push({ flight: `${this.iataCode}${flightNum}`, title });
  },
};

britishAirways.book(239, 'Jim Olsson');
britishAirways.book(647, 'Lily Olsson');
console.log(britishAirways);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

// take the book function and store into a new variable which can be use
const book = britishAirways.book;
// Does not work
//book(23, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams'); // binding with call
console.log(eurowings);

book.call(britishAirways, 239, 'Mary Cooper');
console.log(britishAirways);

// example
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method - Not use much
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // better way with spread operator

////////// Bind Method ////////////
const bookEW = book.bind(eurowings);
const bookBA = book.bind(britishAirways);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Lucas Olsson');
bookEW23('Kari Haynes');
