const sortMe = [1, 5, 4, 6, 8, 7, 9, 2, 3, 4, 1];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    console.log(left);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }
    return sorted.concat(left.slice().concat(right.slice()));
}

console.log(mergeSort(sortMe));
