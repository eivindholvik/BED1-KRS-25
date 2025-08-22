// document.querySelector("body").innerHTML += "I am sentence number 3 and I was printed with JS from a js file.";

// let d = !(2 > 4) || !(1 + 2 == 3);

// Strings

// const name1 = "Eivind";
// const name2 = 'Aksel';
// const name4 = "Truls " + name1;
// const sirName = "Holvik";
// const fullName = name1 + " " + sirName;

// const name3 = `${name1} ${sirName}`;
// console.log(name1 === name2);
// console.log(fullName);


// let name5 = ' "John" ';
// console.log(name5);
// let text = "My favourite book is \"Harry Potter\"";
// let text2 = 'My favourite book is "Harry Potter"';
// let text3 = `My favourite book is "Harry Potter"`;
// console.log(text);


// let text5 = "My favourite book \n is \"Harry Potter\"";

// console.log(text5);

const replaceMe = "My favourite book is \"Harry Potter\" because the Book is filled with awesome adventure. Harry Potter is awesome. I will name my child Harry Potter";

const replacedString = replaceMe.toLowerCase().replace(/book/g, "movie").toUpperCase();
console.log(replacedString);

const indexOfFirstTitle = replacedString.lastIndexOf("HARRY POTTER");

console.log(indexOfFirstTitle);

function findAllIndexes(str, searchFor) {
  let out = [];
  let temp = str;
  let answer = -1;
  let lastAnswer = 0;
  do {
    answer = temp.search(searchFor);
    if (answer !== -1) {
      temp = temp.slice(answer + searchFor.length);
      out.push(answer + lastAnswer);
      lastAnswer += answer + searchFor.length;
    }
  }
  while (answer !== -1)
  console.log(out);
  return out;

}

findAllIndexes(replacedString, "HARRY POTTER");


if (replacedString.search("GAME OF THRONES") !== -1) {

  console.log("Yeey, du er enig");
} else if (replacedString.search("HARRY POTTER") !== -1) {
  if (replacedString.length > 36) {
    console.log("du skriver litt mye eller?");
  } else {
    console.log("ok da, litt enig");
  }
} else {
  console.log("Du tar feil!");
}

console.log(replacedString.search("GAME OF THRONES") !== -1);

let x;

if (x === 3) {
  console.log("3");
} else if (x === undefined) {
  console.log("is undefined");
} else {
  console.log("nei");
}

x === 3 ? console.log("t3") : x === undefined ? console.log("t x is undefined") : console.log("t nei");