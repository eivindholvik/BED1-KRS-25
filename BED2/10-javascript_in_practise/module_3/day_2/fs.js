const fs = require("fs");

const readableStream = fs.createReadStream("exampl4e.txt", "utf8");

let i = 0;

readableStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
    i++;
});

readableStream.on("error", (e) => {
    console.log(e);
});

readableStream.on("end", () => {
    console.log("Finished reading file." + "\nIterations: " + i);
});

setTimeout(() => {
    console.log("hei");
}, 1000);
