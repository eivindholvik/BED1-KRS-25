const bubbleSort = require("./bubbleSort.js");

describe("bubble sort is", () => {
    test("sortng [3,2,5] correctly to [2,3,5]", () => {
        expect(bubbleSort([3, 2, 5])).toEqual([2, 3, 5]);
    });

    test("recieving empty array, outputs empty array", () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test("sorting [1], outputs [1]", () => {
        expect(bubbleSort([1])).toEqual([1]);
    });
});
