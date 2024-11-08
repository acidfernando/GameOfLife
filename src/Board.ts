import { Cell } from "./Cell.js"

export class Board {
  private readonly board: Cell[][]

  constructor(initialBoard: string[][]) {
    this.board = initialBoard.map((row: string[]) => {
      return row.map((cell: string) => {
        return cell === "x" ? Cell.dead() : Cell.alive()
      })
    })
  }

  display() {
    return this.board
      .map((row) => row.map((cell) => cell.display()).join(" "))
      .join("\n")
  }

  runIteration() {
    let newBoard = this.board
    for (let row = 0; row < this.board.length; row++) {
      for (let column = 0; column < this.board[row].length; column++) {
        newBoard[row][column] = this.getNextCellStatus(row, column)
      }
    }
  }

  private getNextCellStatus(row: number, column: number): Cell {
    const cell = this.board[row][column]

    if (cell.isAlive()) {
      const liveNeighbours = this.getLiveNeighbours(row, column)

      if (liveNeighbours < 2) {
        return Cell.dead()
      }
    }

    return cell
  }

  private getLiveNeighbours(row: number, column: number) {
    let liveNeighbours = 0

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i === row && j === column) continue

        if (this.board[i]?.[j]?.isAlive()) {
          liveNeighbours++
        }
      }
    }

    return liveNeighbours
  }
}
