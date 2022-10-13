const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let MarkBMI = massMark / heightMark ** 2;
let JonasBMI = massJohn / (heightJohn * heightJohn);

const markHigherBMI = MarkBMI > JonasBMI;
console.log("Jonas BMI is : " + " " + JonasBMI);
console.log("Mark BMI is : " + " " + MarkBMI);

if (JonasBMI > MarkBMI) {
    console.log(markHigherBMI);
    console.log(`Jonas BMI (${JonasBMI}) is higher than Mark's BMI (${MarkBMI})`);
}
else {
    console.log(markHigherBMI);
    console.log(`Mark BMI (${MarkBMI}) is higher than Jonas BMI (${JonasBMI})`);
}

