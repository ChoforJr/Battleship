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
createComputerBoard(computer);

addPatrolBoatOnly(player, patrolBoat);
addSubmarineOnly(player, submarine);
addDestroyerOnly(player, destroyer);
addBattleshipOnly(player, battleship);
addCarrierOnly(player, carrier);

addShipToCompBoard(computer, patrolBoat, computer.patrolBoatStorage, 8);
addShipToCompBoard(computer, submarine, computer.submarineStorage, 3);
addShipToCompBoard(computer, destroyer, computer.destroyerStorage, 6);
addShipToCompBoard(computer, battleship, computer.battleshipStorage, 8);
addShipToCompBoard(computer, carrier, computer.carrierStorage, 5);
