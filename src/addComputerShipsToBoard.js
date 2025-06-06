const coord1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const coord2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const dir = ["up", "down", "left", "right"];

export function addShipToCompBoard(computer, theShip) {
  let added = 0;
  let index1and2;
  let indexDir;
  while (added < theShip.length + 1) {
    index1and2 = Math.floor(Math.random() * 10);
    indexDir = Math.floor(Math.random() * 4);
    computer.addShip(
      theShip,
      coord1[index1and2],
      coord2[index1and2],
      dir[indexDir],
    );
    if (
      computer.addShip(
        theShip,
        coord1[index1and2],
        coord2[index1and2],
        dir[indexDir],
      ) !== "Already Added"
    ) {
      added++;
    }
  }
}
