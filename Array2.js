const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);  // pushed dc array as the whole 4th value in marvel
console.log(marvel_heros);

marvel_heros.concat(dc_heros);  // same scenario as push
console.log(marvel_heros);

// method 1 to combine arrays
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// method 2 to combine arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]];  // this array has another array inside multiple times

const real_another_array = another_array.flat(Infinity);  // this method is used to write the real full array
console.log(real_another_array);


console.log(Array.isArray("ADITYA"));  // returns false bcoz not an array
console.log(Array.from("ADITYA"));     // divides all elements of ADITYA as elements of array
console.log(Array.from({name: "aditya"}))   // returns empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // combines the elements as an array