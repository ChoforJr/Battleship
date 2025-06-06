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
const patrolBoat = ship(2);
const submarine = ship(3);
const destroyer = ship(3);
const battleship = ship(4);
const carrier = ship(5);

const player = gameBoardFn();
const computer = gameBoardFn();

createPlayerBoard(player.gameBoard);
createComputerBoard(computer.gameBoard);

addPatrolBoatOnly(player, patrolBoat);
addSubmarineOnly(player, submarine);
addDestroyerOnly(player, destroyer);
addBattleshipOnly(player, battleship);
addCarrierOnly(player, carrier);

addShipToCompBoard(computer, patrolBoat);
addShipToCompBoard(computer, submarine);
addShipToCompBoard(computer, destroyer);
addShipToCompBoard(computer, battleship);
addShipToCompBoard(computer, carrier);
