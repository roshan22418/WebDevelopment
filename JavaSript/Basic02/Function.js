function FirstFunction(){
    console.log("finally you do it")
}

console.log(FirstFunction)   // it will be print the fucntion  



function primeNumberOrnot(num){
    for(let i = 2;i*i<=num;i++){
        if(num%i==0){
            console.log(`${num} is not a prime number`)
            return;
        }
    }
    console.log(`${num} is a prime number`)
}


primeNumberOrnot(5);
primeNumberOrnot(9);
primeNumberOrnot(43);



const addTwoNumber = function(a,b){
    return a+b;
    
}

// arrow fucntion 

const multiplyTwoNumber = (a,b)=>{
    return a*b
}

console.log(multiplyTwoNumber());

