let i = 0;
function fibonacci(n) {
    console.log("Times" + i++);
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// const fibo = [];
console.log(fibonacci(6));

// console.log(fibo);
