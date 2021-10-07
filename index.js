// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    let sum = this.sides.reduce((acc, currentVal) => { return acc + currentVal }, 0);
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    // console.log(a, b, c);
    if (a + b < c || a + c < b || b + c < a) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every(val => val === this.sides[0]);
  }
  get area(){
    return this.sides[0] * this.sides[1];
  }
}