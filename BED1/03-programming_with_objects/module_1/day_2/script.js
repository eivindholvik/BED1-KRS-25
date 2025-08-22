// const myObj = {
//   age: 14,
//   name: "Truls",
// }

// const myObj2 = new Object();
// myObj2.name = "Truls";
// myObj2["age"] = 14;

// console.log(myObj2 === myObj);

// myObj2.age = 16;

// const myObj3 = new Object({ name: "truls", age: 14 });

// // for (const [key, value] of Object.entries(myObj)) {
// //   console.log(`${key}: ${value}`);
// // }

// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age
//   }
// }

// const eivind = createPerson("Eivind", 31);

// console.log(eivind);



const superheros = [
  {
    name: "Truls",
    alias: "Jens"
  },
  {
    name: "Harald",
    alias: "Rex"
  },
]

const superheroKeys = Object.keys(superheros[0]);

console.log(superheroKeys);

for (let i = 0; i < superheroKeys.length; i++) {
  console.log(`${superheroKeys[i]}: ${superheros[0][superheroKeys[i]]}`);
}