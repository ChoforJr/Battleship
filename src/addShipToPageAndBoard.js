export function addShipToPageAndBoard(
  player,
  theShip,
  theShipBtn,
  coord1,
  coord2,
  dir,
  storage,
  quantity,
) {
  theShipBtn.addEventListener("click", () => {
    console.log("coord1:", coord1.value);
    console.log("coord2:", coord2.value);
    console.log("direction:", dir.value);
    if (storage.length === quantity) {
      return alert(`Maximum ${theShip.name} Added`);
    }
    let result = player.addShip(theShip, coord1.value, coord2.value, dir.value);
    if (result === "Already Added") {
      return alert("Already Added");
    }
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
    console.log("gameBoard:", player.gameBoard);
  });
}
export const addPatrolBoat = document.querySelector(".addPatrolBoat");
export const coord1Pat = document.querySelector("#coord1Pat");
export const coord2Pat = document.querySelector("#coord2Pat");
export const dirPat = document.querySelector("#dirPat");

export const addSubmarine = document.querySelector(".addSubmarine");
export const coord1Sub = document.querySelector("#coord1Sub");
export const coord2Sub = document.querySelector("#coord2Sub");
export const dirSub = document.querySelector("#dirSub");

export const addDestroyer = document.querySelector(".addDestroyer");
export const coord1Des = document.querySelector("#coord1Des");
export const coord2Des = document.querySelector("#coord2Des");
export const dirDes = document.querySelector("#dirDes");

export const addBattleship = document.querySelector(".addBattleship");
export const coord1Bat = document.querySelector("#coord1Bat");
export const coord2Bat = document.querySelector("#coord2Bat");
export const dirBat = document.querySelector("#dirBat");

export const addCarrier = document.querySelector(".addCarrier");
export const coord1Car = document.querySelector("#coord1Car");
export const coord2Car = document.querySelector("#coord2Car");
export const dirCar = document.querySelector("#dirCar");
