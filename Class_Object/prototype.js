// Objective to build

// let myName = "aditya     "
// let myChannel = "adi.tya.jha"

// console.log(myName.truelength());    asking without spaces

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aditya = function(){
    console.log('aditya is present in all subjects');
}

Array.prototype.heyAditya = function(){
    console.log(`Aditya says hello`);
}

heroPower.aditya()
myHeros.aditya()
myHeros.heyAditya()
// heroPower.heyAditya()

// inheritance

const User ={
    name: "saarthak",
    email: "saarthak@gmail.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Soumil        "

String.prototype.trueLength = function(){
    console.log(`$(this)`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"MicrosoftAzure".trueLength()
"AWS Cloud".trueLength()