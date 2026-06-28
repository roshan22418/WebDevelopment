// singletion -> when we build by using the constructor
// object literial -> without construction



const mySymbol = Symbol("roshan1")

const iiitDStudentDetail = {
    Name:"roshan",
    "full name":"roshan kumar mahto",
    Roll_No:2022418,
    [mySymbol]:"RoshanBottom",
    Age:23,
    Cgpa:7.4,
    location:"bihar",
    email:"roshan22418@iiitd.ac.in",
    courseDone:["DSA","OOPS","OS","DS","DBMS"]
}

console.log(iiitDStudentDetail.courseDone);

console.log(iiitDStudentDetail["full name"]);    //this is imporatant for the like "full name"


console.log(iiitDStudentDetail[mySymbol])    // remeber for the symbol how to use in object and how to retrieve
iiitDStudentDetail.email = "roshankumar22418@gmail.com"
console.log(iiitDStudentDetail)


iiitDStudentDetail.DailyRoutine = function(){
    console.log(`aab se time waste nahii karunga ${this.Name}`)     //string interpolation
}

Object.freeze(iiitDStudentDetail)   // freeze the object and now not chagne anything and also not get any error


console.log(iiitDStudentDetail.DailyRoutine())