export const gameBoardFn = () => {
  const gameBoard = {
    A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    B: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    C: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    D: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    E: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    G: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    H: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    I: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    J: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  function addShip(theShip, coord1, coord2, dir) {
    if (!(coord1 in gameBoard) || 0 < coord2 > 9) {
      return "Invalid Coordinates";
    }
    let shipLength = theShip.length;
    let coord1ToAscii = coord1.charCodeAt(0);

    for (let i = 1; i <= shipLength; i++) {
      if (dir === "up") {
        if (coord2 - (shipLength - i) < 0) return "Invalid Direction";
        gameBoard[coord1][coord2 - (shipLength - i)] = theShip;
      }
      if (dir === "down") {
        if (coord2 + (shipLength - i) < 0) return "Invalid Direction";
        gameBoard[coord1][coord2 + (shipLength - i)] = theShip;
      }
      if (dir === "left") {
        let leftLetters = coord1ToAscii - (shipLength - i);
        let coord1FromAscii = String.fromCharCode(leftLetters);
        if (!(coord1FromAscii in gameBoard)) return "Invalid Direction";
        gameBoard[coord1FromAscii][coord2] = theShip;
      }
      if (dir === "right") {
        let rightLetters = coord1ToAscii + (shipLength - i);
        let coord1FromAscii = String.fromCharCode(rightLetters);
        if (!(coord1FromAscii in gameBoard)) return "Invalid Direction";
        gameBoard[coord1FromAscii][coord2] = theShip;
      }
    }
  }

  let anotherShipSunk = [];

  const visitedCoord = [],
    missedCoord = [],
    hitCoord = [];

  function receiveAttack(coord1, coord2) {
    if (!(coord1 in gameBoard) || 0 < coord2 > 9) {
      return "Invalid Coordinates";
    }
    let currentCoordString = JSON.stringify([coord1, coord2]);
    let visitedCoordString = JSON.stringify(visitedCoord);
    if (visitedCoordString.includes(currentCoordString)) {
      return "Already visited";
    }
    if (typeof gameBoard[coord1][coord2] === "number") {
      visitedCoord.push([coord1, coord2]);
      missedCoord.push([coord1, coord2]);
      return "miss";
    } else {
      visitedCoord.push([coord1, coord2]);
      hitCoord.push([coord1, coord2]);
      gameBoard[coord1][coord2].hit();
      if (gameBoard[coord1][coord2].isSunk()) anotherShipSunk.push("yes");
      return "hit";
    }
  }

  return { gameBoard, receiveAttack, addShip, anotherShipSunk };
};
