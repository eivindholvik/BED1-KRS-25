// let ii = 5;

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log(i, j, ii);
//   }
// }

// let i = 0;
// let j = 0;
// while (i < 0.95) {
//   console.log(i);
//   i = Math.random();
//   j++;
// }

// console.log(j);

let isLessThanTen = true;
let i = 0;
while (isLessThanTen) {
  i++;
  if (i === 10) {
    continue;
    break;
    return; // skal helst ikke brukes hvis ikke inne i function
  }
  if (i >= 10) {
    isLessThanTen = false;
  }
  console.log(i, isLessThanTen);
}

// for (let j = 0; j < 10; j++) {
//   console.log(true);
// }

// Oppgave
// Lag et array med hovedstader som inkluderer Oslo.
// bruk en loop av ditt valg for å logge alle hovedstadene, utenom Oslo
// Mange veier til Rom

const capitals = ["Stockholm", "Oslo", "Køben", "Raykjavik", "Helsinki"];

console.log(capitals);

for (const capital of capitals) {
  if (capital.toLowerCase() === "oslo") {
    continue;
  }
  console.log(capital);
}
