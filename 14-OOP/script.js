'use-strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  /* this.calAge = function () {
    console.log(2037 - this.birthYear);
  };*/
};

const jim = new Person('Jim', 1987);
console.log(jim);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to Prototype
// 4. Function automatically return {}

const lily = new Person('Lily', 2018);
const lucas = new Person('Lucas', 2014);
console.log(lily, lucas);

console.log(jim instanceof Person);

///// PROTOTYPES
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jim.calcAge();
lily.calcAge();

console.log(jim.__proto__);
console.log(jim.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jim));
console.log(Person.prototype.isPrototypeOf(lily));
console.log(Person.prototype.isPrototypeOf(Person));

// Set properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jim.species, lily.species);

Person.prototype.pet = 'Dog';
console.log(jim.pet);
