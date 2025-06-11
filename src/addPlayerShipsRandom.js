const randomBtn = document.querySelector(".random");
const coord1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const coord2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const dir = ["up", "down", "left", "right"];

export function addPlayerShipsRandom(
  player,
  allShipPlayer,
  gameState,
  conditionSpace,
) {
  console.log(allShipPlayer);
  randomBtn.addEventListener("click", () => {
    if (gameState.textContent !== "Add all 10 ships to Begin the Game") {
      return alert("Reload page if you want to start a new game");
    }
    allShipPlayer.forEach((ship) => {
      while (ship.notAdded) {
        let index1 = Math.floor(Math.random() * coord1.length);
        let index2 = Math.floor(Math.random() * coord2.length);
        let indexDir = Math.floor(Math.random() * dir.length);
        player.addShip(ship, coord1[index1], coord2[index2], dir[indexDir]);
      }
      player.recentlyAddedCoords.forEach((element) => {
        let btn = document.querySelector(`.${element[0]}${element[1]}player`);
        btn.style.backgroundColor = "black";
      });
      console.log(player.recentlyAddedCoords);
    });
    gameState.textContent = "Game Start";
    conditionSpace.textContent = "Players' Turn";
  });
  console.log(player.addedCoords);
}
