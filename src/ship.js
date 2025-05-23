export const ship = (length) => {
  if (length < 2 || length > 5) {
    return "Length must be between 2 and 5";
  }
  let hitsTaken = 0;
  function hit() {
    return ++hitsTaken;
  }
  function isSunk() {
    if (hitsTaken >= length) {
      return true;
    } else {
      return false;
    }
  }

  return { hit, isSunk };
};
