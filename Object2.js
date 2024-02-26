// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammmy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Accessing objects
const regularUser = {
    email : "Sam@gmail.com",
    fullName :{
        userfullname : {
            firstName : "Samuel",
            lastName : "Perkinson"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstName);

// combining objects
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = Object.assign(obj1, obj2, obj4);    combining objects
const obj3 = {...obj1, ...obj2, ...obj4};    // another way of combining
console.log(obj3);

const users = [
    {
        id:1,
        email: "adi@gmail.com",
    },
    {
        id:2,
        email: "a@gmail.com",
    },
    {
        id:3,
        email: "jsebv@gmail.com",
    }
]

users[1].email;
console.log(tinderUser);

// accessing keys and values individually
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// to check if this property is present
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



console.log();
console.log();
console.log();



const course = {
    cousename : "js practice",
    price : "999",
    courseInstructor : "Aditya"
}

// course.courseInstructor

const {courseInstructor : instructor} = course    // couseInstructor destructured to instructor

// {} curly brackets used for destructuring ....REMEMBER !!!

console.log(instructor);  // now we can call instructor
