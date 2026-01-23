"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("-----------------------------------------------");
const user = {
    name: "Ola",
    age: 30,
};
console.log(user, 54634);
function greet(name, greeting = "Hello", age) {
    return `${greeting}, ${name}`;
}
function buildName(firstName, ...restOfName) {
    console.log(restOfName);
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName("Eivind", "Johannes", "Holvik"));
const add = (a, b) => a + b;
const greet2 = (name, greeting) => greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let myDirection = Direction.Down;
console.log(myDirection);
//# sourceMappingURL=continue.js.map