import "./style.css";

import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { createPlayerBoard, createComputerBoard } from "./createBoards.js";
import { addplayerShipsManual } from "./addplayerShipsManual.js";
import { addShipToCompBoard } from "./addShipToCompBoard.js";
import { compAttackPlayer } from "./compAttackPlayer.js";
import { addPlayerShipsRandom } from "./addPlayerShipsRandom.js";

const sunkShipCounterComp = document.querySelector(".sunkShipCounterComp");
const sunkShipCounterPl = document.querySelector(".sunkShipCounterPl");
const gameState = document.querySelector(".gameState");
const conditionSpace = document.querySelector(".conditionSpace");

const fleet = [
  { name: "Patrol Boat", length: 2, quantity: 4 },
  { name: "Carrier", length: 5, quantity: 1 },
  { name: "Battleship", length: 4, quantity: 2 },
  { name: "Destroyer", length: 3, quantity: 2 },
  { name: "Submarine", length: 3, quantity: 1 },
];

const allShipComp = [];

const allShipPlayer = [];

fleet.forEach((shipType) => {
  for (let i = 0; i < shipType.quantity; i++) {
    const newShip = ship(shipType.length, `${shipType.name} ${i + 1}`);
    const newShipPlayer = ship(shipType.length, `${shipType.name} ${i + 1}`);
    allShipComp.push(newShip);
    allShipPlayer.push(newShipPlayer);
  }
});

const player = gameBoardFn();

const computer = gameBoardFn();

createPlayerBoard(player.gameBoard);

createComputerBoard(computer, sunkShipCounterComp, gameState, conditionSpace);

addplayerShipsManual(player, allShipPlayer);

addShipToCompBoard(computer, allShipComp);

addPlayerShipsRandom(player, allShipPlayer, gameState, conditionSpace);

compAttackPlayer(player, sunkShipCounterPl, gameState, conditionSpace);
