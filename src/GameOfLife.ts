import { Board } from "./Board.js"

export class GameOfLife {
  constructor(private readonly board: Board) {}

  display() {
    return this.board.display()
  }

  run(iterations = 1) {
    for (let i = 0; i < iterations; i++) {
      this.board.runIteration()
    }
  }
}
