
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "Jonas Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi})  is higher than ${john.fullName}'s BMI(${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi})  is higher than ${mark.fullName}'s BMI(${mark.bmi})`)
}

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// let MarkBMI = massMark / heightMark ** 2;
// let JonasBMI = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = MarkBMI > JonasBMI;
// console.log("Jonas BMI is : " + " " + JonasBMI);
// console.log("Mark BMI is : " + " " + MarkBMI);

// if (JonasBMI > MarkBMI) {
//     console.log(markHigherBMI);
//     console.log(`Jonas BMI (${JonasBMI}) is higher than Mark's BMI (${MarkBMI})`);
// }
// else {
//     console.log(markHigherBMI);
//     console.log(`Mark BMI (${MarkBMI}) is higher than Jonas BMI (${JonasBMI})`);
// }

