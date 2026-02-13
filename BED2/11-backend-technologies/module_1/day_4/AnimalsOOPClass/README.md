## OOP in C#

Today we worked with **Object-Oriented Programming (OOP) in C#** and focused on the four main pillars:

### Abstraction

Abstraction means creating a simplified representation of something.

We focus on what something _is_ and _what it can do_, without exposing unnecessary details.

Abstract classes and interfaces are higher levels of abstraction. They define structure and behaviour without always providing full implementations.

### Encapsulation

Encapsulation means that a class controls how its internal state is accessed or changed.

A class exposes “doorways” through properties and methods.

Access modifiers (`private`, `protected`, `public`) determine what can be accessed from outside the class and what must remain hidden.

This protects the object’s integrity.

### Inheritance

Inheritance allows classes to share code through an **IS-A** relationship.

For example:

- A `Mammal` **is an** `Animal`
- A `Dog` **is a** `Mammal`

The child class inherits behaviour and properties from the parent class, and can also extend or modify them.

### Polymorphism

Polymorphism means “many forms.” It allows objects to be treated as different types depending on context.

We see this in three main ways:

- **Method overloading**
  Multiple versions of the same method with different parameters.

- **Method overriding**
  A child class changes how a method is implemented.
  The original method must be marked `virtual` or `abstract`, and the child method must use `override`.

- **Polymorphic types**
  Referring to objects by a more general type.
  For example:
    - Treating `Dog` or `Eagle` as `Animal`
    - Referring to a class through an interface like `ISwimmable`

When we do this, we only have access to the members defined by that type (for example, only what `Animal` or `ISwimmable` exposes).

### Interfaces

Interfaces act as contracts.

They typically contain method signatures (without implementations). Any class that implements an interface must provide implementations for all its members.

This allows us to build shared behaviour across unrelated classes.

Since C# only allows a class to inherit from one base class, interfaces let us add additional capabilities.

For example:

- Some birds can fly, others cannot
- Some animals can swim
- We can represent this behaviour using interfaces like `IFlyable` or `ISwimmable`
