import { describe, it, expect } from "vitest"
import { GameOfLife } from "./GameOfLife.js"
import { Board } from "./Board.js"

describe("Game of Life", () => {
  it("displays the grid", () => {
    const board = new Board([
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])
    const gameOfLife = new GameOfLife(board)

    expect(gameOfLife.display()).toEqual(
      [
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
      ]
        .map((row) => row.join(" "))
        .join("\n"),
    )
  })

  it("can be instantiated with a living cell", () => {
    const board = new Board([
      ["O", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

    const gameOfLife = new GameOfLife(board)

    expect(gameOfLife.display()).toEqual(
      [
        ["O", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
      ]
        .map((row) => row.join(" "))
        .join("\n"),
    )
  })

  it("kills any living cell with less than 2 neighbours", () => {
    const board = new Board([
      ["O", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

    const gameOfLife = new GameOfLife(board)

    gameOfLife.run()

    expect(gameOfLife.display()).toEqual(
      [
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
      ]
        .map((row) => row.join(" "))
        .join("\n"),
    )
  })

  it("only kills any living cell if condition is met", () => {
    const board = new Board([
      ["O", "x", "x", "O", "O"],
      ["x", "x", "x", "x", "O"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

    const gameOfLife = new GameOfLife(board)

    gameOfLife.run()

    expect(gameOfLife.display()).toEqual(
      [
        ["x", "x", "x", "O", "O"],
        ["x", "x", "x", "x", "O"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
      ]
        .map((row) => row.join(" "))
        .join("\n"),
    )
  })

  it("kills any cell with more than 3 neighbours", () => {
    const board = new Board([
      ["O", "O", "x", "x", "x"],
      ["O", "O", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

    const gameOfLife = new GameOfLife(board)

    gameOfLife.run()

    expect(gameOfLife.display()).toEqual(
      [
        ["x", "O", "x", "x", "x"],
        ["O", "O", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
      ]
        .map((row) => row.join(" "))
        .join("\n"),
    )
  })
})
