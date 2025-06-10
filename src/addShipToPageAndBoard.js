const addPatrolBoat = document.querySelector(".addPatrolBoat");
const coord1Pat = document.querySelector("#coord1Pat");
const coord2Pat = document.querySelector("#coord2Pat");
const dirPat = document.querySelector("#dirPat");

export function addPatrolBoatOnly(player, theShip) {
  addPatrolBoat.addEventListener("click", () => {
    console.log("coord1:", coord1Pat.value);
    console.log("coord2:", coord2Pat.value);
    console.log("direction:", dirPat.value);
    if (player.patrolBoatStorage.length === 8) {
      return alert("Maximum Patrol Boat Added");
    }
    let result = player.addShip(
      theShip,
      coord1Pat.value,
      coord2Pat.value,
      dirPat.value,
    );
    if (result === "Already Added") {
      return alert("Already Added");
    }
    // player.addShip(theShip, coord1Pat.value, coord2Pat.value, dirPat.value);
    let btn;
    if (player.recentlyAddedCoords.length === 0) {
      return alert("Invalid Coordinates");
    }
    player.recentlyAddedCoords.forEach((element) => {
      btn = document.querySelector(`.${element[0]}${element[1]}player`);
      btn.style.backgroundColor = "black";
    });
    console.log("recentlyAddedCoords:", player.recentlyAddedCoords);
    console.log("addedCoords:", player.addedCoords);
  });
}

const addSubmarine = document.querySelector(".addSubmarine");
const coord1Sub = document.querySelector("#coord1Sub");
const coord2Sub = document.querySelector("#coord2Sub");
const dirSub = document.querySelector("#dirSub");

export function addSubmarineOnly(player, theShip) {
  addSubmarine.addEventListener("click", () => {
    console.log("coord1:", coord1Sub.value);
    console.log("coord2:", coord2Sub.value);
    console.log("direction:", dirSub.value);
    if (player.submarineStorage.length === 3) {
      return alert("Maximum Submarine Added");
    }
    let result = player.addShip(
      theShip,
      coord1Sub.value,
      coord2Sub.value,
      dirSub.value,
    );
    if (result === "Already Added") {
      return alert("Already Added");
    }
    // player.addShip(theShip, coord1Sub.value, coord2Sub.value, dirSub.value);
    let btn;
    if (player.recentlyAddedCoords.length === 0) {
      return alert("Invalid Coordinates");
    }
    player.recentlyAddedCoords.forEach((element) => {
      btn = document.querySelector(`.${element[0]}${element[1]}player`);
      btn.style.backgroundColor = "black";
    });
    console.log("recentlyAddedCoords:", player.recentlyAddedCoords);
    console.log("addedCoords:", player.addedCoords);
  });
}

const addDestroyer = document.querySelector(".addDestroyer");
const coord1Des = document.querySelector("#coord1Des");
const coord2Des = document.querySelector("#coord2Des");
const dirDes = document.querySelector("#dirDes");

export function addDestroyerOnly(player, theShip) {
  addDestroyer.addEventListener("click", () => {
    console.log("coord1:", coord1Des.value);
    console.log("coord2:", coord2Des.value);
    console.log("direction:", dirDes.value);
    if (player.destroyerStorage.length === 6) {
      return alert("Maximum Destroyer Added");
    }
    let result = player.addShip(
      theShip,
      coord1Des.value,
      coord2Des.value,
      dirDes.value,
    );
    if (result === "Already Added") {
      return alert("Already Added");
    }
    // player.addShip(theShip, coord1Des.value, coord2Des.value, dirDes.value);
    let btn;
    if (player.recentlyAddedCoords.length === 0) {
      return alert("Invalid Coordinates");
    }
    player.recentlyAddedCoords.forEach((element) => {
      btn = document.querySelector(`.${element[0]}${element[1]}player`);
      btn.style.backgroundColor = "black";
    });
    console.log("recentlyAddedCoords:", player.recentlyAddedCoords);
    console.log("addedCoords:", player.addedCoords);
  });
}

const addBattleship = document.querySelector(".addBattleship");
const coord1Bat = document.querySelector("#coord1Bat");
const coord2Bat = document.querySelector("#coord2Bat");
const dirBat = document.querySelector("#dirBat");

export function addBattleshipOnly(player, theShip) {
  addBattleship.addEventListener("click", () => {
    console.log("coord1:", coord1Bat.value);
    console.log("coord2:", coord2Bat.value);
    console.log("direction:", dirBat.value);
    if (player.destroyerStorage.length === 8) {
      return alert("Maximum BattleShip Added");
    }
    let result = player.addShip(
      theShip,
      coord1Bat.value,
      coord2Bat.value,
      dirBat.value,
    );
    if (result === "Already Added") {
      return alert("Already Added");
    }
    // player.addShip(theShip, coord1Bat.value, coord2Bat.value, dirBat.value);
    let btn;
    if (player.recentlyAddedCoords.length === 0) {
      return alert("Invalid Coordinates");
    }
    player.recentlyAddedCoords.forEach((element) => {
      btn = document.querySelector(`.${element[0]}${element[1]}player`);
      btn.style.backgroundColor = "black";
    });
    console.log("recentlyAddedCoords:", player.recentlyAddedCoords);
    console.log("addedCoords:", player.addedCoords);
  });
}

const addCarrier = document.querySelector(".addCarrier");
const coord1Car = document.querySelector("#coord1Car");
const coord2Car = document.querySelector("#coord2Car");
const dirCar = document.querySelector("#dirCar");

export function addCarrierOnly(player, theShip) {
  addCarrier.addEventListener("click", () => {
    console.log("coord1:", coord1Car.value);
    console.log("coord2:", coord2Car.value);
    console.log("direction:", dirCar.value);
    if (player.carrierStorage.length === 5) {
      return alert("Maximum Carrier Added");
    }
    let result = player.addShip(
      theShip,
      coord1Car.value,
      coord2Car.value,
      dirCar.value,
    );
    if (result === "Already Added") {
      return alert("Already Added");
    }
    // player.addShip(theShip, coord1Car.value, coord2Car.value, dirCar.value);
    let btn;
    if (player.recentlyAddedCoords.length === 0) {
      return alert("Invalid Coordinates");
    }
    player.recentlyAddedCoords.forEach((element) => {
      btn = document.querySelector(`.${element[0]}${element[1]}player`);
      btn.style.backgroundColor = "black";
    });
    console.log("recentlyAddedCoords:", player.recentlyAddedCoords);
    console.log("addedCoords:", player.addedCoords);
  });
}
