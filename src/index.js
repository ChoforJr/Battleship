// import "./style.css";

// // import { gameBoardFn } from "./gameBoard.js";
// import { ship } from "./ship.js";
// import { createPlayerBoard, createComputerBoard } from "./createBoards.js";
// import {
//   addPatrolBoatOnly,
//   addSubmarineOnly,
//   addDestroyerOnly,
//   addBattleshipOnly,
//   addCarrierOnly,
// } from "./addShipToPageAndBoard.js";
// import { addShipToCompBoard } from "./addComputerShipsToBoard.js";
// import { gameBoardFn } from "./gameBoardComp.js";

// const patrolBoat = ship(2, "patrolBoat");
// const submarine = ship(3, "submarine");
// const destroyer = ship(3, "destroyer");
// const battleship = ship(4, "battleship");
// const carrier = ship(5, "carrier");

// const player = gameBoardFn();
// const computer = gameBoardFn();

// createPlayerBoard(player.gameBoard);
// createComputerBoard(computer);

// addPatrolBoatOnly(player, patrolBoat);
// addSubmarineOnly(player, submarine);
// addDestroyerOnly(player, destroyer);
// addBattleshipOnly(player, battleship);
// addCarrierOnly(player, carrier);

// addShipToCompBoard(computer, patrolBoat, computer.patrolBoatStorage, 8);
// addShipToCompBoard(computer, submarine, computer.submarineStorage, 3);
// addShipToCompBoard(computer, destroyer, computer.destroyerStorage, 6);
// addShipToCompBoard(computer, battleship, computer.battleshipStorage, 8);
// addShipToCompBoard(computer, carrier, computer.carrierStorage, 5);
const addPatrolBoat = document.querySelector(".addPatrolBoat");
const coord1Pat = document.querySelector("#coord1Pat");
const coord2Pat = document.querySelector("#coord2Pat");
const dirPat = document.querySelector("#dirPat");

const addSubmarine = document.querySelector(".addSubmarine");
const coord1Sub = document.querySelector("#coord1Sub");
const coord2Sub = document.querySelector("#coord2Sub");
const dirSub = document.querySelector("#dirSub");

const addDestroyer = document.querySelector(".addDestroyer");
const coord1Des = document.querySelector("#coord1Des");
const coord2Des = document.querySelector("#coord2Des");
const dirDes = document.querySelector("#dirDes");

const addBattleship = document.querySelector(".addBattleship");
const coord1Bat = document.querySelector("#coord1Bat");
const coord2Bat = document.querySelector("#coord2Bat");
const dirBat = document.querySelector("#dirBat");

const addCarrier = document.querySelector(".addCarrier");
const coord1Car = document.querySelector("#coord1Car");
const coord2Car = document.querySelector("#coord2Car");
const dirCar = document.querySelector("#dirCar");
import "./style.css";

// import { gameBoardFn } from "./gameBoard.js";
import { ship } from "./ship.js";
import { createPlayerBoard, createComputerBoard } from "./createBoards.js";
import { addShipToPageAndBoard } from "./addShipToPageAndBoardTest.js";
import { addShipToCompBoard } from "./addComputerShipsToBoard.js";
import { gameBoardFn } from "./gameBoardComp.js";

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
