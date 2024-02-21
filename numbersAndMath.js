// .....   NUMBERS   .....

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));     // numbers after point

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));   // shows in indian standard with commas

console.log();

// .....   MATHS   .....

console.log(Math);
console.log(Math.abs(-4));   // absolute : 4
console.log(Math.round(4.8));  // round off : 5
console.log(Math.ceil(4.1));   // if crossed 4 then moves to next value
console.log(Math.floor(4.1));   // if crossed 4 then shows the base value
console.log(Math.sqrt(9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);   // for the case that min value that comes must always be >= 1.
console.log(Math.floor(Math.random()*10) + 1);   

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);