const MynewObject = new Object({
    Name:"Roshan kumar mahto",
    Age:24
});


// console.log(MynewObject)



const customer = new Object()
customer.id = "roshan22418"
customer.phoneNumber = 7217708385
customer.emailId = "roshan22418"
customer.isLogin = false


// console.log(customer);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = Object.assign({},obj1,obj2)    // if i not use {} this then obj1 is a target object 

const obj3 = Object.assign(obj1,obj2)
console.log(obj1===obj3)        // true
const obj4 = {...obj1,...obj2};

// console.log(obj4);




// Data comes from database in array


const data = [
    {
        id:1,
        Name:"roshan kumar"
    },
    {
        id:2,
        Name:"Sandeep"
    },
    {
        id:'3',
        Name:"vikash"
    }
]


//extract all the key from object

console.log(Object.keys(customer))
console.log(Object.values(customer));
console.log(Object.entries(customer))  //[[ 'id', 'roshan22418' ], [ 'phoneNumber', 7217708385 ],[ 'emailId', 'roshan22418' ],[ 'isLogin', false ]]


console.log(customer.hasOwnProperty("name"))  //->false