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