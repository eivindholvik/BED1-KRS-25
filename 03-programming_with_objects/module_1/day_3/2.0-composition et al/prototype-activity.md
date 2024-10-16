# Superhero Prototype Activity

In this activity, you will create superheroes and their abilities using two different approaches: directly adding methods as object members and using prototypes. By doing this, you will naturally explore why prototypes are important and how they help manage memory more efficiently.

---

### **Instructions**:

1. **Create the Superhero Constructor**:
    - Start by defining a `Superhero` constructor function.
    - The constructor should accept two parameters: `name` and `alias`.
    - Inside the constructor, assign these values to `this.name` and `this.alias`.
    - **Add a method** directly inside the constructor for the superhero to have a `punch` ability.
      - This method should return a string like `"Superman delivers a powerful punch!"`.

2. **Create Two Superhero Instances**:
    - Create two superhero instances using the `Superhero` constructor. For example, one could be `"Superman"` and the other `"Batman"`.
    - **Test their `punch` methods** by calling the method for each superhero.
    - **Compare** whether both superheroes share the same method or if they each have their own copy of the `punch` method. You can do this by using the `===` operator.

3. **Add a Method to the Prototype**:
    - Now, instead of adding methods directly inside the constructor, let’s add a `fly` method to the `Superhero.prototype`.
    - This method should return a string like `"Superman is soaring through the sky!"`.
    - **Create two new superhero instances** (e.g., "Wonder Woman" and "The Flash") and call their `fly` methods.
    - **Compare** whether they share the same `fly` method using the `===` operator.

4. **Compare the Difference Between Object Methods and Prototype Methods**:
    - Reflect on the two approaches:
        - Does each superhero have its own `punch` method?
        - Do the superheroes share the same `fly` method from the prototype?
    - Consider why **prototypes** might be more memory-efficient and useful when working with many objects.

---

### **Key Points**:
- **Direct Methods**: Adding methods inside the constructor means each object has its own copy of the method.
- **Prototype Methods**: Adding methods to the prototype means all objects share a single method.
- **Efficiency**: Using prototypes helps save memory because methods are not duplicated across instances.

---
