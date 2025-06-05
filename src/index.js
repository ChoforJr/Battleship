import "./style.css";

import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { createPlayerBoard, createComputerBoard } from "./createBoards.js";

const patrolBoat = ship(2);
const submarine = ship(3);
const destroyer = ship(3);
const battleship = ship(4);
const carrier = ship(5);

const player1 = gameBoardFn();
const computer = gameBoardFn();

createPlayerBoard(player1.gameBoard);
createComputerBoard(computer.gameBoard);
