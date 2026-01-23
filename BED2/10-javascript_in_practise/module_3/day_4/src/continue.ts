console.log("-----------------------------------------------");

interface IUser {
    name: string;
}

interface IUser {
    age: number;
}

const user: IUser = {
    name: "Ola",
    age: 30,
};

console.log(user, 54634);

function greet(name: string, greeting: string = "Hello", age?: number): string {
    return `${greeting}, ${name}`;
}

function buildName(firstName: string, ...restOfName: string[]): string {
    console.log(restOfName);
    return firstName + " " + restOfName.join(" ");
}

console.log(buildName("Eivind", "Johannes", "Holvik"));

interface IAddFunction {
    (a: number, b: number): number;
}

const add: IAddFunction = (a, b) => a + b;

const greet2: (name: string, greeting?: string) => string = (name, greeting) =>
    greeting ? `${greeting}, ${name}` : `Hello, ${name}`;

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let myDirection: Direction = Direction.Down;

console.log(myDirection);

// type TCustomer = number & boolean;

// const myCus: TCustomer = true;
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString"); // Type of output is 'string'
console.log(output);

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);
