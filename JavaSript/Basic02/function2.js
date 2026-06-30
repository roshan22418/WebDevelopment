

function calculateCartPrice(a,b,...nums){     //  a= 2,b = 23 this is rest operator and also some time spread operator when two or more object merge
    return nums;
}

const value = calculateCartPrice(2,23,22,56,22,2443,342)      //-> it will be give list value
// console.log(value)



const userDetail = {
    name:"roshan",
    userId:"roshan22418",
    emailId:"roshan22418@iiitd.ac.in"
}


function handleObject(userObject){
    return `user name is ${userObject.name}, userId is ${userObject.userId} and
     email address is ${userObject.emailId}`
}


console.log(handleObject(userDetail));