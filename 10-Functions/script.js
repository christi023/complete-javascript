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

///////////////////////////////////////
// Functions Accepting Callback Functions
