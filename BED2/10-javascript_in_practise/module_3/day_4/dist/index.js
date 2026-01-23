"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("World!"));
let isCompleted = false;
let decimal = 10;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let color = "blue";
color = "red";
let list = [2, 4, 5, 4, 7, 5, 0b010110];
let list2 = [3, 4, 2, 3, 2, 23, 6];
let x = ["b", 3];
x = ["hello", 5];
let y = ["s", 10, true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
function warnUser() {
    console.log("This is a warning message");
    return;
}
warnUser();
function throwError() {
    throw new Error("this will never complete");
    console.log("yooo");
}
let u = undefined;
let n = null;
function greetPerson(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
console.log(greetPerson({ firstName: "Ola", lastName: "Normann" }));
//implicit typing
let myNum = 5;
const myUsers = [
    { firstName: "Ola", lastName: "Normann", id: 0 },
    { firstName: "Olga", lastName: "Normann", id: 1 },
];
function getId(user) {
    const found = myUsers.find((element) => {
        if (user.firstName === element.firstName &&
            user.lastName === element.lastName) {
            return true;
        }
        return false;
    });
    if (found) {
        return found.id;
    }
    return -1;
}
console.log(getId({ firstName: "Olgas", lastName: "Normann" }));
const myPoint = {
    x: 4,
    y: 2,
};
function pointPoint(p) {
    console.log(`(${p.x}, ${p.y})`);
}
pointPoint(myPoint);
require("./continue");
//# sourceMappingURL=index.js.map