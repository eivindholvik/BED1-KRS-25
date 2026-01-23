// function bubbleSort(orgArr) {
//     let counter = 0;
//     let swapped = true;
//     //optional for deep copy
//     const arr = JSON.parse(JSON.stringify(orgArr));
//     const n = arr.length;
//     // while (swapped) {
//     //     swapped = false;
//     //     for (let i = 0; i < n - 1; i++) {
//     //         // counter++;
//     //         if (arr[i] > arr[i + 1]) {
//     //             swapped = true;
//     //             [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
//     //         }
//     //     }
//     // }
//     for (let i = 0; i < n - 1; i++) {
//         swapped = false;
//         for (let j = 0; j < n - 1 - i; j++) {
//             counter++;
//             if (arr[j] > arr[j + 1]) {
//                 swapped = true;
//                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//             }
//         }
//         if (!swapped) return arr;
//     }
//     return arr;
// }

// console.log(bubbleSort([1, 2, 4, 8, 6, 5]));

function bubbleSort(orgArr, copyOption = 0) {
    let arr = [];
    let swapped;
    if (copyOption === 1) {
        arr = JSON.parse(JSON.stringify(orgArr));
    } else if (copyOption === 2) {
        arr2 = [...orgArr];
    } else if (copyOption === 0) {
        arr = orgArr;
    }
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // const temp = arr[j + 1];
                // arr[j + 1] = arr[j];
                // arr[j] = temp;

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
            if (!swapped) return arr;
        }
    }
    return arr;
}

console.log(bubbleSort([3, 4, 5, 6, 7], 0));

module.exports = bubbleSort;
