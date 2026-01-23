const fs = require("fs").promises;

async function readFileContent(path) {
    return fs.readFile(path, "utf8");
}
module.exports = readFileContent;
