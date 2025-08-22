// Step 1: Create the Superhero Constructor
function Superhero(name, alias) {
    this.name = name;
    this.alias = alias;

    // Adding punch method directly as a member (unique for each instance)
    this.punch = function() {
        return `${this.alias} delivers a powerful punch!`;
    };
}

// Step 2: Create Two Superhero Instances
const hero1 = new Superhero('Clark Kent', 'Superman');
const hero2 = new Superhero('Bruce Wayne', 'Batman');

// Call their punch methods
console.log(hero1.punch());  // Output: Superman delivers a powerful punch!
console.log(hero2.punch());  // Output: Batman delivers a powerful punch!

// Compare if both superheroes share the same punch method
console.log(hero1.punch === hero2.punch);  // Output: false (Each has its own copy)

// Step 3: Add fly method to the prototype
Superhero.prototype.fly = function() {
    return `${this.alias} is soaring through the sky!`;
};

// Create two new superhero instances
const hero3 = new Superhero('Diana Prince', 'Wonder Woman');
const hero4 = new Superhero('Barry Allen', 'The Flash');

// Call their fly methods
console.log(hero3.fly());  // Output: Wonder Woman is soaring through the sky!
console.log(hero4.fly());  // Output: The Flash is soaring through the sky!

// Compare if both superheroes share the same fly method
console.log(hero3.fly === hero4.fly);  // Output: true (Shared via the prototype)

// Step 4: Reflect on the difference
console.log(hero1.punch === hero2.punch);  // Output: false (Separate punch methods)
console.log(hero3.fly === hero4.fly);      // Output: true (Shared fly method)
