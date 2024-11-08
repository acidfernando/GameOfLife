import { describe, it, expect } from "vitest"
import { GameOfLife } from "./GameOfLife.js"

describe("Game of Life", () => {
  it("displays the grid", () => {
    const gameOfLife = new GameOfLife()

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

  it("can be instantiated with a living cell",()=>{
    const gameOfLife = new GameOfLife(
      [
        ["O", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
      ]
    )

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
})
