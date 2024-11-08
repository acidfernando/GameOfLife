export class GameOfLife {
  constructor(private readonly board: string[][]) {}

  display() {
    return this.board.map((row) => row.join(" ")).join("\n")
  }

  run(iterations = 1) {
    for (let i = 0; i < iterations; i++) {
      this.runIteration()
    }
  }

  private runIteration() {
    let newBoard = this.board
    for (let row = 0; row < this.board.length; row++) {
      for (let column = 0; column < this.board[row].length; column++) {
        newBoard[row][column] = this.getNextCellStatus(row, column)
      }
    }
  }

  private getNextCellStatus(row: number, column: number) {
    const cellStatus = this.board[row][column]

    if (cellStatus === "O") {
      const liveNeighbours = this.getLiveNeighbours(row, column)

      if (liveNeighbours < 2) {
        return "x"
      }
    }

    return cellStatus
  }

  private getLiveNeighbours(row: number, column: number) {
    let liveNeighbours = 0

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i === row && j === column) continue

        if (this.board[i]?.[j] === "O") {
          liveNeighbours++
        }
      }
    }

    return liveNeighbours
  }
}
