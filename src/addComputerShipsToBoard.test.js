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
    addShipToCompBoard(testFn, patrolBoat, testFn.patrolBoatStorage, 8);
    expect(testFn.patrolBoatStorage.length).toEqual(8);
  });
  test("compGameBoard example 2", () => {
    addShipToCompBoard(testFn, submarine, testFn.submarineStorage, 3);
    expect(testFn.submarineStorage.length).toEqual(3);
  });
  test("compGameBoard example 3", () => {
    addShipToCompBoard(testFn, destroyer, testFn.destroyerStorage, 6);
    expect(testFn.destroyerStorage.length).toEqual(6);
  });
  test("compGameBoard example 4", () => {
    addShipToCompBoard(testFn, battleship, testFn.battleshipStorage, 8);
    expect(testFn.battleshipStorage.length).toEqual(8);
  });
  test("compGameBoard example 5", () => {
    addShipToCompBoard(testFn, carrier, testFn.carrierStorage, 5);
    expect(testFn.carrierStorage.length).toEqual(5);
  });
  test("compGameBoard example 6", () => {
    expect(testFn.addedCoords.length).toEqual(30);
  });
  // test("compGameBoard example 7", () => {
  //   let hits = [];
  //   testFn.addedCoords.forEach((element) => {
  //     hits.push(testFn.receiveAttack(element[0], element[1]));
  //   });
  //   expect(hits.length).toEqual(30);
  // });
  let hits = [];
  let misses = [];
  test("compGameBoard example 7", () => {
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let totalAttacksAttempted = 0;

    for (const col of columns) {
      for (const row of rows) {
        const result = testFn.receiveAttack(col, row);

        totalAttacksAttempted++;

        if (result === "miss") {
          misses.push("miss");
        } else if (result === "hit") {
          hits.push("hit");
        }
      }
    }
    console.log("Total attacks attempted:", totalAttacksAttempted); // Should be 100
    console.log("Hits:", hits.length, "Misses:", misses.length); // Verify counts
    expect(hits.length).toEqual(30);
  });
  test("compGameBoard example 8", () => {
    expect(misses.length).toEqual(70);
  });
  test("compGameBoard example 9", () => {
    expect(testFn.visitedCoord.length).toEqual(100);
  });
});
