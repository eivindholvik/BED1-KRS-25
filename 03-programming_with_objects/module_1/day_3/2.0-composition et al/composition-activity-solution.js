// Step 1: Create Ability Objects
const flightAbility = {
    canFly: true,
    fly: function() {
        return 'Soaring through the sky!';
    }
};

const strengthAbility = {
    strength: 100,
    punch: function() {
        return 'Delivering a powerful punch!';
    }
};

const invisibilityAbility = {
    canBecomeInvisible: true,
    becomeInvisible: function() {
        return 'Now you see me, now you don\'t!';
    }
};

// Step 2: Create a Base Superhero Object
const superhero = {
    name: 'SuperDuo',
    alias: 'The Phantom Thunder',
    introduction: function() {
        return `I am ${this.alias}, protector of the innocent!`;
    }
};

console.log(superhero.introduction()); 
// Output: I am The Phantom Thunder, protector of the innocent!

// Step 3: Compose the Superhero with Abilities
Object.assign(superhero, flightAbility, strengthAbility);

console.log(superhero.fly());    // Output: Soaring through the sky!
console.log(superhero.punch());  // Output: Delivering a powerful punch!

// Step 4: Update and Add New Abilities
const updatedAbilities = {
    alias: 'The Invisible Thunder',  // Update alias
    strength: 120,                   // Increase strength
    teleport: function() {            // Add new ability
        return 'Teleporting to another location!';
    }
};

Object.assign(superhero, updatedAbilities, invisibilityAbility);

console.log(superhero.introduction());     // Output: I am The Invisible Thunder, protector of the innocent!
console.log(superhero.teleport());         // Output: Teleporting to another location!
console.log(superhero.becomeInvisible());  // Output: Now you see me, now you don't!
console.log(superhero.strength);           // Output: 120
