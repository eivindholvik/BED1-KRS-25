const myObj = {
  age: 14,
  name: "Truls",
}

const myObj2 = new Object();
myObj2.name = "Truls";
myObj2["age"] = 14;

console.log(myObj2 === myObj);

myObj2.age = 16;

const myObj3 = new Object({ name: "truls", age: 14 });

// for (const [key, value] of Object.entries(myObj)) {
//   console.log(`${key}: ${value}`);
// }

function createPerson(name, age) {
  return {
    name: name,
    age: age
  }
}

const eivind = createPerson("Eivind", 31);

console.log(eivind);