type myStringyThingy = string;

function greet(name: myStringyThingy): myStringyThingy {
    return `Hello, ${name}`;
}

console.log(greet("World!"));

let isCompleted: boolean = false;

let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let list: number[] = [2, 4, 5, 4, 7, 5, 0b010110];

let list2: Array<number> = [3, 4, 2, 3, 2, 23, 6];

let x: [string, number] = ["b", 3];
x = ["hello", 5];

let y: [string, number, boolean] = ["s", 10, true];

enum Color {
    Red,
    Green,
    Blue,
}

let myColor: Color = Color.Blue;

console.log(myColor);

function warnUser(): void {
    console.log("This is a warning message");
    return;
}

warnUser();

function throwError(): never {
    throw new Error("this will never complete");
    console.log("yooo");
}

let u: undefined = undefined;
let n: null = null;

function greetPerson(person: { firstName: string; lastName: string }): string {
    return `Hello ${person.firstName} ${person.lastName}`;
}

console.log(greetPerson({ firstName: "Ola", lastName: "Normann" }));

//implicit typing
let myNum = 5;

// interface User {
//     firstName: string;
//     lastName: string;
// }

// const myUser: User = { firstName: "Ola", lastName: "Normann" };

// function greetPerson2(person: User): string {
//     return `Hello ${person.firstName} ${person.lastName}`;
// }

// console.log(greetPerson(myUser));

interface User {
    firstName: string;
    lastName: string;
}

interface UserWithID extends User {
    id: number;
}

const myUsers: Array<UserWithID> = [
    { firstName: "Ola", lastName: "Normann", id: 0 },
    { firstName: "Olga", lastName: "Normann", id: 1 },
];

function getId(user: User): number {
    const found: UserWithID | undefined = myUsers.find((element) => {
        if (
            user.firstName === element.firstName &&
            user.lastName === element.lastName
        ) {
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

// let myPerhapsUser: User | UserWithID;
// myPerhapsUser = { firstName: "Olgas", lastName: "Normann", id: 4 };

// console.log(myPerhapsUser.id);

// type A = { id: string; aOnly: number };
// type B = { id: string; bOnly: boolean };

// function hei(u: A | B): void {
//     u.id; // ✅ ok (common)
//     u.aOnly; // ❌ error (not common)

//     // Narrowing:
//     if ("aOnly" in u) {
//         u.aOnly; // ✅ ok (x is A here)
//     }
//     if ("bOnly" in u) {
//         u.bOnly; // ✅ ok (x is A here)
//     }
// }

// type StringOrNumber = string | number;

type TPoint = {
    x: number;
    y: number;
};

const myPoint: TPoint = {
    x: 4,
    y: 2,
};

function pointPoint(p: TPoint): void {
    console.log(`(${p.x}, ${p.y})`);
}

pointPoint(myPoint);

require("./continue");
require("./decoratior");
