function rectArea(x, y) {
    return x * y;
}

function rectArea(y) {
    return function (x) {
        return x * y;
    };
}

const rectWidth5 = rectArea(5);

console.log(rectWidth5(5));

console.log(rectArea(6)(2));

const dataset = [1, 2, 3, 4, 5];
const lazySum = dataset
    .map((x) => () => x * x) // Maps each element to a function that squares it
    .reduce((acc, curr) => acc + curr(), 0); // Reduces the array by summing the squares
console.log(lazySum); // Outputs: 55
