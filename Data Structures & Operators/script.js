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

const airline = 'Turkish Air Lines';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'KerIm';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@kerim.io';
const loginEmail = 'Hello@kerim.İO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGP = '234,43£';
const priceUS = priceGP.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 19. Boarding door 19';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'A23CS';
console.log(plane1.includes('A23'));
console.log(plane1.includes('Boing'));

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board ! ');
  else console.log('Welcome abroad ! ');
};
checkBaggage('I have a laptop,some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*
/////////////////////////
// Working with STRINGS
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
 
console.log(airline.slice(1, -2));

const ckeckMiddleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

ckeckMiddleSeat('11B');
ckeckMiddleSeat('23C');
ckeckMiddleSeat('3E');

console.log(new String('kerim'));
console.log(typeof new String('kerim'));

console.log(typeof new String('kerim').slice());
*/

/*
//////////////////////
//Code Challange 3 About maps and sets

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
//console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on avarage, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on avarage, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${event}`);
}
*/

/*
////////////////////////////
// Maps
const question = new Map([
  ['question', 'What is the best programming lang ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quizz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to Array
console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

*/

/*
///////////////////////////
// Maps:Fundamentals
const rest = new Map();
rest.set('name', 'Çavuşun Yeri');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Istanbul,Turkey'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 11;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));
rest.delete(2);
// rest.clear();
rest.set([1, 2], 'Test  ');

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

// console.log(rest.get([1, 2]));

*/

/*
/////////////////////////
//Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
]);

console.log(orderSet);

console.log(new Set('Kerim'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('').size);

*/

/*
/////////////////////////////////
// Looping objects
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
*/
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

/////////////////////////////
// Coding Challange 1

/*
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
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

/*
////////////////////////////////
// Coding Challange 2
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}  ${odd}`);
}
*/

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Kerem'];

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoal = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoal('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoal('Lewandowski', 'Gnarby');
// printGoal(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 win');
// team1 > team2 && console.log('Team 2 win');

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
