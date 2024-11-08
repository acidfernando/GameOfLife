export class GameOfLife {
  constructor(private readonly board: string[][]) {}

  display() {
    return this.board.map((row) => row.join(" ")).join("\n")
  }

  run(iterations = 1) {
    for(let i = 0; i<iterations; i++) {
      this.runIteration()
    }
  }

  private runIteration() {
    let newBoard = this.board;
    for(let i = 0; i<this.board.length; i++) {
      for(let j = 0; j<this.board[i].length; j++) {
        newBoard[i][j] = this.getNextCellStatus()
      }
    }
  }

  private getNextCellStatus() {
    return "x"
  }
}
