const addPatrolBoat = document.querySelector(".addPatrolBoat");
const coord1Pat = document.querySelector("#coord1Pat").value;
const coord2Pat = document.querySelector("#coord2Pat").value;
const dirPat = document.querySelector("#dirPat").value;

addPatrolBoat.addEventListener("click", () => {
  player.addShip(patrolBoat, coord1Pat.value, coord2Pat.value, dirPat.value);
  let btn;
  player.recentlyAddedCoords.forEach((element) => {
    btn = document.querySelector(`.${element[0]}${element[1]}player`);
    btn.style.backgroundColor = "green";
  });
});
function addShipToPageAndBoardFn(player, theShip, coord1, coord2, dir) {
  player.addShip(theShip, coord1.value, coord2.value, dir.value);
  let btn;
  player.recentlyAddedCoords.forEach((element) => {
    btn = document.querySelector(`.${element[0]}${element[1]}player`);
    btn.style.backgroundColor = "green";
  });
}
