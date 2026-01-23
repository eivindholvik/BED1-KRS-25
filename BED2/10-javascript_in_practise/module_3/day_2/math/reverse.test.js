const reverseString = require("./reverse");

describe("Reverse String", () => {
    test('reverses the string "JavaScript"', () => {
        expect(reverseString("JavaScript")).toBe("tpircSavaJ");
    });

    test("Provde an empty array expect throw", () => {
        expect(() => {
            reverseString([]);
        }).toThrow(TypeError);
    });
});
