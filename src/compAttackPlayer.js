const coord1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const coord2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function compAttackPlayer(
  player,
  sunkShipCounterComp,
  gameState,
  conditionSpace,
) {
  while (conditionSpace.textContent === "Computers' Turn") {
    let index1 = Math.floor(Math.random() * coord1.length);
    let index2 = Math.floor(Math.random() * coord2.length);
    player.receiveAttack(coord1[index1], coord2[index2]);
    const result = player.receiveAttack(`${coord1[index1]}`, coord2[index2]);
    const item = document.querySelector(
      `.${coord1[index1]}${coord2[index2]}player`,
    );
    if (result === "Invalid Coordinates" || result === "Already visited") {
      continue;
    }
    if (result === "miss") {
      item.style.backgroundColor = "white";
      conditionSpace.textContent = "Players' Turn";
      return;
    }
    if (result === "hit") {
      item.style.backgroundColor = "red";
      sunkShipCounterComp.textContent = `${player.anotherShipSunk.length}`;
      conditionSpace.textContent = "Players' Turn";
      if (player.anotherShipSunk.length === 10) {
        conditionSpace.textContent = "Computer is the Winner";
        gameState.textContent = "GameOver Reload page to start new Game";
      }
      console.log("Players' hit");
      return;
    }
  }
}
