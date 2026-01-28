// ----------- 1
var myConst = 5;

const myConstConst = 5;

let myLet = 5;

// ----------- 2

function hei(x) {
  const name = "Eivind";
  return this.name;
}

const hadde = (x) => {
  const name = "Eivind";
  return this.name;
}

console.log(hei(6));
console.log(hadde(6));

//  3

const isTrue = null;

const myTL = `This is my template literal and this is some code: ${isTrue || "There is no value"}`;

console.log(myTL);

// 4
function createPerson(firstName, lastName, gender, isAdmin = false) {
  // some person is created
}

// 5

const obj = {
  name: "Eivind",
  age: 32,
  hasLisence: false
};

let { name: eivindName, hasLisence } = obj;
console.log(eivindName, hasLisence);

const list = [1, 5, 4, 8, 9];

const [, secondValue, ...restOfList] = list;
console.log(secondValue, restOfList);

// 6

const obj2 = {
  name2: "Eivind",
  method() {
    console.log(this.name2);
  },
  arrowMethod: () => {
    console.log("This name is: " + this.name2);
  }
}


// const name2 = "Harald";
// obj2.method();
// obj2.arrowMethod();

const obj3 = {
  name2: "obj3",
  testing() {
    console.log(obj2.method());
    console.log(obj2.arrowMethod());
  }
}

obj3.testing();

// 7

function sum(...args) {
  return args.reduce(
    (accumulator, currentItem) => accumulator + currentItem, -30
  )
}

console.log(sum(4, 6, 5, 8, 7, 9,));

// 8
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

// 9

const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber > .5) {
    resolve("success, you were sucky");
  }
  reject("Too bad");
});

(async () => {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();

// 10

// export const add = (a, b) => a + b;

// new file
// export default function add2(a, b) {
//   return a + b
// }

// export add2;


// import something from './math.js';


