// Operation dropdown menu. Calls onSelect(symbol) when an operation is picked.

import { SELECTORS } from "./config.js";

export function initDropdown(onSelect) {
  const button = document.querySelector(SELECTORS.dropdownButton);
  const menu = document.querySelector(SELECTORS.dropdown);
  const items = document.querySelectorAll(SELECTORS.dropdownItems);

  button.addEventListener("click", () => menu.classList.toggle("show"));

  items.forEach((item) =>
    item.addEventListener("click", () => {
      menu.classList.remove("show");
      onSelect(item.textContent.trim());
    })
  );
}
