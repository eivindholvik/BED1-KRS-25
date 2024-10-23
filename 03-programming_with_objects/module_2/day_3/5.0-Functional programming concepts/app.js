/*
    Imagine you're managing a space mission control system. 
    In OOP, you'd likely represent a spacecraft or mission as an object with its state and methods for behavior.
    You might modify the spacecraft's fuel level, status, or location as the mission progresses.

    In functional programming (FP), instead of modifying spacecraft objects, you'd write functions that calculate 
    the spacecraft's next move, its fuel consumption, or mission outcome based on inputs, without altering the 
    original spacecraft's state. FP helps you ensure that each function behaves predictably, avoiding unintended side effects.

    To help explain some of the principles, we'll use the theme of space missions and astronauts.
*/

/*
    Pure Functions: A pure function always produces the same output given the same inputs and does not modify external state. 
    This makes your code more predictable and easier to test.

    In this case, we have a simple function to calculate the total distance a spacecraft will travel 
    during a mission based on its speed and time. The result is predictable and doesn’t change any external state.
*/
function calculateDistance(speed, time) {
    return speed * time;
}

/*
    Immutability: In FP, once a value is set, it doesn’t change. Instead of modifying data, 
    new copies are created with the required changes. 

    Here, instead of modifying the astronaut's information when they complete a mission, 
    we create a new record with updated details.
    *NOTE: We aren't preventing the modification here as that requires extra steps (like Object.freeze()). This just illustrates the idea.
*/
const astronaut = { name: "John", missionsCompleted: 1 };
const updatedAstronaut = { ...astronaut, missionsCompleted: astronaut.missionsCompleted + 1 }; // Immutability

/*
    First-Class Functions: Functions in FP are treated as values. 
    You can pass them as arguments to other functions, return them from functions, 
    and store them in variables—just like any other data type.
    *NOTE: This is how JavaScript works, influenced by functional languages like Lisp.

    In this case, we create a function that greets an astronaut and another that shouts the greeting. 
    We're passing a function (greet) into another function (shout).
*/
const greetAstronaut = () => "Welcome aboard!";
const shoutGreeting = (fn) => fn().toUpperCase();
console.log(shoutGreeting(greetAstronaut)); // "WELCOME ABOARD!" - greetAstronaut returns the greeting, which is then used by shoutGreeting.

/*
    Higher-Order Functions: Functions that take other functions as arguments or return functions are called higher-order functions. 
    This allows you to build flexible and reusable code, enhancing composability.

    Let's double the fuel for each spacecraft in a fleet using a higher-order function (map) 
    and a pure function (doubleFuel) to transform the fleet’s fuel values.
*/
const doubleFuel = (fuel) => fuel * 2;
const fleetFuel = [100, 200, 300];
const updatedFleetFuel = fleetFuel.map(doubleFuel); // [200, 400, 600] - map() applies the doubleFuel function to each spacecraft's fuel level.

/*
    Now, about side effects. 

    In real-world applications, space missions need to interact with external systems, like logging mission data or 
    fetching spacecraft status from remote sensors. These are side effects, as they alter or depend on things outside 
    the function itself (like a console or an external API).

    Functional programming encourages minimizing and controlling where and how these side effects occur.
    By isolating side effects, you can make your code more predictable and easier to reason about.
*/

/*
    Let's say we're calculating the total distance traveled by a fleet of spacecrafts.
    The calculation itself is pure, but we may want to log the result for mission control to review.

    In this example, we separate the logging (side effect) from the core logic of distance calculation.
*/

// Pure function (doesn't log, just calculates total distance)
function calculateTotalDistance(fleet) { // Fleet is a collection of spacecrafts
    return fleet.reduce((acc, spacecraft) => acc + spacecraft.distance, 0);
}

// Logging function (side effect)
function logMessage(message) {
    console.log(message); // side effect
}

/*
    Here we compose the pure calculation function with the logging side effect. 
    This isn't a higher-order function; it's just function composition.
    We're keeping the core logic (distance calculation) pure and isolating the side effect (logging).
*/
function logAndCalculateDistance(fleet) {
    const totalDistance = calculateTotalDistance(fleet);
    logMessage(`Total distance covered by the fleet: ${totalDistance} km`);
    return totalDistance;
}

/*
    Now, consider fetching spacecraft data from a remote system.
    The fetching operation involves a side effect (network call), but we can isolate this side effect 
    while keeping the data processing pure.

    In this example, fetching the spacecraft data is impure (depends on the network), 
    but once the data is fetched, we can process it with pure functions.
*/

// Function to fetch spacecraft data (side effect)
async function fetchSpacecraftData(url) {
    const response = await fetch(url); // side effect (HTTP request)
    const data = await response.json();
    return data;
}

// Pure function to process the data
function processSpacecraftData(data) {
    return data.map(spacecraft => spacecraft.name); // transforms data, no side effect
}

// Composing the two
async function getAndProcessSpacecraftData(url) {
    const data = await fetchSpacecraftData(url); // side effect isolated here
    const processedData = processSpacecraftData(data); // pure processing
    console.log("Processed spacecraft data:", processedData); // logging the result (side effect)
}


/* 
    Functional composition (combining functions) is a core idea in functional programming.
    You can compose pure functions with impure ones (like logging or fetching data) to keep your core logic 
    simple and predictable, while isolating side effects.

    Modern frameworks like React and state management libraries like Redux heavily rely on functional principles 
    to build scalable, maintainable websites.
*/

/*
    Key takeaways:
    - Pure Functions handle data transformations (like calculating distances) without side effects.
    - Impure Functions handle I/O operations, logging, HTTP requests, etc., but these are clearly marked and isolated.
    - Functional Composition combines pure and impure functions in a way that makes it easy to understand when 
      side effects are happening and why.
*/  
