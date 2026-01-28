class MyClass {
  static {
    // Initialization code
    console.log('Static block executed');
  }
}

const myClass = new MyClass();


let array = [10, 20, 30, 40];
console.log(array.at(-1)); // 40

console.log(array[array.length - 1]);