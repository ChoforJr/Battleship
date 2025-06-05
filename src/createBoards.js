const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

export function createPlayerBoard(gameBoard) {
  let newBtn;
  for (const key in gameBoard) {
    for (const element of gameBoard[key]) {
      newBtn = document.createElement("button");
      newBtn.classList.add(`${key}${element}player`);
      newBtn.style.boxSizing = "border-box";
      newBtn.style.border = "1px solid black";
      newBtn.style.width = `38px`;
      newBtn.style.height = `38px`;
      playerBoard.appendChild(newBtn);
    }
  }
}
export function createComputerBoard(gameBoard) {
  let newBtn;
  for (const key in gameBoard) {
    for (const element of gameBoard[key]) {
      newBtn = document.createElement("button");
      newBtn.classList.add(`${key}${element}`);
      newBtn.style.boxSizing = "border-box";
      newBtn.style.border = "1px solid black";
      newBtn.style.width = `38px`;
      newBtn.style.height = `38px`;
      computerBoard.appendChild(newBtn);
    }
  }
}
