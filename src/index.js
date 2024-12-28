// This is the entry point of the application. 
// It contains examples of basic JavaScript concepts.

import * as helper from "./utils/helper.js";

const greet = (name) => {
    return `Hello, ${name}!`;
};

const add = (a, b) => {
    return a + b;
};

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(greet("World"));
console.log("Sum of numbers:", sum);
console.log("Addition of 5 and 10:", add(5, 10));
console.log("Multiply of 5 and 10:", helper.multiplyNumbers(5, 10));
console.log("Formatted string to lower case and trim:", helper.formatString("  Hello World  "));