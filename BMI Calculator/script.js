const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let calculateMarkBMI = massMark / heightMark ** 2;
let calculateJonasBMI = massJohn / (heightJohn * heightJohn);

const markHigherBMI = calculateMarkBMI > calculateJonasBMI;
console.log("Jonas BMI is : " + " " + calculateJonasBMI);
console.log("Mark BMI is : " + " " + calculateMarkBMI);

if (calculateJonasBMI > calculateMarkBMI) {
    console.log(markHigherBMI);
    console.log("Jonas BMI is higher than Mark BMI ");
}
else {
    console.log(markHigherBMI);
    console.log("Mark BMI is higher than Jonas BMI ");
}

