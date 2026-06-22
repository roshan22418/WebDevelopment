const name = "Roshan"
const totalRepo = 54

console.log(`My Name is ${name} and total repo is ${totalRepo}`)   // this is string interpoltation


const gameName = new String("gtbycity game")
console.log(gameName)


//************** operation ******************/


console.log(name.length);

const gameTheory = "convex-optimization-rinku-maam"

const anotherString = gameTheory.substring(0,3)
console.log(anotherString)

const anotherstringUsingSlice = gameTheory.slice(-8,3)

const newThing = "    Roshan  "
console.log(newThing.trim());



const url = "https:/roshan.com/roshan%20newthing"
console.log(url.replace('%20','-'))
console.log(url.includes('roshan'))

console.log(gameTheory.split('-'));


