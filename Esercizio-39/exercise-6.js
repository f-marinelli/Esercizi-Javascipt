class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    if (obj?.side) {
      return obj.side ** 2;
    }

    if (obj?.width) {
      return obj.width * obj.height;
    }

    if (obj?.radius) {
      // return Math.PI * obj.radius ** 2;
      return Math.PI * obj.radius ** 2;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
