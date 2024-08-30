function randomName() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map(() => getRandomInt(2, 10)); //declares how many people can seat at table of certain index
tableSizes = tableSizes.map((size) => {
  return {
    size: size,
    occupied: false
  }
})
const customers = [];
let sneakyAttackId = 0;

function assignTable(tableNr) {
  if (tableSizes[tableNr].occupied) return false
  tableSizes[tableNr].occupied = true;
  return true;
}

function freeTable() {
  let index = parseInt(prompt("Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
  while (index < 0 || index >= tableCount) {
    index = parseInt(prompt("Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " + tableCount + "."));
  }
  console.log(customers);
  tableSizes[index].occupied = false;
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index)
      customers.splice(i, 1);
  }
  console.log(customers);
}

function sneakyAttack() {
  sneakyAttackId = setInterval(() => {
    customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
    console.log("Shhhhhhhh");
    return;
  }, 3000);
}

function stopSneakyAttack() {
  if (sneakyAttackId != 0) {
    clearInterval(sneakyAttackId);
    console.log("Sneaky attack stopped.")
  }
}

function newCustomer() {
  const name = prompt("Hello, what is your name?");
  let size = 0;
  let askAboutTableSize = "";
  while (true) {
    if (size == 0) {
      askAboutTableSize = "Hello " + name + "! Table for how many people?"
    }
    else {
      askAboutTableSize = "Unfortunately we don't have a table for that many people. Please ask the smaller table size."
    }
    size = parseInt(prompt(askAboutTableSize));

    const freeTables = [];
    tableSizes.forEach((ele, i) => {
      if (ele.occupied) return;
      const out = { ...ele };
      out.index = i;
      freeTables.push(out);
    })

    let tableSizesMax = 0;
    freeTables.forEach(({ size }) => {
      if (size > tableSizesMax) {
        tableSizesMax = size;
      }
    })

    if (size != 0 && tableSizesMax >= size) {
      break;
    }
  }
  const freeTables = [];
  tableSizes.forEach((ele, i) => {
    if (ele.occupied) return;
    const out = { ...ele };
    out.index = i;
    freeTables.push(out);
  })

  let tableNumber = 0;
  const foundIndex = freeTables.find((ele) => {
    return ele.size === size;
  }).index;

  if (foundIndex >= 0) {
    tableNumber = foundIndex;
    tableSizes[tableNumber].occupied = true;
  }
  else {
    let biggestTable = 0;
    freeTable.forEach((ele) => {
      if (ele.size > biggestTable) {
        biggestTable = ele.index;
      }
    })
    if (biggestTable >= size) {
      tableNumber = biggestTable;
      tableSizes[tableNumber].occupied = true;
    } else {
      // spør på nytt
    }
  }
  alert("You got a table of number: " + tableNumber + ", which by default can fit " + tableSizes[tableNumber].size + " people.")
  customers.push([name, tableNumber]);
  console.log(customers);
}