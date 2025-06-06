import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { describe, expect, test } from "@jest/globals";
import { addShipToCompBoard } from "./addComputerShipsToBoard.js";
const testFn = gameBoardFn();
const patrolBoat = ship(2, "patrolBoat");
const submarine = ship(3, "submarine");
const destroyer = ship(3, "destroyer");
const battleship = ship(4, "battleship");
const carrier = ship(5, "carrier");

describe("compGameBoard", () => {
  test("compGameBoard example 1", () => {
    addShipToCompBoard(testFn, patrolBoat, testFn.patrolBoatStorage);
    expect(testFn.addedCoords).toEqual(expect.any(Array));
  });
  test("compGameBoard example 2", () => {
    addShipToCompBoard(testFn, submarine, testFn.submarineStorage);
    expect(testFn.addedCoords).toEqual(expect.any(Array));
  });
  test("compGameBoard example 3", () => {
    addShipToCompBoard(testFn, destroyer, testFn.destroyerStorage);
    expect(testFn.addedCoords).toEqual(expect.any(Array));
  });
  test("compGameBoard example 4", () => {
    addShipToCompBoard(testFn, battleship, testFn.battleshipStorage);
    expect(testFn.addedCoords).toEqual(expect.any(Array));
  });
  test("compGameBoard example 5", () => {
    addShipToCompBoard(testFn, carrier, testFn.carrierStorage);
    expect(testFn.addedCoords).toEqual(expect.any(Array));
  });
});
