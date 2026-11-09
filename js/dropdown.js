// Operation dropdown menu (open/close only; selection not yet used by the game).

import { SELECTORS } from "./config.js";

export function initDropdown() {
  const button = document.querySelector(SELECTORS.dropdownButton);
  const menu = document.querySelector(SELECTORS.dropdown);
  button.addEventListener("click", () => menu.classList.toggle("show"));
}
