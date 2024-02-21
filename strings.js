let value = 3
let negValue = -value
console.log(negValue)

let str = "Aditya"
let str1 = " Jha"
console.log(str + str1);

gameCounter = 100;
++gameCounter;       // prefix postfix
console.log(gameCounter);


// Stack (primitive) , Heap (Non-primitive)

// Stack
let a = "adityadotcom";

let b = a;
b = "helloworld";

console.log(a);
console.log(b);

// Heap

let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne;

userTwo.email = "aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);


const name = "Raiden";
const repoCount = 50;

console.log("Hello my name is ${name} and my repo count is ${repoCount}");



const gameName = new String("Hello");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "   Raiden   ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://aditya.com/aditya%20jha";
console.log(url.replace('%20','-'));
console.log(url.includes('hehe'));
console.log(gameName.split('-'));