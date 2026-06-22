console.log("Hello World");

// alert("Hello World"); this is used in browser to show a message to the user 

const accountNumber = 1234567890;  //this is a constant variable and it cannot be changed
let accountBalance = 1234567890;  //this is a let variable and it can be changed and the scope is block
var customerName = "John Doe";  //this is a var variable and it can be changed and the scope is global

/*
var is not used in modern
javascript because it has some issues with the scope and the redeclaration of the variable.
*/

emailId = "test@test.com"; //this is a global variable and it can be changed and the scope is global


console.table([accountNumber, accountBalance, customerName, emailId]);





// now comes to datatypes in javascript

let name = "John Doe";
let age = 20;
let isStudent = true;

/*
string is a sequence of characters enclosed in double or single quotes
number is a numeric value
boolean is a true or false value
null standalone value and also a object by using typeof it will show object
undefined is a value that is not defined
symbol is a unique and immutable primitive value and can be used as an identifier in react and also in figma
*/


console.log(typeof undefined)
console.log(typeof null)
// NOw comes to the non primitive datatypes or objects in javascript