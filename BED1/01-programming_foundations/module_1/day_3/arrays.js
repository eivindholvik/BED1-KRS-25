// const myArray = ["item1", "item2", "item3"];

// console.log(myArray[1]);

// console.log(myArray[myArray.length - 1]);

// console.log(myArray.at(-1));

// // ----- legg til i array ---------
// myArray[myArray.length] = "added later 1";


// console.log(myArray[4]);

// myArray.push("jeg pushet denne verdien");
// myArray.unshift("jeg la til denne verdien med unshift, som koster mer enn push");

// // ------- fjern verdier fra array -------

// const poppedValue = myArray.pop();
// console.log(poppedValue);

// const shiftedValue = myArray.shift();
// console.log(shiftedValue);

// console.log(myArray);

// // --------- sidespang ------
// let x = 4;
// let y = x;

// console.log(x, y);

// x = 5;
// console.log(x, y);


const arr1 = ["eivind", "holvik"];
const arr2 = [...arr1];

// console.log(arr1, arr2);

// arr1.pop();

// console.log(arr1, arr2);

// ------ other methods -----------

const myName = arr2.toString();
// console.log(myName);

const nyName2 = arr2.join(" ");
// console.log(nyName2);

const turnToArray = "eivind holvik";
const arr3 = turnToArray.split(" ");
// console.log(arr3);

const arr4 = [1, 2, 3]; // ...arr4 = 1, 2, 3
const arr5 = [7, 8, 9];
const arr6 = ["a", "b", "c"];

const arr7 = arr4.concat(arr5, arr6);

// console.log(arr7);

arr8 = [...arr4, ...arr5, ...arr6];

// console.log(...arr8);

const subArr1 = arr8.slice(-5);
// console.log(subArr1);
console.log(arr8);
const subArr2 = arr8.splice(3, 2, "Jeg fjerner noen", "og legger til andre");
console.log(subArr2, arr8);

const newForEachArray = [];
arr8.forEach((ele, i, arr) => {
  console.log(ele);
  newForEachArray.push("foreach" + ele);
});

// normal function
function mapFn(ele, i, arr) {
  console.log(arr[i - 1]);
  return "new" + ele;
}

// arrow function
const mapFn2 = (ele, i, arr) => {
  console.log(arr[i - 1]);
  return "new" + ele;
}

const newArray = arr8.map(mapFn);

console.log(newArray);

console.log(newForEachArray);


// ----- filter -----

const filterMe = [1, 2, 3, "a", "b", 5, 7, "jeg er eivind"];

const filteredList = filterMe.filter((ele, i, arr) => {
  if (!isNaN(ele)) {
    return true;
  }
})

console.log(filteredList);
const persons = [{ name: "eivind", age: 19 }, { name: "jenny", age: 5 }]
const filterAges = [1, 5, 3, 38, 4, 3, 5, 7, 6, 43, 65];

const ageLimit = persons.filter((person) => {
  if (person.age >= 18) {
    return true
  }
})

console.log(ageLimit);

const myValues = [2, 45, -65, 3, -32, 36, -7, 5, 34, 33]; //transactions
const bankBalance = 5643;

const sumOfMyValues = myValues.reduce((sum, value) => {
  return sum += value;
}, bankBalance);

console.log(sumOfMyValues);