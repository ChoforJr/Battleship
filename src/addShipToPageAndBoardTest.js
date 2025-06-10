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
  });
}
