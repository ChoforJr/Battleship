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

export function createComputerBoard(
  computer,
  sunkShipCounterComp,
  gameState,
  conditionSpace,
) {
  let newBtn;
  for (const key in computer.gameBoard) {
    for (const element of computer.gameBoard[key]) {
      newBtn = document.createElement("button");
      newBtn.classList.add(`${key}${element}`);
      newBtn.style.boxSizing = "border-box";
      newBtn.style.border = "1px solid black";
      newBtn.style.width = `38px`;
      newBtn.style.height = `38px`;
      newBtn.addEventListener("click", (event) => {
        if (conditionSpace.textContent !== "Players' Turn") {
          return;
        }
        const result = computer.receiveAttack(`${key}`, element);
        const item = event.currentTarget;
        if (result === "Invalid Coordinates" || result === "Already visited") {
          return;
        }
        if (result === "miss") {
          item.style.backgroundColor = "white";
          conditionSpace.textContent = "Computers' Turn";
          return;
        }
        if (result === "hit") {
          item.style.backgroundColor = "red";
          sunkShipCounterComp.textContent = `${computer.anotherShipSunk.length}`;
          conditionSpace.textContent = "Computers' Turn";
          if (computer.anotherShipSunk.length === 10) {
            conditionSpace.textContent = "Player is the Winner";
            gameState.textContent = "GameOver Reload page to start new Game";
          }
          console.log(" Computers' hit");
          return;
        }
      });
      computerBoard.appendChild(newBtn);
    }
  }
}
