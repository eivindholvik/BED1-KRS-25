/*
    app.js - This file is the entry point for our demo.
    We will import functions from mathModule.js and use them here.
    
    By importing these functions, we can separate our concerns:
    - The main logic (like handling user input, display, or managing the app's flow) stays in app.js.
    - The specific functionality (like math operations) stays in mathModule.js.
    
    Benefits of modules:
    - Maintainability: You can easily locate where specific code is stored.
    - Separation of concerns: Keeps each part of the code focused on one responsibility.
    - Reusability: You can reuse the math functions in other files or projects by simply importing them.
    
    We will import the following functions:
    - add
    - subtract
    - multiply
    - divide
*/

// Importing the math functions from mathModule.js
import { add, subtract, multiply, divide } from './mathModule.js';

// Example usage of the imported math functions
console.log('Addition (5 + 3):', add(5, 3)); // Should log 8
console.log('Subtraction (5 - 3):', subtract(5, 3)); // Should log 2
console.log('Multiplication (5 * 3):', multiply(5, 3)); // Should log 15
console.log('Division (5 / 3):', divide(5, 3)); // Should log 1.666...

// Example of handling division by zero
console.log('Division by zero (5 / 0):', divide(5, 0)); // Should log 'Error: Division by zero'
