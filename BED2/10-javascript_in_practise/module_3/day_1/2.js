// // // function rectArea(width) {
// // //     return (height) => height * width;
// // // }

// // // console.log(rectArea(3)(5));

// // // const rectAreaWidth3 = rectArea(3);

// // // console.log(rectAreaWidth3(2));

// // function rectArea(width, height) {
// //     console.log(this);
// //     return width * height;
// // }

// // const rectAreaWidth3 = rectArea.bind(null, _, 3);

// // console.log(rectAreaWidth3(3));

// function* numbersGenerator() {
//     let n = 1;
//     while (true) {
//         yield n++; // Yields the next number in the sequence
//     }
// }
// const numbers = numbersGenerator(); // Creates a generator
// console.log(numbers.next().value); // Outputs: 1
// console.log(numbers.next().value);

const dataset = [1, 2, 3, 4, 5];
const lazyMapped = dataset.map((x) => () => x * x); // Maps each element to a function that squares it
console.log(lazyMapped[1]());

const lazySum = lazyMapped.reduce((acc, curr) => acc + curr(), 0); // Reduces the array by summing the squares
console.log(lazySum); // Outputs: 55
