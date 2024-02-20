// Variables

// var --> global

// var age = 22;
// age = "aditya";
// console.log(age);    // output : aditya


if(true){
    var a = 22;
}
console.log(a);


// let --> local

// if(true){
//     let b = 33;
// }
// console.log(b);


// const --> local
// const value once assigned cannot be changed

const name = "adi";
// name = 30;     cannot be changed
console.log(name);

// NULL
let lastLoginDate = null;


// Objects
const person = {
    firstName : "aditya",
    lastName : "jha",
    isLoggedIn : false,
    age : 20
}

console.log(person.lastName);
console.log(person.isLoggedIn);

// In JS -- 1 -> true
//          0 -> false

// string '1' + '1' - string
// string + number  - string
// string * number  - number
console.log('123' * 1);

console.log(typeof 'adi');
console.log(typeof 123);
console.log(typeof person);
console.log(typeof person.firstName);