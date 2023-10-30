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

/*
/////////////////////////
//Functions Returning Functions
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

/////////////
The bind Method
*/
// const luftansa = {
//   airline: 'Luftansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// luftansa.book(21, 'Kerim Sekili');
// luftansa.book(22, 'F Smith');
// console.log(luftansa);

// const thy = {
//   airline: 'Turk HAVAYOLLARI',
//   iataCode: 'THY',
//   booking: [],
// };

// const book = luftansa.book;

// // Does not work
// // book(23,"Ela Sarah")

// // Call method
// book.call(thy, 344, 'Ero Sikos');
// console.log(thy);

// book.call(luftansa, 234, 'Erden Eren');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'SW',
//   booking: [],
// };

// book.call(swiss, 86, 'Sheldon Cooper');
// console.log(swiss);

// //Apply method
// const flightData = [543, 'Jany Mary'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method
// //book.call(thy, 344, 'Ero Sikos');
// const bookTHY = book.bind(thy);
// const bookLH = book.bind(luftansa);
// const bookLX = book.bind(swiss);

// bookTHY(23, 'Kerim Sekili');

// const bookTHY23 = book.bind(thy, 23);
// bookTHY23('Kerim Sekili');
// bookTHY23('Za asda');

// // With Event Listeners
// luftansa.planes = 300;
// luftansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// luftansa.buyPlane;

// document
//   .querySelector('.buy')
//   .addEventListener('click', luftansa.buyPlane.bind(luftansa));

// //Partial Application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value => value + value  * 0.23;

// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

/// Coding Challange 1

// const poll = {
//   question: 'What is you rfavorite programming Language ?',
//   options: ['0:JavaScript', '1:Python', '2:Rust', '3: C++'],
//   // This generates [0,0,0,0]. More in the next section

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number')`
//       )
//     );
//     console.log(answer);
//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13,2,4,1
//       console.log(`Poll results are ${this.answers.join(',')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re assigning f func
h();
f();

console.dir(f);

// Example 2
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start ${wait} seconds`);
};

const perGroup = 1000;
boardPassangers(180, 3);
