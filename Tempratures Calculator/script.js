// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temp = [17, 21, 23];
const temp1 = [12, 5, -5, 0, 4];

console.log(`...${temp[0]}C...${temp[1]}C...${temp[2]}C`);

const prointForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days...`;
  }

  console.log("..." + str);
};

prointForecast(temp);
