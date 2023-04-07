'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20.00', adress }) {
    console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${adress} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

// [key,value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close ${close}`);
}
/*
//////////////////////
//Optional Chaining
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not ex');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not ex');

//Arrays
const users = [{ name: 'Kerim', email: 'hello@kerim.io' }];

console.log(users[0]?.name ?? 'User empty');
*/

/*
///////////////////////////////
// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// console.log([...menu.entries()]);

/*
/////////////////////////////
Coding Challange 1 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Kerem'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoal('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoal('Lewandowski', 'Gnarby');
printGoal(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 win');
team1 > team2 && console.log('Team 2 win');
*/
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Kero',
//   owner: 'KS',
// };

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator(null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND Assignment op
// // rest1.owner = rest1.owner && '<ANONYMUS>';
// // rest2.owner = rest2.owner && '<ANONYMUS>';
// rest1.owner &&= '<ANONYMUS>';
// rest2.owner &&= '<ANONYMUS>';

// console.log(rest1);
// console.log(rest2);

/*
/////////////////////////////
//The nullish coalescing Operator
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT or 0)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
////////////////////////
//Short Circuiting (|| and &&)

console.log('---- OR ---');
// Use any Data Type,return ANY data type,
// short circuitting(if first value is truthy, immediately return this value)
console.log(3 || 'Kerim');
console.log('' || 'Kerim');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('--- AND ---');
console.log(0 && 'Kerim');
console.log(7 && 'KSDK');

console.log('Hi' && 23 && null && 'Jonas');

//Practical Ex
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Rocfor Cheese');
}

restaurant.orderPizza && restaurant.orderPizza('Mantar', 'Peynir');
*/

//REST Pattern and Paramters
// 1)Destructuring

//SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Obejcts
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2)Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(34, 23, 43, 5, 78, 3);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('onion', 'olives', 'cheese');
// restaurant.orderPizza('cheese');
/*
///////////////////////////
//The Spread Operator(...)
const arr = [7, 8, 9];
const badExampleArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badExampleArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Manti'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables : arrays,strings,maps, sets. NOT opjects
const str = 'Kerim';
const letters = [...str, '', 'S.'];
console.log(letters);

//Real World Example
// const ingredients = [
//   prompt("Let's make apsta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 2000, ...restaurant, founter: 'Kerim' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Mantıcı hacı usta';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
//Destructuring Objects
// restaurant.orderDelivery({
//   time: '22.30',
//   adress: 'Via del ks,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: 'Goncagül sk',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //Default values
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 34, c: 434 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

///////////////////////////////
//Destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested Destructuring
// const nested = [2, 4, [5, 8]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
