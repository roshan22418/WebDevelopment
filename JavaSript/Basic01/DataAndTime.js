let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())


// const Mydate = new Date(2026,1,29)

const MyDataNewFormate = new Date("01-29-2026")
console.log(MyDataNewFormate.toString())
// console.log(Mydate.toDateString())

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(MyDataNewFormate.getTime())


//++++++++++++++++++++ convert millisecond into second ++++++++++

console.log(Math.floor(myTimeStamp/1000))


console.log(myDate.getFullYear())
console.log(myDate.getMonth()+1)
console.log(myDate.getDay())