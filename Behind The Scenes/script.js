'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 2000) {
//       const firstName = 'furkan';
//       var str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'new output';
//     }
//     // console.log(str);
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Kerim';
// calcAge(2000);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAge(2000);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(2000);

// const kerim = {
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// kerim.calcAge();

// const matil = {
//   year: 2017,
// };

// matil.calcAge = kerim.calcAge;
// matil.calcAge();

// const f = kerim.calcAge;
// f();

// var firstName = 'Zeynep';

// const kerim = {
//   firstName: 'Kerim',
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//Solution 1
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

//Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// kerim.greet();
// kerim.calcAge();

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 5, 7);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 7);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Kerim',
  age: 22,
};
const friend = me;
friend.age = 24;
console.log('Friend:', friend);
console.log('Me:', me);

//Primitive Types
let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'Davis';
console.log(lastName, oldlastName);

//Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
(marriedJessica.lastName = 'Davis'), console.log('Before Mar:', jessica);
console.log('After Mar:', marriedJessica);
// marriedJessica = {};

//Copying Object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Peter', 'Engin'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Kerim');

console.log('Before Mar:', jessica2);
console.log('After Mar:', jessicaCopy);
