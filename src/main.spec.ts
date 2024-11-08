import { describe, it, expect } from "vitest"
import { GameOfLife } from "./GameOfLife.js"

describe("Game of Life", () => {
  it("displays the grid", () => {
    const gameOfLife = new GameOfLife([
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

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
    const gameOfLife = new GameOfLife([
      ["O", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

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
    const gameOfLife = new GameOfLife([
      ["O", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

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
    const gameOfLife = new GameOfLife([
      ["O", "x", "x", "O", "O"],
      ["x", "x", "x", "x", "O"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
    ])

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
})
