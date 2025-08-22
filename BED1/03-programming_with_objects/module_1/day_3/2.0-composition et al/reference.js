/* 
    Let's now focus on REFERENCE TYPES.
    Unlike primitive types, reference types (such as objects and arrays) are stored and managed differently in memory.

    Reference types include: objects, arrays, functions, and dates.

    When you declare a reference type, the actual value is stored in the *heap*—a larger, dynamically managed region of memory. 
    Since reference types can be large and complex, they don't fit neatly into the stack like primitive values do.
    
    The variable itself is stored on the *stack*, but it only holds a *reference* (or pointer) to the location in the heap where the actual data is stored.
    This is different from primitives, where the actual data is also stored on the stack.

    Let's see an example with an object:
*/
let employee = { name: 'Nicholas', position: 'Developer' };
/* 
    Memory Layout:
    Stack: employee -> (reference)
    Heap: { name: 'Nicholas', position: 'Developer' }
    
    The object itself is stored in the heap, and the 'employee' variable holds a reference to the memory location where that object resides. 

    Reference types are *mutable*, meaning you can modify their contents directly without creating a new variable (even if it's a *const*), unlike primitives.

    For example:
*/
employee.name = 'Nick';
console.log(employee.name); // Output: Nick
/* 
    Here, we changed the 'name' property of the 'employee' object. The object stored in the heap 
    is updated, and no new memory is allocated. 
    
    Memory Layout (after mutation):
    Stack: employee -> (reference)
    Heap: { name: 'Nick', position: 'Developer' }
    
    This means that reference types allow you to change their contents in place.

    Now let's replicate what we did with primitives and create a new variable by assigning it the old one.
*/
let employeeCopy = employee;
employeeCopy.position = 'Manager';
console.log(employee.position);     // Output: Manager
console.log(employeeCopy.position); // Output: Manager

/* 
    Memory Layout (after copying):
    Stack: employee -> (same reference)
           employeeCopy -> (same reference)
    Heap: { name: 'Nick', position: 'Manager' }

    Notice how we updated 'employeeCopy', but 'employee' was updated as well.

    Since both 'employee' and 'employeeCopy' reference the same object, updating 'employeeCopy' 
    also updates 'employee'. The key is that we're copying the *reference* (not the object itself).  

    You can confirm this by using the '===' operator. For primitives, it compares value and type.
    For reference types, it checks whether they point to the same memory location (i.e., the same reference).
*/
console.log(employee === employeeCopy); // Output: true
/* 
    Since both 'employee' and 'employeeCopy' point to the same object in memory, 
    `employee === employeeCopy` returns `true`.

    Now, let's assign a new object to 'employeeCopy' and see what happens:
*/
employeeCopy = { name: 'Nick', position: 'Manager' };
console.log(employee);
console.log(employeeCopy);
console.log(employee === employeeCopy); // Output: false
/* 
    Memory Layout (after reassignment):
    Stack: employee -> (old reference)
           employeeCopy -> (new reference)
    Heap: { name: 'Nick', position: 'Manager' } (new object)
          { name: 'Nick', position: 'Manager' } (old object)

    Now 'employeeCopy' points to a new object in the heap, separate from the one that 'employee' points to. 
    As a result, `employee === employeeCopy` returns `false`, because they no longer reference the same object 
    even though they have the same values.

    A more straightforward way to create a copy of the object is by using the *spread* operator.
*/

let employeeSpreadCopy = {...employee};
console.log(employeeSpreadCopy);
console.log(employee === employeeSpreadCopy); // Output: false

/* 
    The spread operator creates a *shallow copy* of the object. This means that only the top-level properties 
    are copied to a new object in the heap. However, if the object contains nested objects, those nested objects 
    will still reference the same memory location as the original. 

    So, while the top-level properties are independent, changes to any nested objects will still affect the original object.
    We'll dive deeper into shallow vs deep copies in a future lesson.

    This demonstrates that with reference types, `===` compares the references (or memory addresses), 
    not the contents of the objects themselves.

    SUMMARY OF KEY POINTS:
    - Reference types (like objects and arrays) are stored in the heap, while the variable holds 
      a reference to that memory location.
    - Reference types are *mutable*, meaning you can modify their contents directly.
    - When you assign one reference variable to another, you copy the reference, not the object itself.
    - The `===` operator compares references, not the contents. Two variables referencing the 
      same object return `true`. If one variable points to a new object, the comparison returns `false`.
    - The spread operator can create a *shallow copy* of an object, but note that nested objects are still 
      shared between the original and the copy.
*/
