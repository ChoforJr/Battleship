const coord1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const coord2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const dir = ["up", "down", "left", "right"];

export function addShipToCompBoard(
  computer,
  theShip,
  shipStorageLength,
  total,
) {
  while (shipStorageLength.length < total) {
    let index1 = Math.floor(Math.random() * coord1.length);
    let index2 = Math.floor(Math.random() * coord2.length);
    let indexDir = Math.floor(Math.random() * dir.length);
    computer.addShip(theShip, coord1[index1], coord2[index2], dir[indexDir]);
  }
}
