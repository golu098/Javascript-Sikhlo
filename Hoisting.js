

// the process where the interpreter appears to move the declartion to the top of the code before excution 
// variables can thus be referenced before they are declared in js
// function expression and class expression can't be hoisted

// js only host declaration not initilization
 // the varaible will be undefined untill the line where it is initilized reached 

// with let and var hoisting is differenet
// var a;
// following 2 lines will run sucessfully
console.log(a);
hoist()
function hoist(){
  console.log("hoisting");
}

var a=9; //declaration hoisted to the top but initilaization is not
console.log(a);

