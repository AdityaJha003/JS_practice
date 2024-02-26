const user = {
    username : "ADI",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)    // this keyword makes current context (user scope me jitne variable the unko access karne ke liye this keyword use hoga)
        console.log(this);
    }
}

user.welcomeMessage();
// user.username = "sam";   // context changed to sam
// user.welcomeMessage();

console.log(this);    // gives output : {} empty parenthesis
                      // and when run in browser gives window object which is global object



function hello(){
    let username = "Raiden";
    console.log(this.username);    // undefined : can't use this keyword
}
hello();


// Arrow Function 

// const addTwo = (num1, num2) => {
//     return num1 + num2    // this is called explicit return bcoz return keyword is used
// }

// const addThree = (num1, num2, num3) =>  num1 + num2 + num3   // this is called implicit return

// console.log(addTwo(3,4));
// console.log(addThree(3,4,1));

const addTwo = (num1, num2) => ({username : "Aditya"})
console.log(addTwo(3,4))