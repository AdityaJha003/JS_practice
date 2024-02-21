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

// changing data type
let score = "33";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof score);

// when converted to boolean
// 1 => true; 0 => false
// "" => false
// "Aditya" => true


// age criteria
const age = 22;
if(age>=18){
    console.log('yes, you can vote');
}
else{
    console.log('no, you cannot vote');
}

// second way to code : TERNARY OPERATOR
// const age = 90;
// let result = age >= 18 ? 'Yes' : 'No'
// console.log(result);


// Switch Case
const option = 2;

switch(option){
    case 1:
        console.log("namaste");
    break;
    case 2:
        console.log("Hello");
    break;
    case 3:
        console.log("Bonjour");
    break;
    default:
        console.log("Invalid Operation");
}


// Logical Operator : AND --> &&
//                      OR  --> ||
//                      NOT --> !

const age1 = 30;
const gender = "male";

if(age1 >= 18 && gender == 'male'){
    console.log("You are adult male");
}


// LOOPS

// For loop -> If you know how many times to loop
for(let i=1; i<=10; i++){
    console.log("Aditya");
}

// While loop -> If you know condition but dont know number of iterations

let ip = 0;
let house = 50;

// while(ip != house){
//     ip = ip + 1;
//     console.log("Step taken" + ip);
// }

// Do while loop -> first run the code then checks condition

do{
    ip = ip + 1;
    console.log("Step taken" + ip);
}
while(ip <= house)



// Game of prompt on webpage

let number = 40;
let guess = 0;

do{
    guess = parseInt(prompt("Guess a number :"));
    if(guess == number){
        alert("Winner");
        break;
    }
} while(guess != 0);
