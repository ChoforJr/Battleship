//Begin your app by creating the gameBoard class/factory (your choice).
import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { describe, expect, test } from "@jest/globals";
const testFn = gameBoardFn();
const patrolBoat1 = ship(2);
const patrolBoat2 = ship(2);
const patrolBoat3 = ship(2);

describe("gameBoard", () => {
  test("gameBoard example 1", () => {
    expect(testFn.gameBoard.A[3]).toEqual(expect.any(Number));
  });
  test("gameBoard example 2", () => {
    testFn.addShip(patrolBoat1, "A", 3, "right");
    expect(testFn.gameBoard.A[3]).toEqual(expect.any(Object));
  });
  test("gameBoard example 3", () => {
    testFn.addShip(patrolBoat2, "B", 5, "right");
    expect(testFn.gameBoard.B[5].hit()).toEqual(expect.any(Number));
  });
  test("gameBoard example 4", () => {
    expect(testFn.gameBoard.C[5].hit()).toEqual(expect.any(Number));
  });
  test("gameBoard example 5", () => {
    expect(patrolBoat2.isSunk()).toEqual(true);
  });
  test("gameBoard example 6", () => {
    expect(testFn.receiveAttack("D", 4)).toEqual("miss");
  });
  test("gameBoard example 7", () => {
    testFn.addShip(patrolBoat3, "G", 4, "up");
    expect(testFn.receiveAttack("G", 4)).toEqual("hit");
  });
  test("gameBoard example 8", () => {
    expect(testFn.receiveAttack("G", 4)).toEqual("Already visited");
  });
  test("gameBoard example 9", () => {
    expect(testFn.receiveAttack("G", 3)).toEqual("hit");
  });
  test("gameBoard example 10", () => {
    expect(testFn.anotherShipSunk.length).toEqual(1);
  });
  test("gameBoard example 11", () => {
    expect(testFn.receiveAttack("Z", -3)).toEqual("Invalid Coordinates");
  });
  test("gameBoard example 12", () => {
    expect(testFn.addShip(patrolBoat3, "A", 0, "up")).toEqual(
      "Invalid Direction",
    );
  });
  test("gameBoard example 13", () => {
    testFn.addShip(patrolBoat2, "E", 5, "down");
    expect(testFn.receiveAttack("E", 5)).toEqual("hit");
  });
});
