class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() { return this.side * 4 }
  area() { return Math.pow(this.side, 2) }
  diagonal() { return Math.sqrt(2 * Math.pow(this.side, 2)).toFixed(3); }
  describe() {
    const perimeter = this.perimeter();
    const area = this.area();
    const diagonal = this.diagonal();

    console.log(`Square with side ${this.side} has perimeter of ${perimeter}, area of ${area}, and diagonal of ${diagonal}`)
  }
}

const Square1 = new Square(2)
const Square2 = new Square(4)
const Square3 = new Square(6)

Square1.describe()
Square2.describe()
Square3.describe()