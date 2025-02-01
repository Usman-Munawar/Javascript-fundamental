/* In this file we will learn about how to check data type of the variables and how to convert 
datatype of variables according to the requirement */
// Lets start with any value
let score = 45;
// check the datatype of variable

typeof(score);

// we can print it by two different way. First one
console.log(typeof score);
// second one
console.log(typeof(score));

// convert number value into string

let stringNumber = String(score)

// check it 
console.log(typeof(stringNumber));

// convert number value into boolean

let booleanNumber = Boolean(score)

//check it 
console.log(typeof(booleanNumber));

// check the value of booleanNumber
console.log(booleanNumber);

// there is not specific way to convert any number or string into boolean. As we know there are 2 state 
// in the boolean. True & False
// Lets check is really 0 means false and 1 means true 
let num = 0;
let boolNum = Boolean(num)

// it must be false 

console.log(boolNum);

let num2 = 1;
var boolNum2 = Boolean(num2)

// it should be true
console.log(boolNum2);




