/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the thropy 👑 `);
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the thropy 👑 ");
} else {
    console.log("Scorless...");
}
*/

//BONUS 1
const calcAvrg = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAvrg(44, 23, 71);
let scoreKoalas = calcAvrg(65, 54, 49);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log("Dolphins are win ");
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log("Koaalas are wi")
    } else {
        console.log("No team wins");
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 210);

scoreDolphins = calcAvrg(85, 54, 41);
scoreKoalas = calcAvrg(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
