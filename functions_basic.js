function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 5);

console.log("result: ", result);



// function to print message
function loginUserMessage(username) {

    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage());   // undefined bcoz no username is passed


// Rest OR Spread operator (...)

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));
// prints 500, 2000 bcoz val1 took away 200 and val2 took away 400


console.log();

const user = {
    username : "adi",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price : 399
})




const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[0];
}
// console.log(returnSecondValue(myNewArray));    output : 200
console.log(returnSecondValue([1200, 300, 400]));   // output : 1200