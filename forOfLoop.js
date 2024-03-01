// for of Loop

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set(`IN`, "India")
map.set(`US`, "United States of America")
map.set(`Fr`, "France")

console.log(map);
for(const [key, value] of map){
    console.log(key, ':-', value);
}


const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// For each loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']
// coding.forEach( function name (val) {
//     console.log(val);
// } )                         ONE WAY OF DOING

// OTHER WAY IS ARROW FUNCTION
// coding.forEach( (item) =>{
//     console.log(item);
// } )


// ANOTHER WAY IS MAKING A FUNCTION AND USING IT INSIDE FOREACH LOOP
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach( (item, index, arr) =>{
    console.log(item, index, arr);
} )



const myCar = [
    {
        carName : "i20",
        carCompany : "Hyundai"
    },
    {
        carName : "civic",
        carCompany : "Honda"
    },
    {
        carName : "wagonR",
        carCompany : "Maruti Suzuki"
    }
]

myCar.forEach( (item) => {
    console.log(item.carCompany);
} )