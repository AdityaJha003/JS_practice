// singleton
// Object.create

// object literals


const mySym = Symbol("key1");

const JsUser = {
    name : "Aditya",
    "fullName" : "Aditya Jha",
    [mySym] : "mykey1",      // way to declare symbol
    age : 18,
    location : "Delhi",
    email : "aditya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}

// ways to access object elements
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym]);

JsUser.email = "adi@chatgpt.com";
Object.freeze(JsUser);    // freezed JsUser so that it cannot be changed
JsUser.email = "aditya@microsoft.com";
console.log(JsUser);


// As functions

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());