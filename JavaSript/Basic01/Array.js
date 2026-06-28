const arr = [1,2,3,4,'roshan',"kumar","Mahto"]
arr.push("train")
// console.log(arr)

const arr2 = ["Anil","Kumar","Mahto"]

// const arr3 = arr.concat(arr2)

// console.log(arr)


// const arr3 = [...arr,...arr2]
// console.log(arr3)


const anotherArray = [1,2,3,3,4,4,[4,23,123,21],[122,21,[1,1,2,3]]]

const anotherArray2 = anotherArray.flat(Infinity)

// console.log(anotherArray2)


console.log(Array.isArray("Roshan"))
console.log(Array.from("roshan"))




console.log(Array.from({name:"roshan"}))  //interesting case not converting into array gives empty array

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))