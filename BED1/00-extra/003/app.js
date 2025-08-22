import * as readline from "readline";

// import * as counter from "./counter.js";

// console.log(counter.getCount());
// counter.increase();
// console.log(counter.getCount());
// counter.decrease();
// console.log(counter.getCount());

import { increase, decrease, getCount as count } from "./counter.js";
console.log(count());
increase();
console.log(count());
decrease();
console.log(count());

// const counter = require("./counter");




function personalInfo() {
  // const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What's your name?\n", (answer) => {
    console.log(`Hello ${answer}!`);

    rl.question("What's your favorite color?\n", (answer) => {
      console.log(`Nice color!!: ${answer}!`);
      process.exit();
    })
  })
}


// personalInfo();


