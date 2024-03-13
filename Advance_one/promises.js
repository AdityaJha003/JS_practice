// Promise is an object.

// 1st promise
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');  // first async task will complete
        resolve()     // resolve is linked to .then with a function
    }, 1000)
})

promiseOne.then(function(){     // linked to resolve()
    console.log("Promise consumed");
})


// 2nd promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// 3rd promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Adi", email: "adi@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// 4th promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Aditya", password:"123"})
        }
        else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})



// 5th promise
const promiseFive = new Promise(function(resolve, rejeect){
    setTimeout(function()  {
        let error = false
        if(!error){
            resolve({username: "javascript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))