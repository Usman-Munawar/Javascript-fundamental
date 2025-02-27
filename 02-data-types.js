/** JavaScript Data Types base on version ECMAScript 2015 (ES6) and Greater **/

/** Primitive Data Types **/

/** String **/

// Using double quotes
let playerName = "John";
console.log(playerName); // This will print "John"

// Using single quotes 
let playerName2 = 'John';
console.log(playerName); // This will print "John"

// Using backticks
let playerName3 = `John`;
console.log(playerName); // This will print "John"

/** Number **/

// Integer
let score = 100;
console.log(score); // This will print 100

// Float
let second_score = 100.5;
console.log(score); // This will print 100.5

/** Boolean **/

let isGameOver = false;
console.log(isGameOver); // This will print false

/** Null **/

let playerName4 = null;
console.log(playerName); // This will print null

/** Undefined **/

let playerName5;

console.log(playerName); // This will print undefined

/** Symbol **/

let id = Symbol("id");
console.log(id); // This will print Symbol(id)

/** BigInt **/

let phoneNumber = BigInt("03445060985");
console.log(phoneNumber); // This will print 03445060985

/** Non-Primitive Data Types **/

/** Object **/

let player = {
    name: "John",
    score: 100,
    isGameOver: false
};
console.log(player); // This will print { name: 'John', score: 100, isGameOver: false }

/** Array **/

let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits); // This will print [ 'Apple', 'Orange', 'Banana' ]

/** Function **/

function printPlayerName() {
    console.log("John");
}

console.log(printPlayerName); // This will print [Function: printPlayerName]
console.log(printPlayerName()); // This will print John

module.export = { printPlayerName }

