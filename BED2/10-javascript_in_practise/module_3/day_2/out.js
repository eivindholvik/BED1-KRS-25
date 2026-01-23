const fs = require("fs");

// Asynchronous file reading with error handling
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File content:", data);
});
