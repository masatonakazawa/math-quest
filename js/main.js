// Entry point: wire up the game and input events.

import { startGame, submitAnswer } from "./game.js";
import { initDropdown } from "./dropdown.js";

startGame();
initDropdown();

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitAnswer();
});
