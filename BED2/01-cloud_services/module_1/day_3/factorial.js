const factorial = (num) => {
  if (num === 0) {
    console.log(1);
    return 1;
  }
  if (!Number.isInteger(num)) throw new Error("There can only be integers");
  if (num < 0) throw new Error("There cannot be values subzero");
  res = 1;
  for (let i = 2; i < num + 1; i++) {
    console.log(i);
    res *= i;
  }
  console.log(res);
  return res;
}

try {
  factorial(5);
} catch (e) {
  console.log(e.message);
}

console.log(math.factorial(5));