const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Registering a listener with parameters
myEmitter.on("status", (code, msg, calledBy) => {
    console.log(`Received status ${code}: ${msg}\nCalled by ${calledBy}`);
});

// Emitting the 'status' event with parameters
myEmitter.emit("status", 200, "Operation Successful", "Eivind");
