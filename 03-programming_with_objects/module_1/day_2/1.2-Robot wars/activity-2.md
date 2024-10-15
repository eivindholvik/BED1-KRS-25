# Build-a-Bot Showdown (Creating Objects in Different Ways)

Design battle robots with offensive and defensive components, progressively adding features using different methods to create objects.

Each time we create a new robot, we'll start with mostly the same properties and methods, but we will **add something new** each time. This makes sure you're building on what you’ve learned rather than just copying and pasting the same code. Pay attention to what each new way of creating an object adds to the previous one.

---

## Instructions:

### 1. Object Literal (First Robot)
- Create the first robot using an **object literal**.
- Name the object `robotLiteral` and give it the following properties:
  - `model`: A string for the robot’s model name (e.g., `'Model X'`).
  - `offensiveComponents`: An array of offensive components (e.g., `['Laser Cannon', 'Missile Launcher']`).
  - `defensiveComponents`: An array of defensive components (e.g., `['Armor Plating', 'Energy Shield']`).
  - `energyLevel`: A number representing the robot’s battery percentage (e.g., `100`).
  - `status()`: A method that returns a string summarizing the robot's model and energy level, e.g., `"Model X has 85% energy."`.

- **Random Attack**: 
  Create a method `attack()` that randomly selects one of the robot’s **offensive components** and logs the attack, e.g., `"Model X attacks with Laser Cannon!"`.

---

### 2. Using `new Object()` (Second Robot)
- Create the second robot using the **`new Object()`** syntax.
- Name the object `robotInstance` and give it the same structure as the first robot but with different values.
- Include at least two offensive components (e.g., `'Plasma Rifle', 'Electromagnetic Pulse'`).
- Create an `attack()` method that works the same as in the first robot.

**What’s new here**: We’re still using the same methods, but this time, create the robot using `new Object()`. The focus is on learning the new way to instantiate objects.

---

### 3. Constructor Function (Third Robot)
- Define a constructor function `BattleBot(model, offensiveComponents, defensiveComponents, energyLevel)` that:
  - Takes in a model name, an array of offensive and defensive components, and the initial energy level.
  - Inside the function, define the same properties (`model`, `offensiveComponents`, `defensiveComponents`, and `energyLevel`).
  - Add a method `recharge()` that increases the `energyLevel` by a set amount and logs the updated energy.
  - Add an `attack()` method that works like the previous robots.

- **New Addition**: Create a `defend()` method that randomly selects a **defensive component** and logs a defensive action, e.g., `"Model Z defends using Titanium Shield!"`.

**What’s new here**: Besides learning how to use constructor functions, this robot can also **defend** in addition to attacking. You're learning to expand object capabilities.

---

### 4. ES6 Class (Fourth Robot)
- Define a class `Robot` that:
  - Initializes the `model`, `offensiveComponents`, `defensiveComponents`, and `energyLevel` properties.
  - Includes a method `selfDestruct()` that sets `energyLevel` to 0 and logs a message like `"Model Z self-destructs!"`.
  - Includes the `attack()` and `defend()` methods as in the previous robots.

**What’s new here**: With ES6 classes, we add **selfDestruct** functionality to show how classes can further structure complex behaviors, like destroying the robot when its energy runs out.
