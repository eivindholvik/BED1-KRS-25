const obj = { a: 1, b: 2, name: "Eivind" };
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.keys(obj));

// 3

const obj2 = {
  pw: "aasdfeew33344",
  username: "eivind.holvik@gmail.com"
}

console.log("username".padEnd(10, " ") + ":" + obj2.username.padStart(30, "."));
console.log("pw".padEnd(10, " ") + ":" + obj2.pw.padStart(30, "."));


// 4
const obj3 = { a: 1 };
let descriptors = Object.getOwnPropertyDescriptors(obj3);
console.log(descriptors);

//

let obj4 = { a: [1], b: 2 };
let copy = { ...obj4 };

copy.a[0] = 2;

console.log(obj4);
console.log(copy);


// 5

// function tag(strings) {
//   console.log("hei" + strings);
//   return String.raw(strings);
// }
// console.log(tag(`string text line 1 \n string text line 2`));

// 6
console.log("---------");

let arr = [1, [2, [3, [4]]]];
console.log(arr.flat(3)); // [1, 2, 3, [4]]

let arr2 = [1, 2, 3, 4];
console.log(arr2.flatMap((x) => [x, `the previous value times two is ${x * 2}`])); // [1, 2, 2, 4, 3, 6, 4, 8]

console.log("-----------------");

let myList = [
  ['a', 1],
  ['b', 2],
  ["password", "ger32423"]
];
let obj5 = Object.fromEntries(myList);
console.log(obj5); // { a: 1, b: 2 }

console.log("-------------------");

let str = '   ES10   ';
const listOfTrim = [str.trimStart(), str.trimEnd(), str.trim()];
console.log(str.trimStart()); // 'ES10   '
console.log(str.trimEnd()); // '   ES10'
console.log(str.trim());

for (let i = 0; i < listOfTrim.length; i++) {
  console.log("|" + listOfTrim[i] + "|");
}

console.log("--------------");

let sym = Symbol('fjes');
console.log(sym.description); // 'desc'


function example() {
  return "Hello World2"
}
console.log(example.toString()); // function example() { /* comment */ }

console.log("----------------");

const person = {
  name: 'Alice', address: { street: '123 Main St', zipcode: { code: 4623, name: "krs" } }
};
console.log(person.address?.zipcode?.name);


// console.log(person.address.zipcodes.name);

// try {
//   console.log(person.address.zipcodes.name);
// } catch (e) {
//   console.log(e.message);
// }

console.log(2 - 3);


let string = 'test1test2';
let regex = /t(e)(st(\d?))/g;
for (const match of string.matchAll(regex)) {
  console.log(match);
}

console.log(globalThis);