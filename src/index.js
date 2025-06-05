import "./style.css";

import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { createPlayerBoard, createComputerBoard } from "./createBoards.js";

const patrolBoat = ship(2);
const submarine = ship(3);
const destroyer = ship(3);
const battleship = ship(4);
const carrier = ship(5);

const player = gameBoardFn();
const computer = gameBoardFn();

createPlayerBoard(player.gameBoard);
createComputerBoard(computer.gameBoard);

const addPatrolBoat = document.querySelector(".addPatrolBoat");
const coord1Pat = document.querySelector("#coord1Pat");
const coord2Pat = document.querySelector("#coord2Pat");
const dirPat = document.querySelector("#dirPat");

addPatrolBoat.addEventListener("click", () => {
  player.addShip(patrolBoat, coord1Pat.value, coord2Pat.value, dirPat.value);
  let btn;
  player.recentlyAddedCoords.forEach((element) => {
    btn = document.querySelector(`.${element[0]}${element[1]}player`);
    btn.style.backgroundColor = "green";
  });
});
