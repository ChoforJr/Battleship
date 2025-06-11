import { ship } from "./ship.js";

const fleet = [
  { name: "Patrol Boat", length: 2, quantity: 4 },
  { name: "Carrier", length: 5, quantity: 1 },
  { name: "Battleship", length: 4, quantity: 2 },
  { name: "Destroyer", length: 3, quantity: 2 },
  { name: "Submarine", length: 3, quantity: 1 },
];

let patrolBoatPlayer = [],
  submarinePlayer = [],
  destroyerPlayer = [],
  battleshipPlayer = [],
  carrierPlayer = [];

fleet.forEach((shipType) => {
  for (let i = 0; i < shipType.quantity; i++) {
    const newShip = ship(shipType.length, `${shipType.name} ${i + 1}`);
    if (shipType.name === "Patrol Boat") {
      patrolBoatPlayer.push(newShip);
    } else if (shipType.name === "Submarine") {
      submarinePlayer.push(newShip);
    } else if (shipType.name === "Destroyer") {
      destroyerPlayer.push(newShip);
    } else if (shipType.name === "Battleship") {
      battleshipPlayer.push(newShip);
    } else if (shipType.name === "Carrier") {
      carrierPlayer.push(newShip);
    }
  }
});

export function addplayerShipsManual(player) {
  addingEvent(
    player,
    patrolBoatPlayer,
    addPatrolBoat,
    coord1Pat,
    coord2Pat,
    dirPat,
    player.patrolBoatStorage,
    8,
    "Patrol Boat",
  );
  addingEvent(
    player,
    submarinePlayer,
    addSubmarine,
    coord1Sub,
    coord2Sub,
    dirSub,
    player.submarineStorage,
    3,
    "Submarine",
  );
  addingEvent(
    player,
    destroyerPlayer,
    addDestroyer,
    coord1Des,
    coord2Des,
    dirDes,
    player.destroyerStorage,
    6,
    "Destroyer",
  );
  addingEvent(
    player,
    battleshipPlayer,
    addBattleship,
    coord1Bat,
    coord2Bat,
    dirBat,
    player.battleshipStorage,
    8,
    "Battleship",
  );
  addingEvent(
    player,
    carrierPlayer,
    addCarrier,
    coord1Car,
    coord2Car,
    dirCar,
    player.carrierStorage,
    5,
    "Carrier",
  );
}

function addingEvent(
  player,
  theShip,
  theShipBtn,
  coord1,
  coord2,
  dir,
  storage,
  quantity,
  shipName,
) {
  theShipBtn.addEventListener("click", () => {
    console.log("coord1:", coord1.value);
    console.log("coord2:", coord2.value);
    console.log("direction:", dir.value);
    if (storage.length === quantity) {
      return alert(`Maximum ${shipName} Added`);
    }
    let result = player.addShip(
      theShip[0],
      coord1.value,
      coord2.value,
      dir.value,
    );
    if (result === "Already Added") {
      return alert("Already Added");
    }
    if (player.recentlyAddedCoords.length === 0) {
      return alert("Invalid Coordinates");
    }
    player.recentlyAddedCoords.forEach((element) => {
      let btn = document.querySelector(`.${element[0]}${element[1]}player`);
      btn.style.backgroundColor = "black";
    });
    console.log("recentlyAddedCoords:", player.recentlyAddedCoords);
    console.log("addedCoords:", player.addedCoords);
    console.log("gameBoard:", player.gameBoard);
    theShip.shift();
  });
}
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
