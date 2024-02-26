// outside this box is called global scope

var c = 300
let a= 300

if(true){       // anything written inside this if .. is called block scope
    let a = 10
    console.log("Inner: ", a);
    var c = 30
}

console.log(a);
console.log(c);


function one(){
    const username = "Aditya";

    function two(){
        const website = "Linkedin";
        console.log(username);
    }
    // console.log(website);      website cannot be accessed outside its scope

    two();
}
one();


if(true){
    const username = "adi"
    if(username === "adi"){
        const website = "yt"
        console.log(username + " " + website);
    }
    // console.log(website);    similarly, cannot call website out of scope
}
// console.log(username);    same case cannot run



// -------- IMPORTANT ------- {  hoisting  }

console.log(addone(5))

function addone(num){       // function declaration
    return num + 1;
}


// cannot access "addTwo" before initialization
console.log(addTwo(5))

const addTwo = function(num){     // declared and hold in a variable
    return num + 2;
}
