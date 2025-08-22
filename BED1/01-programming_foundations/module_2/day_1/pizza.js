class Pizza {
  constructor(name, price, valutta = "kr") {
    this.name = name;
    this.price = price;
    this.valutta = valutta;
  }
  info() {
    return `I am basic pizza: ${this.name}. I cost ${this.price}${this.valutta}.`;
  }
}

class AmericanPizza extends Pizza {
  constructor(name, price, sauce, valutta) {
    super(name, price, valutta);
    this.sauce = sauce;
  }
  info() {
    return `${super.info().replace("basic", "American")} My sauce is ${this.sauce}.`
  }
}

class ItalicanPizza extends Pizza {
  constructor(name, price, region) {
    super(name, price);
    this.region = region;
  }
  info() {
    return `${super.info().replace("basic", "Italan")} And I come from ${this.region}.`
  }

}

const american = new AmericanPizza("Chicago", 179, "tomato", "euro");

console.log(american.info());

const italian = new ItalicanPizza("Parma", 229, "Rome");

console.log(italian.info());