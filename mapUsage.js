const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// TO ADD +10 IN ALL THE NUMBERS
// const newNums = myNumbers.map( (num) => { return num+10} )

const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    // .filter((num) => num >= 40)

// OUTPUT:
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
// ]

console.log(newNums);





// acc : accumulator
// currval : current value

// ONE WAY OF DOING
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and curr: ${currval}`)
//     return acc + currval
// }, 0)

// WAY OF ARROW FUNCTION
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "mobile dev course",
        price: 6999
    },
    {
        itemName : "py course",
        price: 4999
    },
    {
        itemName : "data science course",
        price: 12899
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);