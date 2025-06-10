import { gameBoardFn } from "./gameBoardComp.js";
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
    // console.log(testFn.patrolBoatStorage);
    expect(testFn.patrolBoatStorage.length).toEqual(8);
  });
  test("compGameBoard example 2", () => {
    addShipToCompBoard(testFn, submarine, testFn.submarineStorage, 3);
    // console.log(testFn.submarineStorage);
    expect(testFn.submarineStorage.length).toEqual(3);
  });
  test("compGameBoard example 3", () => {
    addShipToCompBoard(testFn, destroyer, testFn.destroyerStorage, 6);
    // console.log(testFn.destroyerStorage);
    expect(testFn.destroyerStorage.length).toEqual(6);
  });
  test("compGameBoard example 4", () => {
    addShipToCompBoard(testFn, battleship, testFn.battleshipStorage, 8);
    // console.log(testFn.battleshipStorage);
    expect(testFn.battleshipStorage.length).toEqual(8);
  });
  test("compGameBoard example 5", () => {
    addShipToCompBoard(testFn, carrier, testFn.carrierStorage, 5);
    // console.log(testFn.carrierStorage);
    expect(testFn.carrierStorage.length).toEqual(5);
  });
  test("compGameBoard example 6", () => {
    expect(testFn.addedCoords.length).toEqual(30);
  });
  // test("compGameBoard example 7", () => {
  //   expect(testFn.gameBoard).toEqual(30);
  // });
  test("compGameBoard example 8", () => {
    testFn.addedCoords.forEach((element) => {
      testFn.receiveAttack(element[0], element[1]);
    });
    // for (const key in testFn.gameBoard) {
    //   for (const element of testFn.gameBoard[key]) {
    //     const result = testFn.receiveAttack(`${key}`, element);
    //     if (result === "Invalid Coordinates" || result === "Already visited") {
    //       return;
    //     }
    //     if (result === "miss") {
    //       console.log("miss");
    //     }
    //     if (result === "hit") {
    //       console.log("hit");
    //     }
    //   }
    // }
    expect(testFn.visitedCondition.length).toEqual(30);
  });
  test("compGameBoard example 9", () => {
    expect(testFn.anotherShipSunk.length).toEqual(3);
  });
});
