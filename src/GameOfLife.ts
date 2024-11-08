export class GameOfLife {
  constructor(private readonly board: string[][]) {}

  display() {
    return this.board.map((row) => row.join(" ")).join("\n")
  }
}
