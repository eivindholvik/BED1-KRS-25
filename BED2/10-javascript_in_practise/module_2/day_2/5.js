const sortMe = [1, 5, 4, 6, 8, 7, 9, 2, 3, 4, 1];

function bubbleSort(arr2) {
    const arr = [...arr2];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(sortMe));

function findAllPairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}

console.log(findAllPairs(sortMe));

console.log(sortMe);

function inefficientFunction(arr) {
    return Array.from(new Set(arr));
}
