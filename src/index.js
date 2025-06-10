import "./style.css";

import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { createPlayerBoard, createComputerBoard } from "./createBoards.js";
import {
  addShipToPageAndBoard,
  addPatrolBoat,
  coord1Pat,
  coord2Pat,
  dirPat,
  addSubmarine,
  coord1Sub,
  coord2Sub,
  dirSub,
  addDestroyer,
  coord1Des,
  coord2Des,
  dirDes,
  addBattleship,
  coord1Bat,
  coord2Bat,
  dirBat,
  addCarrier,
  coord1Car,
  coord2Car,
  dirCar,
} from "./addShipToPageAndBoard.js";
import { addShipToCompBoard } from "./addComputerShipsToBoard.js";

const patrolBoat = ship(2, "patrolBoat");
const submarine = ship(3, "submarine");
const destroyer = ship(3, "destroyer");
const battleship = ship(4, "battleship");
const carrier = ship(5, "carrier");

const player = gameBoardFn();
const computer = gameBoardFn();

createPlayerBoard(player.gameBoard);
createComputerBoard(computer);

addShipToPageAndBoard(
  player,
  patrolBoat,
  addPatrolBoat,
  coord1Pat,
  coord2Pat,
  dirPat,
  player.patrolBoatStorage,
  8,
);
addShipToPageAndBoard(
  player,
  submarine,
  addSubmarine,
  coord1Sub,
  coord2Sub,
  dirSub,
  player.submarineStorage,
  3,
);
addShipToPageAndBoard(
  player,
  destroyer,
  addDestroyer,
  coord1Des,
  coord2Des,
  dirDes,
  player.destroyerStorage,
  6,
);
addShipToPageAndBoard(
  player,
  battleship,
  addBattleship,
  coord1Bat,
  coord2Bat,
  dirBat,
  player.battleshipStorage,
  8,
);
addShipToPageAndBoard(
  player,
  carrier,
  addCarrier,
  coord1Car,
  coord2Car,
  dirCar,
  player.carrierStorage,
  5,
);

addShipToCompBoard(computer, patrolBoat, computer.patrolBoatStorage, 8);
addShipToCompBoard(computer, submarine, computer.submarineStorage, 3);
addShipToCompBoard(computer, destroyer, computer.destroyerStorage, 6);
addShipToCompBoard(computer, battleship, computer.battleshipStorage, 8);
addShipToCompBoard(computer, carrier, computer.carrierStorage, 5);
