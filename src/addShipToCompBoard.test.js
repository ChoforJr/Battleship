import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { describe, expect, test } from "@jest/globals";
import { addShipToCompBoard } from "./addShipToCompBoard.js";
const testFn = gameBoardFn();

const fleet = [
  { name: "Carrier", length: 5, quantity: 1 },
  { name: "Battleship", length: 4, quantity: 2 },
  { name: "Destroyer", length: 3, quantity: 2 },
  { name: "Submarine", length: 3, quantity: 1 },
  { name: "Patrol Boat", length: 2, quantity: 4 },
];

const allShipComp = [];

fleet.forEach((shipType) => {
  for (let i = 0; i < shipType.quantity; i++) {
    const newShip = ship(shipType.length, `${shipType.name} ${i + 1}`);
    allShipComp.push(newShip);
  }
});

describe("compGameBoard", () => {
  test("compGameBoard example 1", () => {
    addShipToCompBoard(testFn, allShipComp);
    expect(testFn.addedCoords.length).toEqual(30);
  });
  // This is used to simply see if all the ships are added to the gameBoard, not for it to equal 30 (LOL)
  // test("compGameBoard example 2", () => {
  //   expect(testFn.gameBoard).toEqual(30);
  // });
  test("compGameBoard example 3", () => {
    testFn.addedCoords.forEach((element) => {
      testFn.receiveAttack(element[0], element[1]);
      // console.log(testFn.currentCondition);
    });
    expect(testFn.visitedCondition.length).toEqual(30);
  });
  test("compGameBoard example 4", () => {
    // console.log(testFn.anotherShipSunk);
    expect(testFn.anotherShipSunk.length).toEqual(10);
  });
});
