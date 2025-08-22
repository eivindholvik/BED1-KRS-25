class House {
  constructor(name, floors, address) {
    this.name = name;
    this.floors = floors;
    this.address = address;
  }
  info() {
    return `This house is the: ${this.name}, it has ${this.floors} floors and the address of ${this.address}.`;
    return "This house is the: " + this.name + ", it has " + this.floors + " floors and the address of " + this.address + ".";
  }
}

class Villa extends House {
  constructor(name, floors, address, prestige) {
    super(name, floors, address);
    this.prestige = prestige;
  }
  info() {
    return `${super.info()} And the prestige is ${this.prestige}.`;
  }
}

// DetachedHouse - hasGarden - arv fra House
class DetachedHouse extends House {
  constructor(name, floors, address, hasGarden) {
    super(name, floors, address);
    this.hasGarden = hasGarden;
  }
}

const someHouse = new House("first house", 2, "Tyttebærsiten 43");
console.log(someHouse.info());

const someVilla = new Villa("second house", 4, "Kongetoppen 1", 3);
console.log(someVilla.info());