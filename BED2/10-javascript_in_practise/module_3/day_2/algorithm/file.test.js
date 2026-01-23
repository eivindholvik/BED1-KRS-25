const readFileContent = require("./file");

jest.mock("fs", () => ({
    promises: {
        readFile: jest.fn(() => Promise.resolve("<h1>Hei på alle</h1>")),
    },
}));

test("reads content from a file", async () => {
    const content = await readFileContent("/path/to/file");
    expect(content).toBe("<h1>Hei på alle</h1>");
});
