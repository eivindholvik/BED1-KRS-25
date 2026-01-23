const { sum, devide } = require("./sum.js");

describe("Sum function", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("adds 1 / 0 to not equal undefined", () => {
        expect(sum(1, 0)).not.toBe(undefined);
    });
});

describe("Devide function", () => {
    test("adds 1 / 2 to equal ,5", () => {
        expect(devide(1, 2)).toBe(0.5);
    });

    test("adds 1 / 0 to not equal infinity", () => {
        expect(devide(1, 2)).not.toBe(Infinity);
    });
    test("adds 1 / 0 to throw error", () => {
        expect(() => {
            devide(1, 0);
        }).toThrow();
    });
});
