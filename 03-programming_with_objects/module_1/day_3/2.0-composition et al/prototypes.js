/* 
    Let's now explore **PROTOTYPES** in JavaScript.
    Prototypes are a fundamental concept that allows objects to share methods and properties without duplicating them on each instance.
    This improves memory efficiency and enables **prototypal inheritance**.

    Every object in JavaScript has an internal property called `[[Prototype]]`, which is a reference to another object (the **prototype**).
    If an object doesn’t have a property or method of its own, JavaScript looks for it in its prototype.

    Let's see an example using the `Employee` object:
*/
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

/* 
    By attaching methods to the `Employee.prototype`, all instances of `Employee` share the same methods.
    This is more memory-efficient because it avoids creating a new copy of the method for each instance.
*/
Employee.prototype.greet = function() {
    return `Hi, my name is ${this.name}, and I am a ${this.position}`;
};

let emp1 = new Employee('Nicholas', 'Developer');
let emp2 = new Employee('Dewald', 'Designer');

console.log(emp1.greet()); // Output: Hi, my name is Nicholas, and I am a Developer
console.log(emp2.greet()); // Output: Hi, my name is Dewald, and I am a Designer
/* 
    Memory Layout:
    Stack: emp1 -> (reference to object in heap)
           emp2 -> (reference to object in heap)
    Heap: emp1: { name: 'Nicholas', position: 'Developer' }
          emp2: { name: 'Dewald', position: 'Designer' }
          Employee.prototype: { greet: function() }

    Both `emp1` and `emp2` reference the same `greet` method through `Employee.prototype`, rather than duplicating it for each instance.

    **Why is this efficient?**
    If the `greet` method were defined inside the `Employee` constructor, every instance of `Employee` would have its own copy of the method. 
    With prototypes, we store the method once on `Employee.prototype`, and all instances share that one method, conserving memory.

    Let's visualize how the `===` operator works here:
*/
console.log(emp1.greet === emp2.greet); // Output: true
/* 
    Both `emp1` and `emp2` reference the same `greet` method on the prototype, so the comparison returns `true`.
    This demonstrates how the method is not duplicated across instances.

    **Prototype Chain:**
    When you call a method like `emp1.greet()`, JavaScript first looks for `greet` on `emp1` itself.
    Since it doesn't find it there, it looks at `Employee.prototype`, where the method is stored.
    This chain of lookup continues through the prototype chain until it either finds the method or reaches `null` (the end of the chain).

    You can see the prototype chain in action with this check:
*/
console.log(emp1.hasOwnProperty('greet')); // Output: false (greet is not on emp1, it's on Employee.prototype)
console.log(Object.getPrototypeOf(emp1) === Employee.prototype); // Output: true (emp1's prototype is Employee.prototype)
console.log(Employee.prototype.__proto__ === Object.prototype); // Output: true (Employee.prototype is linked to Object.prototype)

/* 
    **Key Points to Remember:**
    - Prototypes allow for shared behavior among object instances without duplicating methods, which helps with memory efficiency.
    - The `===` operator can confirm that shared methods on the prototype are the same across instances.
    - JavaScript follows the **prototype chain** to find methods and properties, looking at the object's prototype if it doesn't find them directly on the object.
    - The `greet` method in this example is stored once on `Employee.prototype`, and all `Employee` instances reference this same method.

    SUMMARY OF KEY POINTS:
    - Every JavaScript object has a prototype, and methods attached to the prototype are shared across instances.
    - The prototype chain allows JavaScript to look for methods on the object and then up the chain if they aren't found on the object itself.
    - By placing methods on the prototype, we avoid duplicating methods on each instance, which improves memory efficiency.
*/
