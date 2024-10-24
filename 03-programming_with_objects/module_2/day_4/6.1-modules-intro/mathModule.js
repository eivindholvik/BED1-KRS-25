/*
    mathModule.js - This file contains our math functions as a module.
    The purpose of this file is to encapsulate logic that deals only with mathematical operations.
    This helps with separation of concerns: 
    - We keep math-related logic in one place.
    - Other parts of the app can use this functionality without having to include it all in one file.
    - If we want to change how a math operation works, we only need to edit this file.
    
    In this file, we will define and export basic math functions:
    - add: Adds two numbers.
    - subtract: Subtracts two numbers.
    - multiply: Multiplies two numbers.
    - divide: Divides two numbers (with basic error handling for division by zero).
*/

/**
 * Adds two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The result of a - b.
 */
export function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
    return a * b;
}

/**
 * Divides the first number by the second.
 * Includes a check to prevent division by zero.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|string} The quotient of a / b or an error message if b is zero.
 */
export function divide(a, b) {
    return b === 0 ? 'Error: Division by zero' : a / b;
}
