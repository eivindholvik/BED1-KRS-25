const obja1 = {
  name: "Eivind",
  age: 19,
  street: "Tordenskjoldsgate 8",
  postnr: 4633
}

const obja2 = { ...obja1 };
console.log(obja2);
obja2.name = "Noe";

console.log(obja1);
console.log(obja2);

// Korrekt løst

const b1 = {
  name: "Eivind",
  age: 19,
  location: {
    street: "Tordenskjoldsgate 8",
    postnr: 4633
  }
}

const b2 = JSON.parse(JSON.stringify(b1));

console.log(b1);
console.log(b2);

b2.location.postnr = 1234;

console.log(b1);
console.log(b2);