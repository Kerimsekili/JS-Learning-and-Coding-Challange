'use strict';

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'kerim';
let job = 'teacher';
const year = 2000;

// Functions
console.log(addDecl(2, 3));
//console.log(addExp(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProduct);
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
