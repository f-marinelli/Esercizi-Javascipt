function calculate() {
  return new Object({
    total: 0,
    add(num) {
      this.total += num;
      return this;
    },
    sub(num) {
      this.total -= num;
      return this;
    },
    multiply(num) {
      this.total *= num;
      return this;
    },
    divide(num) {
      this.total /= num;
      return this;
    },
    printResult() {
      console.log(this.total);
    },
  });
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
