//--Begin your app by creating the gameBoard class/factory (your choice).
//--Gameboards should be able to place ships at specific coordinates by calling the ship factory or class
//--Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether
//or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
//--Gameboards should keep track of missed attacks so they can display them properly.
//--Gameboards should be able to report whether or not all of their ships have been sunk.
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

  const addedCoords = [],
    recentlyAddedCoords = [],
    patrolBoatStorage = [],
    submarineStorage = [],
    destroyerStorage = [],
    battleshipStorage = [],
    carrierStorage = [];

  function compareArrays(array1, coord1, coord2) {
    let currentCoordString = JSON.stringify([coord1, coord2]);
    let addedCoordsString = JSON.stringify(array1);
    if (addedCoordsString.includes(currentCoordString)) {
      return true;
    } else {
      return false;
    }
  }

  function addShip(theShip, coord1, coord2, dir) {
    if (!(coord1 in gameBoard) || coord2 < 0 || coord2 > 9) {
      return "Invalid Coordinates";
    }
    recentlyAddedCoords.length = 0;
    let shipLength = theShip.length;
    let coord1ToAscii = coord1.charCodeAt(0);

    for (let i = 1; i <= shipLength; i++) {
      if (dir === "up") {
        if (coord2 - (shipLength - i) < 0) return "Invalid Direction";
        recentlyAddedCoords.push([coord1, Number(coord2 - (shipLength - i))]);
        if (
          compareArrays(addedCoords, coord1, Number(coord2 - (shipLength - i)))
        ) {
          return "Already Added";
        }
      }
      if (dir === "down") {
        if (coord2 - i + shipLength > 9) return "Invalid Direction";
        recentlyAddedCoords.push([coord1, Number(coord2 - i + shipLength)]);
        if (
          compareArrays(addedCoords, coord1, Number(coord2 - i + shipLength))
        ) {
          return "Already Added";
        }
      }
      if (dir === "left") {
        let leftLetters = coord1ToAscii - (shipLength - i);
        let coord1FromAscii = String.fromCharCode(leftLetters);
        if (!(coord1FromAscii in gameBoard)) return "Invalid Direction";
        recentlyAddedCoords.push([coord1FromAscii, Number(coord2)]);
        if (compareArrays(addedCoords, coord1FromAscii, Number(coord2))) {
          return "Already Added";
        }
      }
      if (dir === "right") {
        let rightLetters = coord1ToAscii + (shipLength - i);
        let coord1FromAscii = String.fromCharCode(rightLetters);
        if (!(coord1FromAscii in gameBoard)) return "Invalid Direction";
        recentlyAddedCoords.push([coord1FromAscii, Number(coord2)]);
        if (compareArrays(addedCoords, coord1FromAscii, Number(coord2))) {
          return "Already Added";
        }
      }
    }

    recentlyAddedCoords.forEach((element) => {
      addedCoords.push([element[0], Number(element[1])]);
      gameBoard[element[0]][Number(element[1])] = theShip;
      if (shipLength === 2) {
        patrolBoatStorage.push([element[0], Number(element[1])]);
      } else if (theShip.name === "Submarine 1") {
        submarineStorage.push([element[0], Number(element[1])]);
      } else if (
        theShip.name === "Destroyer 1" ||
        theShip.name === "Destroyer 2"
      ) {
        destroyerStorage.push([element[0], Number(element[1])]);
      } else if (shipLength === 4) {
        battleshipStorage.push([element[0], Number(element[1])]);
      } else if (shipLength === 5) {
        carrierStorage.push([element[0], Number(element[1])]);
      }
    });
    theShip.addedFn();
  }

  const visitedCoord = [],
    visitedCondition = [],
    anotherShipSunk = [];

  function receiveAttack(coord1, coord2) {
    if (!(coord1 in gameBoard) || coord2 < 0 || coord2 > 9) {
      return "Invalid Coordinates";
    }
    if (compareArrays(visitedCoord, coord1, coord2)) {
      return "Already visited";
    }
    visitedCoord.push([coord1, coord2]);

    if (typeof gameBoard[coord1][coord2] === "number") {
      visitedCondition.unshift("miss");
      return "miss";
    } else {
      visitedCondition.unshift("hit");
      gameBoard[coord1][coord2].hit();
      if (gameBoard[coord1][coord2].isSunk()) anotherShipSunk.push("Sunk");
      return "hit";
    }
  }

  return {
    gameBoard,
    receiveAttack,
    addShip,
    anotherShipSunk,
    visitedCoord,
    visitedCondition,
    addedCoords,
    recentlyAddedCoords,
    patrolBoatStorage,
    submarineStorage,
    destroyerStorage,
    battleshipStorage,
    carrierStorage,
  };
};
