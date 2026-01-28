let obj = {};
const weakref = new WeakRef(obj);

const registry = new FinalizationRegistry((value) => {
  console.log(`The object ${value} has been garbage collected`);
});

registry.register(obj, 'obj');
obj = null; // Object is now eligible for garbage collection

let i = 0;
while (i < 100) {
  console.log("yoo");
  setTimeout(() => {
    console.log("ittearte");
    i++;
  }, 1000)
}


class MyClass {
  publicField = 10;
  #privateField = 20;
  static staticPublicField = 30;
  static #staticPrivateField = 40;

  showFields() {
    console.log(this.publicField); // 10
    console.log(this.#privateField); // 20
  }
  // getPrivateField() {
  //   return this.privateField;
  // }
  get privateField() { }
}

