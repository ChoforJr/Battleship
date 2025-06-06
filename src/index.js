import "./style.css";

import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { createPlayerBoard, createComputerBoard } from "./createBoards.js";
import {
  addPatrolBoatOnly,
  addSubmarineOnly,
  addDestroyerOnly,
  addBattleshipOnly,
  addCarrierOnly,
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
createComputerBoard(computer.gameBoard);

addPatrolBoatOnly(player, patrolBoat);
addSubmarineOnly(player, submarine);
addDestroyerOnly(player, destroyer);
addBattleshipOnly(player, battleship);
addCarrierOnly(player, carrier);

addShipToCompBoard(computer, patrolBoat, computer.patrolBoatStorage);
addShipToCompBoard(computer, submarine, computer.submarineStorage);
addShipToCompBoard(computer, destroyer, computer.destroyerStorage);
addShipToCompBoard(computer, battleship, computer.battleshipStorage);
addShipToCompBoard(computer, carrier, computer.carrierStorage);
