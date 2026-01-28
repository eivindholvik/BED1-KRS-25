// // // // let y = 10;
// // // // console.log(y instanceof Number); // false

// // // // let x = new Number(10);
// // // // console.log(x instanceof Number); // true

// // // // y.name = "Object thingy";

// // // // console.log(y.name);

// // // // console.log(x === y);

// // // // let a = "my string";
// // // // let c = "my string";
// // // // let b = new String("my string");

// // // // b.

// // // // console.log(a === c);
// // // // let numbers = new Set([1, 2, 3, 4, 5]);

// // // // console.log(numbers.length);

// // // // for (let i = 0; i < numbers.size; i++) {
// // // //     console.log(numbers[i]);
// // // // }

// // // const y = 9007199254740991;
// // // // const x = BigInt(9007199254740993);
// // // const z = 9007199254740991n;

// // // // console.log(y == z);
// // // // const q = 1;

// // // // const newBigInt = z + BigInt(Math.round(Math.PI, 4));
// // // // console.log(newBigInt);

// // // // // console.log(y);
// // // // // console.log(x);
// // // // // console.log(z);

// // // const mySymolObj = {
// // //     desc: "This is my key",
// // // };

// // // const mySymolObj2 = {
// // //     desc: "This is my key",
// // // };

// // // const doesntWork = {
// // //     [mySymolObj]: 5,
// // // };

// // // // console.log(doesntWork[mySymolObj]);

// // // // console.log(mySymolObj === mySymolObj2);

// // // const sym1 = Symbol();
// // // const sym2 = Symbol();

// // // const myWeridObj = {
// // //     [sym1]: "My secret value",
// // //     name: "My object",
// // // };

// // // // console.log(myWeridObj[sym1]);

// // // for (const { key, value } in myWeridObj) {
// // //     console.log(value);
// // // }

// // console.log(2 + 1 === 3);

// // console.log(Number((0.1 + 0.2).toFixed(2)) === 0.3);
// // console.log(0.1);

// // console.log(NaN == NaN);

// // console.log(0 / 0);

// let fullName = 5 + "John" + 5 + "Doe";

// console.log(fullName);

// let emoji = "\u{1F60A}"; //
// console.log(emoji);

let capitals = new Map([
    ["name", "Alice"],
    ["age", 30],
]);
const myKeyObj = { desc: "something weird" };
capitals.set(myKeyObj, "New Delhi");
capitals.set("India", "Alice");

console.log(capitals);
