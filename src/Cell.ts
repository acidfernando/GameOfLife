export class Cell {
  constructor(private readonly value: boolean) {}

  display() {
    return this.value ? "O" : "x"
  }

  isAlive() {
    return this.value
  }

  static dead() {
    return new Cell(false)
  }

  static alive() {
    return new Cell(true)
  }
}
