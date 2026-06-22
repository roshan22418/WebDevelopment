let score = "22"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*

"22" -> 22
"23abc" -> NaN
null -> 0
undefined -> NaN
true -> 1
false -> 0
*/

 

// for the string is 
// String(22) -> "22"
// Boolean(22) -> true
// Number(22) -> 22

// let name = ""
// boolean(name) -> false




// ******************** Operations ********************

console.log(1 +2)
console.log(1 -2)
console.log(1 *2)
console.log(1 /2)
console.log(1 %2)
console.log(2 **2)



let firstName = "Roshan"
let lastName = "Kumar"
console.log(firstName + lastName)

console.log(1+"2")  //12
console.log("1"+2)  //12
console.log("1"+2+2)  //122
console.log(1+2+"2")  //32
console.log(1+2+"2"+2)  //322
console.log(1+2+"2"+2)  //3222           this thing comes from ecma script specification  link is https://262.ecma-international.org/6.0/#sec-addition-operator-plus


console.log(+true)  //1
console.log(+"")  //0
console.log(+"Roshan")  //NaN
console.log(+"22abc")  //NaN
console.log(+"22abc"+2)  //NaN2
console.log(+"22abc"+2)  //NaN2





// postfix and prefix
let x = 3;
console.log(x++);  //3  post increment
console.log(x);  //4  pre increment
console.log(++x);  //5  pre increment
console.log(x);  //5  post increment
console.log(x--);  //5  post decrement
console.log(x);  //4  pre decrement
console.log(--x);  //3  pre decrement
console.log(x);  //3  post decrement


//******************* Comparisons ********************


// in javascript == and >= is different work 
//== and === is strict check and also check the datatype

console.log(2 > 1)  //true
console.log(2 >= 1)  //true
console.log(2 < 1)  //false
console.log(2 <= 1)  //false
console.log(2 == 1)  //false
console.log(2 != 1)  //true


console.log("2" > 1)  //true  
console.log("02" > 1)  //true
console.log(2 > "1")  //true
console.log(2 > "1")  //true


console.log(null > 0)  //false    null is converted to 0 for comparison
console.log(null == 0)  //false    null is not equal to 0
console.log(null >= 0)  //true    null is converted to 0 for comparison

console.log(undefined > 0)  //false    undefined is converted to NaN for comparison
console.log(undefined == 0)  //false    undefined is not equal to 0
console.log(undefined >= 0)  //false    undefined is converted to NaN for comparison




