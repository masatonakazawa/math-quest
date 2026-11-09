// Entry point: show the title screen and wire up input events.

import { startGame, submitAnswer, setOperation } from "./game.js";
import { initOpSelect } from "./opselect.js";
import { SELECTORS } from "./config.js";
import * as ui from "./ui.js";

ui.showTitle();
initOpSelect(setOperation);

const on = (sel, fn) => document.querySelector(sel).addEventListener("click", fn);
on(SELECTORS.startButton, startGame);
on(SELECTORS.retryButton, startGame);
on(SELECTORS.attackButton, submitAnswer);

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault(); // stop a focused button from also firing its own click
  if (ui.isTitleVisible()) startGame();
  else submitAnswer();
});
