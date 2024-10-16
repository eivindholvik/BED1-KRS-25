# Superhero Composition Activity

In this activity, you’ll practice creating a superhero by combining smaller objects (representing abilities) into a larger, more complex object using `Object.assign`. The goal is to understand how object composition works and how we can combine and modify objects to build more flexible structures.

### Instructions:

1. **Create Ability Objects**:
    - Start by creating **separate objects** that represent different abilities for your superhero.
    - Each ability object should include:
        - Properties that describe the ability (e.g., `canFly`, `strength`, `canBecomeInvisible`).
        - A method (a function) that describes what the ability does (e.g., `fly`, `punch`, `becomeInvisible`).
    - **Examples of abilities**:
        - `flightAbility` might include a `canFly` property (set to `true`) and a `fly` method.
        - `strengthAbility` could include a `strength` property and a `punch` method.
        - `invisibilityAbility` could include a `canBecomeInvisible` property and a `becomeInvisible` method.

2. **Create a Base Superhero Object**:
    - Create a `superhero` object that will be your main character.
    - The `superhero` object should have:
        - A `name` property.
        - An `alias` property.
        - An `introduction` method that introduces the superhero (e.g., "I am [alias], protector of the innocent!").
    - This `superhero` object is the **base** that you will add abilities to.

3. **Compose the Superhero with Abilities**:
    - Use `Object.assign` to combine the ability objects you created in step 1 with your `superhero` object from step 2.
    - You should combine at least two abilities (like `flightAbility` and `strengthAbility`) into the `superhero` object.
    - Once composed, you should be able to call the methods from the abilities (e.g., `fly` and `punch`) on your `superhero` object.

4. **Update and Add New Abilities**:
    - Use `Object.assign` again to update or override properties on your superhero.
    - For example:
        - Update the superhero’s `alias`.
        - Add new abilities like teleportation.
    - You should see that the new abilities and updated properties are now part of your `superhero` object.

5. **Challenge (Optional)**:
    - Create your own superhero abilities (like super speed, mind control, etc.).
    - Compose a new superhero by mixing different combinations of abilities.
    - Experiment with overriding properties (like changing `strength` or updating the `name`) to see how `Object.assign` updates your superhero.

### Key Points:
- Each ability is represented as its own object with both **properties** and **methods**.
- Use `Object.assign` to **combine** objects, creating a single superhero object that has all the properties and methods from the smaller ability objects.
- You can **update** or **override** properties by composing a new object with the same property names.
- This activity focuses on **composition**, where smaller objects are combined to form a more complex one.

---

