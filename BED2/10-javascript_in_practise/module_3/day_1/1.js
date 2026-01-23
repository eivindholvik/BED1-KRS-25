// const addFive = (x) => x + 5; // Function that adds 5 to its input
// const multiplyByThree = (x) => x * 3; // Function that multiplies its input by 3
// const compose = (f, g) => (x) => g(f(x)); // Composes two functions

// // const multiplyAndAdd = compose(addFive, multiplyByThree); // First multiplies by 3, then adds 5
// console.log(compose(addFive, multiplyByThree)(2)); // Outputs: 11 (2 * 3 + 5)

// let i = 0;
// function neverends() {
//     if (i > 10000) return;
//     console.log(i);
//     i++;
//     neverends();
// }

// neverends();

function factorial(n) {
    if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    }
    return n * factorial(n - 1); // Recursive case: n multiplied by factorial of n-1
}

console.log(factorial(10));
// factorial(3) would calculate 3 * 2 * 1

function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const greetInEnglish = createGreeting("Hello");
console.log(greetInEnglish("Erik")); // Outputs: "Hello, Erik!"
// The greetInEnglish function remembers the 'greeting' varia

const greetInNorwegian = createGreeting("Hei");
console.log(greetInNorwegian("Olav"));

function APIFunc(method, endpoint, payload) {
    return async function (endpoint, payload) {
        await fetch(`${BASE_URL}/${endpoint}`);
    };
}
