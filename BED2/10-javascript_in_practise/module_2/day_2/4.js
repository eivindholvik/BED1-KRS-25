let i = 0;

function generatePermutations(arr) {
    console.log("index: " + i++);
    if (arr.length === 0) return [[]];

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = generatePermutations(
            arr.filter((_, index) => index !== i)
        );
        rest.forEach((permutation) => {
            result.push([arr[i], ...permutation]);
        });
    }
    return result;
}

console.log(generatePermutations([1, 2, 3, 7, 4]));
