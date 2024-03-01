// Table from 1 to 10 together

for (let i = 1; i <= 10 ; i++){
    console.log();   // for space
    console.log(`Table for value: ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(i + `x` + j + `=` + i*j);
    }
}


// Break and continue

for (let index = 1; index <= 20; index++) {
    console.log(`Value of i is ${index}`);
    if(index == 5){
        console.log(`Detected 5`);
        // break;      // breaks at 5 and not goes to 20
        continue;      // continues flow after "Detected 5"
    }
}