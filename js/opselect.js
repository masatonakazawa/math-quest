// Operation selector buttons. Calls onSelect(symbol) when one is clicked.

import { SELECTORS } from "./config.js";

export function initOpSelect(onSelect) {
  document.querySelectorAll(SELECTORS.opButtons).forEach((btn) =>
    btn.addEventListener("click", () => onSelect(btn.dataset.op))
  );
}
