const myObject = {
  name: "Eivind",
  age: 31,
  eyeColor: "blue",
  greetings: function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
  0: "truls",
  true: false,
}

myObject.favBook = "Stormlight Archives";

console.log(myObject.favBook);



// myObject.greetings();

// console.log(myObject.name.toUpperCase());

// console.log(myObject["name"].toUpperCase());


// console.log(myObject[0]);

// function createStudent(name, age, gender) {
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   }
// }

// const students = [];

// students.push(createStudent("Eivind", 31, "male"));

// students.push(createStudent("Lise", 28, "female"));

// console.log(students);