/* 
    In JavaScript, there are two main types of variables: primitive and reference types.
    The key distinction between them is how they are stored and managed in memory.

    PRIMITIVES:
    Primitive types include: number, string (text), boolean, null, undefined, and symbol.

    When you declare a primitive, its value is stored directly in the *stack*.
    The stack is a small, but fast, region of memory where simple data is stored. It allows 
    quick access and manipulation of these values as the program runs.

    Let's look at an example:
*/
let empName = 'Nicholas';
/* 
    Here, 'Nicholas' is a string (a primitive). Both the variable 'empName' and the 
    value 'Nicholas' are stored on the stack. Specifically, the variable 'empName' 
    holds a reference (a pointer) to the memory location where the value 'Nicholas' is stored.

    When we reassign 'empName', like this:
*/
empName = 'Nick';
/* 
    Reassigning 'empName' doesn’t modify the original value ('Nicholas').
    Instead, JavaScript allocates new space in memory for the new value 'Nick'. 
    The variable 'empName' is updated to point to the new memory location where 'Nick' is stored.

    This demonstrates that primitive values are *immutable*, meaning the original 
    value ('Nicholas') cannot be changed. Instead, a new value ('Nick') is created in a different 
    memory location, and the variable now points to this new value.

    The old value ('Nicholas') remains in memory but becomes eligible for *garbage collection* 
    once no variables reference it anymore. This process frees up memory.

    COPY BEHAVIOR:
    When you create a new variable and assign it the value of an existing primitive variable, 
    a copy of that value is made. Here's an example:
*/
let empNameCopy = empName;
empNameCopy = 'Nicky Nick';
console.log(empName);     // Output: Nick
console.log(empNameCopy); // Output: Nicky Nick
/* 
    In this case, 'empNameCopy' is assigned the current value of 'empName', which is 'Nick'.
    However, rather than referencing the same memory location, a *new* copy of the value ('Nick') 
    is created on the stack. 'empNameCopy' points to this new location.

    After reassigning 'empNameCopy' to 'Nicky Nick', a separate piece of memory is used for 'Nicky Nick'. 
    Now, 'empName' and 'empNameCopy' point to two entirely different memory locations, each storing a different value.

    SUMMARY OF KEY POINTS:
    - Primitive types (like strings and numbers) are stored directly on the stack.
    - When you reassign a primitive value, a new value is created in memory and the variable 
      is updated to point to the new location.
    - If you copy a primitive (e.g., assigning one variable to another), the new variable 
      holds a separate, independent copy of the value.
    - Primitives are *immutable*—modifying a variable results in a new value, not a change to the original one.
    - Garbage collection cleans up old values once they are no longer referenced.
*/
