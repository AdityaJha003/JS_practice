// Array

const myArr = [10,11,23,33,46,59];
const myHeros = ["Ironman", "Spiderman", "Thor"];

const myArr2 = new Array(2,3,4,5);

console.log(myArr[0]);

// Array Methods

myArr.push(6);   // adds element to array
myArr.push(7);
myArr.pop();     // removes last element

myArr.unshift(9, 14);  // adds in the start of array
myArr.shift();         // removes element in the start of array

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));   // comes -1 bcoz value doesn't exist

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log();


// Slice, Splice

console.log("A", myArr);   // kind of names array as 'A'

const myn1 = myArr.slice(1,3);   // takes out elements at 1 to 2 index
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);    // changes in original array (here 1 shows index and 3 shows the number of elements deleted)
console.log("C", myArr);
console.log(myn2);