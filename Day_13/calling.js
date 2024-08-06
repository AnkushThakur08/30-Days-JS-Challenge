// Using the module here
// const { addTwoNumber, person } = require("./25_July");
const { addTwoNumber, addTwoSubtract } = require("./02_defaultNamedDefault");
const factorial = require ("./02_defaultExports")


console.log(factorial(5));
console.log(addTwoNumber(10, 10));
console.log(addTwoSubtract(100, 10));


// 03
const accessProp = require("./Task5_01.js");

console.log(`The number is ${accessProp.num}`);
console.log(`The string is ${accessProp.str}`);
accessProp.greet(accessProp.str);
accessProp.operateArr([2, 5, 10, 3]);