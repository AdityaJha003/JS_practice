// Functions in JS

function sayHello(){
    console.log("Hey Adi");
}

sayHello(); // Calling of function
sayHello();
sayHello();
sayHello();


// arguments : a and b
function add(a,b){
    console.log(a+b);
}

add(5,10);  // parameters passed here
add(1,2);


function multiply(a,b){
    let ans = a*b;
    return ans;
}
let a = multiply(4,3);
console.log("The value is :" ,a);




// Unlimited arguments accept
function addNumbers(){
    let ans = 0;
    for(let i = 0; i<arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans;
}

// another method to do the same (spread operator)

function addNumbersV2(...numbers){
    let ans = 0;
    for(let i = 0; i<numbers.length; i++){
        ans = ans + numbers[i];
    }
    return ans;
}

let result = addNumbers(1,22,31,42,66,89);
let result1 = addNumbersV2(1,22,31,42,66,89);

console.log(result);
console.log(result1);