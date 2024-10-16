/* 
    Understanding Object Composition (GPT summary)

    In JavaScript, **composition** is a way to build complex objects by combining smaller, simpler objects together.
    Rather than relying on inheritance (which we will explore later with prototypes), composition focuses on building
    objects from individual parts that work together. This makes our code more flexible and modular.

    **Why Use Composition?**
    - Composition allows us to create more complex objects without duplicating code.
    - It enables us to mix and match behaviors or properties across different objects.
    - It’s a straightforward way to extend functionality, allowing us to add new properties or behaviors to objects dynamically.

    **Key Points:**
    - Composition means that we build objects from other objects, combining their properties and behaviors.
    - You can add new behaviors to objects by assigning new functions or properties to them.
    - Composition is flexible and helps keep your code DRY (Don’t Repeat Yourself), avoiding redundancy.

    **Example:**
    In the following example, we create a `car` object by composing it with smaller objects like `engine` and `wheels`.
    This shows how you can break down larger objects into smaller, reusable parts.

    This approach makes it easy to add new features (like GPS, behavior modes, etc.) to our objects as needed, 
    without the need for inheritance or classes. This is a great stepping stone to understanding more advanced
    concepts like prototypes and design patterns later on.
*/

// We have different aspects of a car as separate objects, and we want to compose a car from them
const engine = {
    type: 'Straight 6 Twin Turbo',
    horsepower: 250
};

const wheels = {
    count: 4,
    type: 'Sport',
    size: 18
};

// The most straightforward way of composing objects
const car = {
    brand: 'Nissan',
    model: 'Skyline R32',
    engine: engine,
    wheels: wheels,
    details: function() {
        return `${this.brand} ${this.model} with ${this.engine.horsepower} HP ${this.engine.type}`;
    }
};

console.log(car.details()); // Output: Nissan Skyline R32 with 250 HP Straight 6 Twin Turbo

/* 
    Sometimes you may not want to nest objects under specific properties. 
    For example, if we have upgrades that we want to apply directly to the car object
    (without nesting them under a specific property like 'boyRacerUpgrades'),
    we can use `Object.assign(target, source)` to combine objects at the top level.
*/
const boyRacerUpgrades = {
    color: 'Two-tone solid purple and blue',
    burnout: function() {
        return `Bwaaabwabwabwabwaaaaaa SKRRRRR!`;
    }
};

// Using Object.assign to compose the boyRacerUpgrades into the car object
Object.assign(car, boyRacerUpgrades);
console.log(car); // We see our two objects composed together at the top level

/* 
    The same effect can be achieved using the spread operator, which creates a copy 
    instead of mutating (changing) the original object.
*/
const carWithUpgradesCopy = { ...car, ...boyRacerUpgrades };
console.log(carWithUpgradesCopy);

/* 
    You can also modify existing properties by composing an object with 
    properties that override the original values.
*/
const carChanges = {
    brand: 'Nisse',
    details: function() {
        return `Nisse kommer for deg!`;
    }
};
Object.assign(car, carChanges);
console.log(car.details()); // Output: Nisse kommer for deg!

/* 
    Functions can also be used to add behavior to objects. 
    This lets us reuse functionality easily across different objects.
    
    For example, here we create a function that adds GPS functionality to any car.
    We separate the concern of GPS tracking into a reusable package that can be attached to any vehicle.
*/
function addGPS(car) {
    car.gps = {
        location: 'Unknown',
        updateLocation: function(newLocation) {
            this.location = newLocation;
        }
    };
    car.trackLocation = function() {
        return `Tracking location: ${this.gps.location}`;
    };
}

addGPS(car);
console.log(car);

car.gps.updateLocation('Oslo');
console.log(car.trackLocation()); // Output: Tracking location: Oslo

/* 
    NOTE: We will cover this topic (immutability) in more detail later, but the main idea is articulated (with help from GPT) below:

    Typically, we avoid mutating objects directly, preferring to create copies of them instead.
    This is done for several reasons:

    **Why Avoid Mutating Objects Directly?**
    1. **Immutability**: In functional programming and modern JavaScript practices, immutability is preferred. 
       Immutability means not modifying existing objects, but rather creating new ones with the necessary changes.
       This leads to more predictable and less error-prone code.
    
    2. **Side Effects**: When you mutate an object directly, any other part of the code that references the original 
       object will also see the change. This can lead to unintended side effects, making debugging harder.
    
    3. **Debugging**: Avoiding mutation helps make your code easier to reason about. If objects are not modified 
       in place, it’s easier to track changes and understand where bugs might be coming from.
    
    4. **Concurrency**: In scenarios where multiple parts of an application are interacting with the same data 
       (like in web development or multi-threaded programs), immutability helps prevent unexpected data changes. 
    
    To avoid mutation, we can use the spread (...) operator.
*/
