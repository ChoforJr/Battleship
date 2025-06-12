const coord1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const coord2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function compAttackPlayer(
  player,
  sunkShipCounterPl,
  gameState,
  conditionSpace,
) {
  let index2, index1, item;
  const handleContentChange = (mutationsList) => {
    console.log(mutationsList);
    console.log("Text content of myDiv has changed.");
    console.log("New content:", conditionSpace.textContent);
    if (conditionSpace.textContent === "Computers' Turn") {
      for (let i = 0; i <= 300; i++) {
        index1 = Math.floor(Math.random() * coord1.length);

        index2 = Math.floor(Math.random() * coord2.length);

        const result = player.receiveAttack(
          `${coord1[index1]}`,
          coord2[index2],
        );

        if (result === "Invalid Coordinates" || result === "Already visited") {
          continue;
        }

        console.log(`${coord1[index1]}`, coord2[index2]);

        item = document.querySelector(
          `.${coord1[index1]}${coord2[index2]}player`,
        );

        if (result === "miss") {
          item.style.backgroundColor = "white";
          conditionSpace.textContent = "Players' Turn";
          return;
        }

        if (result === "hit") {
          item.style.backgroundColor = "red";
          sunkShipCounterPl.textContent = `${player.anotherShipSunk.length}`;
          conditionSpace.textContent = "Players' Turn";
          if (player.anotherShipSunk.length === 10) {
            conditionSpace.textContent = "Computer is the Winner";
            gameState.textContent = "GameOver Reload page to start new Game";
          }
          return;
        }
      }
    }
  };
  const observerConfig = {
    childList: true, // Observe additions/removals of child nodes
    characterData: true, // Observe changes to text content within the div
    subtree: true, // Observe changes in the entire subtree of the div
  };
  const observer = new MutationObserver(handleContentChange);

  observer.observe(conditionSpace, observerConfig);
}
