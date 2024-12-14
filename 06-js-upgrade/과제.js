const userInfo = {
  name: 'Lee',
  age: 25,
  job: 'Developer',
  city: 'Seoul',
};

const { name, age, ...restInfo } = userInfo;
console.log(name, age);
console.log(restInfo);

const evenNumbers = [2, 4, 6];
const addNumbers = [1, 3, 5];

const spread = [...evenNumbers, ...addNumbers];
console.log(spread);
const [first, second, ...remaining] = spread;
console.log(first, second);
console.log(...remaining);

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  getArea() {
    return this.w * this.h;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12

////////////////////////////////////////////////////////
class Rectangle extends Shape {
  constructor(w, h) {
    super(w, h);
  }

  getSqrt() {
    return Math.sqrt(this.w ** 2);
  }
}

class Triangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return (this.w * this.h) / 2;
  }
}

class Circle extends Shape {
  constructor(w, h, r) {
    super(w, h);
    this.r = r;
  }
  getArea() {
    return this.r ** 2 * 3.14;
  }
}

let rec2 = new Rectangle(5, 5);
let tri = new Triangle(5, 5);
let cir = new Circle(5, 5, 5);

// console.log(rec2, tri, cir);
console.log(rec2.getSqrt());
console.log(tri.getArea());
console.log(cir.getArea());
