//Begin your app by creating the Ship class/factory (your choice).
//---Your ‘ships’ will be objects that include their length, the number of times they’ve
// been hit and whether or not they’ve been sunk.
//---REMEMBER you only have to test your object’s public interface.
//Only methods or properties that are used outside of your ‘ship’ object need unit tests.
//---Ships should have a hit() function that increases the number of ‘hits’ in your ship.
//---isSunk() should be a function that calculates whether a ship is
//considered sunk based on its length and the number of hits it has received.

export const ship = (length, name) => {
  if (length < 2 || length > 5) {
    return "Length must be between 2 and 5";
  }
  let hitsTaken = 0;
  function hit() {
    return ++hitsTaken;
  }
  function isSunk() {
    return hitsTaken >= length;
  }
  let notAdded = true;
  function addedFn() {
    notAdded = false;
    return;
  }

  return {
    hit,
    isSunk,
    length,
    name,
    addedFn,
    get notAdded() {
      return notAdded;
    },
  };
};
