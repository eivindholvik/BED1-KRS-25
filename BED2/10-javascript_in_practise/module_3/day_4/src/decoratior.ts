// Method decorator for logging method execution
function logExecution(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    const originalMethod = descriptor.value; // Store the original method

    descriptor.value = function (...args: any[]) {
        console.log(
            `Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`,
        ); // Log method call
        const start = performance.now(); // Start timer
        const result = originalMethod.apply(this, args); // Call the original method
        const finish = performance.now(); // End timer
        console.log(
            `Executed ${propertyKey} in ${finish - start} milliseconds`,
        ); // Log execution time
        return result;
    };
}

class Calculator {
    @logExecution // Apply logExecution decorator to add method
    add(a: number, b: number) {
        return a + b; // Simple addition method
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 3));
