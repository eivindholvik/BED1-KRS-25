function sum(a, b) {
    return a + b;
}

function devide(a, b) {
    if (b === 0) throw new Error("You cannot devide by 0");
    return a / b;
}

module.exports = { sum, devide };
