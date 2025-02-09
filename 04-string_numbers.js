// Here we will discuss the prototype(methods) of string

// here we declare one variable in normal or most common way. The problem with this type of decalaration is we can not use string properties.

const first_name = "Bilal"

// To use different method of string we can declare variable like this
const name = new String("Hello World")


// Different methods of String.
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.trim());
console.log(name.toLowerCase());


// +++++++++++++++++++++++++++++++++++++++++ Same things with Number. 

const first_number = new Number(120)
console.log(first_number)

// Most commonly used methods for Numbers datatype

// It will return the value in the form of exponential
console.log(first_number.toExponential())

// it will return the value with specific number
console.log(first_number.toFixed(2)); // it throws 120.00 because we specify the length 2


console.log(first_number.toPrecision(2)); // it throws 1.2e+2 because in function we specify 2, it returns two digits and rest of number
// in exponential form

const second_number = 10000000
console.log(second_number.toLocaleString()) // it throws the value in US standards for good readability 

