class SomeMath {
  constructor(name) {
    this.name = name;
  }
  static sum(x, y) {
    return x + y;
  }
  static multiply(x, y) {
    return x * y;
  }
}

console.log(SomeMath.sum(4, 6));