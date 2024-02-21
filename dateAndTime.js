// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);    // bcoz month starts from 0
console.log(newDate.getHours());
console.log(newDate.getDay());

// '${newDate.getDay()} and the time'     this is how it is used in projects

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ""
})