class Car {
  constructor(wheels, doors, engine, fuel) {
    this.wheels = wheels;
    this.doors = doors;
    this.engine = engine;
    this.fuel = fuel;
  }
  info() {
    console.log("car");
    console.log(`Wheels: ${this.wheels}\nDoors: ${this.doors}\nEngine: ${this.engine}\nFuel: ${this.fuel}`);
  }
}

// const golf = new Car(4, 5, "v4", "bensin");
// const mgEvZs = new Car(4, 5, "e3", "eletric");

class Plane {
  constructor(motorType, seats, wingspan) {
    this.motorType = motorType;
    this.seats = seats;
    this.wingspan = wingspan;
  }
  info() {
    console.log("plane");
    console.log(`motorType: ${this.motorType}\nSeats: ${this.seats}\nWingspane: ${this.wingspan}`);
  }
}

class PlaneFactory {
  createVehicle(model) {
    switch (model) {
      case "b737":
        return new Plane("Jet", 220, 36);
      case "f50":
        return new Plane("Propel", 56, 29);
    }
  }
}

// const b737 = new Plane("Jet", 220, 36);
// const f50 = new Plane("Propel", 56, 29);

class CarFactory {
  createVehicle(model) {
    switch (model) {
      case "golf":
        return new Car(4, 5, "v4", "bensin");
      case "mgEvZs":
        return new Car(4, 5, "e3", "eletric");
    }
  }
}


const carFactory = new CarFactory();
const planeFactory = new PlaneFactory();


// const newGolf = carFactory.createVehicle("golf");

// newGolf.info();
// mgEvZs.info();
// b737.info();

const RRfactory = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createVehicle(model);
    case "plane":
      return planeFactory.createVehicle(model);
  }
}

const myBoeing737 = RRfactory("plane", "b737");

myBoeing737.info();