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
  // This is used to simply see if all the ships are added to the gameBoard, not for it to equal 30 (LOL)
  // test("compGameBoard example 7", () => {
  //   expect(testFn.gameBoard).toEqual(30);
  // });
  test("compGameBoard example 8", () => {
    testFn.addedCoords.forEach((element) => {
      testFn.receiveAttack(element[0], element[1]);
    });
    expect(testFn.visitedCondition.length).toEqual(30);
  });
  test("compGameBoard example 9", () => {
    console.log(testFn.anotherShipSunk);
    expect(testFn.anotherShipSunk.length).toEqual(10);
  });
});
