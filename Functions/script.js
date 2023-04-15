'use strict';

/*
////////////////////
//Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('GK342');
createBooking('AH1223', 2, 3433);
createBooking('AH1223', undefined, 3433);

////////////////////////
// Passing arguments Value vs Reference 
const flight = 'LH1234';
const kerim = {
  name: 'Kerim Sekili',
  passport: 50489054751,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'NJS123';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 50489054751) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};
// checkIn(flight, kerim);
// console.log(flight);
// console.log(kerim);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(kerim);
checkIn(flight, kerim);

//////////////////////////

//Functions accepting other functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Kerim', 'Zeynep', 'Furkan'].forEach(high5);
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Kerim');
greeterHey('Steven');

greet('Hello')('Kerim');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
