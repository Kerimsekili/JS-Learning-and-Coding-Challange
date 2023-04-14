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
*/

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
