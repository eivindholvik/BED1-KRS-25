// function multiply(a, b) {
//   a += 2;
//   return a * b;
// }

// const harald = 5;
// const y = 2;

// console.log(multiply(harald, y));

// console.log(harald);

// const numbers = [[5, 2], "heights for road"];

// function multiplyArr(arr) {
//   // const copy = [...arr]; // Shallow Copy
//   const copy = JSON.parse(JSON.stringify(arr)); // Deep copy
//   copy[0][0] += 2
//   return copy[0][0] * copy[0][1];
// }

// console.log(multiplyArr(numbers));
// console.log(numbers);


// // default value
// function potens(x, y = 2) {
//   return x ** y;
// }

// console.log(potens(2, 3));


// const x = function (a, b) {
//   return a * b
// };

// let z = x(3, 4);

// const y2 = (a, b) => {
//   return a * b;
// }

// default value
// function potens(x, y = 2) {
//   const out = x ** y;
//   console.log(out);
//   return out;
// }

// potens(2, 3);

//IIFE
((x, y) => { console.log(x ** y); })(2, 4);