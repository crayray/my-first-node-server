

//script2.js
//Here we're requiring anything exported from script1 and setting it equal to a variable.
const script2 = require("./script2.js")

//script1 is an object (the module.exports object). In order to use the value, we have to call the atribute of that object.
const a = script2.largeNumber;
const b= 5;

console.log(a + b);