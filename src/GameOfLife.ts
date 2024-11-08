export class GameOfLife {
  constructor(param: string[][]) {

  }

  display() {
    return [
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ]
      .map((row) => row.join(" "))
      .join("\n")
  }
}
