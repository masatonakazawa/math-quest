// Entry point: wire up the game and input events.

import { startGame, submitAnswer, setOperation } from "./game.js";
import { initDropdown } from "./dropdown.js";

startGame();
initDropdown(setOperation);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitAnswer();
});
