const user = {
    username : "Aditya",
    loginCount : 9,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);    // this keyword is used to get current context
    }

}

console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);    // returns empty array



// const promiseOne  = new Promise()
// const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username     // left side is variable and right side is getting passed
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = User("Adi", 12, true)
const userTwo = User("Geet", 16, false)   // userTwo overrides previous one
console.log(userOne);
console.log(userTwo);
// this situation is dealt by using new keyword making new instances