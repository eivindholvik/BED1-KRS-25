class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  age() {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.publicationYear;
  }
  // vanlig måte å lage getter og setter i andre språk
  // getTitle() {
  //   return this.title;
  // }
  // setTitle(newTitle) {
  //   this.title = newTitle;
  // }
}

console.log(new Date().toDateString());

let harryPotter1 = new Book("Harry Potter and the philosopher's stone", "J.K. Rowling", 1997);

console.log(harryPotter1.age());

console.log(harryPotter1.title);

// harryPotter1.title = "Noe helt annet";

// console.log(harryPotter1.getTitle());

// harryPotter1.setTitle("Hary poter");

// console.log(harryPotter1.getTitle());

class Car {
  #_year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  set year(newYear) {
    let year = new Date().getFullYear();
    if (newYear > year) {
      this.#_year = year;
    } else {
      this.#_year = newYear;
    }
  }
  get year() {
    return this.#_year;
  }
  age() {
    return new Date().getFullYear() - this.#_year;
  }
}

let newCar = new Car("Audio A3", 2021);

console.log(newCar.year);

console.log(newCar._year);

newCar.year = 2221;
// newCar.setYear(2221); // other languages

console.log(newCar.year);
console.log(newCar._year);